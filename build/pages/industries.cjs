const { refs, asideCta, asideFacts, asideLinks, HOW_IT_RUNS, STANDARD_FAQS } = require("./shared.cjs");

const PARENT = { name: "Industries", path: "/industries/" };

/* =========================== 9. INDUSTRIES HUB =========================== */
const hub = {
  path: "/industries/",
  title: "Industries We Run Outbound For | SalesSourcers",
  description: "Outsourced SDR and appointment setting for B2B SaaS, cybersecurity and marketing agencies, with completed campaigns and published results in each.",
  serviceName: "Industry-specific outbound programmes",
  serviceType: "Sales development representative outsourcing",
  breadcrumbName: "Industries",
  kicker: "INDUSTRIES",
  h1: "Industries we know well.",
  standfirst: "An SDR who has sold into your market before already knows why your buyers ignore generic outreach. These are the sectors where we have that experience.",
  ctaLabel: "Get my outbound strategy",
  answerLabel: "In short",
  answer: [
    "We run outbound across <strong>B2B SaaS, cybersecurity and marketing agencies</strong>, with published case studies in each.",
    "Sector experience matters most where the buyer is technical or sceptical. A rep who already knows why a CISO refuses a generic call starts months ahead of one learning it on your pipeline.",
  ],
  body: `        <h2>Why sector matching matters</h2>
        <p>Much of what makes an SDR effective is market knowledge. They need to know the objections a market raises, the job titles that respond, and the language that shows you understand the buyer's problem.</p>
        <p>That knowledge takes months to build from scratch. An SDR who has sold into the market before skips most of that learning curve, so we hire for specific markets.</p>
        <h2>Where we have the most experience</h2>
        <h3>B2B SaaS</h3>
        <p>Five completed campaigns, from early-stage founder-led selling to enterprise campaigns reaching senior buyers in companies with more than 10,000 employees. <a href="/industries/b2b-saas/">SaaS outbound programmes</a>.</p>
        <h3>Cybersecurity</h3>
        <p>Security buyers are among the hardest people in B2B to reach cold, and generic outreach fails with them faster than almost anywhere else. Our Cypago campaign came after an internal team and three agencies had failed. <a href="/industries/cybersecurity/">Cybersecurity lead generation</a>.</p>
        <h3>Marketing agencies</h3>
        <p>Five campaigns in Sydney, Auckland, Philadelphia and elsewhere, nearly all tackling the same problem. Growth depended on referrals and the founder had become the bottleneck. <a href="/industries/marketing-agencies/">Lead generation for agencies</a>.</p>
        <h2>If your sector is not listed</h2>
        <p>We have also run campaigns for scent and product marketing into premium hospitality and luxury retail, for eLearning and for franchising. On a first call we look past your exact vertical. We ask whether your buyers can be reached, whether anyone has bought your offer yet, and whether your market is big enough to support a programme.</p>
        <p>If any of those answers is no, we will say so on that call.</p>`,
  aside:
    asideCta("Ask about your market", "On the first call we work out whether your buyers can be reached and whether the market can support a programme. If not, we will tell you.") +
    "\n" +
    asideLinks("Sector pages", [
      ["/industries/b2b-saas/", "B2B SaaS", "Five completed campaigns"],
      ["/industries/cybersecurity/", "Cybersecurity", "CISO-level meetings"],
      ["/industries/marketing-agencies/", "Marketing agencies", "Five completed campaigns"],
    ]),
  caseRefs: refs("cypago", "iscent", "easygenerator"),
  caseRefsHeading: "Campaigns across sectors.",
  faqs: [
    {
      q: "Do you only work with these industries?",
      a: "No. These are the sectors where we have the most completed work and can match an SDR who has sold into that market before. We have also run campaigns in scent and product marketing, eLearning and franchising. On a first call we check whether your buyers can be reached, whether anyone has bought your offer, and whether the market is big enough to support a programme.",
    },
    {
      q: "How much does industry experience matter?",
      a: "It matters most when the buyer is technical or sceptical. A rep who already knows why a security buyer rejects a generic call starts months ahead of one learning that on your pipeline. In less specialised markets, general technique and a well-built list do more of the work.",
    },
    ...STANDARD_FAQS,
  ],
  links: [
    { href: "/outsourced-sdr/", label: "Outsourced SDR services" },
    { href: "/b2b-appointment-setting/", label: "B2B appointment setting" },
    { href: "/australia/", label: "Outbound in Australia" },
    { href: "/uk/", label: "Outbound in the UK" },
  ],
  ctaHeadingA: "Find out if your market",
  ctaHeadingB: "is worth working.",
};

/* ============================ 10. CYBERSECURITY ============================ */
const cybersecurity = {
  path: "/industries/cybersecurity/",
  title: "Cybersecurity Lead Generation & SDR Outsourcing | SalesSourcers",
  description: "Outbound for cybersecurity vendors. Booking meetings with CISOs and senior security buyers, including a campaign that followed three failed agencies.",
  serviceName: "Cybersecurity lead generation",
  serviceType: "Sales development for cybersecurity vendors",
  breadcrumbParent: PARENT,
  breadcrumbName: "Cybersecurity",
  kicker: "CYBERSECURITY",
  h1: "Outbound for cybersecurity vendors selling to CISOs.",
  standfirst: "Security leaders get a huge amount of cold outreach, so generic messages fail quickly. We booked 61 meetings with CISO-level buyers for a vendor whose previous four attempts had not worked.",
  ctaLabel: "Get my outbound strategy",
  answerLabel: "In short",
  answer: [
    "<strong>Cybersecurity lead generation</strong> means reaching CISOs and senior security buyers, who receive a large volume of cold outreach and screen it hard.",
    "It takes narrow targeting, a specific and technically credible reason for the call, and an SDR who understands how security teams buy. Extra volume will not make up for any of those.",
  ],
  body: `        <h2>Why security buyers are different</h2>
        <p>Every vendor in a crowded category is chasing the same small group of security leaders, and those people have become very good at filtering outreach.</p>
        <p>Three things make this market harder than most.</p>
        <ul>
          <li><strong>Saturation.</strong> Security leaders receive far more outreach than most functions, and anything that looks like a template gets deleted in seconds.</li>
          <li><strong>Technical credibility.</strong> A security buyer can tell almost immediately when a rep does not understand the domain, and the conversation ends there.</li>
          <li><strong>Long buying cycles.</strong> Security purchases involve procurement, compliance and often the board. The first meeting starts a long process, so the quality of that meeting carries through to everything after it.</li>
        </ul>
        <h2>What happened with Cypago</h2>
        <p>Cypago is a cybersecurity SaaS company in New York. Before working with us, they had run an internal SDR team and used three agencies. None of it produced consistent traction, which is common when general outbound technique meets a security audience.</p>
        <p>We rebuilt the campaign around fewer, better-chosen accounts. That meant tighter segmentation, senior security buyers as the main target, and a much higher bar for what counted as a meeting.</p>
        <div class="stat-strip">
          <div><b>61</b><span>Sales meetings</span></div>
          <div><b>$120K</b><span>Closed revenue</span></div>
          <div><b>CISO</b><span>Priority buyer</span></div>
          <div><b>Day one</b><span>Time to first meetings</span></div>
        </div>
        <p>The full story, including what went wrong in the previous four attempts, is in the <a href="/case-studies/cypago/">Cypago case study</a>.</p>
        <h2>How we approach security markets</h2>
        <h3>Segment before you scale</h3>
        <p>After a failed campaign, the usual instinct is to add volume. In security that makes things worse, because the problem was relevance and more volume spreads the same irrelevant message further. We define a much narrower set of accounts where the product solves a problem the buyer already knows about.</p>
        <h3>Open with the compliance or risk trigger</h3>
        <p>Security purchases usually follow a specific event, such as an audit, a framework deadline, a customer requirement or an incident. An opening that names a likely trigger gets a conversation, and a description of your platform usually does not.</p>
        <h3>Map the whole buying group</h3>
        <p>Going only after the CISO can be a mistake. Security architects and compliance leads are often easier to reach and frequently decide whether an evaluation starts at all, so mapping the full buying group matters more here than in most markets.</p>
${HOW_IT_RUNS}
        <h2>When outbound will not help</h2>
        <p>If your product overlaps heavily with an established category leader and has no clear difference a buyer can grasp in one sentence, outbound will not fix that. Security buyers are very good at spotting tools that do not stand out, and a campaign would only confirm that at your expense.</p>`,
  aside:
    asideCta("Talk through your security ICP", "We will map which segments have a credible trigger and which do not, before you commit to anything.") +
    "\n" +
    asideFacts("The Cypago campaign", [
      "Came after an <strong>internal team and three agencies</strong>",
      "<strong>61</strong> meetings with CISO-level buyers",
      "<strong>$120K</strong> in closed revenue",
      "Meetings booked from <strong>day one</strong>",
    ]) +
    "\n" +
    asideLinks("Related", [
      ["/case-studies/cypago/", "Cypago case study", "The full story"],
      ["/industries/b2b-saas/", "B2B SaaS", "Our wider SaaS work"],
      ["/cold-calling-services/", "Cold calling", "Reaching technical buyers"],
    ]),
  caseRefs: refs("cypago", "easygenerator", "revcat"),
  caseRefsHeading: "Technical and enterprise campaigns.",
  faqs: [
    {
      q: "Can you book meetings with CISOs?",
      a: "Yes. For Cypago we booked 61 meetings with CISO-level buyers, producing 120,000 dollars in closed revenue, after an internal SDR team and three agencies had failed to get consistent traction. It takes narrow targeting and a credible trigger for the call.",
    },
    {
      q: "Why does cold outreach fail so often in cybersecurity?",
      a: "Security leaders receive a large amount of cold outreach and filter it very efficiently. Anything that looks like a template is deleted straight away, and a rep who does not understand the domain is spotted within seconds. Most failed campaigns fail on relevance, and adding volume makes that worse.",
    },
    {
      q: "Do your SDRs understand security terminology?",
      a: "We match SDRs to markets they have sold into, and they train on your product, category and buyers before going live. Scripts are tested through role play and call listening before any prospect hears them, which matters more in security than in any other market we work in.",
    },
    {
      q: "Should we target the CISO directly?",
      a: "Include the CISO, but map the rest of the buying group too. Security architects and compliance leads are often easier to reach and frequently decide whether an evaluation starts at all, which matters more in security than in most markets.",
    },
    ...STANDARD_FAQS,
  ],
  links: [
    { href: "/industries/b2b-saas/", label: "Outbound for B2B SaaS" },
    { href: "/outsourced-sdr/", label: "Outsourced SDR services" },
    { href: "/cold-calling-services/", label: "Cold calling services" },
    { href: "/case-studies/cypago/", label: "Cypago case study" },
  ],
  ctaHeadingA: "Reach the buyers who",
  ctaHeadingB: "ignore everyone else.",
};

/* =============================== 11. B2B SAAS =============================== */
const saas = {
  path: "/industries/b2b-saas/",
  title: "SDR Outsourcing for B2B SaaS | SalesSourcers",
  description: "Outsourced SDR for B2B SaaS, from founder-led selling through to enterprise campaigns reaching buyers inside 10,000-plus employee companies.",
  serviceName: "SDR outsourcing for B2B SaaS",
  serviceType: "Sales development for software companies",
  breadcrumbParent: PARENT,
  breadcrumbName: "B2B SaaS",
  kicker: "B2B SAAS",
  h1: "From founder-led selling to a repeatable channel.",
  standfirst: "Five completed SaaS campaigns, from a first outbound client in week one to enterprise meetings inside companies with more than 10,000 employees.",
  ctaLabel: "Get my outbound strategy",
  answerLabel: "In short",
  answer: [
    "We run <strong>outsourced SDR programmes for B2B SaaS companies</strong>, for early-stage teams replacing founder-led selling and for established vendors running enterprise campaigns into large accounts.",
    "Both usually fail the same way, by scaling outbound before finding out which segment converts.",
  ],
  body: `        <h2>Moving past founder-led selling</h2>
        <p>Early revenue nearly always comes from the founder. They know the product, believe in it and can handle any conversation it produces. That works until the founder becomes the constraint, because nobody can prospect, build, close and run a company all at once.</p>
        <p>The usual fix is to hire an SDR and hand them the founder's job. It rarely works, because the founder was succeeding on knowledge and instinct that nobody ever wrote down.</p>
        <p>The first step is turning that knowledge into a playbook that shows which segments respond, which objections come up and which framing gets a buyer interested. That research comes before any hiring.</p>
        <h2>Our SaaS campaigns</h2>
        <div class="stat-strip">
          <div><b>Week one</b><span>Revcat's first outbound client</span></div>
          <div><b>$380K</b><span>Revcat pipeline</span></div>
          <div><b>12</b><span>Easygenerator enterprise meetings</span></div>
          <div><b>10K+</b><span>Employee target accounts</span></div>
        </div>
        <h3>Early stage, Revcat in London</h3>
        <p>A small B2B SaaS team where every sale depended on the founder. The campaign landed its first outbound client in week one, then produced 49 meetings and 380,000 dollars of pipeline opportunities, and outbound selling no longer depended on the founder. <a href="/case-studies/revcat/">Read the Revcat case study</a>.</p>
        <h3>Enterprise, Easygenerator in Rotterdam</h3>
        <p>An established eLearning platform targeting senior L&amp;D buyers in companies with more than 10,000 employees. The campaign booked twelve enterprise meetings with C-suite and VP-level buyers. Enterprise outbound works differently, with fewer accounts, more research on each, longer cycles and a buying group to win over. <a href="/case-studies/easygenerator/">Read the Easygenerator case study</a>.</p>
        <h3>Agency to SaaS, Outbox AI in Perth</h3>
        <p>An AI agency moving into SaaS, where scattered email activity became a repeatable process that supported the change in business model, with 111 qualified leads and 12 new clients in three months.</p>
        <h2>Segment before scale</h2>
        <p>The most common and expensive mistake in SaaS outbound is adding volume before knowing which segment converts. Activity numbers rise, so it feels like progress, while the campaign piles up data about a market that was never going to buy.</p>
        <p>We define a bounded market first. That covers an ideal customer profile drawn from the customers you already win, priority sectors and regions, and a clear list of exclusions. Volume only makes sense after that.</p>
        <h2>Outbound alongside product-led growth</h2>
        <p>Companies with a self-serve product often assume outbound is not for them. The two work well together. Self-serve signups show which companies already have people using the product, and that is one of the strongest buying signals you can bring to a conversation with the budget holder.</p>
        <p>Those accounts are already warm, so the outreach should open by acknowledging that the product is in use.</p>
${HOW_IT_RUNS}`,
  aside:
    asideCta("Map your best segment first", "A free strategy session identifying which SaaS segments to work before you spend anything on volume.") +
    "\n" +
    asideFacts("SaaS campaigns we have run", [
      "<strong>Revcat</strong>, first outbound client in week one",
      "<strong>Easygenerator</strong>, 12 enterprise meetings",
      "<strong>Outbox AI</strong>, agency to SaaS transition",
      "<strong>FiveX</strong>, new market test",
      "<strong>Cypago</strong>, cybersecurity SaaS",
    ]) +
    "\n" +
    asideLinks("Related", [
      ["/industries/cybersecurity/", "Cybersecurity", "Selling to security buyers"],
      ["/outsourced-sdr-vs-in-house/", "Versus hiring", "Before you hire an SDR"],
      ["/pricing/", "What it costs", "Cost drivers and market prices"],
    ]),
  caseRefs: refs("revcat", "easygenerator", "fivex"),
  caseRefsHeading: "SaaS campaigns.",
  faqs: [
    {
      q: "We are pre-Series A. Is it too early for outsourced SDR?",
      a: "Funding stage matters less than whether anyone has bought your product yet. If you have customers and can explain why they bought, outbound can find more of them. If nobody has bought it, outbound cannot prove it should exist, so work on positioning first.",
    },
    {
      q: "How do we move away from founder-led selling?",
      a: "Start by writing down what the founder knows before handing the job to anyone. Founders usually succeed on knowledge that has never been recorded, which is why handing a new SDR their pipeline tends to fail. Finding out which segments respond and which framing works comes before hiring.",
    },
    {
      q: "Can you run enterprise SaaS campaigns?",
      a: "Yes. For Easygenerator we booked 12 enterprise meetings with C-suite and VP-level L&D buyers in companies with more than 10,000 employees. Enterprise outbound works differently from mid-market, with fewer accounts, far more research on each, longer cycles and a buying group to win over.",
    },
    {
      q: "Does outbound work alongside product-led growth?",
      a: "Yes, and the two work well together. Self-serve signups show which companies already have people using the product, which is one of the strongest buying signals for a conversation with the budget holder. Just avoid treating those accounts as cold.",
    },
    ...STANDARD_FAQS,
  ],
  links: [
    { href: "/industries/cybersecurity/", label: "Cybersecurity outbound" },
    { href: "/outsourced-sdr/", label: "Outsourced SDR services" },
    { href: "/outsourced-sdr-vs-in-house/", label: "Outsourced vs in-house" },
    { href: "/b2b-lead-generation/", label: "B2B lead generation" },
  ],
  ctaHeadingA: "Turn founder-led selling",
  ctaHeadingB: "into a channel.",
};

/* ========================= 12. MARKETING AGENCIES ========================= */
const agencies = {
  path: "/industries/marketing-agencies/",
  title: "Lead Generation for Marketing Agencies | SalesSourcers",
  description: "Outsourced SDR and lead generation for marketing agencies that depend on referrals. Five completed agency campaigns across Sydney, Auckland and Philadelphia.",
  serviceName: "Lead generation for marketing agencies",
  serviceType: "Sales development for agencies",
  breadcrumbParent: PARENT,
  breadcrumbName: "Marketing agencies",
  kicker: "MARKETING AGENCIES",
  h1: "For agencies that can market anything except themselves.",
  standfirst: "Five completed agency campaigns, nearly all solving the same problem. Growth came through referrals, and the founder was the only person selling.",
  ctaLabel: "Get my outbound strategy",
  answerLabel: "In short",
  answer: [
    "We have run <strong>five completed agency campaigns</strong> across Sydney, Auckland, Philadelphia and elsewhere.",
    "The same pattern comes up almost every time. Growth relies on referrals that cannot be forecast, and the founder becomes the bottleneck as soon as delivery gets busy. Agencies have the skills to do outbound themselves, but client work always takes priority.",
  ],
  body: `        <h2>Why agencies struggle to market themselves</h2>
        <p>Agencies know how to generate demand, because they do it for clients every day. It does not happen for the agency itself because of how the work is structured.</p>
        <p>Client work is billable and urgent, and someone is waiting for it. Business development for the agency has none of that pressure. When delivery gets busy, prospecting stops, and delivery is nearly always busy. New business ends up arriving in waves that follow the agency's spare capacity instead of market demand.</p>
        <p>The founder is also usually the only credible seller. Prospects want to talk to the person whose judgement they are buying, which works until the founder becomes the limit on growth.</p>
        <h2>Our agency campaigns</h2>
        <div class="stat-strip">
          <div><b>$212K</b><span>Agency revenue, 3 months</span></div>
          <div><b>29</b><span>The Recipe verified meetings</span></div>
          <div><b>$15K MRR</b><span>Franchise Rocket, month one</span></div>
          <div><b>5</b><span>Agency campaigns completed</span></div>
        </div>
        <h3>A Sydney marketing agency</h3>
        <p>A referral-led agency where the founder juggled operations, client work and sales. Referrals had started to slow, and building an internal prospecting team would have taken time they did not have. The campaign produced 93 qualified leads, 47 meetings, six new clients and 212,000 dollars in revenue in three months.</p>
        <h3>The Recipe, Auckland</h3>
        <p>The agency replaced its reliance on referrals with a steady, forecastable flow of opportunities, including 86 qualified leads and 29 verified sales meetings. <a href="/case-studies/the-recipe/">Read the case study</a>.</p>
        <h3>Franchise Rocket, Sydney</h3>
        <p>The agency relied heavily on partner referrals. Direct outbound brought in its first new client in month one, worth 15,000 dollars in monthly recurring revenue. <a href="/case-studies/franchise-rocket/">Read the case study</a>.</p>
        <h3>Conveyor, Philadelphia, and Sales Savvy, Sydney</h3>
        <p>Conveyor's stop-start prospecting became a steady pipeline that no longer depended on leadership having spare time. Sales Savvy, an eCommerce marketing agency, used an outsourced sales department to remove the founder bottleneck and reached six-figure growth in two months.</p>
        <h2>Selling agency services</h2>
        <h3>Prospects are buying your judgement</h3>
        <p>A prospect cannot judge an agency from a list of services. They are deciding whether to trust your thinking, so proof that you have solved similar problems counts for more than any description of what you do.</p>
        <h3>Prospects think they have heard it all</h3>
        <p>Every agency promises strategy, creativity and results. A prospect who has taken three agency calls this quarter has stopped listening to that pitch. Being specific about a problem they have is what gets their attention.</p>
        <h3>Niching down feels risky and pays off</h3>
        <p>Agencies resist narrowing their focus because it feels like turning revenue away. An agency that has solved one specific problem for three similar businesses is much easier to sell than a generalist, though. Usually the targeting narrows first and the positioning follows.</p>
${HOW_IT_RUNS}
        <h2>What changes for the founder</h2>
        <p>Agency founders rarely talk about the meeting count first. They talk about new business no longer depending on how busy they are. The pipeline keeps moving while they focus on delivery, which referral growth never manages.</p>`,
  aside:
    asideCta("Book a strategy session", "We will map which client types are worth targeting and what your opening message should say. It is yours to keep either way.") +
    "\n" +
    asideFacts("Agency campaigns", [
      "<strong>A Sydney agency</strong>, $212K revenue",
      "<strong>The Recipe</strong>, Auckland, 29 verified meetings",
      "<strong>Franchise Rocket</strong>, Sydney, $15K MRR in month one",
      "<strong>Conveyor</strong>, Philadelphia, steady pipeline",
      "<strong>Sales Savvy</strong>, Sydney, six-figure growth",
    ]) +
    "\n" +
    asideLinks("Related", [
      ["/australia/", "Australia", "Four of these five campaigns"],
      ["/b2b-lead-generation/", "Lead generation", "How the campaigns run"],
      ["/pricing/", "What it costs", "Cost drivers and market prices"],
    ]),
  caseRefs: refs("conveyor", "the-recipe", "franchise-rocket"),
  caseRefsHeading: "Agency campaigns.",
  faqs: [
    {
      q: "Why can agencies not do their own lead generation?",
      a: "It comes down to how agency work is structured. Client work is billable and urgent, and someone is waiting for it, while business development has none of that pressure. When delivery gets busy prospecting stops, and delivery is nearly always busy, so new business arrives in waves that follow your capacity.",
    },
    {
      q: "Our growth is all referral. Is that a problem?",
      a: "Referrals cannot be forecast, in timing or volume, and they tend to slow down just when you need new business most. Every agency campaign we have run started from that position.",
    },
    {
      q: "Do we need to niche down before starting?",
      a: "Not before, but the campaign will push you towards it. Targeting narrows first, because an agency that has solved a specific problem for similar businesses is much easier to sell than a generalist. Most founders find the positioning follows once the targeting shows which segment responds.",
    },
    {
      q: "Will prospects still expect to speak to the founder?",
      a: "Often, and that is fine. The SDR's job is to set up the qualified conversation, and the founder still leads it. The difference is that the founder spends their time in meetings instead of finding them.",
    },
    ...STANDARD_FAQS,
  ],
  links: [
    { href: "/b2b-lead-generation/", label: "B2B lead generation" },
    { href: "/australia/", label: "Outbound in Australia" },
    { href: "/outsourced-sdr/", label: "Outsourced SDR services" },
    { href: "/b2b-appointment-setting/", label: "B2B appointment setting" },
  ],
  ctaHeadingA: "Grow without the founder",
  ctaHeadingB: "being the bottleneck.",
};

module.exports = [hub, cybersecurity, saas, agencies];
