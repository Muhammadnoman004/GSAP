// gsap.from("h1", {
//   opacity: 0,
//   y: 100,
//   duration: 2,
//   delay: 1,
//   stagger: 0.3,
// });
// gsap.to("#box1", {
//   x: 1400,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "blue",
//   borderRadius: "50%",
//   scale: 0.8,
//   repeat: -1,
//   yoyo: true,
// });

// var tl = gsap.timeline();

// tl.to("#box2", {
//   x: 1350,
//   duration: 2,
//   delay: 3,
// });
// tl.to("#box3", {
//   x: 1350,
//   duration: 2,
// });
// tl.to("#box4", {
//   x: 1350,
//   duration: 2,
// });

var tl = gsap.timeline();

tl.from("h2", {
  y: -30,
  duration: 1,
  opacity: 0,
  delay: 1,
});
tl.from("h4", {
  y: -30,
  duration: 1,
  opacity: 0,
  stagger: 0.1,
});
tl.from("i", {
  y: -30,
  duration: 0.5,
  opacity: 0,
  stagger: 0.1,
});
tl.from("h1", {
  y: 30,
  opacity: 0,
  duration: 0.5,
  scale: 0.025,
});

const ClickBtn = document.querySelector("#ClickBtn");
const CloseBtn = document.querySelector("#CloseBtn");
const navLinkDiv = document.querySelector("#navLinkDiv");
const dropdown = document.querySelector("#dropdown");
const dropdownDiv = document.querySelector("#dropdownDiv");
const dropdownArrow = document.querySelector(".dropdownArrow");
const isCollapsedropdown = document.querySelector("#isCollapsedropdown");
const about = document.querySelector("#about");

ClickBtn.addEventListener("click", () => {
  navLinkDiv.style.position = "absolute";
  navLinkDiv.style.right = 0;
});

CloseBtn.addEventListener("click", () => {
  navLinkDiv.style.position = "absolute";
  navLinkDiv.style.right = "-100%";
});

let openAndClose = false;

dropdownArrow.addEventListener("click", () => {
  if (openAndClose) {
    isCollapsedropdown.style.maxHeight = 0;
  } else {
    isCollapsedropdown.style.maxHeight = "999px";
  }
  openAndClose = !openAndClose;
});

// dropdownArrow.addEventListener("click", () => {
// });

// about.addEventListener("mouseover", () => {
//   dropdownDiv.style.display = "block";
// });
// about.addEventListener("mouseleave", () => {
//   dropdownDiv.style.display = "none";
// });
