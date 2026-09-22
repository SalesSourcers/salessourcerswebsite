// Runtime config for the marketing site.
//
// This lives in an external file rather than an inline <script> because the CSP in vercel.json sets
// script-src to 'self' with no 'unsafe-inline'. An inline block here is silently blocked by the
// browser, which is what happened between June and September 2026: window.SS_CONFIG never existed
// in production, so the Calendly region routing fell back to its defaults and the Turnstile site
// key never reached the form. Keep this out of line.
window.SS_CONFIG = {
  relayPath: "/api/strategy-request",
  // Cloudflare Turnstile. Clearing this disables the widget, which stops tokens being minted while
  // the relay still verifies them, so keep it in step with TURNSTILE_SECRET_KEY on Vercel.
  turnstileSiteKey: "0x4AAAAAAFAEyImAsyBJ7R5E",
  calendly: {
    // Region routing. `default` is the fallback for unmatched timezones.
    default: "https://calendly.com/zaid-wasati/salessourcers-strat-session?hide_gdpr_banner=1",
    emea: "https://calendly.com/zaid-wasati/salessourcers-strat-session?hide_gdpr_banner=1",
    intl: "https://calendly.com/zaid-wasati/salessourcers-strat-session?hide_gdpr_banner=1",
    apac: "https://calendly.com/zane-xgu/salessourcers-strategy-session?hide_gdpr_banner=1",
    anz: "https://calendly.com/zane-xgu/salessourcers-strategy-session?hide_gdpr_banner=1"
  }
};
