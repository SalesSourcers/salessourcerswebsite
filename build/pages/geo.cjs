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
  standfirst: "Five of our completed campaigns were for companies in Sydney, Perth and Auckland. We staff each campaign for the market it sells into.",
  ctaLabel: "Get my outbound strategy",
  answerLabel: "In short",
  answer: [
    "We run <strong>outsourced SDR and appointment setting campaigns for Australian and New Zealand companies</strong>, with calls made during local business hours.",
    "We hire SDRs across the UK, South Africa, the United States and Australia, and staff each campaign for the market it sells into. Our Australian and New Zealand work covers marketing agencies, eCommerce and an AI agency moving into SaaS, in Sydney, Perth and Auckland.",
  ],
  body: `        <h2>Why the calling window matters</h2>
        <p>Cold calling depends heavily on timing. A call at the wrong hour is less likely to connect and more likely to annoy the person who picks up. A campaign dialling Australia from a European shift reaches people at the very start or very end of their day, which shows up as a healthy dial count with a poor connect rate. That pattern is easy to misdiagnose.</p>
        <p>We staff each campaign for the market it sells into, so calls to Australia and New Zealand happen during local business hours in both the eastern and western states.</p>
        <div class="stat-strip">
          <div><b>5</b><span>Completed AU / NZ campaigns</span></div>
          <div><b>Sydney</b><span>Perth &amp; Auckland</span></div>
          <div><b>Local hours</b><span>Calling window</span></div>
          <div><b>Narrow</b><span>Targeting for a smaller TAM</span></div>
        </div>
        <h2>Our campaigns in the region</h2>
        <p>We have run five campaigns in Australia and New Zealand, and four of them are published as case studies below.</p>
        <ul>
          <li><strong>A Sydney marketing agency</strong> moved from relying on referrals to a repeatable way of winning clients, with 93 qualified leads and 47 meetings in three months.</li>
          <li><strong>Outbox AI</strong> in Perth turned scattered email activity into a repeatable process while moving from agency work to SaaS, producing 111 qualified leads and 12 new clients.</li>
          <li><strong>Sales Savvy</strong>, an eCommerce marketing agency in Sydney, removed a founder bottleneck and reached six-figure growth in two months.</li>
          <li><strong>Franchise Rocket</strong> in Sydney reduced its reliance on partners and closed its first client in month one.</li>
          <li><strong>The Recipe</strong> in Auckland replaced referral dependence with a steady, forecastable flow of opportunities, including 29 verified sales meetings.</li>
        </ul>
        <h2>Selling to Australian buyers</h2>
        <p>Messaging written for the US market tends to underperform here, for practical reasons.</p>
        <p>The first is market size. A market big enough for high-volume outreach in the United States usually does not exist in Australia, so the same approach burns through your whole market in a quarter. Targeting has to be narrower.</p>
        <p>Buying groups also tend to be smaller and easier to reach, which makes calling more effective than it is in enterprise US selling. Getting a decision maker on the phone is a realistic goal.</p>
        <h3>Selling from Australia into other markets</h3>
        <p>Several of our Australian clients sell overseas. That works, but it needs proper coverage. Calling into Europe or North America means an SDR working those hours, instead of an Australian rep making late-night attempts.</p>
        <h2>How an engagement runs</h2>
        <p>The process is the same everywhere. Strategy and build take weeks one and two, calling starts in week three, and a manager then coaches the SDR three times a week with every call recorded and annotated. For APAC campaigns, the calling window and seniority conventions change, and so does who leads your account.</p>
        <p>Packages run at 1,500, 3,000 or 5,000 targeted calls a month, for 10 to 15, 15 to 25, or 25 to 40 expected meetings. For most Australian markets the middle package is the sensible place to start, because few markets are large enough to justify the top one.</p>`,
  aside:
    asideCta("Book a strategy session", "We will map your addressable market in Australia and New Zealand and show you which segments to work first.") +
    "\n" +
    asideFacts("Australia at a glance", [
      "<strong>5</strong> completed AU and NZ campaigns",
      "Clients in <strong>Sydney, Perth and Auckland</strong>",
      "Calls made in <strong>local business hours</strong>",
      "Staffed for the market <strong>being sold into</strong>",
      "Narrow targeting to suit a smaller market",
    ]) +
    "\n" +
    asideLinks("Related", [
      ["/b2b-appointment-setting/", "Appointment setting", "How meetings get qualified"],
      ["/industries/marketing-agencies/", "For agencies", "Agency campaigns in AU and NZ"],
      ["/pricing/", "What it costs", "Cost drivers and market prices"],
    ]),
  caseRefs: refs("sales-savvy", "outbox", "the-recipe"),
  caseRefsHeading: "Australian and New Zealand campaigns.",
  faqs: [
    {
      q: "Do you have SDRs who call in Australian business hours?",
      a: "Yes. Calls for Australian and New Zealand campaigns are made during local business hours in both the eastern and western states. We hire SDRs across the UK, South Africa, the United States and Australia, and staff each campaign for the market it sells into.",
    },
    {
      q: "Have you worked with Australian companies before?",
      a: "Yes. Four of our published case studies are Australian or New Zealand companies. Sales Savvy and Franchise Rocket are in Sydney, Outbox AI is in Perth and The Recipe is in Auckland. Between them they cover marketing agencies, eCommerce marketing and an AI agency moving into SaaS.",
    },
    {
      q: "Is outbound different in Australia compared with the US or UK?",
      a: "The addressable market is smaller, so volume-heavy approaches use it up quickly and targeting has to be narrower. Buying groups also tend to be smaller and easier to reach, which makes cold calling more effective than in enterprise US selling.",
    },
    {
      q: "Can you run campaigns from Australia into other regions?",
      a: "Yes. We staff for the market being sold into, so selling from Australia into Europe or North America means an SDR working those hours, instead of an Australian rep calling late at night.",
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
  standfirst: "A dedicated SDR working your UK accounts, calling from week three, coached three times a week and recorded on every call. We are a UK-registered business with a London phone line.",
  ctaLabel: "Get my outbound strategy",
  answerLabel: "In short",
  answer: [
    "We provide <strong>outsourced SDR, cold calling and appointment setting for UK B2B companies</strong>, with a dedicated rep matched to your market, trained on your offer and calling within about three weeks.",
    "UK agencies that publish their rates typically charge &pound;3,000 to &pound;12,000 a month. We quote for your market after a free strategy session.",
  ],
  body: `        <h2>Choosing between UK providers</h2>
        <p>There are plenty of outsourced SDR providers in the UK, and most of them are credible. That makes choosing harder, because at proposal stage everyone's case studies look much the same.</p>
        <p>Three questions will tell providers apart faster than any case study.</p>
        <ul>
          <li><strong>Is the SDR dedicated or shared?</strong> Reps in a shared pool never stay on your market long enough to learn it.</li>
          <li><strong>Can you listen to the calls?</strong> Ask for the recordings themselves, since a summary tells you very little.</li>
          <li><strong>What is the written qualification standard?</strong> If it is not agreed before launch, you will end up arguing about the meeting count afterwards.</li>
        </ul>
        <p>Our answers are dedicated, yes, and a standard agreed in writing before we start.</p>
        <div class="stat-strip">
          <div><b>Week 3</b><span>Typical go-live</span></div>
          <div><b>3x weekly</b><span>Manager coaching</span></div>
          <div><b>100%</b><span>Calls recorded</span></div>
          <div><b>+44 208</b><span>London line</span></div>
        </div>
        <h2>Who does the calling</h2>
        <p>We hire experienced SDRs across the UK, South Africa, the United States and Australia, then match them to the market you sell into. For UK campaigns that means someone who knows how British buyers react to a cold approach, which is usually less warmly than American buyers and with far less patience for a hard opening.</p>
        <p>Every SDR completes structured training in discovery, SPIN Selling and Gap Selling before training on your offer. Scripts are tested through role play and call listening before any prospect hears them.</p>
        <h2>What UK buyers respond to</h2>
        <p>Two things matter most in UK outbound.</p>
        <h3>The first thirty seconds</h3>
        <p>Enthusiastic US-style openers tend to fall flat here. A UK buyer gives you a few seconds to show you know something specific about their situation, and generic enthusiasm uses that time up.</p>
        <h3>Email deliverability</h3>
        <p>UK inbox providers are strict about the technical setup behind high-volume email. Domain authentication, sender reputation and gradual volume increases decide whether emails arrive at all. Well-written emails sent from badly configured domains go nowhere, and the sender often cannot tell.</p>
        <h2>Selling into Europe from the UK</h2>
        <p>Many UK clients sell across Europe as well as at home. That calls for different targeting and staffing, and translation alone will not cover it. Buying habits, how seniority is addressed and attitudes to cold calling vary a lot between countries. The Netherlands and the Nordics respond very differently from France or Germany on a first call.</p>
        <p>Our European work includes <a href="/case-studies/easygenerator/">Easygenerator</a> in Rotterdam, reaching senior L&amp;D buyers inside companies with more than 10,000 employees, and <a href="/case-studies/fivex/">FiveX</a> in Amsterdam.</p>
        <h2>How an engagement runs</h2>
        <p>Weeks one and two cover strategy and build. We interview your team, study the offer, listen to recorded customer calls, review existing material, define the addressable market and write the playbook. Calling starts in week three, followed by coaching three times a week, with recordings and AI notes on every call and reporting by role, region and message.</p>`,
  aside:
    asideCta("Get your outbound strategy", "A free map of your addressable UK market and the segments to work first. It is yours to keep either way.") +
    "\n" +
    asideFacts("UK at a glance", [
      "<strong>&pound;3,000-&pound;12,000</strong> a month is the typical UK retainer",
      "Calling starts in <strong>week three</strong>",
      "SDRs hired across the <strong>UK, South Africa, US and Australia</strong>",
      "London phone line <strong>+44 208 330 4302</strong>",
    ]) +
    "\n" +
    asideLinks("Related", [
      ["/pricing/", "What it costs", "Cost drivers and market prices"],
      ["/outsourced-sdr-vs-in-house/", "Versus hiring", "The full cost of hiring"],
      ["/cold-calling-services/", "Cold calling", "Volumes and coaching"],
    ]),
  caseRefs: refs("revcat", "easygenerator", "fivex"),
  caseRefsHeading: "UK and European campaigns.",
  faqs: [
    {
      q: "How much do UK outsourced SDR agencies charge?",
      a: "UK agencies that publish their rates typically charge between 3,000 and 12,000 pounds a month on retainer. How senior your buyers are is the biggest factor in where a campaign sits in that range.",
    },
    {
      q: "Are your SDRs based in the UK?",
      a: "We hire experienced SDRs across the UK, South Africa, the United States and Australia, then match the rep to the market you sell into. For a UK campaign, what matters is that the SDR knows how British buyers react to a cold approach and can talk credibly about your market.",
    },
    {
      q: "What is different about UK outbound compared with the US?",
      a: "Openings have to earn attention, so enthusiastic American-style openers tend to fall flat. Email deliverability is also stricter. UK inbox providers penalise weak domain authentication and aggressive volume increases, and the sender often cannot see the problem.",
    },
    {
      q: "Can you run campaigns into Europe as well?",
      a: "Yes. Buying habits, how seniority is addressed and attitudes to cold calling vary a lot across European markets, so each one needs its own targeting and staffing. Our European work includes Easygenerator in Rotterdam and FiveX in Amsterdam.",
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
