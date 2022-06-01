export default function(){
    const repairNav = document.querySelector('.repair-nav');
    const repairLink = document.querySelector('.repair-link');
    const repairClose = document.querySelector('.repair-close');
    const repairTogglers = document.querySelectorAll('.repair-nav__toggler');
    const repairMenus = document.querySelectorAll('.repair-nav__menu');
    const repairBacks = document.querySelectorAll('.repair-back');
    const repairBrands = document.querySelector('.repair-nav__brands');
    const repairBrandsToggler = document.querySelector('.repair-nav__brands-toggler');
    const isDesktop = window.matchMedia('(min-width: 1200px)').matches;

    if (isDesktop) {
        repairTogglers[0].classList.add('active');
        repairMenus[0].classList.add('active');

        let timer;
        repairLink.addEventListener('mouseover', () => {
            timer = window.setTimeout(() => {
                repairNav.classList.add('active')
            }, 100);
        })
        repairLink.addEventListener('mouseout', () => {
            timer && window.clearTimeout(timer)
            setTimeout(() => {
                repairNav.classList.remove('active');
            }, 300)
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

    repairBrandsToggler.addEventListener('click', () => {
        repairBrands.classList.toggle('active');
        repairBrandsToggler.classList.toggle('active');
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
