const navbar = document.querySelector(".my-nav");
const containerNavbar = document.querySelector(".my-nav .container");
const menus = document.querySelector(".my-nav ul.menu");

const toggle = document.querySelector(".hamburger-menu");

let currentScroll = 0;
window.onscroll = function () {
  let scroll = window.scrollY;

  currentScroll = scroll;
  // for navbar
  navbar.style.height = containerNavbar.offsetHeight;
  if (!toggle.classList.contains("show-menu")) {
    navbar.classList.toggle("scrolling", scroll > 10);
  }
};
// setInterval(() => {
//   console.log(currentScroll);
// }, 1000);

toggle.addEventListener("click", function () {
  if (!navbar.classList.contains("scrolling")) {
    navbar.classList.add("scrolling");
  } else if (currentScroll < 50) {
    navbar.classList.remove("scrolling");
  }
  toggle.classList.toggle("show-menu");
  menus.classList.toggle("show-menu");
  menus.classList.add("fade-in");
});
