import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);

export default function () {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    const homeHeroSlider = document.querySelector('.home-hero-slider');
    homeHeroSlider && new Swiper(homeHeroSlider, {
        slidesPerView: 1,
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        speed: 700,
    });

    const homeAdvSlider = document.querySelector('.home-adv-slider');
    homeAdvSlider && isMobile && new Swiper(homeAdvSlider, {
        slidesPerView: 1,
        spaceBetween: 12,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        speed: 700
    });

    const aboutTeamSlider = document.querySelector('.about-team__slider');
    aboutTeamSlider && new Swiper(aboutTeamSlider, {
        slidesPerView: 'auto',
        spaceBetween: 8,
        navigation: {
            nextEl: '.swiper-button--next',
            prevEl: '.swiper-button--prev',
        },
        speed: 700,
        breakpoints: {
            768: {
                spaceBetween: 32,
            }
        },
    });
}
