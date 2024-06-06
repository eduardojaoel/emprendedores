function findSliders(eventId) {
  document.querySelectorAll('.cs-marquee.splide').forEach((slider) => {
    /* console.log('eventId:', eventId);
    console.log('slider.id:', slider.getAttribute('section-id')); */
    new Splide(`#${slider.id}`).mount(window.splide.Extensions);
  });
}

document.addEventListener('DOMContentLoaded', findSliders);

document.addEventListener('shopify:section:load', (event) => {
  document.querySelectorAll('.cs-marquee.splide').forEach((slider) => {
    /* console.log(event.target.id);
    console.log(slider.getAttribute('section-id')); */
    if (event.target.id == slider.getAttribute('section-id')) {
      new Splide(`#${slider.id}`).mount(window.splide.Extensions);
    }
  });
});
