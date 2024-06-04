function findSliders(eventId) {
  document.querySelectorAll('.cs-slideshow').forEach((slider) => {
    /* console.log('eventId:', eventId);
    console.log('slider.id:', slider.getAttribute('section-id')); */
    let sliderId = slider.id;
    let splide = new Splide(`#${sliderId}`).mount();

    splide.on('move', function (newIndex, prevIndex) {
      document.querySelectorAll(`#${sliderId} .cs-slideshow-with-text__text-item`).forEach((textItem) => {
        textItem.classList.remove('is-active');

        if (textItem.getAttribute('data-text-index') == newIndex) {
          textItem.classList.add('is-active');
        }

        document.querySelector(`#${sliderId} .cs-slideshow-with-text__pagination .current`).innerHTML = newIndex + 1;
      });

      document.querySelectorAll(`#${sliderId} .cs-slideshow-with-text__button .button`).forEach((button) => {
        button.classList.remove('is-active');

        if (button.getAttribute('data-button-index') == newIndex) {
          button.classList.add('is-active');
        }
      });

      //console.log(`Oculta el elemento #${prevIndex} de '${sliderId} .cs-slideshow-with-text__text-item`);
      //console.log(`Muestra el elemento #${newIndex} de '${sliderId} .cs-slideshow-with-text__text-item`);
    });
  });
}

document.addEventListener('DOMContentLoaded', findSliders);

document.addEventListener('shopify:section:load', (event) => {
  document.querySelectorAll('.cs-slideshow').forEach((slider) => {
    /* console.log(event.target.id);
    console.log(slider.getAttribute('section-id')); */
    if (event.target.id == slider.getAttribute('section-id')) {
      let sliderId = slider.id;
      let splide = new Splide(`#${sliderId}`).mount();

      splide.on('move', function (newIndex, prevIndex) {
        document.querySelectorAll(`#${sliderId} .cs-slideshow-with-text__text-item`).forEach((textItem) => {
          textItem.classList.remove('is-active');

          if (textItem.getAttribute('data-text-index') == newIndex) {
            textItem.classList.add('is-active');
          }

          document.querySelector(`#${sliderId} .cs-slideshow-with-text__pagination .current`).innerHTML = newIndex + 1;
        });

        document.querySelectorAll(`#${sliderId} .cs-slideshow-with-text__button .button`).forEach((button) => {
          button.classList.remove('is-active');

          if (button.getAttribute('data-button-index') == newIndex) {
            button.classList.add('is-active');
          }
        });

        //console.log(`Oculta el elemento #${prevIndex} de '${sliderId} .cs-slideshow-with-text__text-item`);
        //console.log(`Muestra el elemento #${newIndex} de '${sliderId} .cs-slideshow-with-text__text-item`);
      });
    }
  });
});
