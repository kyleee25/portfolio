document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".navbar-toggle");
  const links = document.querySelector(".navbar-links");

  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
    });
  });
});
