export default function(){
    const headerTop = document.querySelector('.header__top');
    const headerTopH = headerTop.offsetHeight;

    const pageScroll = () => {
        if (!document.documentElement.classList.contains('show-nav'))
            document.documentElement.classList.toggle(
                'page-scrolled',
                window.scrollY > headerTopH
            )
    }

    pageScroll();
    window.addEventListener('scroll', pageScroll);
}
