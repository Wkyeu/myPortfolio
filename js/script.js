console.log("script.js is loaded!");

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("show");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll('.fade-in');

  function checkScroll() {
      fadeElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
              el.classList.add('visible');
          }
      });
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll();
});