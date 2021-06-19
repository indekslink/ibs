const navbar = document.querySelector(".my-nav");
const containerNavbar = document.querySelector(".my-nav .container");
const menus = document.querySelector(".my-nav ul.menu");

const toggle = document.querySelector(".hamburger-menu");

const modalReadMore = new bootstrap.Modal(
  document.getElementById("modalReadMore"),
  {
    backdrop: "static",
  }
);

let currentScroll = 0;

window.onscroll = function () {
  let scroll = window.scrollY;

  currentScroll = scroll;
  // for navbar
  navbar.style.height = containerNavbar.offsetHeight;
  if (!toggle.classList.contains("show-menu")) {
    navbar.classList.toggle("scrolling", scroll > 5);
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

let clickMenu = Array.from(document.querySelectorAll("ul.menu a.link-menu"));
const menuHomeInLogo = document.querySelector(".logo a");
clickMenu.push(menuHomeInLogo);

clickMenu.forEach((m) => {
  m.addEventListener("click", function (e) {
    e.preventDefault();

    const elementId = m.getAttribute("href");
    const goToElement = document.querySelector(elementId);

    const inMobile =
      window.innerWidth > 768
        ? navbar.offsetHeight
        : navbar.offsetHeight - menus.offsetHeight - 20;
    console.log(inMobile);
    if (goToElement) {
      window.scrollTo(0, goToElement.offsetTop - 60);
    }
  });
});

// for profile content
// const contentsProfile = Array.from(
//   document.querySelector("section#profile .container").children[1].children
// );
// contentsProfile.forEach((el, i) => {
//   if ((i + 1) % 2 == 0) {
//     el.children[0].classList.add("align-items-end");
//   }
// });

// read more and read less
const linkReadMore = document.querySelectorAll(".read-text");
linkReadMore.forEach((link) => {
  link.addEventListener("click", function () {
    // mendapatkan text more dari link read more yang diklik
    const textTitle = link.getAttribute("data-title");
    const textMore = document.querySelector(
      link.getAttribute("data-target")
    ).innerHTML;
    document.querySelector("#modalReadMore .modal-title").innerHTML = textTitle;
    document.querySelector("#modalReadMore .modal-body").innerHTML = textMore;
    modalReadMore.show();
  });
});

var myModalEl = document.getElementById("modalReadMore");
myModalEl.addEventListener("hidden.bs.modal", function () {
  document.querySelector("#modalReadMore .modal-title").innerHTML = null;
  document.querySelector("#modalReadMore .modal-body").innerHTML = null;
});

const sliderMarketPlan = document.getElementById("carouselExampleCaptions");
const carouselBsMarketPlan = new bootstrap.Carousel(sliderMarketPlan, {
  wrap: false,
});
