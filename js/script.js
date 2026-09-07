document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     NAVIGATION
  ========================== */
  const toggle = document.querySelector(".navbar-toggle");
  const links = document.querySelector(".navbar-links");
  const navbar = document.getElementById("navbar");
  if (!toggle || !links || !navbar) {
    return;
  }


  /* =========================
     MOBILE MENU
  ========================== */

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );
    toggle.textContent = isOpen ? "✕" : "☰";

  });


  /* =========================
     NAVBAR LINKS
  ========================== */

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || !targetId.startsWith("#")) {
        return;
      }
      const target = document.querySelector(targetId);
      if (!target) {
        return;
      }
      event.preventDefault();

      /* Close mobile menu */

      links.classList.remove("open");
      toggle.setAttribute(
        "aria-expanded",
        "false"
      );

      toggle.textContent = "☰";

      /* Smooth scroll */

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });

  /* =========================
     CLOSE MENU WHEN CLICKING
     OUTSIDE NAVBAR
  ========================== */

  document.addEventListener("click", (event) => {
    const clickedInsideNavbar =
      navbar.contains(event.target);
    if (!clickedInsideNavbar) {
      links.classList.remove("open");
      toggle.setAttribute(
        "aria-expanded",
        "false"
      );
      toggle.textContent = "☰";

    }

  });


  /* =========================
     NAVBAR SCROLL EFFECT
  ========================== */

  const updateNavbar = () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
  );

  updateNavbar();


  /* =========================
     SCROLL REVEAL
  ========================== */

  const revealItems =
    document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);

          });

        },
        {
          threshold: 0.15
        }
      );


    revealItems.forEach((item) => {
      observer.observe(item);
    });

  } else {

    revealItems.forEach((item) => {
      item.classList.add("visible");
    });

  }


  /* =========================
     TIMELINE ANIMATION
  ========================== */

  const timelineItems =
    document.querySelectorAll(".timeline-item");

  if ("IntersectionObserver" in window) {

    const timelineObserver =
      new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }
            entry.target.style.opacity = "1";
            entry.target.style.transform =
              "translateY(0)";
            observer.unobserve(entry.target);

          });

        },
        {
          threshold: 0.2
        }
      );

    timelineItems.forEach((item) => {
      timelineObserver.observe(item);
    });

  } else {

    timelineItems.forEach((item) => {
      item.style.opacity = "1";
      item.style.transform =
        "translateY(0)";
    });

  }

});