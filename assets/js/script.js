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
    navbar.classList.toggle("scrolling", scroll > 5);
  }

  document.querySelector("a.to-top").classList.toggle("show", scroll > 100);
};

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

let clickMenu = Array.from(
  document.querySelectorAll("ul.menu a.link-menu:not(.dropdown-toggle)")
);

const menuHomeInLogo = document.querySelector(".logo a");
const toTop = document.querySelector("a.to-top");

const useSubMenu = Array.from(
  document.querySelectorAll(".use-sub-menu li a.dropdown-item")
).map((item) => clickMenu.push(item));

clickMenu.push(menuHomeInLogo, toTop);

clickMenu.forEach((m) => {
  m.addEventListener("click", function (e) {
    e.preventDefault();

    const elementId = m.getAttribute("href");
    const goToElement = document.querySelector(elementId);

    if (goToElement) {
      window.scrollTo(0, goToElement.offsetTop - 90);
    }
  });
});

// document.querySelectorAll('#produk button.nav-link').forEach(el=>{
//   el.addEventListener('click',function)
// })

const sliderMarketPlan = document.getElementById("carouselMarketPlan");
const carouselBsMarketPlan = new bootstrap.Carousel(sliderMarketPlan, {
  wrap: false,
});

$("#produk .owl-carousel, #gallery .owl-carousel").owlCarousel({
  stagePadding: 20,
  margin: 5,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    569: {
      items: 2,
    },
    767: {
      items: 3,
    },
    1024: {
      items: 4,
    },
  },
});
$("#content-testimoni .owl-carousel").owlCarousel({
  stagePadding: 20,
  margin: 10,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    569: {
      items: 2,
    },
    767: {
      items: 3,
    },
  },
});

function elLightBox(src, idLightbox) {
  return `<a href="${src}"  data-fancybox="${idLightbox}" class="lightbox"></a>`;
}
$("img.add-lightbox").each((i, el) => {
  let href = $(el).attr("src");
  let lightBoxId = $(el).data("lb-id");

  $(el)
    .parent()
    .prepend($(elLightBox(href, lightBoxId)).html(el));
});
var typed = new Typed(".text-typed", {
  // Waits 1000ms after typing "First"
  strings: [
    "Leader IBS Indonesia ",
    " Travel Consultant ",
    " Tour Leader Umroh",
  ],
  loop: true,
  typeSpeed: 100,
  backDelay: 1000,
  backSpeed: 100,
  startDelay: 1000,
});

// get size image of slider
const sliderImages = document.querySelectorAll("#home .carousel-item img");
sliderImages.forEach((img, i) => {
  if (img.height > img.width) {
    img.parentElement.classList.add("image-full-height");
  } else {
    img.classList.add("w-100");
  }
});

function register() {
  const url =
    "https://api.whatsapp.com/send?phone=6282333888499&text=Silahkan%20isi%20form%20tersebut:%0A%0ANama%20:%20%0AEmail%20:%20%0ANo.Telepon%20:%20";
  window.open(url, "_blank");
}
