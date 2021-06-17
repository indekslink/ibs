const navbar = document.querySelector(".my-nav");
const containerNavbar = document.querySelector(".my-nav .container");
window.onscroll = function () {
  const scroll = window.scrollY;
  if (scroll > 50) {
    navbar.style.height = containerNavbar.offsetHeight;
    navbar.classList.add("scrolling");
  } else {
    navbar.classList.remove("scrolling");
  }
};
