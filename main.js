// ---------- Mobile nav menu ----------
function toggleMenu() {
  document.getElementById("navPill").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("navPill").classList.remove("active");
}

// ---------- Smooth scroll for in-page links ----------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ---------- Fade-in on scroll ----------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
);

document.querySelectorAll(".fade-target").forEach((el) => observer.observe(el));

// ---------- Active nav link on scroll ----------
window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section[id]").forEach((section) => {
    if (pageYOffset >= section.offsetTop - 200) {
      current = section.getAttribute("id");
    }
  });
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href").slice(1) === current);
  });
});
