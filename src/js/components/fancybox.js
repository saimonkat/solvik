import { Fancybox } from '@fancyapps/ui';
import {gsap} from "gsap";

export default function() {
    const fixedHeader = document.querySelector('.header__main');
    let fancyCount = 0;
    let fancySlide;

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
                    // Close previous fancybox when another open
                    fancySlide.classList.add('fancybox-init');
                    Fancybox.close();
                }
            },
            done: (fancybox) => {
                // Notice modal touch close
                fancySlide = fancybox.getSlide().$el;
                const fancyNotice = fancySlide.querySelector('.modal--notice');

                if (fancyNotice) {
                    let touchStartY = 0;
                    let touchMoveY = 0;

                    fancyNotice.addEventListener('touchstart', function(e){
                        touchStartY = e.touches[0].clientY;
                    })

                    fancyNotice.addEventListener('touchmove', function(e){
                        touchMoveY = e.touches[0].clientY - touchStartY;
                        gsap.to(fancyNotice, {y: touchMoveY});
                    })

                    fancyNotice.addEventListener('touchend', function(e) {
                        if (touchMoveY > 40) {
                            Fancybox.close();
                            setTimeout(() => {
                                gsap.to(fancyNotice, {y: 0});
                            }, 300)
                        } else {
                            gsap.to(fancyNotice, {y: 0});
                        }
                    })
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

    const modalBgs = document.querySelectorAll('.modal__bg');
    modalBgs && modalBgs.forEach(modalBg => {
        modalBg.addEventListener('click', () => {
            Fancybox.close();
        })
    });
}
