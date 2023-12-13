//this is use to animate my fist section where u can see skills, experiences and education
var links = document.getElementsByClassName("link");
var contents = document.getElementsByClassName("contents");

function opentab(section) {
  for (link of links) {
    link.classList.remove("activelink");
  }
  for (content of contents) {
    content.classList.remove("activetab");
  }
  event.currentTarget.classList.add("activelink");
  document.getElementById(section).classList.add("activetab");
}

//creating a downloadable cv, user clicks and gets a copy of my cv

var downloadButton = document.getElementById("downloadbtn");

downloadButton.addEventListener("click", function () {
  event.preventDefault();

  var downloadLink = document.createElement("a");

  downloadLink.href = "cv.pdf";

  downloadLink.download = "danielsCV.pdf";

  document.body.appendChild(downloadLink);

  downloadLink.click();

  document.body.removeChild(downloadLink);
});

//images carrousel

// array of images for background
var images = [
  "background.jpg",
  "background2.jpg",
  "background3.jpg",
  "background4.jpg",
];

var currentImageIndex = 0;

function changeBackgroundImage() {
  var header = document.querySelector(".header");

  header.style.backgroundImage = "url(" + images[currentImageIndex] + ")";

  currentImageIndex++;

  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
}

setInterval(changeBackgroundImage, 2000);
//this is the alien ship animation

window.onload = function () {
  const animatedImage = document.getElementById("animation");
  const documentWidth = document.documentElement.scrollWidth;
  const imageWidth = animatedImage.clientWidth;
  const finalPosition = documentWidth - imageWidth;
  const animationDuration = 6000;

  function animateRight() {
    animatedImage.style.transform =
      "translate(" + finalPosition + "px, -50%) rotate(180deg)";
    setTimeout(animateLeft, animationDuration / 2);
  }

  function animateLeft() {
    animatedImage.style.transform = "translate(0px, -50%) rotate(0deg)";
    setTimeout(animateRight, animationDuration / 2);
  }

  setTimeout(animateRight, 1000);
};

//this works for the menu bar when the screen is small (for responsiveness)

var menu = document.getElementById("menu");

function menuopen() {
  menu.style.right = "0";
}
function menuclose() {
  menu.style.right = "-200px";
}
