export default function() {
    const lkEditBtn = document.querySelector('.lk-edit-btn');
    lkEditBtn && lkEditBtn.addEventListener('click', () => {
        const form = document.querySelector('.lk-form');
        const lkInputs = form.querySelectorAll('input');

        form.classList.toggle('active');
        form.classList.toggle('edited');
        lkInputs && lkInputs.forEach((lkInput) => {
            lkInput.disabled = false;
        })
    })

    const lkCards = document.querySelectorAll('.lk-card');
    const lkCardsWrapper = document.querySelector('.lk-cards');

    const lkFilterItems = document.querySelectorAll('.lk-filter__item');
    lkFilterItems && lkFilterItems.forEach(filterItem => {
        filterItem.addEventListener('click', () => {
            const filterBy = filterItem.getAttribute('data-filter');
            lkFilterItems.forEach(item => item.classList.remove('active'));
            filterItem.classList.add('active');
            lkCards.forEach(item => {
                const itemModel = item.getAttribute('data-model');
                if (filterBy === '*' || itemModel === filterBy) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        })
    })

    const lkSortItems = document.querySelectorAll('.lk-sort__item');
    lkSortItems && lkSortItems.forEach(sortItem => {
        sortItem.addEventListener('click', () => {
            const sortBy = sortItem.getAttribute('data-sort');
            const dataSort = `data-${sortBy}`;

            if (!sortItem.classList.contains('active')) {
                lkSortItems.forEach(item => item.classList.remove('active', 'reverse'));
                sortItem.classList.add('active');
            } else {
                sortItem.classList.toggle('reverse');
            }

            let sortArr = [...lkCards].sort(function (a, b) {
                return a.getAttribute(dataSort) > b.getAttribute(dataSort) ? 1 : -1;
            });

            if (sortItem.classList.contains('reverse'))
                sortArr = sortArr.reverse();

            sortArr.forEach(sortEl => {
                lkCardsWrapper.appendChild(sortEl);
            });
        })
    })
}
