import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

export default function () {
    const homeHeroSlider = document.querySelector('.home-hero-slider');
    homeHeroSlider && new Swiper(homeHeroSlider, {
        slidesPerView: 1,
        autoHeight: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        speed: 700,
        breakpoints: {
            768: {
                autoHeight: false,
            }
        }
    });

    const testSlider = document.querySelector('.test-slider');
    testSlider && new Swiper(testSlider, {
        direction: 'horizontal',
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
