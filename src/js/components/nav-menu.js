export default function(){
    const dom = document.documentElement;
    const nav = document.querySelector('.nav');
    const navBtn = document.querySelector('.hamburger');
    const navBurger = document.querySelector('.nav-burger');
    const navBackdrop = document.querySelector('.nav-backdrop');
    const navBurgerList = document.querySelector('.nav-burger__list');
    const burgerItems = document.querySelectorAll('.nav .menu-item-hidden');
    const search = document.querySelector('.header__search');
    const searchBtn = document.querySelector('.header__search-btn');
    const isMobile = window.matchMedia('(max-width: 991px)').matches;
    const menuClass = 'show-nav';
    const searchClass = 'show-search';

    navBtn && navBtn.addEventListener('click', () => {
        dom.classList.toggle(menuClass);

        if (isMobile) {
            if (dom.classList.contains(menuClass)) {
                bodyFixPosition();
            } else {
                bodyUnfixPosition();
            }
        }
    });

    searchBtn && searchBtn.addEventListener('click', () => {
        dom.classList.toggle(searchClass);

        if (isMobile) {
            if (dom.classList.contains(searchClass)) {
                bodyFixPosition();
            } else {
                bodyUnfixPosition();
            }
        }
    });

    burgerItems && burgerItems.forEach(item => {
        navBurgerList.appendChild(item.cloneNode(true));
    })

    navBackdrop && navBackdrop.addEventListener('click', () => {
        dom.classList.remove(menuClass);
        bodyUnfixPosition();
    });

    // Fix body IOS
    function bodyFixPosition() {
        setTimeout( function() {
            if ( !document.body.hasAttribute('data-body-scroll-fix') ) {
                let scrollPosition = window.pageYOffset || dom.scrollTop;
                document.body.setAttribute('data-body-scroll-fix', scrollPosition);
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.left = '0';
                document.body.style.width = '100%';
            }
        }, 500 );
    }

    // Unfix body IOS
    function bodyUnfixPosition() {
        if ( document.body.hasAttribute('data-body-scroll-fix') ) {
            let scrollPosition = document.body.getAttribute('data-body-scroll-fix');
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.width = '';
            window.scroll(0, scrollPosition);

            setTimeout(() => {
                document.body.removeAttribute('data-body-scroll-fix');
            }, 500)
        }
    }
}
