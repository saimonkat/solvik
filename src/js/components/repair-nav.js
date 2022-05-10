export default function(){
    const repairNav = document.querySelector('.repair-nav');
    const repairLink = document.querySelector('.repair-link');
    const repairClose = document.querySelector('.repair-close');
    const repairTogglers = document.querySelectorAll('.repair-nav__toggler');
    const repairMenus = document.querySelectorAll('.repair-nav__menu');
    const repairBacks = document.querySelectorAll('.repair-back');
    const isDesktop = window.matchMedia('(min-width: 1200px)').matches;

    if (isDesktop) {
        repairTogglers[0].classList.add('active');
        repairMenus[0].classList.add('active');

        repairLink.addEventListener('mouseenter', () => {
            repairNav.classList.add('active');
        })
        repairLink.addEventListener('mouseleave', () => {
            setTimeout(() => {
                repairNav.classList.remove('active');
            }, 500)
        })
    }

    repairLink.addEventListener('click', e => {
        e.preventDefault();
        repairNav.classList.add('active');
    })

    repairClose.addEventListener('click', () => {
        repairNav.classList.remove('active');
    })

    repairTogglers.forEach(toggler => {
        toggler.addEventListener('click', () => {
            const dataMenu = toggler.getAttribute('data-menu');
            const menuEl = document.querySelector('.repair-nav__menu[data-menu=' + dataMenu + ']');

            removeActiveMenu();

            toggler.classList.add('active');
            menuEl.classList.add('active');
        })
    })

    repairBacks.forEach(repairBack => {
        repairBack.addEventListener('click', () => {
            removeActiveMenu();
        })
    })

    function removeActiveMenu() {
        repairTogglers.forEach(toggler => {
            toggler.classList.remove('active')
        })
        repairMenus.forEach(menu => {
            menu.classList.remove('active')
        })
    }
}
