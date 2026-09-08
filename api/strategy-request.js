// Vercel serverless relay for the Strategy Request form.
//
// The browser posts here SAME-ORIGIN (no CORS). This function holds the shared secret server-side
// (it never reaches client JS), verifies anti-spam, then forwards to gtm-app's secret-gated webhook.
//
// Env (Vercel project settings):
//   GTM_WEBSITE_LEAD_SECRET  (required) — must match gtm-app's WEBSITE_LEAD_SECRET
//   GTM_BASE_URL             (default https://gtm.salessourcers.com)
//   TURNSTILE_SECRET_KEY     (optional) — when set, Cloudflare Turnstile tokens are verified
//   FORM_RATE_MAX            (default 3)  — max submissions per IP per window; 0 disables
//   FORM_RATE_WINDOW_MIN     (default 60) — the per-IP window, in minutes
//   FORM_DNS_CHECK           (default on) — set "off" to skip the domain-existence checks

const dns = require("node:dns/promises");

const GTM_BASE = (process.env.GTM_BASE_URL || "https://gtm.salessourcers.com").replace(/\/$/, "");
const SECRET = process.env.GTM_WEBSITE_LEAD_SECRET;
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;
const DNS_CHECK_ON = (process.env.FORM_DNS_CHECK || "on").toLowerCase() !== "off";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// A hostname with at least one dot and a real TLD. Deliberately permissive — this only screens out
// junk before we spend a DNS round trip on it.
const HOSTNAME_RE = /^(?=.{4,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/;

function clientIp(req) {
  const xff = req.headers["x-forwarded-for"];
  if (typeof xff === "string" && xff) return xff.split(",")[0].trim();
  return req.headers["cf-connecting-ip"] || "";
}

// --- Per-IP rate limit -------------------------------------------------------------------------
// Best-effort only: this Map lives in one warm serverless instance, so it dampens bursts from a
// single source but is not a hard guarantee across instances or cold starts. The durable global cap
// still lives in gtm-app. Cheap enough to be worth having.
const RATE_MAX = Number(process.env.FORM_RATE_MAX ?? "3");
const RATE_WINDOW_MS = Number(process.env.FORM_RATE_WINDOW_MIN ?? "60") * 60 * 1000;
const recentByIp = new Map();

function rateLimited(ip) {
  if (!ip || !(RATE_MAX > 0)) return false;
  const now = Date.now();

  // Prune cold entries so a long-lived instance can't grow the Map without bound.
  if (recentByIp.size > 2000) {
    for (const [k, times] of recentByIp) {
      if (!times.some((t) => now - t < RATE_WINDOW_MS)) recentByIp.delete(k);
    }
  }

  const times = (recentByIp.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  times.push(now);
  recentByIp.set(ip, times);
  return times.length > RATE_MAX;
}

// --- Domain checks -----------------------------------------------------------------------------
// Reduce free-text input ("https://www.acme.com/pricing?x=1") to a bare hostname ("acme.com").
function hostnameOf(raw) {
  let s = String(raw || "").trim().toLowerCase();
  s = s.replace(/^[a-z][a-z0-9+.-]*:\/\//, ""); // scheme
  s = s.split(/[/?#]/)[0]; // path, query, fragment
  s = s.split("@").pop(); // stray userinfo
  s = s.replace(/:\d+$/, ""); // port
  s = s.replace(/^www\./, ""); // www.
  s = s.replace(/\.+$/, ""); // trailing dot
  return s;
}

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((resolve) => setTimeout(() => resolve([]), ms)),
  ]).catch(() => []);
}

// A domain that is genuinely registered and in use answers on at least one of A / AAAA / MX.
// Invented domains — the signature of this spam — answer on none of them.
async function domainExists(host) {
  const [a, aaaa, mx] = await Promise.all([
    withTimeout(dns.resolve4(host), 2500),
    withTimeout(dns.resolve6(host), 2500),
    withTimeout(dns.resolveMx(host), 2500),
  ]);
  return a.length > 0 || aaaa.length > 0 || mx.length > 0;
}

// No MX on the email's domain means the strategy document is guaranteed to bounce. Rejecting these
// protects the sending domain's reputation.
async function emailDomainAcceptsMail(host) {
  const [mx, a] = await Promise.all([
    withTimeout(dns.resolveMx(host), 2500),
    withTimeout(dns.resolve4(host), 2500), // implicit MX: a bare A record can still accept mail
  ]);
  return mx.length > 0 || a.length > 0;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  if (!SECRET) {
    res.status(503).json({ error: "Relay not configured" });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  const name = (body.name || "").toString().trim();
  const workEmail = (body.workEmail || body.email || "").toString().trim();
  const company = (body.company || "").toString().trim();
  const website = (body.website || "").toString().trim();
  const region = (body.region || "").toString().trim();
  const hp = (body.hp || "").toString().trim();
  const token = (body.turnstileToken || body["cf-turnstile-response"] || "").toString();

  // Honeypot: accept silently, do nothing.
  if (hp) {
    res.status(200).json({ ok: true });
    return;
  }

  if (!name || !workEmail || !company || !website) {
    res.status(400).json({ error: "Please fill in name, work email, company and website." });
    return;
  }
  if (!EMAIL_RE.test(workEmail)) {
    res.status(400).json({ error: "Please enter a valid work email." });
    return;
  }

  // Per-IP cap, applied after the cheap validation so malformed retries don't consume the budget.
  const ip = clientIp(req);
  if (rateLimited(ip)) {
    console.warn("form rate limit hit", { ip, company, website });
    res.status(429).json({ error: "Too many requests. Please try again later." });
    return;
  }

  // Cloudflare Turnstile (only enforced when a secret is configured).
  if (TURNSTILE_SECRET) {
    try {
      const form = new URLSearchParams();
      form.append("secret", TURNSTILE_SECRET);
      form.append("response", token);
      if (ip) form.append("remoteip", ip);
      const vr = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        body: form,
      });
      const vj = await vr.json();
      if (!vj.success) {
        res.status(400).json({ error: "Verification failed. Please try again." });
        return;
      }
    } catch (e) {
      console.error("turnstile verify error", e);
      res.status(400).json({ error: "Verification error. Please try again." });
      return;
    }
  }

  // Domain existence. Bots submit invented company domains that were never registered; every real
  // prospect's website resolves. Failing open on a DNS outage is deliberate — losing a genuine lead
  // costs more than admitting one bot.
  if (DNS_CHECK_ON) {
    const siteHost = hostnameOf(website);
    if (!HOSTNAME_RE.test(siteHost)) {
      res.status(400).json({ error: "Please enter a valid company website." });
      return;
    }
    if (!(await domainExists(siteHost))) {
      console.warn("rejected: website domain does not resolve", { siteHost, workEmail, company, ip });
      res.status(400).json({ error: "We couldn't find that website. Please check the address and try again." });
      return;
    }

    const emailHost = hostnameOf(workEmail.split("@").pop());
    if (!HOSTNAME_RE.test(emailHost) || !(await emailDomainAcceptsMail(emailHost))) {
      console.warn("rejected: email domain cannot receive mail", { emailHost, company, ip });
      res.status(400).json({ error: "That email address doesn't look reachable. Please check it and try again." });
      return;
    }
  }

  // Forward to gtm-app (server-to-server, shared secret).
  try {
    const r = await fetch(`${GTM_BASE}/api/webhooks/website-lead`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-webhook-secret": SECRET },
      body: JSON.stringify({ name, workEmail, company, website, region }),
    });
    if (!r.ok) {
      const t = await r.text();
      console.error("gtm-app webhook failed", r.status, t.slice(0, 300));
      res.status(502).json({ error: "We couldn't submit your request right now. Please try again." });
      return;
    }
    res.status(200).json({ ok: true });
  } catch (e) {
    console.error("relay forward error", e);
    res.status(502).json({ error: "We couldn't submit your request right now. Please try again." });
  }
};
