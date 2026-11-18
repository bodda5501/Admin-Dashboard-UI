document.addEventListener("DOMContentLoaded", () => {
  // 1. Active Navigation State & Dynamic Page Title
  const navLinks = document.querySelectorAll(".nav-link[data-title]");
  const pageTitle = document.getElementById("page-title");
  const sidebar = document.getElementById("sidebar");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");

      if (pageTitle) {
        pageTitle.textContent = link.getAttribute("data-title");
      }

      // Close mobile sidebar after selection
      if (sidebar) {
        sidebar.classList.remove("mobile-open");
      }
    });
  });

  // 2. Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("mobile-open");
    });
  }

  // 3. Animated Number Counters
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const prefix = counter.getAttribute("data-prefix") || "";
    const duration = 1200; // ms
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = `${prefix}${target}`;
        clearInterval(timer);
      } else {
        counter.textContent = `${prefix}${Math.ceil(current)}`;
      }
    }, stepTime);
  });
});
