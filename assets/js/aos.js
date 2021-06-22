const titleSections = document.querySelectorAll(".title-section");
const titleSections2 = document.querySelectorAll(".title-section-2");
const textDesc = document.querySelectorAll(".text-desc p");
const cardsLegalitas = document.querySelectorAll("#legalitas .row .card");
const marketPlans = document.querySelectorAll(
  "#market-plan .carousel-item .row"
);
const btnProduks = document.querySelectorAll("#produk .nav-pills .nav-item");
const cardsProduk = document.querySelectorAll("#produk .card");

titleSections.forEach((ts) => {
  ts.parentElement.dataset.aos = "fade-right";
});
titleSections2.forEach((ts2) => {
  ts2.parentElement.dataset.aos = "fade-up";
});

textDesc.forEach((td) => {
  td.dataset.aos = "fade-up";
});

cardsLegalitas.forEach((cl, i) => {
  cl.dataset.aos = "fade-up";
  cl.dataset.aosDelay = (i + 1) * 100;
});
btnProduks.forEach((bp, i) => {
  bp.dataset.aos = "fade-up";
  bp.dataset.aosDelay = (i + 1) * 100;
});
cardsProduk.forEach((cp, i) => {
  cp.dataset.aos = "flip-left";
  cp.dataset.aosDelay = (i + 1) * 100;
});

marketPlans.forEach((mp) => {
  mp.children[0].dataset.aos = "fade-right";
  mp.children[1].dataset.aos = "fade-left";
  mp.children[1].dataset.aosDelay = 200;
});

let currentWidth = $(window).width();
window.onresize = function () {
  currentWidth = $(window).width();
  cekDevice();
};

// window.onreadystatechange = function () {
//   currentWidth = window.innerWidth;
// };

let reload = true;
let oriArrays = null;
function cekDevice() {
  oriArrays = reload ? arrayGroupAOS(cardsProduk, cardsLegalitas) : oriArrays;
  const manipulate = oriArrays;

  if (currentWidth < 767) {
    manipulate.forEach((arr) => {
      arr.el.dataset.aos = "fade-up";
    });
  } else {
    oriArrays.forEach((ar) => {
      ar.el.dataset.aos = ar.default;
    });
  }

  reload = false;
}
cekDevice();
AOS.init({
  once: true,
});
