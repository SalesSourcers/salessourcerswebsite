const { refs, asideCta, asideFacts, asideLinks, HOW_IT_RUNS, STANDARD_FAQS } = require("./shared.cjs");

/* ============================= 0. SERVICES HUB ============================= */
const hub = {
  path: "/services/",
  title: "Outbound Services | Outsourced SDR & Cold Calling | SalesSourcers",
  description: "Outsourced SDR, B2B appointment setting, cold calling and lead generation. What each service covers and how to choose the right one for your team.",
  serviceName: "Outbound services",
  serviceType: "Sales development representative outsourcing",
  breadcrumbName: "Services",
  kicker: "SERVICES",
  h1: "Four outbound services, one way of working.",
  standfirst: "All four services below run on the same programme. Which one to ask for depends on what your sales team already has in place.",
  ctaLabel: "Get my outbound strategy",
  answerLabel: "Which one do you need?",
  answer: [
    "With nobody prospecting for you, start with <strong>an outsourced SDR</strong>. If you have closers but an empty calendar, <strong>appointment setting</strong> fits. <strong>Cold calling</strong> suits buyers who answer the phone, and <strong>lead generation</strong> is the place to start if you are still unsure who to target.",
    "All four follow the same process. We define the market and build the playbook, go live in week three, coach the SDR three times a week and record every call.",
  ],
  body: `        <h2>How the four services differ</h2>
        <h3>Outsourced SDR</h3>
        <p>A dedicated rep who works your accounts and nobody else's. You are paying for the person and for everything around them, since recruitment, training, coaching and replacement all become our job. Choose this when nobody is prospecting and nobody has the hours to manage someone who would. <a href="/outsourced-sdr/">Outsourced SDR services</a>.</p>
        <h3>B2B appointment setting</h3>
        <p>The same work, focused on filling your sales team's calendar. Choose this when you already have closers and the problem is too few meetings. Ask any provider about their qualification bar, because a meeting count is the easiest number in B2B to inflate. <a href="/b2b-appointment-setting/">B2B appointment setting</a>.</p>
        <h3>Cold calling</h3>
        <p>Here the difference is the channel. Choose this when your buyers can be reached by phone and email on its own has stalled. Between 1,500 and 5,000 targeted calls a month, all recorded and available for you to hear. <a href="/cold-calling-services/">Cold calling services</a>.</p>
        <h3>B2B lead generation</h3>
        <p>The broadest of the four, and the term that gets misused most. Ours ends with a booked meeting, where many providers stop at a list or a form fill. Choose this when you are still working out which market to target and that groundwork matters as much as the outreach. <a href="/b2b-lead-generation/">B2B lead generation</a>.</p>
        <h2>What stays the same across all four</h2>
        <p>Whichever service you choose, the engagement runs the same way. Strategy and build take weeks one and two, the campaign goes live in week three, a manager coaches the SDR three times a week, every call is recorded with AI notes, and reporting is broken down by role, region and message.</p>
        <p>If you are weighing us against hiring, start with the <a href="/outsourced-sdr-vs-in-house/">full cost comparison</a>. To see what shapes the price, read <a href="/pricing/">the pricing page</a>.</p>`,
  aside:
    asideCta("Not sure which one?", "Tell us what you already have and we will tell you which of the four fits, even if the answer is none of them.") +
    "\n" +
    asideLinks("The four services", [
      ["/outsourced-sdr/", "Outsourced SDR", "A dedicated rep, live in week three"],
      ["/b2b-appointment-setting/", "Appointment setting", "Meetings booked into your calendar"],
      ["/cold-calling-services/", "Cold calling", "1,500-5,000 calls a month"],
      ["/b2b-lead-generation/", "Lead generation", "Ends with a booked meeting"],
    ]),
  caseRefs: refs("cypago", "revcat", "iscent"),
  caseRefsHeading: "Recent results.",
  faqs: [
    {
      q: "What is the difference between outsourced SDR and appointment setting?",
      a: "Mostly how the service is framed. Outsourced SDR gives you a dedicated person, and their recruitment, training, coaching and replacement are our responsibility. Appointment setting is framed around the meetings booked into your calendar. The work underneath is the same, so in both cases the thing to check is the qualification bar.",
    },
    {
      q: "Can we start with one and add another?",
      a: "You would not need to add anything. All four describe one programme, so a campaign that starts as email-led appointment setting and later leans on the phone is a change of emphasis within the same contract.",
    },
    ...STANDARD_FAQS,
  ],
  links: [
    { href: "/pricing/", label: "What it costs" },
    { href: "/outsourced-sdr-vs-in-house/", label: "Outsourced vs in-house" },
    { href: "/industries/", label: "Industries we work in" },
    { href: "/australia/", label: "Outbound in Australia" },
    { href: "/uk/", label: "Outbound in the UK" },
  ],
  ctaHeadingA: "Find out which one",
  ctaHeadingB: "suits your team.",
};

/* ============================ 1. OUTSOURCED SDR ============================ */
const outsourcedSdr = {
  path: "/outsourced-sdr/",
  title: "Outsourced SDR Services | Dedicated B2B SDRs | SalesSourcers",
  description: "A dedicated SDR, matched to your market, who cold calls and emails your target accounts. Coached three times a week and live in week three.",
  serviceName: "Outsourced SDR services",
  serviceType: "Sales development representative outsourcing",
  breadcrumbName: "Outsourced SDR",
  kicker: "OUTSOURCED SDR",
  h1: "A dedicated SDR, without the hiring drag.",
  standfirst: "One experienced sales development representative, matched to your market and trained on your offer. A manager coaches them three times a week, they start calling in week three, and they work on your account alone.",
  ctaLabel: "Get my outbound strategy",
  answerLabel: "What outsourced SDR means here",
  answer: [
    "<strong>Outsourced SDR</strong> means hiring a sales development representative through a partner instead of employing one yourself. You get a dedicated rep who prospects, cold calls and emails your target accounts and books qualified meetings into your team's calendar.",
    "The partner handles recruitment, training, management, coaching, tools and replacement. You keep the meetings and everything the campaign learns about your market.",
  ],
  body: `        <h2>What you get</h2>
        <p>Hiring an SDR yourself means solving four problems. You have to find someone good, train them on a market they do not know yet, manage them well enough that they improve, and replace them when they leave. Most companies manage the first and struggle with the other three.</p>
        <p>Outsourcing hands all four to us. On your side, you get a named person working your accounts and meetings arriving in your calendar.</p>
        <div class="stat-strip">
          <div><b>Week 3</b><span>Typical go-live</span></div>
          <div><b>3x weekly</b><span>Manager coaching</span></div>
          <div><b>1,500-5,000</b><span>Targeted calls per month</span></div>
          <div><b>10-40</b><span>Expected meetings per month</span></div>
        </div>
        <h2>A dedicated SDR on your account</h2>
        <p>"Outsourced" covers two very different models, and the difference matters more than anything else on this page.</p>
        <p>In a shared pool, your campaign sits in a queue with other clients and whoever is free picks up your list that day. Nobody stays on it long enough to learn your market.</p>
        <p>A dedicated SDR works only your accounts. They hear the same objections again and again, learn which job titles respond, and get better at your conversation every week. That steady improvement is what you are paying for.</p>
        <h3>Matched to your market</h3>
        <p>We hire experienced SDRs across the UK, South Africa, the United States and Australia, then match them to the market you sell into. Someone who has sold to CISOs before already knows why a security buyer hangs up on a generic call, so they do not need six weeks to learn it.</p>
        <h3>Trained before they call your prospects</h3>
        <p>Every SDR completes a structured programme covering discovery, SPIN Selling and Gap Selling, then trains on your offer. Scripts are tested through role play and call listening before any prospect hears them.</p>
${HOW_IT_RUNS}
        <h2>What counts as a qualified meeting</h2>
        <p>Loose qualification lets an agency hit its meeting number without producing anything you can close. We check every lead against three tests before outreach begins.</p>
        <ul>
          <li><strong>Fit.</strong> Do they match the customers you already win?</li>
          <li><strong>Intent.</strong> Is there evidence they are in the market now?</li>
          <li><strong>Timing.</strong> Is there a reason to talk this quarter?</li>
        </ul>
        <p>Your account executives will resent a meeting that fails those tests, so we would rather book fewer, better ones.</p>
        <h2>Is outsourced SDR right for you?</h2>
        <p>It works well when you know which customers you want, have evidence your offer sells, and need a managed way to reach those buyers without turning a founder or AE into a full-time prospector.</p>
        <p>It works badly when nobody has bought the offer yet. Outbound cannot prove a product should exist, so sort out the positioning first.</p>`,
  aside:
    asideCta("Start with the strategy", "We map your addressable market and show you the opportunity before you commit to anything.") +
    "\n" +
    asideFacts("At a glance", [
      "One dedicated SDR, matched to your market",
      "Cold calling and personalised email",
      "Live in week three",
      "Manager coaching three times a week",
      "Recordings, AI notes and a live dashboard",
      "SDRs hired in the UK, South Africa, US and Australia",
    ]) +
    "\n" +
    asideLinks("Compare the options", [
      ["/outsourced-sdr-vs-in-house/", "Outsourced vs in-house", "The full cost of each"],
      ["/pricing/", "What it costs", "Cost drivers and market prices"],
      ["/b2b-appointment-setting/", "Appointment setting", "If you only need meetings"],
    ]),
  caseRefs: refs("cypago", "revcat", "sales-savvy"),
  caseRefsHeading: "SDR programmes we have run.",
  faqs: [
    {
      q: "What is an outsourced SDR?",
      a: "An outsourced SDR is a sales development representative provided by a partner instead of employed directly. They prospect your target accounts by phone and email, qualify interest and book meetings into your team's calendar. The partner handles recruitment, training, management, coaching, tools and replacement.",
    },
    {
      q: "Is the SDR dedicated to us or shared with other clients?",
      a: "Dedicated. Your SDR works only on your accounts. Reps in a shared pool never stay on one market long enough to learn its recurring objections or which job titles respond.",
    },
    ...STANDARD_FAQS,
    {
      q: "What happens if the SDR is not working out?",
      a: "We replace them at our cost. With an in-house hire, a bad fit costs you another recruitment cycle, more ramp time and a gap in your pipeline.",
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
  standfirst: "We book meetings with people who match your customer profile, show they are in the market and have a reason to talk this quarter.",
  ctaLabel: "Get my outbound strategy",
  answerLabel: "In short",
  answer: [
    "<strong>B2B appointment setting</strong> is the outsourced work of contacting target companies, qualifying interest and booking a meeting directly into your sales team's calendar.",
    "What counts is how many meetings the right people attend with a clear reason to be there. We check every lead for fit, intent and timing before outreach starts.",
  ],
  body: `        <h2>Why meeting numbers get inflated</h2>
        <p>Appointment setting is easy to fake. Lower the bar far enough and you can book almost anyone, and the invoice looks the same whether your pipeline grows or not.</p>
        <p>You can spot an inflated meeting count quickly. Bookings are high, attendance is poor, and account executives stop preparing because so many meetings turn out to be unqualified.</p>
        <h2>Our qualification bar</h2>
        <p>We check every prospect against three tests before contacting them, and again before confirming a meeting.</p>
        <div class="table-scroll">
          <table class="page-table">
            <thead><tr><th>Test</th><th>What we check</th><th>Why it matters</th></tr></thead>
            <tbody>
              <tr><td>Fit</td><td>Company profile, size, sector and role seniority compared with the customers you already win</td><td>Stops meetings with people who could never buy</td></tr>
              <tr><td>Intent</td><td>Evidence the company is in the market now</td><td>Separates a buying conversation from a polite one</td></tr>
              <tr><td>Timing</td><td>A reason to act this quarter</td><td>Keeps your AE's calendar free of long-term nurture</td></tr>
            </tbody>
          </table>
        </div>
        <h2>How meetings get booked</h2>
        <p>Cold calling and personalised email run as one campaign. A call that does not connect gives the follow-up email a reason to be opened, and an email that gets read makes the next call warmer. To the prospect it feels like a single conversation.</p>
        <p>When a prospect agrees to meet, the meeting goes straight into your team's calendar with notes on what was said, what they want to solve, any objections and who else is involved.</p>
${HOW_IT_RUNS}
        <h2>Making sure meetings are attended</h2>
        <p>A booked meeting nobody attends costs more than no meeting, because someone prepared for it. Confirmation messages, sensible scheduling and clear framing on the call all matter more than the raw number of bookings.</p>
        <p>We also record every call. If a meeting was booked on a promise your product cannot keep, you will hear it on the recording before you walk into the room.</p>
        <h2>What you learn along the way</h2>
        <p>Every call and email reply tells you something about your market. Over a campaign you learn which competitors come up, which objections repeat, where buyers push back on price, and which roles and regions convert. Clients often tell us this changed their positioning more than the meetings changed their quarter.</p>`,
  aside:
    asideCta("See the opportunity first", "We will map your addressable market and show you a realistic meeting volume before you commit.") +
    "\n" +
    asideFacts("Capacity by package", [
      "<strong>10-15 meetings</strong> a month from 1,500 targeted calls",
      "<strong>15-25 meetings</strong> a month from 3,000 targeted calls",
      "<strong>25-40 meetings</strong> a month from 5,000 targeted calls",
      "Every meeting checked for fit, intent and timing",
    ]) +
    "\n" +
    asideLinks("Related", [
      ["/cold-calling-services/", "Cold calling", "The channel that books most of them"],
      ["/outsourced-sdr/", "Outsourced SDR", "The person who makes the calls"],
      ["/pricing/", "What it costs", "Cost drivers and market prices"],
    ]),
  caseRefs: refs("iscent", "easygenerator", "the-recipe"),
  caseRefsHeading: "Appointment setting in practice.",
  faqs: [
    {
      q: "What is B2B appointment setting?",
      a: "B2B appointment setting is the outsourced work of contacting target companies, qualifying their interest and booking meetings into your sales team's calendar. It covers prospecting and qualification, so your closers can spend their time in sales conversations.",
    },
    {
      q: "How do you define a qualified meeting?",
      a: "A meeting has to pass three tests. The company fits the profile of customers you already win, there is evidence they are in the market now, and there is a reason to talk this quarter. Your account executives would resent a meeting that fails any of them.",
    },
    {
      q: "How many meetings should we expect per month?",
      a: "Our packages are built around 10 to 15, 15 to 25, or 25 to 40 expected meetings a month, from 1,500, 3,000 and 5,000 targeted calls. The right package depends on your market size, deal value and how much closing capacity your team has.",
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
  h1: "Cold calling by trained SDRs who know your market.",
  standfirst: "Between 1,500 and 5,000 targeted calls a month, every one recorded so you can hear what your buyers say.",
  ctaLabel: "Get my outbound strategy",
  answerLabel: "In short",
  answer: [
    "<strong>Outsourced cold calling</strong> puts a trained sales development representative on the phone to your target accounts, working from a researched list and a tested script, to open conversations and book qualified meetings.",
    "Calling works when the market is defined, there is a clear reason to call each company, and the rep gets coached often enough to improve every week.",
  ],
  body: `        <h2>Why cold calling gets a bad name</h2>
        <p>Most complaints about cold calling describe the same setup. An untrained rep works through an unfiltered list with a script written for nobody in particular, and nobody gives them feedback. Calling done that way fails, and people are right to dislike it.</p>
        <p>Calling still works when it is done with care. You need a defined market, a good reason to call each company, someone who can talk credibly about the buyer's problem, and a manager listening closely enough to fix what is not landing.</p>
        <div class="stat-strip">
          <div><b>1,500-5,000</b><span>Targeted calls per month</span></div>
          <div><b>100%</b><span>Calls recorded</span></div>
          <div><b>3x weekly</b><span>Manager coaching</span></div>
          <div><b>AI notes</b><span>On every conversation</span></div>
        </div>
        <h2>Who makes the calls</h2>
        <p>One dedicated SDR, matched to your market and hired from our experienced pool across the UK, South Africa, the United States and Australia. They complete a structured programme covering discovery, SPIN Selling and Gap Selling, then train on your offer.</p>
        <p>After that they call your accounts and nobody else's. By month two they have heard your market's objections often enough to answer them without a script.</p>
        <h3>Coaching every week</h3>
        <p>A manager coaches your SDR three times a week using their recorded calls. Whether a rep keeps improving or plateaus comes down mostly to how often someone good listens to them and tells them what to change.</p>
        <h2>The list matters as much as the call</h2>
        <p>Before anyone dials, we define the market with an ideal customer profile, priority sectors and regions, and a list of companies to exclude. Every lead is checked for fit, intent and timing.</p>
        <p>Teams that call a badly built list often decide cold calling does not work, when the list was the problem.</p>
${HOW_IT_RUNS}
        <h2>You can hear every call</h2>
        <p>Every call is recorded with AI-generated notes, which gives you three things most calling services never provide.</p>
        <ul>
          <li><strong>Proof.</strong> You can check what was said on your behalf, in the prospect's own words.</li>
          <li><strong>Objection patterns.</strong> A handful of objections usually explains most of your lost pipeline.</li>
          <li><strong>Positioning feedback.</strong> You learn which framing gets a buyer interested, tested hundreds of times a month.</li>
        </ul>
        <p>Many clients find the recordings change how their whole team sells.</p>`,
  aside:
    asideCta("Hear your market first", "Get a free outbound strategy showing which segments are worth calling and how the calls should open.") +
    "\n" +
    asideFacts("Call volumes", [
      "<strong>1,500 calls</strong> a month, 10-15 expected meetings",
      "<strong>3,000 calls</strong> a month, 15-25 expected meetings",
      "<strong>5,000 calls</strong> a month, 25-40 expected meetings",
      "Every call recorded, with AI notes",
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
      a: "Yes, when the market is defined, the list is built on fit and intent, and the caller is trained and coached regularly. High volume against an unfiltered list with a generic script and no feedback does not work, and that is usually what people mean when they say calling is dead.",
    },
    {
      q: "How many calls will you make?",
      a: "Between 1,500 and 5,000 targeted calls a month, depending on the package. We set the volume by market size and the meeting capacity you need.",
    },
    {
      q: "Can we listen to the calls?",
      a: "Yes. Every call is recorded with AI-generated notes. You can listen to any conversation, check what was said on your behalf and see which objections keep coming up.",
    },
    ...STANDARD_FAQS,
  ],
  links: [
    { href: "/outsourced-sdr/", label: "Outsourced SDR services" },
    { href: "/b2b-appointment-setting/", label: "B2B appointment setting" },
    { href: "/b2b-lead-generation/", label: "B2B lead generation" },
    { href: "/pricing/", label: "What it costs" },
  ],
  ctaHeadingA: "Hear what your buyers",
  ctaHeadingB: "say about your offer.",
};

/* ========================= 4. B2B LEAD GENERATION ========================= */
const leadGeneration = {
  path: "/b2b-lead-generation/",
  title: "B2B Lead Generation Company | SalesSourcers",
  description: "A B2B lead generation company that defines your market, uses buyer-intent data, runs cold calling and email, and books qualified meetings.",
  serviceName: "B2B lead generation",
  serviceType: "Lead generation",
  breadcrumbName: "Lead generation",
  kicker: "LEAD GENERATION",
  h1: "Lead generation that ends in a conversation.",
  standfirst: "Many lead generation services hand over a list or a form fill and call it a lead. We carry the work through to a qualified meeting with someone who can buy.",
  ctaLabel: "Get my outbound strategy",
  answerLabel: "In short",
  answer: [
    "<strong>B2B lead generation</strong> covers identifying companies that fit your customer profile, establishing that they are in the market, and starting a conversation with the person who can buy.",
    "The main difference between providers is where the service stops. We finish with a qualified meeting, and give you everything the campaign learned about your market along the way.",
  ],
  body: `        <h2>What agencies mean by a lead</h2>
        <p>The word covers very different things, which is why quotes for lead generation are so hard to compare.</p>
        <div class="table-scroll">
          <table class="page-table">
            <thead><tr><th>What is delivered</th><th>What you get</th><th>Who does the selling</th></tr></thead>
            <tbody>
              <tr><td>A data list</td><td>Contact records that match a filter</td><td>You, all of it</td></tr>
              <tr><td>An email campaign</td><td>Sends and open rates</td><td>You, once someone replies</td></tr>
              <tr><td>A marketing qualified lead</td><td>Someone downloaded something</td><td>You, from a cold start</td></tr>
              <tr><td>A qualified meeting</td><td>A booked conversation with a checked buyer</td><td>Us up to the meeting, you from there</td></tr>
            </tbody>
          </table>
        </div>
        <p>We deliver the last one. It takes more work up front and wastes far less of your sales team's time.</p>
        <h2>Defining the market first</h2>
        <p>We start from your best customers, your commercial goals and your offer, and turn them into a clearly bounded market. That gives you an ideal customer profile, a ranked list of sectors and regions, and a written list of exclusions.</p>
        <p>The exclusions matter more than most people expect. Knowing who to leave alone protects your brand, your email deliverability and your team's time.</p>
        <h2>Fit and intent</h2>
        <p>Fit tells you a company could buy. Intent tells you it might buy now. Buyer-intent data narrows a large market to the companies worth calling this quarter, which is how a modest call volume can still produce a strong meeting count.</p>
        <h2>Calling and email in one campaign</h2>
        <p>Cold calling and personalised email run together as one campaign. A call gives the follow-up email a reason to be read, and an email makes the next call warmer.</p>
${HOW_IT_RUNS}
        <h2>What the campaign teaches you</h2>
        <p>Hundreds of conversations a month with a defined market tell you what that market thinks of your offer. You find out which competitors keep coming up, which objections repeat and in what order, where buyers push back on price, and which roles and regions convert.</p>
        <p>Clients often change their positioning within the first two months, before the full pipeline effect has landed.</p>`,
  aside:
    asideCta("Start with the opportunity map", "A free outbound strategy covering your addressable market, priority segments and a realistic view of the volume available.") +
    "\n" +
    asideFacts("What counts as a lead here", [
      "Checked for <strong>fit</strong> against customers you already win",
      "Checked for <strong>intent</strong>, meaning in the market now",
      "Checked for <strong>timing</strong>, with a reason to talk this quarter",
      "Delivered as a <strong>booked meeting</strong>",
    ]) +
    "\n" +
    asideLinks("Related", [
      ["/b2b-appointment-setting/", "Appointment setting", "How the meeting gets booked"],
      ["/cold-calling-services/", "Cold calling", "The main channel"],
      ["/industries/marketing-agencies/", "For agencies", "Agency campaigns we have run"],
    ]),
  caseRefs: refs("the-recipe", "iscent", "conveyor"),
  caseRefsHeading: "Lead generation programmes.",
  faqs: [
    {
      q: "How are you different from a lead generation agency?",
      a: "Every lead is checked for fit, intent and timing before outreach begins. Your dedicated SDR completes our training programme covering discovery, SPIN Selling and Gap Selling, then works across cold calling and personalised email. You also get full call visibility, AI notes, manager coaching three times a week and qualified meetings from as early as week three.",
    },
    {
      q: "Do you sell data lists?",
      a: "No. Data goes into the campaign, and what you receive is a qualified meeting with a checked buyer, plus what the campaign learns about your market.",
    },
    {
      q: "What does buyer-intent data do?",
      a: "Fit tells you a company could buy from you. Intent narrows that to companies showing signs they are in the market now. That is how a moderate call volume can produce a strong meeting count without spreading effort thinly across a huge list.",
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
  ctaHeadingA: "Swap contact lists for",
  ctaHeadingB: "booked sales meetings.",
};

module.exports = [hub, outsourcedSdr, appointmentSetting, coldCalling, leadGeneration];
