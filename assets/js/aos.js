const titleSections = document.querySelectorAll(".title-section");
const textDesc = document.querySelectorAll(".text-desc p");
const cardsLegalitas = document.querySelectorAll("#legalitas .row .card");
const marketPlans = document.querySelectorAll(
  "#market-plan .carousel-item .row"
);

titleSections.forEach((ts) => {
  ts.parentElement.dataset.aos = "fade-right";
});

textDesc.forEach((td) => {
  td.dataset.aos = "fade-up";
});

cardsLegalitas.forEach((cl, i) => {
  cl.dataset.aos = "fade-up";
  cl.dataset.aosDelay = (i + 1) * 100;
});

marketPlans.forEach((mp) => {
  mp.children[0].dataset.aos = "fade-right";
  mp.children[1].dataset.aos = "fade-left";
  mp.children[1].dataset.aosDelay = 200;
});

AOS.init({});
