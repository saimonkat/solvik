import { Fancybox } from '@fancyapps/ui';

export default function() {
    const fixedHeader = document.querySelector('.header__main');
    let fancyCount = 0;

    Fancybox.bind('[data-fancybox]', {
        dragToClose: false,
        animated: false,
        on: {
            init: () => {
                fancyCount++;
                // Is first fancybox
                if (fancyCount == 1) {
                    // Add fixed header padding fix
                    if (document.documentElement.classList.contains('page-scrolled')) {
                        const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
                        fixedHeader.style.paddingRight = scrollbarW + 'px';
                    }
                }
                else {
                    // Close previous fancybox on another oper
                    const fancy = document.querySelector('.fancybox__container');
                    fancy.classList.add('fancybox-init');
                    Fancybox.close();
                }
            },
            destroy: () => {
                fancyCount--;
                // Is last fancybox
                if (fancyCount == 0) {
                    // Remove fixed header padding fix
                    fixedHeader.style.paddingRight = '';
                }
            }
        },
    });
}
