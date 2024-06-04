function findSliders(eventId) {
  document.querySelectorAll('.cs-slider').forEach((slider) => {
    /* console.log('eventId:', eventId);
    console.log('slider.id:', slider.getAttribute('section-id')); */
    new Splide(`#${slider.id}`).mount();
  });
}

document.addEventListener('DOMContentLoaded', findSliders);

document.addEventListener('shopify:section:load', (event) => {
  document.querySelectorAll('.cs-slider').forEach((slider) => {
    /* console.log(event.target.id);
    console.log(slider.getAttribute('section-id')); */
    if (event.target.id == slider.getAttribute('section-id')) {
      new Splide(`#${slider.id}`).mount();
    }
  });
});
