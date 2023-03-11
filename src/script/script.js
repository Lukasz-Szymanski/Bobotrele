// hamburger menu in mobile browsers
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Create display

const headerSection = document.getElementById("header");
const mainSection = document.getElementById("main");
const aboutSection = document.getElementById("about");
const opinionsSection = document.getElementById("opinions");
const socialSection = document.getElementById("social");
const lessonsSection = document.getElementById("lessons");
