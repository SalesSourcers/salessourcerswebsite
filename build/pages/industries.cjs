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
  h1: "Markets we have already learned.",
  standfirst: "An SDR who has sold into your market before does not need six weeks to understand why your buyers ignore generic outreach. These are the sectors where we already have that.",
  ctaLabel: "Get my outbound strategy",
  answerLabel: "In short",
  answer: [
    "We run outbound across <strong>B2B SaaS, cybersecurity and marketing agencies</strong>, with published case studies in each.",
    "Sector experience matters most where the buyer is technical or sceptical. A rep who already knows why a CISO refuses a generic call starts months ahead of one learning it live on your pipeline.",
  ],
  body: `        <h2>Why sector matching matters</h2>
        <p>Most of what makes an SDR effective is not general technique. It is knowing the specific objections a market raises, the job titles that actually engage, and the language that signals you understand the buyer's problem.</p>
        <p>That knowledge takes months to build from scratch. Matching an SDR to a market they have sold into before removes most of that ramp, which is why we hire against markets rather than filling a generic bench.</p>
        <h2>Where we have depth</h2>
        <h3>B2B SaaS</h3>
        <p>Five completed campaigns, spanning early-stage founder-led selling through to enterprise motions reaching senior buyers inside companies with more than 10,000 employees. <a href="/industries/b2b-saas/">SaaS outbound programmes</a>.</p>
        <h3>Cybersecurity</h3>
        <p>Security buyers are the hardest audience in B2B to reach cold, and the one where generic outreach fails most visibly. Our Cypago campaign followed an internal team and three agencies that had not worked. <a href="/industries/cybersecurity/">Cybersecurity lead generation</a>.</p>
        <h3>Marketing agencies</h3>
        <p>Our largest single vertical - five campaigns across Sydney, Auckland, Philadelphia and beyond, almost all solving the same underlying problem: referral dependency and a founder who has become the bottleneck. <a href="/industries/marketing-agencies/">Lead generation for agencies</a>.</p>
        <h2>If your sector is not listed</h2>
        <p>We have also run campaigns in scent and product marketing into premium hospitality and luxury retail, in eLearning, and in franchising. The question we ask on a first call is not whether we have your exact vertical on the list. It is whether your buyers are reachable, whether your offer has already been bought by someone, and whether the addressable market is large enough to sustain a programme.</p>
        <p>If the answer to any of those is no, we will tell you on the call rather than three months in.</p>`,
  aside:
    asideCta("Ask about your market", "The first call establishes whether your buyers are reachable and whether the market sustains a programme. We will say so if not.") +
    "\n" +
    asideLinks("Sector pages", [
      ["/industries/b2b-saas/", "B2B SaaS", "Five completed campaigns"],
      ["/industries/cybersecurity/", "Cybersecurity", "CISO-level meetings"],
      ["/industries/marketing-agencies/", "Marketing agencies", "Our largest vertical"],
    ]),
  caseRefs: refs("cypago", "iscent", "easygenerator"),
  caseRefsHeading: "Across sectors.",
  faqs: [
    {
      q: "Do you only work with these industries?",
      a: "No. These are the sectors where we have the deepest completed work, and where an SDR can be matched to someone who has sold into that market before. We have also run campaigns in scent and product marketing, eLearning and franchising. What matters on a first call is whether your buyers are reachable, whether your offer has already been bought by someone, and whether the market is large enough to sustain a programme.",
    },
    {
      q: "How much does industry experience actually matter?",
      a: "Most where the buyer is technical or sceptical. A rep who already understands why a security buyer refuses a generic call starts months ahead of one learning that on your pipeline. In less specialised markets, general technique and a well-defined list carry more of the weight.",
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
  h1: "Outbound to the most sceptical buyer in B2B.",
  standfirst: "Security leaders are targeted more aggressively than any other role, so generic outreach fails faster here than anywhere. We booked 61 meetings with CISO-level buyers for a vendor whose previous four attempts had not worked.",
  ctaLabel: "Get my outbound strategy",
  answerLabel: "In short",
  answer: [
    "<strong>Cybersecurity lead generation</strong> means reaching CISOs and senior security buyers who receive more cold outreach than any other role in business, and who screen it ruthlessly.",
    "What works is narrow targeting, a specific and technically credible reason for the call, and an SDR who understands the security buying cycle. What does not work is volume.",
  ],
  body: `        <h2>Why security buyers are different</h2>
        <p>A CISO's inbox is the most contested surface in B2B. Every vendor in a crowded category is chasing the same small population of people, and those people have developed extremely efficient filters.</p>
        <p>Three things make the market harder than any other we work in:</p>
        <ul>
          <li><strong>Saturation.</strong> The volume of outreach reaching a security leader is far beyond any other function. Anything that pattern-matches to a template is gone in under a second.</li>
          <li><strong>Technical credibility.</strong> A security buyer detects a rep who does not understand the domain almost immediately, and the conversation ends there.</li>
          <li><strong>Long, committee-driven cycles.</strong> Security purchases involve procurement, compliance, and often the board. The first meeting is the start of a long process, so meeting quality compounds.</li>
        </ul>
        <h2>What happened with Cypago</h2>
        <p>Cypago is a cybersecurity SaaS company in New York. Before we started, they had run an internal SDR team and used three agencies. None of it produced consistent traction, which is the normal outcome of applying general outbound technique to a security audience.</p>
        <p>The rebuild was narrower rather than louder: tighter segmentation, targeting senior security buyers specifically, and a much higher bar for what counted as a meeting.</p>
        <div class="stat-strip">
          <div><b>61</b><span>Sales meetings</span></div>
          <div><b>$120K</b><span>Closed revenue</span></div>
          <div><b>CISO</b><span>Priority buyer</span></div>
          <div><b>Day one</b><span>Time to first meetings</span></div>
        </div>
        <p>The full write-up, including what the previous four attempts got wrong, is in the <a href="/case-studies/cypago/">Cypago case study</a>.</p>
        <h2>How we approach security markets</h2>
        <h3>Segment before you scale</h3>
        <p>The instinct after a failed campaign is more volume. In security that makes things worse, because the failure was relevance and volume amplifies irrelevance. We define a much narrower set of accounts where the product solves a problem the buyer already knows they have.</p>
        <h3>Lead with the compliance or risk trigger</h3>
        <p>Security buying is usually driven by a specific event: an audit, a framework deadline, a customer requirement, an incident. An opening that names a plausible trigger earns a conversation. One that describes your platform does not.</p>
        <h3>Respect the seniority ladder</h3>
        <p>Going only for the CISO can be a mistake. Security architects and compliance leads are often more reachable and frequently control whether an evaluation begins at all. Mapping the real buying group matters more here than in most markets.</p>
${HOW_IT_RUNS}
        <h2>Where we will tell you not to bother</h2>
        <p>If your product overlaps heavily with an established category leader and has no clear differentiator a buyer can grasp in one sentence, outbound will not fix that. Security buyers are unusually good at spotting undifferentiated tools, and a campaign will simply establish that fact expensively.</p>`,
  aside:
    asideCta("Talk through your security ICP", "We will map which segments have a credible trigger and which do not, before you commit to anything.") +
    "\n" +
    asideFacts("The Cypago campaign", [
      "Followed an <strong>internal team and three agencies</strong>",
      "<strong>61</strong> meetings with CISO-level buyers",
      "<strong>$120K</strong> closed revenue",
      "Meetings booked from <strong>day one</strong>",
    ]) +
    "\n" +
    asideLinks("Related", [
      ["/case-studies/cypago/", "Cypago case study", "The full write-up"],
      ["/industries/b2b-saas/", "B2B SaaS", "The wider SaaS motion"],
      ["/cold-calling-services/", "Cold calling", "Reaching technical buyers"],
    ]),
  caseRefs: refs("cypago", "easygenerator", "revcat"),
  caseRefsHeading: "Technical and enterprise campaigns.",
  faqs: [
    {
      q: "Can you actually book meetings with CISOs?",
      a: "Yes. For Cypago we booked 61 meetings with CISO-level buyers, producing 120,000 dollars in closed revenue, after an internal SDR team and three agencies had failed to create consistent traction. It requires narrow targeting and a credible trigger rather than volume.",
    },
    {
      q: "Why does cold outreach fail so often in cybersecurity?",
      a: "Security leaders receive more cold outreach than any other role and have developed very efficient filters. Anything that pattern-matches to a template is discarded immediately, and a rep without genuine domain understanding is detected within seconds. Most failed campaigns are failures of relevance that more volume makes worse.",
    },
    {
      q: "Do your SDRs understand security terminology?",
      a: "We match SDRs to markets they have sold into, and they train on your specific product, category and buyer before going live. Scripts are tested through role play and call listening before any real prospect hears them, which matters more in security than in any other market we work.",
    },
    {
      q: "Should we target the CISO directly?",
      a: "Not exclusively. Security architects and compliance leads are frequently more reachable and often control whether an evaluation begins at all. Mapping the real buying group, rather than aiming only at the most senior title, matters more in security than in most markets.",
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
  standfirst: "Five completed SaaS campaigns, spanning a first outbound client in week one through to enterprise meetings inside companies with more than 10,000 employees.",
  ctaLabel: "Get my outbound strategy",
  answerLabel: "In short",
  answer: [
    "We run <strong>outsourced SDR programmes for B2B SaaS companies</strong> at both ends of the range: early-stage teams replacing founder-led selling, and established vendors running enterprise motions into large accounts.",
    "The common failure is the same at both ends - trying to scale outbound before establishing which segment actually converts.",
  ],
  body: `        <h2>The transition every SaaS company hits</h2>
        <p>Early revenue almost always comes from the founder. They know the product, believe in it, and can hold any conversation it produces. That works until it becomes the constraint: the founder cannot prospect and build and close and run the company at once.</p>
        <p>The usual response is to hire an SDR and hand them the founder's job. It rarely works, because the founder was not succeeding through a repeatable process. They were succeeding through context that has never been written down.</p>
        <p>What has to happen first is converting that context into a playbook: which segments respond, which objections recur, which framing makes a buyer lean in. That is a research problem before it is a hiring problem.</p>
        <h2>What we have run in SaaS</h2>
        <div class="stat-strip">
          <div><b>Week one</b><span>Revcat's first outbound client</span></div>
          <div><b>$380K</b><span>Revcat pipeline</span></div>
          <div><b>12</b><span>Easygenerator enterprise meetings</span></div>
          <div><b>10K+</b><span>Employee target accounts</span></div>
        </div>
        <h3>Early stage - Revcat, London</h3>
        <p>A small B2B SaaS team where selling depended entirely on the founder. The programme landed its first outbound client in week one and produced 49 meetings and 380,000 dollars of pipeline opportunities, turning founder-led selling into a channel that ran without him. <a href="/case-studies/revcat/">Read the Revcat case study</a>.</p>
        <h3>Enterprise - Easygenerator, Rotterdam</h3>
        <p>An established eLearning platform targeting senior L&amp;D buyers inside companies with more than 10,000 employees. Twelve enterprise meetings with C-suite and VP-level buyers. Enterprise outbound is a different discipline: fewer accounts, more research per account, longer cycles and a buying group rather than a buyer. <a href="/case-studies/easygenerator/">Read the Easygenerator case study</a>.</p>
        <h3>Category transition - Outbox AI, Perth</h3>
        <p>An AI agency moving into SaaS, where scattered email activity became a repeatable process that supported the business model change - 111 qualified leads and 12 new clients across three months.</p>
        <h2>Segment before scale</h2>
        <p>The most common and expensive SaaS outbound mistake is scaling volume before establishing which segment converts. It feels like progress because activity metrics rise, and it produces a large volume of data about a market that was never going to buy.</p>
        <p>We define a bounded addressable market first: ideal customer profile drawn from customers you already win, priority sectors and regions, and explicit exclusions. Only then does volume make sense.</p>
        <h2>Product-led growth and outbound are not opposites</h2>
        <p>Companies with a self-serve motion often assume outbound is for someone else. In practice the two work together: self-serve signups reveal which companies already have people using the product, which is among the strongest buying signals available for an outbound conversation with the budget holder above them.</p>
        <p>The mistake is running outbound as if those accounts were cold. They are not, and the opening should say so.</p>
${HOW_IT_RUNS}`,
  aside:
    asideCta("Map your best segment first", "A complimentary strategy session identifying which SaaS segments are worth working before you spend anything on volume.") +
    "\n" +
    asideFacts("SaaS campaigns run", [
      "<strong>Revcat</strong> - first outbound client in week one",
      "<strong>Easygenerator</strong> - 12 enterprise meetings",
      "<strong>Outbox AI</strong> - agency to SaaS transition",
      "<strong>FiveX</strong> - new market test",
      "<strong>Cypago</strong> - cybersecurity SaaS",
    ]) +
    "\n" +
    asideLinks("Related", [
      ["/industries/cybersecurity/", "Cybersecurity", "Selling to security buyers"],
      ["/outsourced-sdr-vs-in-house/", "Versus hiring", "Before you hire an SDR"],
      ["/pricing/", "What it costs", "Cost drivers and ranges"],
    ]),
  caseRefs: refs("revcat", "easygenerator", "fivex"),
  caseRefsHeading: "SaaS campaigns.",
  faqs: [
    {
      q: "We are pre-Series A. Is it too early for outsourced SDR?",
      a: "The question is not funding stage, it is whether anyone has bought your product yet. If customers exist and you can describe why they bought, outbound can find more of them. If nobody has bought it, outbound will not prove that it should exist and you should fix positioning first.",
    },
    {
      q: "How do we move away from founder-led selling?",
      a: "By converting the founder's context into a documented playbook before handing the job to anyone. Founders usually succeed through knowledge that has never been written down rather than a repeatable process, which is why handing a new SDR their pipeline generally fails. Establishing which segments respond and which framing works is a research problem before it is a hiring one.",
    },
    {
      q: "Can you run enterprise SaaS campaigns?",
      a: "Yes. For Easygenerator we booked 12 enterprise meetings with C-suite and VP-level L&D buyers inside companies with more than 10,000 employees. Enterprise outbound is a different discipline from mid-market: fewer accounts, substantially more research per account, longer cycles and a buying group rather than an individual buyer.",
    },
    {
      q: "Does outbound conflict with a product-led growth motion?",
      a: "No, they compound. Self-serve signups show you which companies already have people using the product, which is one of the strongest buying signals available for a conversation with the budget holder above them. The mistake is running outbound into those accounts as though they were cold.",
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
  standfirst: "Five completed agency campaigns, almost all solving the same problem: growth arrives through referral, and the founder is the only person selling.",
  ctaLabel: "Get my outbound strategy",
  answerLabel: "In short",
  answer: [
    "Marketing agencies are our <strong>largest single vertical</strong> - five completed campaigns across Sydney, Auckland, Philadelphia and beyond.",
    "The pattern repeats almost exactly: referral-led growth that cannot be forecast, and a founder who becomes the bottleneck the moment delivery gets busy. Outbound fails internally not through lack of skill but because client work always wins the calendar.",
  ],
  body: `        <h2>The problem is not capability</h2>
        <p>Agencies know how to generate demand. They do it for clients every day. The reason it does not happen for the agency itself is structural, not a skills gap.</p>
        <p>Client work is billable, urgent and has someone waiting. Agency business development is none of those things. When delivery gets busy, prospecting stops - and delivery is always busy. So new business arrives in waves that follow capacity rather than intent, which is exactly backwards.</p>
        <p>The second problem is that the founder is usually the only credible seller. Prospects want to talk to the person whose judgement they are buying. That works until the founder is the constraint on growth.</p>
        <h2>What we have run for agencies</h2>
        <div class="stat-strip">
          <div><b>$212K</b><span>Agency revenue, 3 months</span></div>
          <div><b>29</b><span>The Recipe verified meetings</span></div>
          <div><b>$15K MRR</b><span>Franchise Rocket, month one</span></div>
          <div><b>5</b><span>Agency campaigns completed</span></div>
        </div>
        <h3>A Sydney marketing agency</h3>
        <p>A referral-led agency where the founder balanced operations, client work and sales. Referral volume had started slowing, and building an internal prospecting function would have taken time they did not have. The campaign produced 93 qualified leads, 47 meetings, six new clients and 212,000 dollars in revenue across three months.</p>
        <h3>The Recipe, Auckland</h3>
        <p>Referral dependence replaced with a proactive engine for creating and forecasting opportunities - 86 qualified leads and 29 verified sales meetings. <a href="/case-studies/the-recipe/">Read the case study</a>.</p>
        <h3>Franchise Rocket, Sydney</h3>
        <p>Heavy dependency on partner referrals. A direct outbound system produced the first new client in month one at 15,000 dollars monthly recurring revenue. <a href="/case-studies/franchise-rocket/">Read the case study</a>.</p>
        <h3>Conveyor, Philadelphia, and Sales Savvy, Sydney</h3>
        <p>Conveyor's stop-start prospecting became steady pipeline that no longer depended on leadership bandwidth. Sales Savvy, an eCommerce marketing agency, used an outsourced sales department to remove the founder bottleneck and reach six-figure growth in two months.</p>
        <h2>What is different about selling agency services</h2>
        <h3>You are selling judgement, not a product</h3>
        <p>A prospect cannot evaluate your work from a feature list. They are buying whether they trust your thinking, which is why proof of similar problems solved matters more than any capability description.</p>
        <h3>The market believes it has heard your pitch already</h3>
        <p>Every agency claims strategy, creativity and results. A prospect who has taken three agency calls this quarter has heard the category pitch and stopped listening to it. Specificity about a problem they actually have is the only reliable way through.</p>
        <h3>Niching down is uncomfortable and it works</h3>
        <p>Agencies resist narrowing because it feels like turning away revenue. But an agency that has clearly solved this exact problem for three similar businesses is dramatically easier to sell than a generalist. The narrowing usually happens in the targeting before it happens in the positioning.</p>
${HOW_IT_RUNS}
        <h2>What this frees up</h2>
        <p>The outcome agency founders describe is rarely the meeting count. It is that new business stopped depending on how busy they were - the pipeline kept moving while they were heads-down on delivery, which is the thing referral growth can never do.</p>`,
  aside:
    asideCta("Book a strategy session", "We will map which client types are worth targeting and what the opening should say. Yours to keep either way.") +
    "\n" +
    asideFacts("Agency campaigns", [
      "<strong>A Sydney agency</strong> - $212K revenue",
      "<strong>The Recipe</strong>, Auckland - 29 verified meetings",
      "<strong>Franchise Rocket</strong>, Sydney - $15K MRR month one",
      "<strong>Conveyor</strong>, Philadelphia - steady pipeline",
      "<strong>Sales Savvy</strong>, Sydney - six-figure growth",
    ]) +
    "\n" +
    asideLinks("Related", [
      ["/australia/", "Australia", "Four of these five campaigns"],
      ["/b2b-lead-generation/", "Lead generation", "How the motion works"],
      ["/pricing/", "What it costs", "Cost drivers and ranges"],
    ]),
  caseRefs: refs("conveyor", "the-recipe", "franchise-rocket"),
  caseRefsHeading: "Agency campaigns.",
  faqs: [
    {
      q: "Why can agencies not do their own lead generation?",
      a: "It is structural rather than a skills gap. Client work is billable, urgent and has someone waiting for it; agency business development is none of those. When delivery gets busy prospecting stops, and delivery is always busy. New business then arrives in waves that follow your capacity rather than the market's intent.",
    },
    {
      q: "Our growth is all referral. Is that a problem?",
      a: "It is until it slows, and it cannot be forecast. Referral growth is unpredictable in both timing and volume, and it usually softens precisely when you most need new business. Every agency campaign we have run started from the same position.",
    },
    {
      q: "Do we need to niche down before starting?",
      a: "Not before, but the campaign will push you toward it. Targeting narrows first, because an agency that has clearly solved a specific problem for similar businesses is far easier to sell than a generalist. Most founders find the positioning follows once the targeting proves which segment responds.",
    },
    {
      q: "Will prospects still expect to speak to the founder?",
      a: "Often, and that is fine. The SDR's job is to create the qualified conversation, not to replace the founder in it. What changes is that the founder spends their time in meetings rather than finding them.",
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
