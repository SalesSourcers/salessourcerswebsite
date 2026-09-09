const { refs, asideCta, asideFacts, asideLinks, STANDARD_FAQS } = require("./shared.cjs");

/* NOTE: SalesSourcers' own rates are deliberately not published here. Every
   figure below is either a cited market range or a clearly labelled
   illustrative build-up. If real rate-card numbers are approved later, add
   them to the "What a programme costs here" section - do not invent them. */

/* ============================== 5. PRICING ============================== */
const pricing = {
  path: "/pricing/",
  title: "What Outsourced SDR Costs | Pricing Explained | SalesSourcers",
  description: "What outsourced SDR and appointment setting actually cost, what drives the price up or down, and how the total compares with hiring an SDR in-house.",
  serviceName: "Outsourced SDR pricing",
  serviceType: "Sales development outsourcing",
  breadcrumbName: "Pricing",
  kicker: "PRICING",
  h1: "What outsourced SDR actually costs.",
  standfirst: "An honest walk through the market ranges, the variables that move your number, and the in-house comparison most cost calculations get wrong.",
  ctaLabel: "Get a price for your market",
  answerLabel: "The short answer",
  answer: [
    "UK agencies that publish rates typically sit between <strong>&pound;3,000 and &pound;12,000 per month</strong> on retainer, or roughly <strong>&pound;150 to &pound;400 per booked meeting</strong>.",
    "Where you land inside that range depends on buyer seniority, market size, call volume and channel mix. A campaign targeting CISOs at enterprise accounts costs more per meeting than one targeting owner-managers at small businesses, because the work per conversation is genuinely different.",
  ],
  body: `        <h2>The two pricing models</h2>
        <p>Almost every provider uses one of two structures, and they fail in opposite directions.</p>
        <div class="table-scroll">
          <table class="page-table">
            <thead><tr><th>Model</th><th>How it works</th><th>Where it goes wrong</th></tr></thead>
            <tbody>
              <tr><td>Monthly retainer</td><td>A fixed fee for a dedicated SDR and an agreed activity level</td><td>You carry the risk if the market is wrong, so the strategy work up front matters enormously</td></tr>
              <tr><td>Pay per meeting</td><td>A fee for each booked appointment</td><td>It pays the provider to lower the qualification bar. You get volume and a calendar your AEs stop trusting</td></tr>
            </tbody>
          </table>
        </div>
        <p>Pay-per-meeting sounds like the safer deal and usually is not. The moment a meeting is the unit of payment, every ambiguous prospect becomes a meeting. We work on a retainer for that reason, and put the qualification bar in writing instead.</p>
        <h2>What moves your number</h2>
        <p>Five variables explain most of the spread between a &pound;3,000 engagement and a &pound;12,000 one.</p>
        <ul>
          <li><strong>Buyer seniority.</strong> Reaching a CISO or a VP inside a 10,000-employee company takes far more attempts per conversation than reaching an owner-manager. Seniority is the single biggest driver.</li>
          <li><strong>Market size.</strong> A tightly bounded market of 400 accounts is worked differently from one of 40,000. Small markets need more research per account and more patience.</li>
          <li><strong>Call and send volume.</strong> Packages run at 1,500, 3,000 or 5,000 targeted calls a month. Volume is matched to what the market can absorb, not sold as a headline.</li>
          <li><strong>Channel mix.</strong> Calling is more expensive per touch than email and converts at a far higher rate. The right blend depends on whether your buyers answer phones.</li>
          <li><strong>Geography and language.</strong> Coverage across time zones, or selling into more than one region, adds real cost.</li>
        </ul>
        <h2>What a programme costs here</h2>
        <p>Our packages are built around meeting capacity rather than a rate card, because the honest answer to "what will this cost" depends on the market you want us to work.</p>
        <div class="stat-strip">
          <div><b>10-15</b><span>Expected meetings / mo - 1,500 calls</span></div>
          <div><b>15-25</b><span>Expected meetings / mo - 3,000 calls</span></div>
          <div><b>25-40</b><span>Expected meetings / mo - 5,000 calls</span></div>
        </div>
        <p>We price against your specific market after the strategy session, so the number reflects real reachable volume rather than a guess. That session is complimentary and you keep the output whether or not you engage us.</p>
        <h2>The comparison most people get wrong</h2>
        <p>Companies weighing outsourcing against hiring usually compare a monthly retainer against an SDR's base salary. Those are not the same kind of number, and the comparison flatters the in-house option badly.</p>
        <p>A fully loaded SDR includes employer national insurance, pension, tooling, data, phone system, recruitment cost amortised over expected tenure, ramp time before productivity, and the management time to coach them. Base salary is typically around half of the real annual cost.</p>
        <p>The full build-up is on the <a href="/outsourced-sdr-vs-in-house/">outsourced SDR vs in-house</a> page, including the two costs almost nobody models: ramp and attrition.</p>
        <h2>What should be included at any price</h2>
        <p>Whoever you choose, these should not be extras:</p>
        <ul>
          <li>A written qualification standard you agreed before launch</li>
          <li>Call recordings you can listen to, not summaries</li>
          <li>A named, dedicated rep rather than a shared pool</li>
          <li>Replacement cover at the provider's cost</li>
          <li>Reporting by role, region and message, not just totals</li>
        </ul>
        <p>If a quote is materially cheaper than the market range, one of those is usually missing. Ask which.</p>
        <p class="source-note">Where the market figures come from: the &pound;3,000-&pound;12,000 monthly and &pound;150-&pound;400 per-meeting ranges are compiled from the rates UK outsourced SDR agencies publish openly on their own sites, surveyed September 2026. They are other firms' published prices, not ours, and not an industry study.</p>`,
  aside:
    asideCta("Get a real number", "We price against your actual market after a complimentary strategy session. You keep the market map either way.") +
    "\n" +
    asideFacts("UK market ranges", [
      "<strong>&pound;3,000-&pound;12,000</strong> per month on retainer",
      "<strong>&pound;150-&pound;400</strong> per booked meeting",
      "Compiled from UK agencies' own published rates, Sept 2026",
      "Seniority of the buyer is the biggest single driver",
    ]) +
    "\n" +
    asideLinks("Work out the comparison", [
      ["/outsourced-sdr-vs-in-house/", "Outsourced vs in-house", "Full loaded-cost build-up"],
      ["/outsourced-sdr/", "Outsourced SDR", "What the retainer buys"],
      ["/b2b-appointment-setting/", "Appointment setting", "Meeting capacity by package"],
    ]),
  caseRefs: refs("iscent", "revcat", "franchise-rocket"),
  caseRefsHeading: "What the return has looked like.",
  faqs: [
    {
      q: "How much does outsourced SDR cost?",
      a: "UK agencies that publish their rates typically charge between 3,000 and 12,000 pounds per month on retainer, or roughly 150 to 400 pounds per booked meeting. Where you sit in that range depends mainly on how senior your buyers are, how large the addressable market is, and the call volume and channel mix the campaign needs.",
    },
    {
      q: "Do you charge per meeting or a monthly retainer?",
      a: "A monthly retainer. Paying per meeting creates a direct incentive to lower the qualification bar, which produces a full calendar your account executives stop trusting. A retainer plus an agreed written qualification standard keeps the incentives aligned with pipeline quality.",
    },
    {
      q: "Why do you not publish a rate card?",
      a: "Because the honest price depends on the market. A campaign targeting CISOs in enterprise accounts involves substantially more work per conversation than one targeting owner-managers, and a single published figure would be wrong for most people reading it. We price after the strategy session, against your real market.",
    },
    {
      q: "Is outsourcing cheaper than hiring an SDR?",
      a: "Usually, once the comparison is honest. The common mistake is comparing a monthly retainer against an SDR's base salary. A fully loaded SDR also carries employer national insurance, pension, tooling, data, recruitment cost, ramp time before productivity and management time. Base salary is typically around half the true annual cost.",
    },
    {
      q: "Is there a minimum commitment?",
      a: "Outbound needs enough time for real market feedback to improve the campaign. Most programmes go live in week three and become predictable over the following months, so very short engagements tend to end just as the data becomes useful. We will tell you honestly on the call whether your market suits a short test.",
    },
  ],
  links: [
    { href: "/outsourced-sdr-vs-in-house/", label: "Outsourced vs in-house" },
    { href: "/outsourced-sdr/", label: "Outsourced SDR services" },
    { href: "/b2b-appointment-setting/", label: "B2B appointment setting" },
    { href: "/cold-calling-services/", label: "Cold calling services" },
  ],
  ctaHeadingA: "Get a number based on",
  ctaHeadingB: "your actual market.",
};

/* ====================== 6. OUTSOURCED SDR VS IN-HOUSE ====================== */
const vsInHouse = {
  path: "/outsourced-sdr-vs-in-house/",
  title: "Outsourced SDR vs In-House: The Real Cost Comparison",
  description: "An honest comparison of outsourcing sales development against hiring an SDR, including the ramp, management and attrition costs most calculations miss.",
  serviceName: "Outsourced SDR vs in-house comparison",
  serviceType: "Sales development outsourcing",
  breadcrumbName: "Outsourced vs in-house",
  kicker: "COMPARISON",
  h1: "Outsourced SDR vs hiring in-house.",
  standfirst: "The comparison is usually run as retainer against base salary, which is not a like-for-like number. Here is the version that includes ramp, management and attrition.",
  ctaLabel: "Talk it through with us",
  answerLabel: "The short answer",
  answer: [
    "<strong>Hiring in-house</strong> wins when you have a proven playbook, an experienced sales manager with time to coach daily, and a market you already understand. The SDR becomes a long-term asset and a pipeline into your AE bench.",
    "<strong>Outsourcing</strong> wins when you need pipeline before you have that infrastructure, when the market is unproven, or when management capacity is the real constraint. It is faster to start and faster to stop.",
  ],
  body: `        <h2>Why the usual comparison is wrong</h2>
        <p>Most companies put a monthly retainer next to an SDR's base salary, see a smaller number on the salary side, and conclude that hiring is cheaper. Base salary is roughly half of what an SDR actually costs.</p>
        <p>Here is the structure of the real number. The figures below are illustrative UK market typicals, not a quote - substitute your own.</p>
        <div class="table-scroll">
          <table class="page-table">
            <thead><tr><th>Cost line</th><th>Typically modelled?</th><th>Why it matters</th></tr></thead>
            <tbody>
              <tr><td>Base salary</td><td>Yes</td><td>The only line most calculations include</td></tr>
              <tr><td>Commission / OTE</td><td>Sometimes</td><td>Paid on performance, so it scales with success</td></tr>
              <tr><td>Employer NI and pension</td><td>Rarely</td><td>A fixed percentage on top of total earnings</td></tr>
              <tr><td>Tooling, data and dialler</td><td>Rarely</td><td>Per-seat costs that do not shrink for one hire</td></tr>
              <tr><td>Recruitment</td><td>Rarely</td><td>Agency fee or internal time, amortised over tenure</td></tr>
              <tr><td>Ramp time</td><td>Almost never</td><td>Months of full cost at partial output</td></tr>
              <tr><td>Management time</td><td>Almost never</td><td>Daily coaching from someone senior, or the hire plateaus</td></tr>
              <tr><td>Attrition risk</td><td>Almost never</td><td>SDR tenure is short. The cycle repeats</td></tr>
            </tbody>
          </table>
        </div>
        <h2>The two costs nobody models</h2>
        <h3>Ramp</h3>
        <p>A new SDR is not productive on day one. They need to learn your product, your market and your objections, and to build enough call reps to handle a real conversation. During that period you are paying the full cost for partial output. Outsourcing shifts that: a matched, already-trained SDR goes live in week three.</p>
        <h3>Management</h3>
        <p>An SDR without regular coaching plateaus quickly, and coaching has to come from someone who is good at it. If your sales leader does not have several hours a week to listen to recordings and correct technique, an in-house hire will underperform for reasons that have nothing to do with the person.</p>
        <p>This is the constraint that most often decides it. Companies rarely lack the budget to hire an SDR. They lack the management bandwidth to make one succeed.</p>
        <h2>Honest scorecard</h2>
        <div class="table-scroll">
          <table class="page-table">
            <thead><tr><th></th><th>In-house SDR</th><th>Outsourced SDR</th></tr></thead>
            <tbody>
              <tr><td>Time to first meeting</td><td>Months, after hiring and ramp</td><td>Typically week three</td></tr>
              <tr><td>Management burden</td><td>Yours, daily</td><td>Ours, three coaching sessions weekly</td></tr>
              <tr><td>If it is not working</td><td>Performance process, then rehire</td><td>Replacement at our cost</td></tr>
              <tr><td>Product depth over time</td><td>Higher - they live in your business</td><td>Good, but they serve one account not five</td></tr>
              <tr><td>Cultural integration</td><td>Full</td><td>Partial, by definition</td></tr>
              <tr><td>Long-term asset</td><td>Yes - promotes into an AE seat</td><td>No - capability stays with the partner</td></tr>
              <tr><td>Market intelligence</td><td>Depends on your reporting</td><td>Built in - recordings, notes, conversion by role and region</td></tr>
            </tbody>
          </table>
        </div>
        <h2>When we tell people to hire instead</h2>
        <p>We are not the right answer for everyone, and it is cheaper for both of us to work that out on the first call.</p>
        <p>Hire in-house if you already have a proven, documented playbook, a sales manager with genuine coaching capacity, and a market you understand well enough to brief precisely. Under those conditions an in-house SDR will out-perform any outsourced arrangement over a two-year horizon, and they promote into your AE bench.</p>
        <p>Outsource if you need pipeline before that infrastructure exists, if the market is unproven and you want to test it without a permanent headcount decision, or if the honest answer about management capacity is that nobody has the hours.</p>
        <h2>The hybrid most people land on</h2>
        <p>A common pattern: outsource first to establish which segments respond, which messages convert and what good looks like. Then hire in-house against a playbook that has already been proven with real conversations, instead of asking a first hire to invent it.</p>
        <p>That sequencing removes most of the risk from the in-house hire, because you are no longer paying someone to discover your market for you.</p>`,
  aside:
    asideCta("We will tell you if hiring is better", "Some markets genuinely suit an in-house hire. We would rather say so on the call than six months in.") +
    "\n" +
    asideFacts("The deciding question", [
      "Do you have a <strong>proven playbook</strong>?",
      "Does someone have <strong>hours a week</strong> to coach?",
      "Is the market <strong>already understood</strong>?",
      "Three yeses - hire. Otherwise, outsource first",
    ]) +
    "\n" +
    asideLinks("Related", [
      ["/pricing/", "What it costs", "Market ranges and cost drivers"],
      ["/outsourced-sdr/", "Outsourced SDR", "How our model works"],
      ["/b2b-appointment-setting/", "Appointment setting", "If you only need meetings"],
    ]),
  caseRefs: refs("cypago", "sales-savvy", "the-recipe"),
  caseRefsHeading: "Companies that chose to outsource.",
  faqs: [
    {
      q: "Is an outsourced SDR cheaper than hiring in-house?",
      a: "Usually, once the comparison includes everything. Base salary is roughly half the true annual cost of an in-house SDR. The full number also carries employer national insurance, pension, tooling, data, recruitment, ramp time at partial output, management time and the cost of repeating the cycle when they leave.",
    },
    {
      q: "When should we hire an SDR in-house instead?",
      a: "When you already have a proven documented playbook, a sales manager with real coaching capacity, and a market you understand well enough to brief precisely. Under those three conditions an in-house SDR will outperform an outsourced arrangement over a two-year horizon and becomes a long-term asset who can promote into an account executive seat.",
    },
    {
      q: "How long before an in-house SDR is productive?",
      a: "They need to learn the product, the market and the objections, and build enough call repetitions to hold a real conversation. Throughout that period you carry the full cost for partial output. An outsourced SDR is matched and already trained in method, so campaigns typically go live in week three.",
    },
    {
      q: "Can we outsource first and hire later?",
      a: "That is a common and sensible sequence. Outsourcing establishes which segments respond, which messages convert and what good looks like. You then hire against a playbook proven with real conversations, rather than asking a first hire to invent it while you pay them to learn.",
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
