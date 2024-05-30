function findSliders() {
  document.querySelectorAll('.cs-slider').forEach((slider) => {
    new Splide(`#${slider.id}`).mount();
  });
}

document.addEventListener('DOMContentLoaded', findSliders);

document.addEventListener('shopify:section:load', findSliders);