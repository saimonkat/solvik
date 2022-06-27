import { Fancybox } from '@fancyapps/ui';
import {gsap} from "gsap";

export default function() {
    const dom = document.documentElement;
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
                    if (dom.classList.contains('page-scrolled')) {
                        const scrollbarW = window.innerWidth - dom.clientWidth;
                        fixedHeader.style.paddingRight = scrollbarW + 'px';
                    }
                }
                else {
                    // Close previous fancybox when another open
                    dom.classList.add('fancybox-change');
                    Fancybox.close();
                }
            },
            reveal: (fancybox) => {
                const fancySlide = fancybox.getSlide().$el;
                modalTimer(fancySlide);
            },
            done: (fancybox) => {
                dom.classList.remove('fancybox-change');

                // Notice modal touch close
                const fancySlide = fancybox.getSlide().$el;
                const modalNotice = fancySlide.querySelector('.modal--notice');

                if (modalNotice) {
                    let touchStartY = 0;
                    let touchMoveY = 0;

                    function noticeStart(e) {
                        touchStartY = e.touches[0].clientY;
                    }

                    function noticeMove(e) {
                        touchMoveY = e.touches[0].clientY - touchStartY;
                        if (touchMoveY > 0) {
                            gsap.to(modalNotice, {y: touchMoveY});
                        }
                    }

                    function noticeEnd(e) {
                        if (touchMoveY < 40) {
                            gsap.to(modalNotice, {y: 0});
                        } else {
                            Fancybox.close();
                            setTimeout(() => {
                                gsap.to(modalNotice, {clearProps: 'all'});
                            }, 300)

                            modalNotice.removeEventListener('touchstart', noticeStart);
                            modalNotice.removeEventListener('touchmove', noticeMove);
                            modalNotice.removeEventListener('touchend', noticeEnd);
                        }
                    }

                    modalNotice.addEventListener('touchstart', noticeStart);
                    modalNotice.addEventListener('touchmove', noticeMove);
                    modalNotice.addEventListener('touchend', noticeEnd);
                }
            },
            destroy: (fancybox) => {
                fancyCount--;
                // Is last fancybox
                if (fancyCount == 0) {
                    // Remove fixed header padding fix
                    fixedHeader.style.paddingRight = '';
                }

                const fancySlide = fancybox.getSlide().$el;
                const modalNotice = fancySlide.querySelector('.modal--notice');

                if (modalNotice) {
                    const modalBtn = modalNotice.querySelector('.modal__btn');
                    modalBtn.click();
                }
            }
        },
    });

    let timerInterval;
    function modalTimer(modal) {
        const timer = modal.querySelector('.modal__timer');
        if (timer) {
            const newCode = modal.querySelector('.modal__new-code');
            const timerSec = timer.querySelector('span');

            timer.style.display = 'block';
            newCode.style.display = 'none';
            let seconds = 60;

            timerInterval && clearInterval(timerInterval);
            timerSec.innerHTML = seconds;

            timerInterval = setInterval(() => {
                seconds--;
                timerSec.innerHTML = seconds;

                if (seconds == 0) {
                    timer.style.display = 'none';
                    newCode.style.display = 'block';
                    clearInterval(timerInterval);
                }
            }, 1000);
        }
    }

    const modalBgs = document.querySelectorAll('.modal__bg');
    modalBgs && modalBgs.forEach(modalBg => {
        modalBg.addEventListener('click', () => {
            Fancybox.close();
        })
    });
}
