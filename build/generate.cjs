#!/usr/bin/env node
/* ==========================================================================
   build/generate.cjs

   Renders the commercial landing pages to static HTML and rebuilds
   sitemap.xml. Run from the repo root:

       node build/generate.cjs

   This is NOT wired into the Vercel build - the site deploys the committed
   HTML directly. Run it locally after editing anything in build/pages/,
   then commit the generated output.
   ========================================================================== */

const fs = require("fs");
const path = require("path");
const { render, SITE } = require("./template.cjs");

const ROOT = path.resolve(__dirname, "..");

const PAGES = [
  ...require("./pages/services.cjs"),
  ...require("./pages/pricing.cjs"),
  ...require("./pages/geo.cjs"),
  ...require("./pages/industries.cjs"),
];

/* The pre-rendered case studies, which stay in the sitemap. */
const CASE_SLUGS = [
  "cypago", "sales-savvy", "outbox", "iscent", "revcat",
  "easygenerator", "the-recipe", "fivex", "franchise-rocket", "conveyor",
];

const today = new Date().toISOString().slice(0, 10);

/* ---------- validate before writing anything ---------- */
const seen = new Set();
const problems = [];
for (const p of PAGES) {
  if (!p.path || !p.path.startsWith("/") || !p.path.endsWith("/")) problems.push(`bad path: ${p.path}`);
  if (seen.has(p.path)) problems.push(`duplicate path: ${p.path}`);
  seen.add(p.path);
  for (const field of ["title", "description", "h1", "standfirst", "body", "aside", "ctaHeadingA", "ctaHeadingB"]) {
    if (!p[field]) problems.push(`${p.path} missing ${field}`);
  }
  if (!Array.isArray(p.answer) || !p.answer.length) problems.push(`${p.path} missing answer block`);
  if (!Array.isArray(p.faqs) || p.faqs.length < 3) problems.push(`${p.path} needs at least 3 FAQs`);
  if (p.title.length > 65) problems.push(`${p.path} title is ${p.title.length} chars (aim <= 65)`);
  if (p.description.length > 165) problems.push(`${p.path} description is ${p.description.length} chars (aim <= 165)`);
  if (p.breadcrumbParent && !PAGES.some((q) => q.path === p.breadcrumbParent.path)) {
    problems.push(`${p.path} breadcrumb parent ${p.breadcrumbParent.path} does not exist`);
  }
}
/* every internal link must resolve to a page we generate, the homepage,
   a case study, or a homepage anchor */
const validHref = (href) =>
  href === "/" ||
  href.startsWith("/#") ||
  seen.has(href) ||
  CASE_SLUGS.some((s) => href === `/case-studies/${s}/`);
for (const p of PAGES) {
  for (const l of p.links || []) {
    if (!validHref(l.href)) problems.push(`${p.path} links to unknown ${l.href}`);
  }
}

if (problems.length) {
  console.error("Refusing to generate. Fix these first:\n  - " + problems.join("\n  - "));
  process.exit(1);
}

/* ---------- write pages ---------- */
let written = 0;
for (const p of PAGES) {
  const dir = path.join(ROOT, p.path);
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, "index.html");
  fs.writeFileSync(file, render(p), "utf8");
  const words = p.body.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
  console.log(`  ${p.path.padEnd(34)} ${String(words).padStart(4)} words  ${p.faqs.length} FAQs`);
  written++;
}

/* ---------- rebuild sitemap ---------- */
const entry = (loc, priority, changefreq, lastmod) =>
  `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;

const urls = [
  entry(`${SITE}/`, "1.0", "weekly", today),
  ...PAGES.map((p) => entry(SITE + p.path, p.path === "/industries/" ? "0.7" : "0.9", "monthly", today)),
  ...CASE_SLUGS.map((s) => entry(`${SITE}/case-studies/${s}/`, "0.7", "monthly", today)),
];

fs.writeFileSync(
  path.join(ROOT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
  "utf8"
);

console.log(`\nGenerated ${written} pages. Sitemap now lists ${urls.length} URLs.`);
