const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const revealItems = document.querySelectorAll(".reveal");
const dashboardTabs = document.querySelectorAll(".dashboard-tab");
const dashboardPanels = document.querySelectorAll("[data-dashboard-panel]");
const offerModal = document.querySelector(".offer-modal");
const offerModalCard = document.querySelector(".offer-modal-card");
const offerTriggers = document.querySelectorAll(".offer-trigger");
const modalClose = document.querySelector(".modal-close");
const modalBackdrop = document.querySelector(".offer-modal-backdrop");
const opportunityForm = document.querySelector(".opportunity-form");
const offerIntroItems = document.querySelectorAll("[data-offer-intro]");
const strategyThankYou = document.querySelector(".strategy-thank-you");
const strategyCalendlyFrame = document.querySelector("[data-strategy-calendly]");
const strategySendStatus = document.querySelector("[data-strategy-status]");
const dashboardTourToggle = document.querySelector(".dashboard-tour-toggle");
const caseFilters = document.querySelectorAll(".case-filter");
const caseStudies = document.querySelectorAll(".case-study-mini[data-category]");
const caseMore = document.querySelector(".case-more");
const testimonialMore = document.querySelector(".testimonial-more");
const testimonialExtras = document.querySelectorAll(".testimonial-extra");
const videoModal = document.querySelector("[data-video-modal]");
const videoFrame = document.querySelector("[data-video-frame]");
const videoCloseButtons = document.querySelectorAll("[data-video-close]");
const calendlyModal = document.querySelector("[data-calendly-modal]");
const calendlyFrame = document.querySelector("[data-calendly-frame]");
const calendlyCloseButtons = document.querySelectorAll("[data-calendly-close]");
const methodSteps = document.querySelectorAll("[data-method-step]");
const methodLabel = document.querySelector("[data-method-label]");
const methodTitle = document.querySelector("[data-method-title]");
const methodCopy = document.querySelector("[data-method-copy]");
const methodPoints = document.querySelector("[data-method-points]");

let dashboardTourIndex = 0;
let dashboardTourPlaying = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let dashboardTourTimer;
let strategySubmitted = false;
let selectedCaseFilter = "all";
let casesExpanded = false;
let testimonialsExpanded = false;
let offerAutoOpened = false;
let popupEngaged = false;
let popupShownThisSession = false;

const methodContent = [
  {
    label: "STEP 01 / MARKET DEFINITION",
    title: "Define the market worth pursuing.",
    copy: "We turn your best customers, commercial goals and offer into a clear addressable market. That gives the campaign firm boundaries before a single lead is contacted.",
    points: ["Ideal customer profile", "Priority sectors and regions", "Exclusions and qualification rules"],
    cards: [["Addressable market", "A focused list of companies we can credibly win"], ["Market segments", "Regions, industries and company profiles"], ["Commercial priority", "Markets ranked by revenue potential"]]
  },
  {
    label: "STEP 02 / BUYING SIGNALS",
    title: "Find credible reasons to reach out now.",
    copy: "We monitor company, hiring, technology and commercial signals that indicate change. Outreach starts with a relevant reason for the conversation, not a generic list.",
    points: ["Hiring and leadership changes", "Funding, growth and technology events", "Source-backed reasons to engage"],
    cards: [["Signal detected", "A verified event creates a timely reason to engage"], ["Account context", "The signal is connected to your offer"], ["Outreach priority", "The strongest opportunities move first"]]
  },
  {
    label: "STEP 03 / ACCOUNT SCORING",
    title: "Prioritise fit and intent together.",
    copy: "Every account is scored against your ICP and its current signals. Your SDR spends time on companies with both a reason to buy and a realistic chance of becoming a valuable customer.",
    points: ["Fit and intent scoring", "Every account manually vetted", "Low-value accounts removed"],
    cards: [["Account score", "Fit, timing and evidence combined"], ["Quality check", "Company and contact details verified"], ["Priority queue", "The best accounts enter outreach first"]]
  },
  {
    label: "STEP 04 / BUYER MAPPING",
    title: "Identify the people who own the pain.",
    copy: "We map the buying committee and find the people most likely to feel the problem your offer solves. Messaging changes by role, responsibility and likely commercial impact.",
    points: ["Pain owner and decision-maker mapping", "Verified email and phone data", "Role-specific value propositions"],
    cards: [["Pain owner", "The person closest to the operational problem"], ["Buying committee", "Influencers and decision-makers mapped"], ["Contact verified", "Direct details checked before outreach"]]
  },
  {
    label: "STEP 05 / SDR ENABLEMENT",
    title: "Train an SDR to represent your business properly.",
    copy: "Your dedicated, market-aligned SDR learns your offer, proof, buyers and qualification criteria before launch. Role play, call reviews and coaching continue throughout the campaign.",
    points: ["Industry-experienced SDR matching", "SPIN and Gap Selling methodology", "Manager coaching three times a week"],
    cards: [["Sales playbook", "Positioning, discovery and objections documented"], ["Live role play", "Messaging tested before prospects hear it"], ["Launch ready", "SDR certified against campaign criteria"]]
  },
  {
    label: "STEP 06 / MULTI-CHANNEL EXECUTION",
    title: "Coordinate calling and personalised email.",
    copy: "Cold calls create live conversations while individual emails add context and follow-up. Both channels work from the same account intelligence, message and qualification standard.",
    points: ["Targeted cold calling", "Individual email personalisation", "One coordinated follow-up sequence"],
    cards: [["Call connected", "Live buyer context and objections captured"], ["Email response", "Intent and timing added to the account"], ["Conversation active", "Channels combine around one opportunity"]]
  },
  {
    label: "STEP 07 / MEETINGS AND LEARNING",
    title: "Book qualified meetings and improve every cycle.",
    copy: "Qualified meetings land directly in your calendar with recordings and AI notes. Every call and reply then improves targeting, messaging, coaching and the next campaign decision.",
    points: ["Meetings booked in your calendar", "AI notes and call recordings", "Market intelligence feeds the next cycle"],
    cards: [["Qualified meeting", "Right buyer, relevant need and agreed next step"], ["Meeting context", "Recording, summary and buyer notes included"], ["Campaign learning", "Real market evidence improves the next cycle"]]
  }
];

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.classList.toggle("active");
  mobileMenu.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    mobileMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

function selectDashboardPanel(index) {
  dashboardTourIndex = index;
  dashboardTabs.forEach((item, itemIndex) => {
    const active = itemIndex === index;
    item.classList.toggle("active", active);
    item.setAttribute("aria-selected", String(active));
  });
  dashboardPanels.forEach((panel, panelIndex) => {
    const active = panelIndex === index;
    panel.classList.toggle("active", active);
    panel.setAttribute("aria-hidden", String(!active));
  });
}

function startDashboardTour() {
  window.clearInterval(dashboardTourTimer);
  if (!dashboardTourPlaying || dashboardTabs.length < 2) return;
  dashboardTourTimer = window.setInterval(() => {
    selectDashboardPanel((dashboardTourIndex + 1) % dashboardTabs.length);
  }, 4500);
}

dashboardTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    selectDashboardPanel(index);
    startDashboardTour();
  });
});

dashboardTourToggle.addEventListener("click", () => {
  dashboardTourPlaying = !dashboardTourPlaying;
  dashboardTourToggle.textContent = dashboardTourPlaying ? "Pause" : "Play";
  dashboardTourToggle.setAttribute("aria-label", `${dashboardTourPlaying ? "Pause" : "Play"} dashboard tour`);
  startDashboardTour();
});

selectDashboardPanel(0);
startDashboardTour();

function selectMethodStep(index) {
  const content = methodContent[index];
  if (!content) return;

  methodSteps.forEach((step, stepIndex) => {
    const active = stepIndex === index;
    step.classList.toggle("active", active);
    step.setAttribute("aria-selected", String(active));
    step.tabIndex = active ? 0 : -1;
  });

  methodLabel.textContent = content.label;
  methodTitle.textContent = content.title;
  methodCopy.textContent = content.copy;
  methodPoints.innerHTML = content.points.map((point) => `<li>${point}</li>`).join("");

  const cardFields = [
    ["[data-method-card-one]", "[data-method-card-one-copy]"],
    ["[data-method-card-two]", "[data-method-card-two-copy]"],
    ["[data-method-card-three]", "[data-method-card-three-copy]"]
  ];
  cardFields.forEach(([titleSelector, copySelector], cardIndex) => {
    document.querySelector(titleSelector).textContent = content.cards[cardIndex][0];
    document.querySelector(copySelector).textContent = content.cards[cardIndex][1];
  });
}

methodSteps.forEach((step, index) => {
  step.addEventListener("click", () => selectMethodStep(index));
  step.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % methodSteps.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + methodSteps.length) % methodSteps.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = methodSteps.length - 1;
    selectMethodStep(nextIndex);
    methodSteps[nextIndex].focus();
  });
});

selectMethodStep(0);

function updateCaseStudies() {
  caseStudies.forEach((study) => {
    const categories = study.dataset.category.split(" ");
    const matchesFilter = selectedCaseFilter === "all" || categories.includes(selectedCaseFilter);
    const isPrimary = study.dataset.primary === "true";
    study.hidden = !matchesFilter || (selectedCaseFilter === "all" && !casesExpanded && !isPrimary);
  });
  caseMore.hidden = selectedCaseFilter !== "all";
  caseMore.setAttribute("aria-expanded", String(casesExpanded));
  caseMore.innerHTML = casesExpanded
    ? 'Show fewer results <span>↑</span>'
    : 'View more client results <span>↓</span>';
}

caseFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    selectedCaseFilter = filter.dataset.caseFilter;
    caseFilters.forEach((item) => item.classList.toggle("active", item === filter));
    updateCaseStudies();
  });
});

caseMore.addEventListener("click", () => {
  casesExpanded = !casesExpanded;
  updateCaseStudies();
});

updateCaseStudies();

testimonialMore.addEventListener("click", () => {
  testimonialsExpanded = !testimonialsExpanded;
  testimonialExtras.forEach((testimonial) => {
    testimonial.hidden = !testimonialsExpanded;
  });
  testimonialMore.setAttribute("aria-expanded", String(testimonialsExpanded));
  testimonialMore.innerHTML = testimonialsExpanded
    ? 'Show fewer testimonials <span>↑</span>'
    : 'View more testimonials <span>↓</span>';
});

function setVideoModal(open, videoId = "", title = "Client video testimonial") {
  videoModal.classList.toggle("open", open);
  videoModal.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("modal-open", open || calendlyModal.classList.contains("open") || offerModal.classList.contains("open"));
  videoFrame.title = title;
  const origin = window.location.origin.startsWith("http") ? `&origin=${encodeURIComponent(window.location.origin)}` : "";
  videoFrame.src = open ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1${origin}` : "";
}

document.querySelectorAll("[data-youtube-id]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    setVideoModal(true, trigger.dataset.youtubeId, trigger.dataset.videoTitle || "Client video testimonial");
  });
});

videoCloseButtons.forEach((button) => {
  button.addEventListener("click", () => setVideoModal(false));
});

function setCalendlyModal(open, url = "") {
  calendlyModal.classList.toggle("open", open);
  calendlyModal.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("modal-open", open || videoModal.classList.contains("open") || offerModal.classList.contains("open"));
  calendlyFrame.src = open ? url : "";
}

document.querySelectorAll('a[href*="calendly.com"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setCalendlyModal(true, link.href);
  });
});

calendlyCloseButtons.forEach((button) => {
  button.addEventListener("click", () => setCalendlyModal(false));
});

function setOfferModal(open) {
  offerModal.classList.toggle("open", open);
  offerModal.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("modal-open", open);
  if (open) modalClose.focus();
}

offerTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    mobileMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    offerAutoOpened = false;
    setOfferModal(true);
  });
});

function storageGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function storageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage can be unavailable in privacy-focused browser modes.
  }
}

function dismissOfferModal() {
  setOfferModal(false);
  popupShownThisSession = true;
  if (offerAutoOpened) {
    const dismissUntil = Date.now() + (7 * 24 * 60 * 60 * 1000);
    storageSet("ssOfferDismissedUntil", String(dismissUntil));
  }
}

modalClose.addEventListener("click", dismissOfferModal);
modalBackdrop.addEventListener("click", dismissOfferModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && offerModal.classList.contains("open")) {
    dismissOfferModal();
  }
  if (event.key === "Escape" && videoModal.classList.contains("open")) {
    setVideoModal(false);
  }
  if (event.key === "Escape" && calendlyModal.classList.contains("open")) {
    setCalendlyModal(false);
  }
});

function canAutoOpenOffer() {
  const dismissedUntil = Number(storageGet("ssOfferDismissedUntil") || 0);
  const submitted = storageGet("ssOfferSubmitted") === "true";
  return !submitted
    && !strategySubmitted
    && !popupShownThisSession
    && !offerModal.classList.contains("open")
    && Date.now() > dismissedUntil;
}

function autoOpenOffer() {
  if (!canAutoOpenOffer()) return;
  offerAutoOpened = true;
  popupShownThisSession = true;
  setOfferModal(true);
}

window.setTimeout(() => {
  popupEngaged = true;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrollDepth = scrollable > 0 ? window.scrollY / scrollable : 0;
  if (scrollDepth >= 0.5) autoOpenOffer();
}, 60000);

window.addEventListener("scroll", () => {
  if (!popupEngaged || !canAutoOpenOffer()) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollable > 0 && window.scrollY / scrollable >= 0.5) autoOpenOffer();
}, { passive: true });

document.addEventListener("mouseleave", (event) => {
  if (window.innerWidth <= 1020 || event.clientY > 8) return;
  if (popupEngaged) autoOpenOffer();
});

opportunityForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitButton = opportunityForm.querySelector('[type="submit"]');
  const status = opportunityForm.querySelector(".form-status");
  const formData = new FormData(opportunityForm);
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";
  status.textContent = "";
  offerIntroItems.forEach((item) => { item.hidden = true; });
  offerModalCard.classList.add("strategy-complete");
  opportunityForm.hidden = true;
  strategyThankYou.hidden = false;
  strategyCalendlyFrame.src = "https://calendly.com/zane-xgu/introductory-call?hide_gdpr_banner=1";
  if (strategySendStatus) strategySendStatus.textContent = "Sending your request now...";
  offerModalCard.scrollTop = 0;
  requestAnimationFrame(() => { offerModalCard.scrollTop = 0; });
  strategyThankYou.querySelector("h3").focus();

  try {
    const response = await fetch(opportunityForm.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    });
    if (!response.ok) throw new Error("Request failed");
    strategySubmitted = true;
    storageSet("ssOfferSubmitted", "true");
    opportunityForm.reset();
    if (strategySendStatus) strategySendStatus.textContent = "Request received. We will send your strategy within 48 hours.";
  } catch {
    if (strategySendStatus) strategySendStatus.textContent = "The calendar is ready below, but the form did not send. Please email zane@salessourcers.com so we can create your strategy.";
    submitButton.disabled = false;
    submitButton.innerHTML = 'Try again <span>↗</span>';
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  observer.observe(item);
});

document.querySelectorAll(".faq-list details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) return;
    document.querySelectorAll(".faq-list details").forEach((other) => {
      if (other !== detail) other.open = false;
    });
  });
});
