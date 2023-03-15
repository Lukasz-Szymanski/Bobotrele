// hamburger menu in mobile browsers
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// opinions slider
const numImg = document.querySelectorAll("img").length;
let currImg = 1;

let timeoutID;

const imgContainer = document.querySelector(".slider");

function updateImage() {
  if (currImg > numImg) {
    currImg = 1;
  }
  if (currImg > numImg / 4) {
    currImg = 1;
  }
  imgContainer.style.transform = `translateX(-${(currImg - 1) * 768}px)`;

  timeoutID = setTimeout(() => {
    currImg++;
    updateImage();
  }, 7000);
}

updateImage();

// create buttons

const bobotreleButton = document.getElementById("bobotrele-btn");
const newsButton = document.getElementById("news-btn");
const lessonButton = document.getElementById("lesson-btn");
const blogButton = document.getElementById("blog-btn");
const offerButton = document.getElementById("offer-btn");
const regulationButton = document.getElementById("regulation-btn");
const contactButton = document.getElementById("contact-btn");

// variables display

const headerSection = document.getElementById("header");
const mainSection = document.getElementById("main");
const aboutSection = document.getElementById("about");
const opinionsSection = document.getElementById("opinions");
const socialSection = document.getElementById("social");
const lessonSection = document.getElementById("lesson");
const footerSection = document.getElementById("footer");

// display action

function showMain() {
  headerSection.style.display = "flex";
  mainSection.style.display = "flex";
  aboutSection.style.display = "flex";
  opinionsSection.style.display = "flex";
  socialSection.style.display = "flex";
  lessonSection.style.display = "none";
  footerSection.style.display = "flex";
}

function showLesson() {
  headerSection.style.display = "flex";
  mainSection.style.display = "none";
  aboutSection.style.display = "none";
  opinionsSection.style.display = "none";
  socialSection.style.display = "none";
  lessonSection.style.display = "flex";
  footerSection.style.display = "flex";
}

// button reaction

bobotreleButton.addEventListener("click", function () {
  showMain();
});
lessonButton.addEventListener("click", function () {
  showLesson();
});

window.addEventListener("load", function () {
  showMain();
});
