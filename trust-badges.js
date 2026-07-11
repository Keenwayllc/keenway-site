/* Keenway trust badges: injects an honest security strip into the footer.
   Hover / keyboard focus / tap opens an explanatory popover per badge. */
(function () {
  var ICONS = {
    shield:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    lock:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    card:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>'
  };

  var BADGES = [
    {
      id: "ssl",
      icon: "shield",
      label: "SSL Secured",
      text:
        "gokeenway.com is served over a secure HTTPS connection backed by a valid SSL certificate. You can confirm it any time via the padlock icon in your browser's address bar."
    },
    {
      id: "tls",
      icon: "lock",
      label: "TLS Encrypted",
      text:
        "Everything between your device and Keenway is encrypted with TLS, so your information can't be read or tampered with while it travels."
    },
    {
      id: "stripe",
      icon: "card",
      label: "Payments by Stripe",
      text:
        "When you pay through the Keenway app, card details are entered into Stripe's secure payment form and go straight to Stripe, a PCI DSS Level 1 certified processor. Keenway never sees or stores your card number."
    }
  ];

  function build() {
    var footer = document.querySelector("footer");
    if (!footer || footer.querySelector(".kw-trust")) return;

    var strip = document.createElement("div");
    strip.className = "kw-trust";

    BADGES.forEach(function (badge) {
      var item = document.createElement("div");
      item.className = "kw-trust-item";

      var popId = "kw-trust-pop-" + badge.id;
      var pop = document.createElement("div");
      pop.className = "kw-trust-pop";
      pop.id = popId;
      pop.setAttribute("role", "tooltip");
      var title = document.createElement("strong");
      title.textContent = badge.label;
      pop.appendChild(title);
      pop.appendChild(document.createTextNode(badge.text));

      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "kw-trust-badge";
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-describedby", popId);
      btn.innerHTML = ICONS[badge.icon];
      btn.appendChild(document.createTextNode(badge.label));

      function setOpen(open) {
        // Only one popover open at a time
        if (open) {
          strip.querySelectorAll(".kw-trust-item.is-open").forEach(function (el) {
            el.classList.remove("is-open");
            var b = el.querySelector(".kw-trust-badge");
            if (b) b.setAttribute("aria-expanded", "false");
          });
        }
        item.classList.toggle("is-open", open);
        btn.setAttribute("aria-expanded", String(open));
      }

      btn.addEventListener("click", function () {
        setOpen(!item.classList.contains("is-open"));
      });
      item.addEventListener("mouseenter", function () { setOpen(true); });
      item.addEventListener("mouseleave", function () { setOpen(false); });
      btn.addEventListener("focus", function () { setOpen(true); });
      btn.addEventListener("blur", function () { setOpen(false); });

      item.appendChild(pop);
      item.appendChild(btn);
      strip.appendChild(item);
    });

    var hint = document.createElement("p");
    hint.className = "kw-trust-hint";
    hint.textContent = "Hover or tap any item to see what it means";

    footer.insertBefore(hint, footer.firstChild);
    footer.insertBefore(strip, hint);

    document.addEventListener("pointerdown", function (e) {
      if (!strip.contains(e.target)) {
        strip.querySelectorAll(".kw-trust-item.is-open").forEach(function (el) {
          el.classList.remove("is-open");
          var b = el.querySelector(".kw-trust-badge");
          if (b) b.setAttribute("aria-expanded", "false");
        });
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        strip.querySelectorAll(".kw-trust-item.is-open").forEach(function (el) {
          el.classList.remove("is-open");
          var b = el.querySelector(".kw-trust-badge");
          if (b) b.setAttribute("aria-expanded", "false");
        });
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
