const { refs, asideCta, asideFacts, asideLinks, STANDARD_FAQS } = require("./shared.cjs");

/* ============================== 7. AUSTRALIA ============================== */
const australia = {
  path: "/australia/",
  title: "Outsourced SDR & Appointment Setting in Australia | SalesSourcers",
  description: "Outsourced SDR and B2B appointment setting for Australian companies. Calling in local business hours, with five completed campaigns across Australia and NZ.",
  serviceName: "Outsourced SDR services in Australia",
  serviceType: "Sales development representative outsourcing",
  areaServed: ["Australia", "New Zealand", "Asia Pacific"],
  breadcrumbName: "Australia",
  kicker: "AUSTRALIA & NEW ZEALAND",
  h1: "Outbound built for the Australian market.",
  standfirst: "Five of our completed campaigns ran for companies in Sydney, Perth and Auckland, and campaigns are staffed for the market being sold into rather than the market we sit in.",
  ctaLabel: "Get my outbound strategy",
  answerLabel: "In short",
  answer: [
    "We run <strong>outsourced SDR and appointment setting campaigns for Australian and New Zealand companies</strong>, with calling inside local business hours rather than shifted to a European desk.",
    "We hire SDRs across the UK, South Africa, the United States and Australia, and staff a campaign for the market it sells into. Our completed Australian and New Zealand work spans marketing agencies, eCommerce and AI-to-SaaS companies in Sydney, Perth and Auckland.",
  ],
  body: `        <h2>Why the calling window matters</h2>
        <p>Cold calling is unusually sensitive to the hour it happens. A call at the wrong time is not simply less likely to connect; it is more likely to irritate the person who answers. A campaign dialling Australia from a European shift lands either at the very start or the very end of the working day, and the symptom is an acceptable dial count with a poor connect rate - which is rarely diagnosed correctly.</p>
        <p>We staff a campaign for the market it sells into, so Australian and New Zealand calling happens inside local business hours across the eastern and western states.</p>
        <div class="stat-strip">
          <div><b>5</b><span>Completed AU / NZ campaigns</span></div>
          <div><b>Sydney</b><span>Perth &amp; Auckland</span></div>
          <div><b>Local hours</b><span>Calling window</span></div>
          <div><b>Narrow</b><span>Targeting for a smaller TAM</span></div>
        </div>
        <h2>What we have actually run here</h2>
        <p>Australia and New Zealand are not a new market for us. We have run five campaigns in the region, four of which are published as case studies below.</p>
        <ul>
          <li><strong>A Sydney marketing agency</strong> moved from referral dependency to a repeatable route to new clients - 93 qualified leads and 47 meetings across three months.</li>
          <li><strong>Outbox AI</strong> in Perth turned scattered email activity into a repeatable process during a transition from agency to SaaS - 111 qualified leads and 12 new clients.</li>
          <li><strong>Sales Savvy</strong>, an eCommerce marketing agency in Sydney, removed a founder bottleneck and reached six-figure growth in two months.</li>
          <li><strong>Franchise Rocket</strong> in Sydney reduced partner dependency and closed its first client in month one.</li>
          <li><strong>The Recipe</strong> in Auckland replaced referral dependence with a forecastable opportunity engine - 29 verified sales meetings.</li>
        </ul>
        <h2>The Australian buyer is not a smaller American one</h2>
        <p>Messaging written for a US market consistently underperforms here, and the reasons are practical rather than cultural mystique.</p>
        <p>Market size changes the maths. A total addressable market that supports spray-and-pray volume in the United States does not exist in Australia, so the same list-burn approach exhausts your market in a quarter and leaves you with nowhere to go. Narrower targeting is not a preference here, it is a necessity.</p>
        <p>Buying groups also tend to be smaller and more accessible, which makes calling comparatively more effective than it is in enterprise US selling. Reaching a decision maker directly is a realistic goal rather than a lucky outcome.</p>
        <h3>Selling from Australia into other markets</h3>
        <p>Several of our Australian clients sell outward rather than domestically. That works, but it needs deliberate coverage: calling into Europe or North America means an SDR working those hours, not an Australian rep making late-night attempts. We staff for the market being sold into, not the market the client sits in.</p>
        <h2>How an engagement runs</h2>
        <p>The model is the same everywhere: strategy and build in weeks one and two, live in week three, then manager coaching three times a week with every call recorded and annotated. What changes for APAC is the calling window, the seniority conventions, and who leads the account.</p>
        <p>Packages run at 1,500, 3,000 or 5,000 targeted calls a month, matched to 10 to 15, 15 to 25, or 25 to 40 expected meetings. For most Australian markets the middle tier is the honest starting point, because the addressable market rarely justifies the top one.</p>`,
  aside:
    asideCta("Book a strategy session", "We will map your addressable market in Australia and New Zealand and show you the segments worth working first.") +
    "\n" +
    asideFacts("Australia at a glance", [
      "<strong>5</strong> completed AU / NZ campaigns",
      "<strong>Sydney, Perth, Auckland</strong> client base",
      "Calls placed in <strong>local business hours</strong>",
      "Staffed for the market <strong>being sold into</strong>",
      "Narrow targeting suited to a smaller TAM",
    ]) +
    "\n" +
    asideLinks("Related", [
      ["/b2b-appointment-setting/", "Appointment setting", "How meetings get qualified"],
      ["/industries/marketing-agencies/", "For agencies", "Agency campaigns in AU and NZ"],
      ["/pricing/", "What it costs", "Cost drivers and ranges"],
    ]),
  caseRefs: refs("sales-savvy", "outbox", "the-recipe"),
  caseRefsHeading: "Australian and New Zealand campaigns.",
  faqs: [
    {
      q: "Do you have SDRs who call in Australian business hours?",
      a: "Yes. Calls for Australian and New Zealand campaigns are placed inside local business hours across the eastern and western states. We hire SDRs across the UK, South Africa, the United States and Australia, and staff each campaign for the market it sells into rather than the market we sit in.",
    },
    {
      q: "Have you worked with Australian companies before?",
      a: "Four of our published case studies are Australian or New Zealand companies: Sales Savvy and Franchise Rocket in Sydney, Outbox AI in Perth, and The Recipe in Auckland. They span marketing agencies, eCommerce marketing and an AI agency moving into SaaS.",
    },
    {
      q: "Is outbound different in Australia compared with the US or UK?",
      a: "The addressable market is smaller, so approaches that rely on volume exhaust the market quickly and leave nowhere to go. Targeting has to be narrower. Buying groups also tend to be smaller and more accessible, which makes cold calling comparatively more effective than in enterprise US selling.",
    },
    {
      q: "Can you run campaigns from Australia into other regions?",
      a: "Yes, and we staff for the market being sold into rather than the market you sit in. Selling from Australia into Europe or North America means an SDR working those hours, not an Australian rep making attempts late at night.",
    },
    ...STANDARD_FAQS,
  ],
  links: [
    { href: "/uk/", label: "Outbound in the UK" },
    { href: "/outsourced-sdr/", label: "Outsourced SDR services" },
    { href: "/b2b-appointment-setting/", label: "B2B appointment setting" },
    { href: "/industries/marketing-agencies/", label: "For marketing agencies" },
  ],
  ctaHeadingA: "Build pipeline in",
  ctaHeadingB: "your own time zone.",
};

/* ================================= 8. UK ================================= */
const uk = {
  path: "/uk/",
  title: "Outsourced SDR & B2B Lead Generation UK | SalesSourcers",
  description: "Outsourced SDR, cold calling and B2B lead generation for UK companies. Experienced SDRs, live in week three, fully recorded with weekly coaching.",
  serviceName: "Outsourced SDR services in the United Kingdom",
  serviceType: "Sales development representative outsourcing",
  areaServed: ["United Kingdom", "Ireland", "Europe"],
  breadcrumbName: "United Kingdom",
  kicker: "UNITED KINGDOM",
  h1: "Outsourced SDR for UK B2B companies.",
  standfirst: "A dedicated SDR working your UK accounts, live in week three, coached three times a week and fully recorded. Run from a UK-registered business with a London line.",
  ctaLabel: "Get my outbound strategy",
  answerLabel: "In short",
  answer: [
    "We provide <strong>outsourced SDR, cold calling and appointment setting for UK B2B companies</strong> - a dedicated rep matched to your market, trained on your offer and live in roughly three weeks.",
    "UK agencies that publish rates typically charge &pound;3,000 to &pound;12,000 per month. We price against your specific market after a complimentary strategy session rather than from a rate card.",
  ],
  body: `        <h2>A crowded market, and how to read it</h2>
        <p>The UK has no shortage of outsourced SDR providers, and most of them are perfectly credible. That makes the choice harder rather than easier, because at the proposal stage every provider's case studies look broadly alike.</p>
        <p>Three questions separate providers more reliably than any case study:</p>
        <ul>
          <li><strong>Is the SDR dedicated or shared?</strong> A shared pool never learns your market, because nobody stays in it long enough.</li>
          <li><strong>Can you listen to the calls?</strong> Not a summary of them. The recordings.</li>
          <li><strong>What is the written qualification standard?</strong> If it does not exist before launch, the meeting number will be defended after it.</li>
        </ul>
        <p>We answer those with: dedicated, yes, and agreed in writing before we start.</p>
        <div class="stat-strip">
          <div><b>Week 3</b><span>Typical time to live</span></div>
          <div><b>3x weekly</b><span>Manager coaching</span></div>
          <div><b>100%</b><span>Calls recorded</span></div>
          <div><b>+44 208</b><span>London line</span></div>
        </div>
        <h2>Who does the calling</h2>
        <p>We hire experienced, market-aligned SDRs across the UK, South Africa, the United States and Australia, then match to the market you sell into. For UK campaigns that means someone who understands how British buyers respond to a cold approach - which is, generally, less warmly than American ones and with a much lower tolerance for a hard opening.</p>
        <p>Every SDR completes structured training in discovery, SPIN Selling and Gap Selling before training on your specific offer. Scripts are tested through role play and call listening before any real prospect hears them.</p>
        <h2>What UK buyers respond to</h2>
        <p>Two adjustments matter more than anything else in UK outbound.</p>
        <h3>Openings have to earn the next thirty seconds</h3>
        <p>Enthusiastic US-style openers reliably underperform here. A UK buyer gives you a short window to demonstrate that you know something specific about their situation, and pattern-matched enthusiasm spends that window without buying anything.</p>
        <h3>Deliverability is a technical discipline, not a content one</h3>
        <p>UK inbox providers are unforgiving of the infrastructure mistakes that high-volume email programmes make. Domain authentication, sending reputation and volume ramping decide whether a campaign lands at all. Well-written email into badly configured infrastructure produces nothing, and the failure is invisible from the sending side.</p>
        <h2>Running into Europe from a UK base</h2>
        <p>Many UK clients sell across Europe as well as domestically. That is a targeting and staffing decision rather than a translation exercise: buying conventions, seniority language and the acceptability of cold calling vary sharply between markets. The Netherlands and the Nordics behave very differently from France or Germany on a first call.</p>
        <p>Our completed European work includes <a href="/case-studies/easygenerator/">Easygenerator</a> in Rotterdam, reaching senior L&amp;D buyers inside companies with more than 10,000 employees, and <a href="/case-studies/fivex/">FiveX</a> in Amsterdam.</p>
        <h2>How an engagement runs</h2>
        <p>Strategy and build in weeks one and two: we interview your team, study the offer, review recorded customer calls and existing material, define the addressable market and build the playbook. Live in week three. Then coaching three times a week, with recordings and AI notes on every call and reporting broken down by role, region and message.</p>`,
  aside:
    asideCta("Get your outbound strategy", "A complimentary map of your addressable UK market and the segments worth working first. Yours to keep either way.") +
    "\n" +
    asideFacts("UK at a glance", [
      "<strong>&pound;3,000-&pound;12,000</strong> typical UK market retainer",
      "<strong>Week three</strong> typical time to live",
      "SDRs hired across <strong>UK, South Africa, US, Australia</strong>",
      "London line: <strong>+44 208 330 4302</strong>",
    ]) +
    "\n" +
    asideLinks("Related", [
      ["/pricing/", "What it costs", "Cost drivers and market ranges"],
      ["/outsourced-sdr-vs-in-house/", "Versus hiring", "Full loaded-cost comparison"],
      ["/cold-calling-services/", "Cold calling", "Volumes and coaching"],
    ]),
  caseRefs: refs("revcat", "easygenerator", "fivex"),
  caseRefsHeading: "UK and European campaigns.",
  faqs: [
    {
      q: "How much do UK outsourced SDR agencies charge?",
      a: "UK agencies that publish their rates typically charge between 3,000 and 12,000 pounds per month on retainer, or roughly 150 to 400 pounds per booked meeting. Buyer seniority is the largest single driver of where a campaign sits in that range.",
    },
    {
      q: "Are your SDRs based in the UK?",
      a: "We hire experienced, market-aligned SDRs across the UK, South Africa, the United States and Australia, then match the rep to the market you sell into. What matters for a UK campaign is that the SDR understands how British buyers respond to a cold approach and can hold a credible conversation about your market.",
    },
    {
      q: "What is different about UK outbound compared with the US?",
      a: "Openings have to earn attention rather than assume it, so American-style enthusiastic openers consistently underperform. Email deliverability is also less forgiving: UK inbox providers punish weak domain authentication and aggressive volume ramping, and the resulting failure is invisible from the sending side.",
    },
    {
      q: "Can you run campaigns into Europe as well?",
      a: "Yes. Buying conventions, seniority language and attitudes to cold calling vary sharply across European markets, so it is a targeting and staffing decision rather than translation. Our completed European work includes Easygenerator in Rotterdam and FiveX in Amsterdam.",
    },
    ...STANDARD_FAQS,
  ],
  links: [
    { href: "/australia/", label: "Outbound in Australia" },
    { href: "/outsourced-sdr/", label: "Outsourced SDR services" },
    { href: "/pricing/", label: "What outsourced SDR costs" },
    { href: "/outsourced-sdr-vs-in-house/", label: "Outsourced vs in-house" },
  ],
  ctaHeadingA: "Your UK buyers are",
  ctaHeadingB: "already in market.",
};

module.exports = [australia, uk];
