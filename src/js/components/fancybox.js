import { Fancybox } from '@fancyapps/ui';

export default function() {
    const fixedHeader = document.querySelector('.header__main');

    Fancybox.bind('[data-fancybox]', {
        dragToClose: false,
        on: {
            init: () => {
                if (document.documentElement.classList.contains('page-scrolled')) {
                    const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
                    fixedHeader.style.paddingRight = scrollbarW + 'px';
                }
            },
            destroy: () => {
                fixedHeader.style.paddingRight = '';
            }
        },
    });
}
