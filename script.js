/**
 * TITAN GYM - Landing Page Interactive Script
 * Pure Vanilla JavaScript (No External Dependencies)
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Google Maps Navigation URL Variable
  // آدرس قابل تغییر برای دکمه مسیر‌یابی روی نقشه
  const MAPS_LOCATION_URL = "https://maps.app.goo.gl/9boScCdgz5Nv69E3A";

  // 2. Top menu compact sticky behavior
  const nobar = document.getElementById("nobar");

  window.addEventListener("scroll", () => {
    if (!nobar) return;

    if (window.scrollY > 50) {
      nobar.classList.add("scrolled");
    } else {
      nobar.classList.remove("scrolled");
    }
  });

  // 3. Smooth Scroll offset calculation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // 4. Rules are now displayed as a static itemized box (no accordion behavior)

  // 5. Scroll Reveal System (Intersection Observer)
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Reveal only once
        }
      });
    },
    {
      root: null,
      threshold: 0.15,
    },
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

  // 6. Location Route Button Action
  const routeBtn = document.getElementById("routeBtn");
  if (routeBtn) {
    routeBtn.addEventListener("click", () => {
      window.open(MAPS_LOCATION_URL, "_blank", "noopener,noreferrer");
    });
  }
});
