export default function() {
    const aboutSlider = document.querySelector('.about-team__slider');

    if (aboutSlider) {
        const aboutSlides = document.querySelectorAll('.about-team-slide');
        const aboutWrapper = aboutSlider.querySelector('.swiper-wrapper');
        const teamFilterItems = document.querySelectorAll('.about-team__filter');

        teamFilterItems && teamFilterItems.forEach(filterItem => {
            filterItem.addEventListener('click', () => {
                const filterBy = filterItem.getAttribute('data-filter');
                teamFilterItems.forEach(item => item.classList.remove('active'));
                filterItem.classList.add('active');
                aboutWrapper.style.transform = '';
                aboutSlides.forEach(item => {
                    const itemModel = item.getAttribute('data-role');
                    if (filterBy === '*' || itemModel === filterBy) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            })
        })
    }
}
