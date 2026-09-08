/* Shared building blocks for the generated landing pages.
   CASES mirrors the real data in /case-study.js - keep the numbers in sync. */

const CASES = {
  "content-rebels": { slug: "content-rebels", name: "Content Rebels", industry: "Marketing agency - Sydney", line: "A referral-led agency built a repeatable route to new clients without adding work for the founder.", metric: "$212K", metricLabel: "revenue in 3 months" },
  cypago: { slug: "cypago", name: "Cypago", industry: "Cybersecurity SaaS - New York", line: "Outbound had failed four times. A narrower strategy turned it into enterprise pipeline.", metric: "61", metricLabel: "meetings with CISO-level buyers" },
  "sales-savvy": { slug: "sales-savvy", name: "Sales Savvy", industry: "eCommerce marketing - Sydney", line: "An outsourced sales department removed the founder bottleneck and created six-figure growth.", metric: "23", metricLabel: "meetings in 2 months" },
  outbox: { slug: "outbox", name: "Outbox AI", industry: "AI agency to SaaS - Perth", line: "Scattered email activity became a repeatable process that supported the move to SaaS.", metric: "12", metricLabel: "new clients in 3 months" },
  iscent: { slug: "iscent", name: "iScent", industry: "Scent marketing - Dubai", line: "A specialist service built a deliberate route into premium hotel, spa and luxury retail accounts.", metric: "721%", metricLabel: "return on investment" },
  revcat: { slug: "revcat", name: "Revcat", industry: "B2B SaaS - London", line: "Founder-led selling became a repeatable revenue channel, with the first outbound client in week one.", metric: "$380K", metricLabel: "pipeline opportunities" },
  easygenerator: { slug: "easygenerator", name: "Easygenerator", industry: "eLearning SaaS - Rotterdam", line: "A targeted enterprise campaign reached senior L&D buyers inside 10,000-plus employee companies.", metric: "12", metricLabel: "enterprise meetings" },
  "the-recipe": { slug: "the-recipe", name: "The Recipe", industry: "Marketing agency - Auckland", line: "A referral-dependent agency built a proactive engine for creating and forecasting opportunities.", metric: "29", metricLabel: "verified sales meetings" },
  fivex: { slug: "fivex", name: "FiveX", industry: "B2B SaaS - Amsterdam", line: "A coordinated outbound programme tested a new market and created early commercial traction.", metric: "23", metricLabel: "sales meetings" },
  "franchise-rocket": { slug: "franchise-rocket", name: "Franchise Rocket", industry: "Marketing agency - Sydney", line: "A direct outbound system reduced partner dependency and created the first client in month one.", metric: "$15K MRR", metricLabel: "closed in month one" },
  conveyor: { slug: "conveyor", name: "Conveyor", industry: "Marketing agency - Philadelphia", line: "A stop-start prospecting routine became steady pipeline that no longer depended on leadership.", metric: "45", metricLabel: "qualified leads" },
};

const refs = (...slugs) => slugs.map((s) => CASES[s]);

/* ---- reusable sidebar cards ---- */

const asideCta = (heading, copy) => `        <div class="aside-card">
          <h3>${heading}</h3>
          <p>${copy}</p>
          <a class="button button-dark" href="https://calendly.com/zaid-wasati/salessourcers-strat-session?hide_gdpr_banner=1" data-calendly-route>Schedule a call <span>-&gt;</span></a>
        </div>`;

const asideFacts = (heading, items) => `        <div class="aside-card">
          <h3>${heading}</h3>
          <ul class="aside-list">
${items.map((i) => `            <li>${i}</li>`).join("\n")}
          </ul>
        </div>`;

const asideLinks = (heading, items) => `        <div class="aside-card">
          <h3>${heading}</h3>
          <ul class="aside-list">
${items.map(([href, label, note]) => `            <li><a href="${href}">${label}</a><span>${note}</span></li>`).join("\n")}
          </ul>
        </div>`;

/* The engagement model is identical across services - written once. */
const HOW_IT_RUNS = `        <h2>How the engagement actually runs</h2>
        <p>Every programme follows the same four stages. Nothing starts until the market is defined, and nothing goes live until you have approved the positioning.</p>
        <h3>Weeks one and two - strategy and build</h3>
        <p>We interview your team, study your offer, review recorded customer calls and existing sales material, then build the playbook. In parallel we define the addressable market: ideal customer profile, priority sectors and regions, and the exclusions that keep the campaign clean. Infrastructure and data are set up alongside SDR training.</p>
        <h3>Week three - go live</h3>
        <p>Most campaigns start dialling and sending in week three. Scripts have been tested through role play, call listening and live coaching before the first real conversation. Qualified meetings can begin from launch.</p>
        <h3>Ongoing - coaching and iteration</h3>
        <p>Your SDR is coached by a manager three times a week. Calls are recorded with AI-generated notes, so you can hear the market rather than read a summary of it. Every reply and objection feeds back into targeting and messaging.</p>
        <h3>Reporting you can act on</h3>
        <p>You see which roles, regions and messages convert, what competitors are being mentioned, which objections recur and where pricing pressure sits. That intelligence is often worth as much as the meetings.</p>`;

const STANDARD_FAQS = [
  {
    q: "How quickly can we expect meetings?",
    a: "Most campaigns go live in week three, after strategy, infrastructure and SDR training are complete. Qualified meetings can begin from launch, and performance becomes more predictable as real market feedback improves the campaign.",
  },
  {
    q: "Will your SDR sound like our company?",
    a: "Before launch we interview your team, study your offer, review customer calls and materials, build the sales playbook and train your SDR on your market. Scripts are tested through role play, call listening and live coaching. Your team approves the positioning, and recordings plus email replies keep quality visible.",
  },
  {
    q: "What visibility do we get?",
    a: "Full call visibility, recordings, AI-generated call notes and a live dashboard. You can listen to any conversation, see which messages convert by role and region, and track meetings from booked through to attended.",
  },
];

module.exports = { CASES, refs, asideCta, asideFacts, asideLinks, HOW_IT_RUNS, STANDARD_FAQS };
