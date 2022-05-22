export default function() {
    const servicePrice = document.querySelector('.service-price');
    const serviceWrapper = document.querySelector('.service-wrapper');
    const isMobile = window.matchMedia('(max-width: 1199px)').matches;

    if (servicePrice && serviceWrapper && isMobile) {
        serviceWrapper.appendChild(servicePrice);
    }
}
