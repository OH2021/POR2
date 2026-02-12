// Select elements
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

// Toggle menu
navToggle.addEventListener("click", () => {
  siteNav.classList.toggle("open");
});
