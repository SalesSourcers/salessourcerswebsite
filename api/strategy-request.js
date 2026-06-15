// Vercel serverless relay for the Strategy Request form.
//
// The browser posts here SAME-ORIGIN (no CORS). This function holds the shared secret server-side
// (it never reaches client JS), verifies anti-spam, then forwards to gtm-app's secret-gated webhook.
//
// Env (Vercel project settings):
//   GTM_WEBSITE_LEAD_SECRET  (required) — must match gtm-app's WEBSITE_LEAD_SECRET
//   GTM_BASE_URL             (default https://gtm.salessourcers.com)
//   TURNSTILE_SECRET_KEY     (optional) — when set, Cloudflare Turnstile tokens are verified

const GTM_BASE = (process.env.GTM_BASE_URL || "https://gtm.salessourcers.com").replace(/\/$/, "");
const SECRET = process.env.GTM_WEBSITE_LEAD_SECRET;
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clientIp(req) {
  const xff = req.headers["x-forwarded-for"];
  if (typeof xff === "string" && xff) return xff.split(",")[0].trim();
  return req.headers["cf-connecting-ip"] || "";
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

  // Cloudflare Turnstile (only enforced when a secret is configured).
  if (TURNSTILE_SECRET) {
    try {
      const form = new URLSearchParams();
      form.append("secret", TURNSTILE_SECRET);
      form.append("response", token);
      const ip = clientIp(req);
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
