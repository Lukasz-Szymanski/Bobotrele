// hamburger menu in mobile browsers
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// opinions slider
const imgContainer = document.querySelector(".slider");
const imgList = document.querySelectorAll(".slider img");
let currImg = 0;

function updateImage() {
  if (currImg >= imgList.length) {
    currImg = 0;
  }

  imgList[currImg].scrollIntoView({ behavior: "smooth" });

  currImg++;
}

let timeoutID = setInterval(() => {}, 7000);

updateImage();
// create buttons

const bobotreleButton = document.getElementById("bobotrele-btn");
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
const footerSection = document.getElementById("footer");
const lessonSection = document.getElementById("lesson");
const blogSection = document.getElementById("blog");
const offerSection = document.getElementById("offer");
const contactSection = document.getElementById("contact");
const newsSection = document.getElementById("news");

// display action

function showMain() {
  headerSection.style.display = "flex";
  mainSection.style.display = "flex";
  aboutSection.style.display = "flex";
  opinionsSection.style.display = "flex";
  socialSection.style.display = "flex";
  newsSection.style.display = "flex";
  lessonSection.style.display = "none";
  footerSection.style.display = "flex";
  blogSection.style.display = "none";
  offerSection.style.display = "none";
  contactSection.style.display = "none";
}

function showLesson() {
  headerSection.style.display = "flex";
  mainSection.style.display = "none";
  aboutSection.style.display = "none";
  opinionsSection.style.display = "none";
  socialSection.style.display = "none";
  lessonSection.style.display = "flex";
  footerSection.style.display = "flex";
  contactSection.style.display = "none";
  offerSection.style.display = "none";
  blogSection.style.display = "none";
  newsSection.style.display = "none";
}
function showBlog() {
  headerSection.style.display = "flex";
  mainSection.style.display = "none";
  aboutSection.style.display = "none";
  opinionsSection.style.display = "none";
  socialSection.style.display = "none";
  lessonSection.style.display = "none";
  footerSection.style.display = "flex";
  blogSection.style.display = "flex";
  offerSection.style.display = "none";
  contactSection.style.display = "none";
  newsSection.style.display = "none";
}
function showOffer() {
  headerSection.style.display = "flex";
  mainSection.style.display = "none";
  aboutSection.style.display = "none";
  opinionsSection.style.display = "none";
  socialSection.style.display = "none";
  footerSection.style.display = "flex";
  lessonSection.style.display = "none";
  blogSection.style.display = "none";
  offerSection.style.display = "flex";
  contactSection.style.display = "none";
  newsSection.style.display = "none";
}
function showContact() {
  contactSection.style.display = "flex";
  headerSection.style.display = "flex";
  mainSection.style.display = "none";
  aboutSection.style.display = "none";
  opinionsSection.style.display = "none";
  socialSection.style.display = "none";
  lessonSection.style.display = "none";
  footerSection.style.display = "flex";
  offerSection.style.display = "none";
  blogSection.style.display = "none";
  newsSection.style.display = "none";
}

// button reaction

bobotreleButton.addEventListener("click", function () {
  showMain();
});

lessonButton.addEventListener("click", function () {
  showLesson();
});
blogButton.addEventListener("click", function () {
  showBlog();
});
offerButton.addEventListener("click", function () {
  showOffer();
});
regulationButton.addEventListener("click", function () {});
contactButton.addEventListener("click", function () {
  showContact();
});

window.addEventListener("load", function () {
  showMain();
});
