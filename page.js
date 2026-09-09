/* ==========================================================================
   page.js - behaviour for the commercial landing pages.
   Deliberately NOT script.js: that file is coupled to homepage-only markup
   (dashboard tour, offer modal, case filters) and throws on any other page.
   This carries only what these pages have: header state, mobile menu and the
   same Calendly region routing the rest of the site uses.
   ========================================================================== */
(function () {
  "use strict";

  var SS = window.SS_CONFIG || {};
  var CAL = SS.calendly || {};

  function cleanCalendlyBase(url) {
    return String(url || "").replace(/\?.*$/, "").replace(/\/$/, "");
  }

  var calendlyRoutes = {
    emea: cleanCalendlyBase(CAL.emea || CAL.intl || CAL.default || "https://calendly.com/zaid-wasati/salessourcers-strat-session"),
    apac: cleanCalendlyBase(CAL.apac || CAL.anz || "https://calendly.com/zane-xgu/salessourcers-strategy-session")
  };

  function detectVisitorRegion() {
    var timeZone = "";
    var locale = "";
    try {
      timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      locale = navigator.language || "";
    } catch (err) {
      return "emea";
    }
    var apacTimeZone = /^(Australia|Pacific\/Auckland|Pacific\/Chatham|Asia\/(Singapore|Kuala_Lumpur|Hong_Kong|Manila|Tokyo|Seoul|Bangkok|Jakarta|Ho_Chi_Minh|Taipei|Shanghai|Brunei|Makassar|Perth|Dhaka|Kolkata))/i.test(timeZone);
    var apacLocale = /-(AU|NZ|SG|MY|PH|HK|JP|KR|TH|ID|VN|TW|CN|IN)$/i.test(locale);
    return apacTimeZone || apacLocale ? "apac" : "emea";
  }

  var region = detectVisitorRegion();
  var target = (calendlyRoutes[region] || calendlyRoutes.emea) + "?hide_gdpr_banner=1";

  document.querySelectorAll("[data-calendly-route]").forEach(function (link) {
    link.href = target;
  });

  /* header shadow on scroll */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* mobile menu */
  var menuToggle = document.querySelector(".menu-toggle");
  var mobileMenu = document.querySelector(".mobile-menu");
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      var isOpen = !mobileMenu.classList.contains("open");
      menuToggle.classList.toggle("active", isOpen);
      mobileMenu.classList.toggle("open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuToggle.classList.remove("active");
        mobileMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
