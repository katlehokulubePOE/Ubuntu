/* Ubuntu Urban Wear interactions.
   This file supports the mobile menu, product search and demo form validation. */
document.addEventListener("DOMContentLoaded", () => {
  // Live local date/time updater. Date() and Intl use the visitor's own
  // device settings; no external service, API, library or network request.
  const localDate = document.querySelector("[data-local-date]");
  const localTime = document.querySelector("[data-local-time]");
  if (localDate && localTime) {
    const dateFormatter = new Intl.DateTimeFormat(undefined, {
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    });
    const timeFormatter = new Intl.DateTimeFormat(undefined, {
      hour: "2-digit", minute: "2-digit", second: "2-digit",
      hour12: undefined, timeZoneName: "short"
    });
    const updateLocalDateTime = () => {
      const now = new Date();
      localDate.dateTime = now.toISOString();
      localDate.textContent = dateFormatter.format(now);
      localTime.dateTime = now.toISOString();
      localTime.textContent = timeFormatter.format(now);
    };
    updateLocalDateTime();
    window.setInterval(updateLocalDateTime, 1000);
  }


  // Accessible rotating homepage fashion banner with manual and automatic controls.
  const slides = [...document.querySelectorAll(".fashion-slide")];
  const dots = [...document.querySelectorAll(".carousel-dots button")];
  const carousel = document.querySelector(".fashion-carousel");
  if (slides.length && dots.length) {
    let activeSlide = 0;
    let rotationTimer;
    const showSlide = (index) => {
      activeSlide = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        const active = i === activeSlide;
        slide.classList.toggle("active", active);
        slide.setAttribute("aria-hidden", String(!active));
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === activeSlide);
        dot.setAttribute("aria-current", i === activeSlide ? "true" : "false");
      });
    };
    const stopRotation = () => window.clearInterval(rotationTimer);
    const startRotation = () => {
      stopRotation();
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        rotationTimer = window.setInterval(() => showSlide(activeSlide + 1), 5000);
      }
    };
    document.querySelector(".carousel-prev")?.addEventListener("click", () => { showSlide(activeSlide - 1); startRotation(); });
    document.querySelector(".carousel-next")?.addEventListener("click", () => { showSlide(activeSlide + 1); startRotation(); });
    dots.forEach((dot, i) => dot.addEventListener("click", () => { showSlide(i); startRotation(); }));
    carousel?.addEventListener("mouseenter", stopRotation);
    carousel?.addEventListener("mouseleave", startRotation);
    carousel?.addEventListener("focusin", stopRotation);
    carousel?.addEventListener("focusout", startRotation);
    showSlide(0);
    startRotation();
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  // Toggle the mobile navigation and keep its accessibility state in sync.
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
      nav.classList.toggle("open", !isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
      });
    });

    // Return to the standard desktop navigation when the viewport expands.
    window.addEventListener("resize", () => {
      if (window.innerWidth > 700) {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
      }
    });
  }

  // Filter the product cards as the visitor types a search phrase.
  const searchInput = document.querySelector("#product-search");
  const productCards = [...document.querySelectorAll("[data-product-name]")];
  const emptyState = document.querySelector("#empty-state");

  if (searchInput && productCards.length) {
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.trim().toLowerCase();
      let visibleCount = 0;

      productCards.forEach((card) => {
        const matches = card.dataset.productName.toLowerCase().includes(searchTerm);
        card.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      if (emptyState) emptyState.hidden = visibleCount !== 0;
    });
  }

  // Sort product cards without losing their original markup or enquiry links.
  const productList = document.querySelector("#product-list");
  const sortSelect = document.querySelector("#product-sort");
  if (productList && sortSelect) {
    const originalOrder = [...productList.querySelectorAll(".product-card")];
    const getPrice = (card) => {
      const match = card.querySelector(".product-info strong")?.textContent.match(/[0-9]+/g);
      return match ? Number(match.join("")) : 0;
    };
    sortSelect.addEventListener("change", () => {
      const cards = [...productList.querySelectorAll(".product-card")];
      const mode = sortSelect.value;
      cards.sort((a, b) => {
        if (mode === "price-asc") return getPrice(a) - getPrice(b);
        if (mode === "price-desc") return getPrice(b) - getPrice(a);
        if (mode === "name") return a.dataset.productName.localeCompare(b.dataset.productName);
        return originalOrder.indexOf(a) - originalOrder.indexOf(b);
      });
      cards.forEach((card) => productList.appendChild(card));
    });
  }

  // Accessible image lightbox for product images, with Escape/backdrop support.
  const lightboxTriggers = [...document.querySelectorAll(".lightbox-trigger")];
  if (lightboxTriggers.length) {
    const dialog = document.createElement("dialog");
    dialog.className = "image-lightbox";
    dialog.setAttribute("aria-label", "Enlarged product image");
    dialog.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close enlarged image">×</button><img alt=""><p class="lightbox-caption"></p>';
    document.body.appendChild(dialog);
    const dialogImage = dialog.querySelector("img");
    const caption = dialog.querySelector(".lightbox-caption");
    const closeButton = dialog.querySelector(".lightbox-close");
    let lastTrigger = null;
    lightboxTriggers.forEach((trigger) => trigger.addEventListener("click", () => {
      const image = trigger.querySelector("img");
      if (!image) return;
      lastTrigger = trigger;
      dialogImage.src = image.currentSrc || image.src;
      dialogImage.alt = image.alt;
      caption.textContent = image.alt;
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
      closeButton.focus();
    }));
    closeButton.addEventListener("click", () => dialog.close ? dialog.close() : dialog.removeAttribute("open"));
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close ? dialog.close() : dialog.removeAttribute("open");
    });
    dialog.addEventListener("close", () => lastTrigger?.focus());
  }

  // If the visitor follows a product enquiry link, preselect that product.
  const enquiryProduct = document.querySelector("#enquiry-product");
  if (enquiryProduct) {
    const requestedProduct = new URLSearchParams(window.location.search).get("product");
    if (requestedProduct) {
      const matchingOption = [...enquiryProduct.options].find(
        (option) => option.text.trim().toLowerCase() === requestedProduct.trim().toLowerCase()
      );
      if (matchingOption) enquiryProduct.value = matchingOption.value;
    }
  }

  // Validate both forms and prepare an email draft. Configure the real recipient below
  // before publishing; static HTML cannot send email or provide AJAX without a backend.
  const FORM_RECIPIENT_EMAIL = "ST10507503@rcconnect.edu.za";

  function configureEmailForm(formId, feedbackId, formTitle) {
    const form = document.getElementById(formId);
    const feedback = document.getElementById(feedbackId);
    if (!form || !feedback) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      feedback.className = "form-feedback";

      if (!form.checkValidity()) {
        form.reportValidity();
        feedback.textContent = "Please check the highlighted fields and enter valid information.";
        feedback.classList.add("error");
        return;
      }

      if (!FORM_RECIPIENT_EMAIL || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(FORM_RECIPIENT_EMAIL)) {
        feedback.textContent = "Your details are valid, but the site owner must configure a real recipient email address in script.js before this form can prepare an email. Nothing has been sent or stored.";
        feedback.classList.add("error");
        return;
      }

      const values = new FormData(form);
      const lines = [
        `${formTitle} — Ubuntu Urban Wear`,
        "",
        ...[...values.entries()].map(([key, value]) => `${key}: ${String(value).trim()}`)
      ];
      const subject = encodeURIComponent(`${formTitle} from ${values.get("name")}`);
      const body = encodeURIComponent(lines.join("\n"));
      const mailto = `mailto:${FORM_RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;

      // Opening the visitor's email application is the only send path available
      // without a server endpoint. Do not imply that an email was delivered.
      window.location.href = mailto;
      feedback.textContent = "Your email application should open with the message prepared. Review it and press Send there; this website cannot confirm delivery.";
      feedback.classList.add("success");
    });
  }

  configureEmailForm("enquiry-form", "enquiry-feedback", "Product enquiry");
  configureEmailForm("contact-form", "contact-feedback", "General contact message");
});
