/* ==========================================================================
   build/template.cjs - the shared HTML shell for generated landing pages.
   Keep this in the repo. The July case-study generator lived only in a
   scratch directory and was lost, which made those 11 pages unmaintainable.
   ========================================================================== */

const SITE = "https://www.salessourcers.com";
const CAL_EMEA = "https://calendly.com/zaid-wasati/salessourcers-strat-session?hide_gdpr_banner=1";
const OG_IMAGE = SITE + "/assets/og-salessourcers.png";
const CSS_V = "33";
const PAGE_CSS_V = "4";
const PAGE_JS_V = "1";

const esc = (s) =>
  String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/* JSON-LD must not contain a literal </script>; escape the slash. */
const jsonld = (obj) => JSON.stringify(obj, null, 2).replace(/<\//g, "<\\/");

const NAV = [
  ["/#system", "What we do"],
  ["/#dashboard", "Dashboard"],
  ["/#results", "Results"],
  ["/#packages", "Packages"],
  ["/#about", "About"],
  ["/#team", "Team"],
  ["/#careers", "Careers"],
];

const header = () => `
  <svg class="svg-sprite" aria-hidden="true" focusable="false">
    <symbol id="icon-linkedin" viewBox="0 0 24 24">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"></path>
    </symbol>
  </svg>
  <div class="noise" aria-hidden="true"></div>
  <header class="site-header" id="top">
    <a class="brand" href="/" aria-label="SalesSourcers home">
      <img src="/assets/salessourcers-logo.png" alt="SalesSourcers">
    </a>
    <nav class="desktop-nav" aria-label="Primary navigation">
${NAV.map(([h, l]) => `      <a href="${h}">${l}</a>`).join("\n")}
    </nav>
    <a class="button button-small button-dark header-cta" href="${CAL_EMEA}" data-calendly-route>Schedule a call <span>-&gt;</span></a>
    <button class="menu-toggle" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span>
    </button>
    <div class="mobile-menu">
${NAV.map(([h, l]) => `      <a href="${h}">${l}</a>`).join("\n")}
      <a class="button button-dark" href="${CAL_EMEA}" data-calendly-route>Schedule a call</a>
    </div>
  </header>`;

const footer = () => `
  <footer>
    <div class="footer-main">
      <div class="footer-brand">
        <img loading="lazy" src="/assets/salessourcers-logo.png" alt="SalesSourcers">
        <p>Outbound strategy and execution for ambitious B2B companies.</p>
      </div>
      <div class="footer-links">
        <div><span>EXPLORE</span><a href="/#system">What we do</a><a href="/#dashboard">Dashboard</a><a href="/#results">Results</a></div>
        <div><span>SERVICES</span><a href="/outsourced-sdr/">Outsourced SDR</a><a href="/b2b-appointment-setting/">Appointment setting</a><a href="/cold-calling-services/">Cold calling</a><a href="/b2b-lead-generation/">Lead generation</a><a href="/industries/">Industries</a><a href="/pricing/">Pricing</a></div>
        <div><span>COMPANY</span><a href="/#about">About</a><a href="/#team">Team</a><a href="/#careers">Careers</a><a href="/#packages">Packages</a><a href="https://www.linkedin.com/company/salessourcers/">LinkedIn</a></div>
        <div><span>CONTACT</span><a href="${CAL_EMEA}" data-calendly-route>Book a call</a><a href="tel:+442083304302">+44 208 330 4302</a><a class="footer-social-icon" href="https://www.linkedin.com/company/salessourcers/" target="_blank" rel="noopener noreferrer" aria-label="SalesSourcers on LinkedIn"><svg aria-hidden="true"><use href="#icon-linkedin"></use></svg></a></div>
      </div>
    </div>
    <div class="footer-bottom"><span>&copy; 2026 SalesSourcers. All rights reserved.</span><span>Built for better conversations.</span></div>
  </footer>`;

const caseRefs = (refs) =>
  !refs || !refs.length
    ? ""
    : `
      <div class="case-refs">
${refs
  .map(
    (r) => `        <a class="case-ref" href="/case-studies/${r.slug}/">
          <span class="ref-industry">${esc(r.industry)}</span>
          <span class="ref-name">${esc(r.name)}</span>
          <span class="ref-line">${esc(r.line)}</span>
          <span class="ref-metric">${esc(r.metric)}<span>${esc(r.metricLabel)}</span></span>
        </a>`
  )
  .join("\n")}
      </div>`;

const faqBlock = (faqs) => `
  <section class="page-faq section">
    <div class="page-faq-inner">
      <div class="faq-intro">
        <p class="section-kicker">COMMON QUESTIONS</p>
        <h2>The things buyers ask before they commit.</h2>
        <p>If your question is not here, ask it on a call. We would rather answer it properly than leave you guessing.</p>
        <a class="button button-dark" href="${CAL_EMEA}" data-calendly-route>Schedule a call <span>-&gt;</span></a>
      </div>
      <div class="faq-list">
${faqs
  .map(
    (f) => `        <details>
          <summary>${esc(f.q)}<span>+</span></summary>
          <p>${esc(f.a)}</p>
        </details>`
  )
  .join("\n")}
      </div>
    </div>
  </section>`;

const linkCluster = (links) =>
  !links || !links.length
    ? ""
    : `
  <section class="link-cluster section">
    <p class="section-kicker">KEEP READING</p>
    <div class="section-heading"><h2>Related pages.</h2></div>
    <div class="link-cluster-grid">
${links.map((l) => `      <a href="${l.href}">${esc(l.label)} <em>-&gt;</em></a>`).join("\n")}
    </div>
  </section>`;

/**
 * Render one page.
 * @param {object} p page definition - see build/pages.cjs
 */
function render(p) {
  const url = SITE + p.path;
  const crumbs = [
    { name: "Home", item: SITE + "/" },
    ...(p.breadcrumbParent ? [{ name: p.breadcrumbParent.name, item: SITE + p.breadcrumbParent.path }] : []),
    { name: p.breadcrumbName || p.h1, item: url },
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: c.item,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: p.serviceName,
      serviceType: p.serviceType,
      description: p.description,
      url,
      provider: {
        "@type": "ProfessionalService",
        name: "SalesSourcers",
        url: SITE + "/",
        telephone: "+44 208 330 4302",
        logo: SITE + "/assets/salessourcers-logo.png",
        sameAs: ["https://www.linkedin.com/company/salessourcers/"],
      },
      areaServed: p.areaServed || ["United Kingdom", "United States", "Europe", "Australia", "Asia Pacific"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="referrer" content="strict-origin-when-cross-origin">
  <meta name="description" content="${esc(p.description)}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${url}">
  <meta property="og:site_name" content="SalesSourcers">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${esc(p.title)}">
  <meta property="og:description" content="${esc(p.description)}">
  <meta property="og:image" content="${OG_IMAGE}">
  <meta property="og:image:secure_url" content="${OG_IMAGE}">
  <meta property="og:image:alt" content="SalesSourcers outbound pipeline that turns into revenue">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(p.title)}">
  <meta name="twitter:description" content="${esc(p.description)}">
  <meta name="twitter:image" content="${OG_IMAGE}">
  <title>${esc(p.title)}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg?v=1">
  <link rel="stylesheet" href="/styles.css?v=${CSS_V}">
  <link rel="stylesheet" href="/page.css?v=${PAGE_CSS_V}">
${schemas.map((s) => `  <script type="application/ld+json">\n${jsonld(s)}\n  </script>`).join("\n")}
</head>
<body>
${header()}

  <nav class="page-breadcrumb" aria-label="Breadcrumb">
    <a href="/">Home</a>${p.breadcrumbParent ? `<span>/</span><a href="${p.breadcrumbParent.path}">${esc(p.breadcrumbParent.name)}</a>` : ""}<span>/</span>${esc(p.breadcrumbName || p.h1)}
  </nav>

  <section class="page-hero">
    <div>
      <p class="section-kicker">${esc(p.kicker)}</p>
      <h1>${esc(p.h1)}</h1>
      <p class="page-standfirst">${esc(p.standfirst)}</p>
      <div class="page-hero-actions">
        <a class="button button-dark" href="${CAL_EMEA}" data-calendly-route>${esc(p.ctaLabel || "Get my outbound strategy")} <span>-&gt;</span></a>
        <a class="button button-outline-ink" href="/#results">See client results</a>
      </div>
    </div>
    <div class="answer-block">
      <p class="answer-label">${esc(p.answerLabel || "In short")}</p>
${p.answer.map((a) => `      <p>${a}</p>`).join("\n")}
    </div>
  </section>

  <section class="page-body section">
    <div class="page-body-inner">
      <article class="prose">
${p.body}
      </article>
      <aside class="page-aside">
${p.aside}
      </aside>
    </div>
  </section>

${
  p.caseRefs && p.caseRefs.length
    ? `  <section class="section" style="background:var(--paper)">
    <p class="section-kicker">PROOF</p>
    <div class="section-heading"><h2>${esc(p.caseRefsHeading || "Clients we have done this for.")}</h2></div>
${caseRefs(p.caseRefs)}
  </section>
`
    : ""
}
${faqBlock(p.faqs)}
${linkCluster(p.links)}

  <section class="final-cta">
    <div class="cta-grid" aria-hidden="true"></div>
    <div class="cta-badge"><span></span>ACCEPTING NEW PARTNERS</div>
    <h2>${esc(p.ctaHeadingA)} <span>${esc(p.ctaHeadingB)}</span></h2>
    <div class="page-hero-actions" style="justify-content:center">
      <a class="button button-blush" href="${CAL_EMEA}" data-calendly-route>Schedule a call <span>-&gt;</span></a>
    </div>
  </section>

${footer()}

  <script>
    window.SS_CONFIG = {
      calendly: {
        default: "${CAL_EMEA}",
        emea: "${CAL_EMEA}",
        intl: "${CAL_EMEA}",
        apac: "https://calendly.com/zane-xgu/salessourcers-strategy-session?hide_gdpr_banner=1",
        anz: "https://calendly.com/zane-xgu/salessourcers-strategy-session?hide_gdpr_banner=1"
      }
    };
  </script>
  <script src="/page.js?v=${PAGE_JS_V}"></script>
</body>
</html>
`;
}

module.exports = { render, esc, SITE };
