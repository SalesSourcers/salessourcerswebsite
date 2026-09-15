const { refs, asideCta, asideFacts, asideLinks, STANDARD_FAQS } = require("./shared.cjs");

/* NOTE: SalesSourcers' own rates are deliberately not published here. Every
   figure below is either a cited market range or a clearly labelled
   illustrative build-up. If real rate-card numbers are approved later, add
   them to the "What a programme costs with us" section. Do not invent them. */

/* ============================== 5. PRICING ============================== */
const pricing = {
  path: "/pricing/",
  title: "What Outsourced SDR Costs | Pricing Explained | SalesSourcers",
  description: "What outsourced SDR and appointment setting cost, what pushes the price up or down, and how the total compares with hiring an SDR in-house.",
  serviceName: "Outsourced SDR pricing",
  serviceType: "Sales development outsourcing",
  breadcrumbName: "Pricing",
  kicker: "PRICING",
  h1: "What outsourced SDR costs.",
  standfirst: "Typical UK market prices, the things that change what you pay, and how outsourcing compares with the full cost of hiring.",
  ctaLabel: "Get a price for your market",
  answerLabel: "In short",
  answer: [
    "UK agencies that publish their rates typically charge between <strong>&pound;3,000 and &pound;12,000 a month</strong> on a retainer.",
    "Where you land in that range depends on how senior your buyers are, the size of your market, call volume and channel mix. A campaign aimed at CISOs in enterprise accounts costs more than one aimed at owner-managers of small businesses, because each conversation takes more work to get.",
  ],
  body: `        <h2>What moves your number</h2>
        <p>Five things explain most of the gap between a &pound;3,000 engagement and a &pound;12,000 one.</p>
        <ul>
          <li><strong>Buyer seniority.</strong> Reaching a CISO or a VP inside a 10,000-employee company takes far more attempts per conversation than reaching an owner-manager. Seniority is the biggest single driver.</li>
          <li><strong>Market size.</strong> A market of 400 accounts gets worked differently from one of 40,000. Small markets need more research per account and more patience.</li>
          <li><strong>Call and email volume.</strong> Packages run at 1,500, 3,000 or 5,000 targeted calls a month. We match the volume to what your market can take.</li>
          <li><strong>Channel mix.</strong> A call costs more per touch than an email and converts far better. The right blend depends on whether your buyers pick up the phone.</li>
          <li><strong>Geography and language.</strong> Covering several time zones, or selling into more than one region, adds cost.</li>
        </ul>
        <h2>What a programme costs with us</h2>
        <p>Our packages are built around meeting capacity, and the price depends on the market you want us to work.</p>
        <div class="stat-strip">
          <div><b>10-15</b><span>Expected meetings a month from 1,500 calls</span></div>
          <div><b>15-25</b><span>Expected meetings a month from 3,000 calls</span></div>
          <div><b>25-40</b><span>Expected meetings a month from 5,000 calls</span></div>
        </div>
        <p>We quote after the strategy session, once we know how many of your buyers we can reach. The session is free and you keep the output whether or not you work with us.</p>
        <h2>Comparing outsourcing with hiring</h2>
        <p>Most companies put a monthly retainer next to an SDR's base salary. The two numbers measure different things, and the comparison makes hiring look cheaper than it is.</p>
        <p>A fully loaded SDR costs employer national insurance, pension, tools, data and a phone system on top of salary. Add recruitment spread over how long they stay, the months before they are productive, and the management time needed to coach them. Base salary is usually around half of the true annual cost.</p>
        <p>The full breakdown is on the <a href="/outsourced-sdr-vs-in-house/">outsourced SDR vs in-house</a> page, including ramp time and staff turnover, the two costs most calculations leave out.</p>
        <h2>What any provider should include</h2>
        <p>Whoever you choose, these should come as standard.</p>
        <ul>
          <li>A written qualification standard agreed before launch</li>
          <li>Call recordings you can listen to yourself</li>
          <li>A named rep who works only on your account</li>
          <li>A replacement rep at the provider's cost if yours leaves</li>
          <li>Reporting broken down by role, region and message</li>
        </ul>
        <p>If a quote comes in well below the market range, one of these is usually missing, so ask which one.</p>
        <p class="source-note">The &pound;3,000-&pound;12,000 monthly range comes from the rates UK outsourced SDR agencies publish on their own websites, checked in September 2026. These are other firms' published prices, not ours, and not an industry study.</p>`,
  aside:
    asideCta("Get a price for your market", "We quote once we have mapped your market in a free strategy session. You keep the market map either way.") +
    "\n" +
    asideFacts("UK market range", [
      "<strong>&pound;3,000-&pound;12,000</strong> a month on retainer",
      "Taken from UK agencies' published rates, September 2026",
      "Buyer seniority is the biggest single driver",
    ]) +
    "\n" +
    asideLinks("Work out the comparison", [
      ["/outsourced-sdr-vs-in-house/", "Outsourced vs in-house", "The full cost of hiring"],
      ["/outsourced-sdr/", "Outsourced SDR", "What the retainer covers"],
      ["/b2b-appointment-setting/", "Appointment setting", "Meeting capacity by package"],
    ]),
  caseRefs: refs("iscent", "revcat", "franchise-rocket"),
  caseRefsHeading: "Results from past campaigns.",
  faqs: [
    {
      q: "How much does outsourced SDR cost?",
      a: "UK agencies that publish their rates typically charge between 3,000 and 12,000 pounds a month on retainer. Where you sit in that range depends mostly on how senior your buyers are, how big your market is, and the call volume and channel mix the campaign needs.",
    },
    {
      q: "Why do you not publish a rate card?",
      a: "Because the right price depends on the market. A campaign aimed at CISOs in enterprise accounts takes far more work per conversation than one aimed at owner-managers, so a single published figure would be wrong for most readers. We quote after the strategy session, based on your market.",
    },
    {
      q: "Is outsourcing cheaper than hiring an SDR?",
      a: "Usually, once you count everything. The common mistake is comparing a monthly retainer with an SDR's base salary. A fully loaded SDR also costs employer national insurance, pension, tools, data, recruitment, the months before they are productive and management time. Base salary is usually around half the true annual cost.",
    },
    {
      q: "Is there a minimum commitment?",
      a: "Outbound needs time for real market feedback to improve the campaign. Most programmes go live in week three and become predictable over the following months, so very short engagements tend to end just as the data becomes useful. We will tell you on the call whether your market suits a short test.",
    },
  ],
  links: [
    { href: "/outsourced-sdr-vs-in-house/", label: "Outsourced vs in-house" },
    { href: "/outsourced-sdr/", label: "Outsourced SDR services" },
    { href: "/b2b-appointment-setting/", label: "B2B appointment setting" },
    { href: "/cold-calling-services/", label: "Cold calling services" },
  ],
  ctaHeadingA: "Get a price based on",
  ctaHeadingB: "your market.",
};

/* ====================== 6. OUTSOURCED SDR VS IN-HOUSE ====================== */
const vsInHouse = {
  path: "/outsourced-sdr-vs-in-house/",
  title: "Outsourced SDR vs In-House SDR Cost Comparison | SalesSourcers",
  description: "Outsourcing sales development compared with hiring an SDR, including the ramp time, management and staff turnover costs most calculations leave out.",
  serviceName: "Outsourced SDR vs in-house comparison",
  serviceType: "Sales development outsourcing",
  breadcrumbName: "Outsourced vs in-house",
  kicker: "COMPARISON",
  h1: "Outsourced SDR vs hiring in-house.",
  standfirst: "Most people compare a retainer with a base salary, which leaves out most of what an SDR costs. This comparison adds ramp time, management and staff turnover.",
  ctaLabel: "Talk it through with us",
  answerLabel: "In short",
  answer: [
    "<strong>Hiring in-house</strong> makes sense when you have a proven playbook, an experienced sales manager with time to coach every day, and a market you already understand. The SDR becomes a long-term asset and can grow into an AE role.",
    "<strong>Outsourcing</strong> makes sense when you need pipeline before that is in place, when the market is unproven, or when nobody has time to manage an SDR. It is quicker to start and quicker to stop.",
  ],
  body: `        <h2>Why the usual comparison is wrong</h2>
        <p>Most companies put a monthly retainer next to an SDR's base salary, see a smaller number on the salary side, and decide hiring is cheaper. Base salary is roughly half of what an SDR costs.</p>
        <p>The table below lists every cost line. The notes reflect what is typical in the UK market, so put your own figures against each one.</p>
        <div class="table-scroll">
          <table class="page-table">
            <thead><tr><th>Cost line</th><th>Usually counted?</th><th>Why it matters</th></tr></thead>
            <tbody>
              <tr><td>Base salary</td><td>Yes</td><td>The only line most calculations include</td></tr>
              <tr><td>Commission / OTE</td><td>Sometimes</td><td>Paid on performance, so it rises with results</td></tr>
              <tr><td>Employer NI and pension</td><td>Rarely</td><td>A fixed percentage on top of total earnings</td></tr>
              <tr><td>Tools, data and dialler</td><td>Rarely</td><td>Per-seat costs that stay the same for a single hire</td></tr>
              <tr><td>Recruitment</td><td>Rarely</td><td>Agency fee or internal time, spread over how long they stay</td></tr>
              <tr><td>Ramp time</td><td>Almost never</td><td>Months of full cost for partial output</td></tr>
              <tr><td>Management time</td><td>Almost never</td><td>Regular coaching from someone senior, or the hire plateaus</td></tr>
              <tr><td>Staff turnover</td><td>Almost never</td><td>SDRs rarely stay long, so the cycle repeats</td></tr>
            </tbody>
          </table>
        </div>
        <h2>The two costs most calculations miss</h2>
        <h3>Ramp time</h3>
        <p>A new SDR is not productive on day one. They have to learn your product, your market and your objections, and make enough calls to handle a real conversation. Until then you pay the full cost for partial output. An outsourced SDR arrives matched and trained, and campaigns go live in week three.</p>
        <h3>Management</h3>
        <p>An SDR without regular coaching plateaus quickly, and the coaching has to come from someone who is good at it. If your sales leader cannot spend several hours a week listening to recordings and correcting technique, an in-house hire will underperform for reasons that have little to do with the person.</p>
        <p>This is usually what decides it. Most companies can afford to hire an SDR. Far fewer have a manager with the time to make one succeed.</p>
        <h2>Side by side</h2>
        <div class="table-scroll">
          <table class="page-table">
            <thead><tr><th></th><th>In-house SDR</th><th>Outsourced SDR</th></tr></thead>
            <tbody>
              <tr><td>Time to first meeting</td><td>Months, after hiring and ramp</td><td>Usually week three</td></tr>
              <tr><td>Management burden</td><td>Yours, every day</td><td>Ours, with coaching three times a week</td></tr>
              <tr><td>If it is not working</td><td>Performance process, then rehire</td><td>We replace the rep at our cost</td></tr>
              <tr><td>Product knowledge over time</td><td>Deeper, since they work inside your business</td><td>Good, built from working only on your account</td></tr>
              <tr><td>Cultural fit</td><td>Full</td><td>Partial, since they sit outside your team</td></tr>
              <tr><td>Long-term asset</td><td>Yes, and they can move into an AE role</td><td>No, the capability stays with the partner</td></tr>
              <tr><td>Market intelligence</td><td>Depends on your reporting</td><td>Included, with recordings, notes and conversion by role and region</td></tr>
            </tbody>
          </table>
        </div>
        <h2>When we tell people to hire instead</h2>
        <p>We are not the right fit for everyone, and it saves both of us time to work that out on the first call.</p>
        <p>Hire in-house if you already have a proven, written playbook, a sales manager with time to coach, and a market you understand well enough to brief precisely. With all three in place, an in-house SDR will outperform an outsourced one over two years, and can move into your AE team.</p>
        <p>Outsource if you need pipeline before any of that exists, if the market is unproven and you want to test it before committing to a permanent hire, or if nobody has the hours to manage an SDR.</p>
        <h2>Outsource first, hire later</h2>
        <p>Many companies do both, in that order. They outsource first to find out which segments respond, which messages convert and what a good pipeline looks like. Then they hire against a playbook that has already worked in real conversations.</p>
        <p>That way the first hire follows a process that already works, and does not have to figure out your market from scratch.</p>`,
  aside:
    asideCta("We will tell you if hiring suits you better", "Some markets suit an in-house hire. We would rather tell you on the first call than six months in.") +
    "\n" +
    asideFacts("Three questions to ask", [
      "Do you have a <strong>proven playbook</strong>?",
      "Does someone have <strong>hours each week</strong> to coach?",
      "Do you <strong>already understand</strong> the market?",
      "If all three are yes, hire. If not, outsource first",
    ]) +
    "\n" +
    asideLinks("Related", [
      ["/pricing/", "What it costs", "Market prices and cost drivers"],
      ["/outsourced-sdr/", "Outsourced SDR", "How our model works"],
      ["/b2b-appointment-setting/", "Appointment setting", "If you only need meetings"],
    ]),
  caseRefs: refs("cypago", "sales-savvy", "the-recipe"),
  caseRefsHeading: "Companies that chose to outsource.",
  faqs: [
    {
      q: "Is an outsourced SDR cheaper than hiring in-house?",
      a: "Usually, once you include everything. Base salary is roughly half the true annual cost of an in-house SDR. The full figure also includes employer national insurance, pension, tools, data, recruitment, months of ramp time at partial output, management time and the cost of starting again when they leave.",
    },
    {
      q: "When should we hire an SDR in-house instead?",
      a: "When you already have a proven written playbook, a sales manager with time to coach, and a market you understand well enough to brief precisely. With all three in place, an in-house SDR will outperform an outsourced one over two years and can grow into an account executive role.",
    },
    {
      q: "How long before an in-house SDR is productive?",
      a: "They need to learn the product, the market and the objections, and make enough calls to hold a real conversation. Until then you pay the full cost for partial output. An outsourced SDR arrives matched and already trained in method, so campaigns usually go live in week three.",
    },
    {
      q: "Can we outsource first and hire later?",
      a: "Yes, and many companies do. Outsourcing shows you which segments respond, which messages convert and what good looks like. You can then hire against a playbook that has worked in real conversations, so your first hire is not left to work it out while you pay them to learn.",
    },
  ],
  links: [
    { href: "/pricing/", label: "What outsourced SDR costs" },
    { href: "/outsourced-sdr/", label: "Outsourced SDR services" },
    { href: "/b2b-appointment-setting/", label: "B2B appointment setting" },
    { href: "/cold-calling-services/", label: "Cold calling services" },
  ],
  ctaHeadingA: "Work out which one",
  ctaHeadingB: "your business needs.",
};

module.exports = [pricing, vsInHouse];
