const { refs, asideCta, asideFacts, asideLinks, HOW_IT_RUNS, STANDARD_FAQS } = require("./shared.cjs");

/* ============================ 1. OUTSOURCED SDR ============================ */
const outsourcedSdr = {
  path: "/outsourced-sdr/",
  title: "Outsourced SDR Services | Dedicated B2B SDRs | SalesSourcers",
  description: "A dedicated, market-aligned SDR who cold calls and emails your target accounts, coached three times a week and live in week three.",
  serviceName: "Outsourced SDR services",
  serviceType: "Sales development representative outsourcing",
  breadcrumbName: "Outsourced SDR",
  kicker: "OUTSOURCED SDR",
  h1: "A dedicated SDR, without the hiring drag.",
  standfirst: "You get one experienced sales development representative aligned to your market, trained on your offer, coached by a manager three times a week, and live in week three. Not a shared pool. Not a call centre.",
  ctaLabel: "Get my outbound strategy",
  answerLabel: "What outsourced SDR means here",
  answer: [
    "<strong>Outsourced SDR</strong> means hiring a sales development representative through a partner rather than employing one directly. You get a dedicated rep who prospects, cold calls and emails your target accounts and books qualified meetings into your team's calendar.",
    "The partner handles recruitment, training, management, coaching, tooling and replacement. You keep the meetings and the market intelligence.",
  ],
  body: `        <h2>What you are actually buying</h2>
        <p>An in-house SDR hire is four separate problems: finding someone good, training them on a market they do not know yet, managing them well enough that they improve, and replacing them when they leave. Most companies solve the first and lose on the other three.</p>
        <p>Outsourcing moves all four to us. What arrives on your side is a named person who works your accounts, and a calendar that fills.</p>
        <div class="stat-strip">
          <div><b>Week 3</b><span>Typical time to live</span></div>
          <div><b>3x weekly</b><span>Manager coaching</span></div>
          <div><b>1,500-5,000</b><span>Targeted calls per month</span></div>
          <div><b>10-40</b><span>Expected meetings per month</span></div>
        </div>
        <h2>A dedicated SDR, not a shared resource</h2>
        <p>The word "outsourced" covers two very different models, and the difference matters more than anything else on this page.</p>
        <p>A shared pool means your campaign sits in a queue with other clients. Whoever is free picks up your list that day. They will never learn your market, because they are not in it long enough to.</p>
        <p>A dedicated SDR works your accounts and only your accounts. They hear the same objections repeatedly, recognise which job titles engage, and get better at your specific conversation every week. That compounding is the entire value.</p>
        <h3>Matched to your market, not just assigned</h3>
        <p>We hire experienced, market-aligned talent across the UK, South Africa, the United States and Australia, then match on the market you sell into. Someone who has sold to CISOs before does not need six weeks to understand why a security buyer will not take a generic call.</p>
        <h3>Trained before they touch your pipeline</h3>
        <p>Every SDR completes a structured programme covering discovery, SPIN Selling and Gap Selling, then trains specifically on your offer. Scripts are tested through role play and call listening before a single real prospect hears them.</p>
${HOW_IT_RUNS}
        <h2>What qualifies as a meeting</h2>
        <p>Loose qualification is how agencies hit a meeting number while producing nothing you can close. Every lead is vetted against three things before outreach even begins:</p>
        <ul>
          <li><strong>Fit</strong> - do they match the profile of customers you already win?</li>
          <li><strong>Intent</strong> - is there evidence they are in market now?</li>
          <li><strong>Timing</strong> - is there a reason to have the conversation this quarter?</li>
        </ul>
        <p>A meeting that fails those tests is a meeting your account executive resents attending. We would rather book fewer.</p>
        <h2>Is outsourced SDR right for you?</h2>
        <p>It works well when you know which customers you want, have evidence your offer converts, and need a managed route to those buyers without making a founder or AE the full-time prospector.</p>
        <p>It works badly when the offer has not yet been validated with anyone. If nobody has bought it, outbound will not be the thing that proves it should exist. Fix positioning first.</p>`,
  aside:
    asideCta("Start with the strategy, not the contract", "We map your addressable market and show you the opportunity before you commit to anything.") +
    "\n" +
    asideFacts("At a glance", [
      "<strong>Model:</strong> one dedicated SDR, matched to your market",
      "<strong>Channels:</strong> cold calling and personalised email",
      "<strong>Live in:</strong> week three",
      "<strong>Coaching:</strong> manager-led, three times weekly",
      "<strong>Visibility:</strong> recordings, AI notes, live dashboard",
      "<strong>Hiring pool:</strong> UK, South Africa, US, Australia",
    ]) +
    "\n" +
    asideLinks("Compare the options", [
      ["/outsourced-sdr-vs-in-house/", "Outsourced vs in-house", "The real loaded cost of each"],
      ["/pricing/", "What it costs", "Cost drivers and market ranges"],
      ["/b2b-appointment-setting/", "Appointment setting", "If you only need the meeting"],
    ]),
  caseRefs: refs("cypago", "revcat", "sales-savvy"),
  caseRefsHeading: "SDR programmes we have run.",
  faqs: [
    {
      q: "What is an outsourced SDR?",
      a: "An outsourced SDR is a sales development representative provided by a partner rather than employed directly. They prospect your target accounts through cold calling and email, qualify interest and book meetings into your team's calendar. The partner handles recruitment, training, management, coaching, tooling and replacement.",
    },
    {
      q: "Is the SDR dedicated to us or shared with other clients?",
      a: "Dedicated. Your SDR works your accounts only. A shared pool cannot learn your market, because no individual is in it long enough to recognise the recurring objections or the job titles that actually engage.",
    },
    ...STANDARD_FAQS,
    {
      q: "What happens if the SDR is not working out?",
      a: "Replacement is our problem, not yours. That is one of the main structural differences from an in-house hire, where a bad fit costs you the recruitment cycle, the ramp time and the pipeline gap.",
    },
  ],
  links: [
    { href: "/b2b-appointment-setting/", label: "B2B appointment setting" },
    { href: "/cold-calling-services/", label: "Cold calling services" },
    { href: "/b2b-lead-generation/", label: "B2B lead generation" },
    { href: "/outsourced-sdr-vs-in-house/", label: "Outsourced vs in-house" },
    { href: "/pricing/", label: "What it costs" },
  ],
  ctaHeadingA: "Your next customers are already",
  ctaHeadingB: "in the market.",
};

/* ======================= 2. B2B APPOINTMENT SETTING ======================= */
const appointmentSetting = {
  path: "/b2b-appointment-setting/",
  title: "B2B Appointment Setting Services | SalesSourcers",
  description: "B2B appointment setting that books qualified meetings with decision makers, vetted on fit, intent and timing. Full call recordings and a live dashboard.",
  serviceName: "B2B appointment setting",
  serviceType: "Appointment setting",
  breadcrumbName: "Appointment setting",
  kicker: "APPOINTMENT SETTING",
  h1: "Meetings your sales team is glad to take.",
  standfirst: "Anyone can fill a calendar. We book conversations with people who match your customer profile, show real intent and have a reason to talk this quarter.",
  ctaLabel: "Get my outbound strategy",
  answerLabel: "In short",
  answer: [
    "<strong>B2B appointment setting</strong> is the outsourced work of contacting target companies, qualifying interest and booking a meeting directly into your sales team's calendar.",
    "The measure that matters is not meetings booked. It is meetings attended by the right person with a genuine reason to be there. We vet every lead on fit, intent and timing before outreach starts.",
  ],
  body: `        <h2>The number that gets gamed</h2>
        <p>Appointment setting is the easiest service in B2B to fake. Lower the bar far enough and you can book anyone. The invoice looks the same; the pipeline does not.</p>
        <p>You will recognise a gamed meeting number by the symptoms: high booking volume, poor attendance, and account executives who quietly stop preparing because most of the calendar turns out to be unqualified.</p>
        <h2>Our qualification bar</h2>
        <p>Every prospect is vetted against three tests before they are ever contacted, and again before a meeting is confirmed.</p>
        <div class="table-scroll">
          <table class="page-table">
            <thead><tr><th>Test</th><th>What we check</th><th>Why it matters</th></tr></thead>
            <tbody>
              <tr><td>Fit</td><td>Company profile, size, sector and role seniority against the customers you already win</td><td>Stops meetings with people who could never buy</td></tr>
              <tr><td>Intent</td><td>Evidence the company is active in market now, not simply a name on a list</td><td>Separates a real conversation from a polite one</td></tr>
              <tr><td>Timing</td><td>A reason this quarter rather than some day</td><td>Protects your AE's calendar from indefinite nurture</td></tr>
            </tbody>
          </table>
        </div>
        <h2>How the meeting gets booked</h2>
        <p>Cold calling and personalised email run together rather than as separate campaigns. A call that does not connect leaves a reason for the email to land; an email that gets read gives the call a warmer opening. Prospects do not experience two channels, they experience one conversation.</p>
        <p>When a prospect agrees to a meeting, it goes straight into your team's calendar with the context attached: what was said, what they are trying to solve, what objection came up and who else is involved.</p>
${HOW_IT_RUNS}
        <h2>Attendance, not just bookings</h2>
        <p>A booked meeting nobody attends is worse than no meeting, because it consumed preparation time. Confirmation sequences, sensible scheduling windows and honest framing on the call all matter more than the raw booking count.</p>
        <p>This is also why we record everything. If a meeting was booked on a promise your product does not keep, you will hear it on the recording rather than discover it live in the room.</p>
        <h2>What you get alongside the meetings</h2>
        <p>Every call and email reply is market intelligence. Across a campaign you learn which competitors keep coming up, which objections recur, where pricing pressure sits, and which roles and regions actually convert. Clients regularly tell us the intelligence reshaped their positioning more than the meetings changed their quarter.</p>`,
  aside:
    asideCta("See the opportunity first", "We will map your addressable market and show you what a realistic meeting volume looks like before you commit.") +
    "\n" +
    asideFacts("Capacity by package", [
      "<strong>10-15 meetings</strong> per month - 1,500 targeted calls",
      "<strong>15-25 meetings</strong> per month - 3,000 targeted calls",
      "<strong>25-40 meetings</strong> per month - 5,000 targeted calls",
      "Every meeting vetted on fit, intent and timing",
    ]) +
    "\n" +
    asideLinks("Related", [
      ["/cold-calling-services/", "Cold calling", "The channel that books most of them"],
      ["/outsourced-sdr/", "Outsourced SDR", "The person who makes the calls"],
      ["/pricing/", "What it costs", "Cost drivers and market ranges"],
    ]),
  caseRefs: refs("iscent", "easygenerator", "the-recipe"),
  caseRefsHeading: "Appointment setting in practice.",
  faqs: [
    {
      q: "What is B2B appointment setting?",
      a: "B2B appointment setting is the outsourced work of contacting target companies, qualifying their interest and booking a meeting directly into your sales team's calendar. It covers the prospecting and qualification stages so your closers spend their time in conversations rather than looking for them.",
    },
    {
      q: "How do you define a qualified meeting?",
      a: "A meeting passes three tests: fit against the profile of customers you already win, evidence of real intent rather than simple list membership, and a reason to have the conversation this quarter. A meeting that fails any of those is a meeting your account executive resents attending.",
    },
    {
      q: "How many meetings should we expect per month?",
      a: "Packages are built around 10 to 15, 15 to 25, or 25 to 40 expected meetings per month, matched to 1,500, 3,000 and 5,000 targeted calls respectively. The right tier depends on your market size, deal value and how much closing capacity your team actually has.",
    },
    ...STANDARD_FAQS,
  ],
  links: [
    { href: "/outsourced-sdr/", label: "Outsourced SDR services" },
    { href: "/cold-calling-services/", label: "Cold calling services" },
    { href: "/b2b-lead-generation/", label: "B2B lead generation" },
    { href: "/pricing/", label: "What it costs" },
  ],
  ctaHeadingA: "Book the meetings",
  ctaHeadingB: "worth having.",
};

/* ========================= 3. COLD CALLING SERVICES ========================= */
const coldCalling = {
  path: "/cold-calling-services/",
  title: "Outsourced Cold Calling Services for B2B | SalesSourcers",
  description: "Outsourced cold calling for B2B. 1,500 to 5,000 targeted calls a month by trained SDRs, fully recorded, with AI call notes and weekly coaching.",
  serviceName: "Outsourced cold calling services",
  serviceType: "Cold calling",
  breadcrumbName: "Cold calling",
  kicker: "COLD CALLING",
  h1: "Cold calling that survives contact with a real buyer.",
  standfirst: "Between 1,500 and 5,000 targeted calls a month, made by a trained SDR who knows your market, recorded in full so you can hear exactly what your buyers say back.",
  ctaLabel: "Get my outbound strategy",
  answerLabel: "In short",
  answer: [
    "<strong>Outsourced cold calling</strong> puts a trained sales development representative on the phone to your target accounts, working from a researched list and a tested script, to open conversations and book qualified meetings.",
    "Volume alone does not work. What makes calling work is a defined market, a reason to call this company, and a rep coached often enough to improve week to week.",
  ],
  body: `        <h2>Cold calling is not dead. Bad cold calling is.</h2>
        <p>The case against calling is really a case against a specific version of it: an untrained rep, an unfiltered list, a script written for nobody in particular, and no feedback loop. That version deserves its reputation.</p>
        <p>What still works is narrow. A defined market, a credible reason to be calling this specific company, someone on the phone who can hold a real conversation about the buyer's problem, and a manager listening closely enough to fix what is not landing.</p>
        <div class="stat-strip">
          <div><b>1,500-5,000</b><span>Targeted calls per month</span></div>
          <div><b>100%</b><span>Calls recorded</span></div>
          <div><b>3x weekly</b><span>Manager coaching</span></div>
          <div><b>AI notes</b><span>On every conversation</span></div>
        </div>
        <h2>Who makes the calls</h2>
        <p>One dedicated SDR, matched to your market, hired from an experienced pool across the UK, South Africa, the United States and Australia. They complete a structured programme covering discovery, SPIN Selling and Gap Selling before training specifically on your offer.</p>
        <p>Then they call your accounts and nobody else's. By month two they have heard your market's objections enough times to answer them without reaching for a script.</p>
        <h3>Coached, not just monitored</h3>
        <p>Manager coaching runs three times a week against real recorded calls. The difference between a rep who improves and one who plateaus is almost entirely how often somebody good listens to them and tells them what to change.</p>
        <h2>The list matters as much as the call</h2>
        <p>Before a number is dialled, the market is defined: ideal customer profile, priority sectors and regions, and explicit exclusions. Every lead is checked against fit, intent and timing.</p>
        <p>Calling a badly built list is how teams conclude that cold calling does not work. Usually the calling was fine and the list was the problem.</p>
${HOW_IT_RUNS}
        <h2>You can hear everything</h2>
        <p>Every call is recorded with AI-generated notes attached. That gives you three things most calling engagements never produce:</p>
        <ul>
          <li><strong>Verification</strong> - you can confirm what was promised on your behalf, in the prospect's own words.</li>
          <li><strong>Objection patterns</strong> - the same three objections usually explain most of your lost pipeline.</li>
          <li><strong>Positioning feedback</strong> - which framing makes a buyer lean in, tested hundreds of times a month.</li>
        </ul>
        <p>Most clients find the recordings change how they sell generally, not only how the campaign performs.</p>`,
  aside:
    asideCta("Hear your market first", "Get a complimentary outbound strategy showing which segments are worth calling and what the opening should be.") +
    "\n" +
    asideFacts("Call volumes", [
      "<strong>1,500 calls</strong> per month - 10-15 expected meetings",
      "<strong>3,000 calls</strong> per month - 15-25 expected meetings",
      "<strong>5,000 calls</strong> per month - 25-40 expected meetings",
      "All recorded, with AI call notes",
    ]) +
    "\n" +
    asideLinks("Related", [
      ["/b2b-appointment-setting/", "Appointment setting", "What the calls are booking"],
      ["/outsourced-sdr/", "Outsourced SDR", "The dedicated rep model"],
      ["/industries/cybersecurity/", "Cybersecurity", "Calling technical buyers"],
    ]),
  caseRefs: refs("cypago", "outbox", "franchise-rocket"),
  caseRefsHeading: "Calling campaigns we have run.",
  faqs: [
    {
      q: "Does cold calling still work in B2B?",
      a: "Yes, when the market is defined, the list is built on fit and intent, and the person calling has been trained and is coached regularly. What does not work is high volume against an unfiltered list with a generic script and no feedback loop, which is the version most people mean when they say calling is dead.",
    },
    {
      q: "How many calls will you make?",
      a: "Between 1,500 and 5,000 targeted calls per month depending on the package. Volume is matched to market size and expected meeting capacity rather than treated as the goal in itself.",
    },
    {
      q: "Can we listen to the calls?",
      a: "Every call is recorded and carries AI-generated notes. You can listen to any conversation, verify what was said on your behalf, and see the objection patterns that recur across the campaign.",
    },
    ...STANDARD_FAQS,
  ],
  links: [
    { href: "/outsourced-sdr/", label: "Outsourced SDR services" },
    { href: "/b2b-appointment-setting/", label: "B2B appointment setting" },
    { href: "/b2b-lead-generation/", label: "B2B lead generation" },
    { href: "/pricing/", label: "What it costs" },
  ],
  ctaHeadingA: "Find out what your buyers",
  ctaHeadingB: "actually say.",
};

/* ========================= 4. B2B LEAD GENERATION ========================= */
const leadGeneration = {
  path: "/b2b-lead-generation/",
  title: "B2B Lead Generation Company | SalesSourcers",
  description: "A B2B lead generation company running the full motion: market definition, buyer-intent data, cold calling and email, and qualified meetings booked.",
  serviceName: "B2B lead generation",
  serviceType: "Lead generation",
  breadcrumbName: "Lead generation",
  kicker: "LEAD GENERATION",
  h1: "Lead generation that ends in a conversation.",
  standfirst: "Most lead generation stops at a list or a form fill and calls it a lead. We run the whole motion through to a qualified meeting with someone who can actually buy.",
  ctaLabel: "Get my outbound strategy",
  answerLabel: "In short",
  answer: [
    "<strong>B2B lead generation</strong> covers identifying companies that fit your customer profile, establishing that they are in market, and creating a real conversation with the person who can buy.",
    "The distinction that matters is where the service stops. A list is not a lead. A form fill is not a lead. We take it through to a qualified meeting, then hand you the intelligence the campaign produced along the way.",
  ],
  body: `        <h2>What most agencies call a lead</h2>
        <p>The word covers wildly different things, which is why buyers compare quotes that are not comparable.</p>
        <div class="table-scroll">
          <table class="page-table">
            <thead><tr><th>What is delivered</th><th>What it actually is</th><th>Who does the selling</th></tr></thead>
            <tbody>
              <tr><td>A data list</td><td>Contact records matching a filter</td><td>You, entirely</td></tr>
              <tr><td>An email campaign</td><td>Sends and open rates</td><td>You, once someone replies</td></tr>
              <tr><td>A marketing qualified lead</td><td>Somebody downloaded something</td><td>You, from a cold start</td></tr>
              <tr><td>A qualified meeting</td><td>A booked conversation with a vetted buyer</td><td>Us up to the meeting, you from there</td></tr>
            </tbody>
          </table>
        </div>
        <p>We do the last one. It is more expensive per unit and considerably cheaper per closed deal.</p>
        <h2>Defining the market before generating anything</h2>
        <p>We turn your best existing customers, your commercial goals and your offer into a clearly bounded addressable market. That produces three things: an ideal customer profile, a ranked set of sectors and regions, and a written list of exclusions.</p>
        <p>Exclusions matter more than people expect. Knowing who not to contact protects your brand, your deliverability and your team's time.</p>
        <h2>Intent, not just fit</h2>
        <p>Fit tells you a company could buy. Intent tells you they might buy now. Buyer-intent data narrows a large addressable market down to the companies worth a conversation this quarter, which is what makes a modest call volume produce a serious meeting count.</p>
        <h2>Multi-channel, run as one motion</h2>
        <p>Cold calling and personalised email run together, not as separate campaigns competing for the same inbox. The call gives the email a reason to exist; the email gives the call a warmer opening.</p>
${HOW_IT_RUNS}
        <h2>The intelligence is half the value</h2>
        <p>Running hundreds of real conversations a month against a defined market produces something no report can: you learn what the market thinks of your offer. Which competitors keep coming up. Which objections recur and in what order. Where pricing resistance actually sits. Which roles and regions convert, and which quietly never do.</p>
        <p>Clients frequently change their positioning off the back of the first two months, before the pipeline effect has even fully landed.</p>`,
  aside:
    asideCta("Start with the opportunity map", "A complimentary outbound strategy: your addressable market, priority segments and a realistic view of the volume available.") +
    "\n" +
    asideFacts("What counts as a lead here", [
      "Vetted on <strong>fit</strong> against customers you already win",
      "Vetted on <strong>intent</strong> - active in market now",
      "Vetted on <strong>timing</strong> - a reason this quarter",
      "Delivered as a <strong>booked meeting</strong>, not a record",
    ]) +
    "\n" +
    asideLinks("Related", [
      ["/b2b-appointment-setting/", "Appointment setting", "How the meeting gets booked"],
      ["/cold-calling-services/", "Cold calling", "The primary channel"],
      ["/industries/marketing-agencies/", "For agencies", "Five agency case studies"],
    ]),
  caseRefs: refs("the-recipe", "iscent", "conveyor"),
  caseRefsHeading: "Lead generation programmes.",
  faqs: [
    {
      q: "How are you different from a lead generation agency?",
      a: "Every lead is vetted against fit, intent and timing before outreach begins. Your dedicated, market-aligned SDR completes a proven training programme covering discovery, SPIN Selling and Gap Selling, then works across cold calling and personalised email. You also receive full call visibility, AI notes, manager coaching three times a week and qualified meetings from as early as week three.",
    },
    {
      q: "Do you sell data lists?",
      a: "No. Data is an input to the campaign, not the deliverable. The deliverable is a qualified meeting with a vetted buyer, plus the market intelligence the campaign produces along the way.",
    },
    {
      q: "What does buyer-intent data actually do?",
      a: "Fit tells you a company could buy from you. Intent narrows that to companies showing evidence they are active in market now. It is what allows a moderate call volume to produce a serious meeting count instead of spraying a large list thinly.",
    },
    ...STANDARD_FAQS,
  ],
  links: [
    { href: "/outsourced-sdr/", label: "Outsourced SDR services" },
    { href: "/b2b-appointment-setting/", label: "B2B appointment setting" },
    { href: "/cold-calling-services/", label: "Cold calling services" },
    { href: "/uk/", label: "Lead generation in the UK" },
    { href: "/australia/", label: "Lead generation in Australia" },
  ],
  ctaHeadingA: "Stop buying lists.",
  ctaHeadingB: "Start having conversations.",
};

module.exports = [outsourcedSdr, appointmentSetting, coldCalling, leadGeneration];
