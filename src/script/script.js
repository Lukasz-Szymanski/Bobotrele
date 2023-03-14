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
  imgContainer.style.transform = `translateX(-${(currImg - 1) * 768}px)`;

  timeoutID = setTimeout(() => {
    currImg++;
    updateImage();
  }, 7000);
}

updateImage();
