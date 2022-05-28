export default function() {
    const servicePrice = document.querySelector('.service-price');
    const serviceWrapper = document.querySelector('.service-wrapper');
    const pageSidebar = document.querySelector('.page-sidebar');
    let serviceMobile = false;

    if (servicePrice) {
        const winResize = () => {
            const isMobile = window.matchMedia('(max-width: 1199px)').matches;

            if (isMobile && !serviceMobile) {
                serviceWrapper.appendChild(servicePrice);
                serviceMobile = true;
            } else
            if (!isMobile && serviceMobile) {
                pageSidebar.appendChild(servicePrice);
                serviceMobile = false;
            }
        }

        winResize();
        window.addEventListener('resize', winResize);
    }
}
