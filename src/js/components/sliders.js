import Swiper from 'swiper/swiper-bundle.min.js';

export default function () {
    const testSlider = document.querySelector('.design-slider');

    testSlider && new Swiper(testSlider, {
        direction: "horizontal",
        slidesPerView: 1,
        autoHeight: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        speed: 700,
        breakpoints: {
            992: {

            }
        },
        on: {
            slideChangeTransitionEnd: function() {

            },
        },
    });
}
