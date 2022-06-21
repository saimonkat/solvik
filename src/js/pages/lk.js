export default function() {
    const lkEditBtn = document.querySelector('.lk-edit-btn');
    lkEditBtn && lkEditBtn.addEventListener('click', () => {
        const lkForm = document.querySelector('.lk-form');
        const lkInputs = lkForm.querySelectorAll('input');

        lkForm.classList.add('edited');
        lkInputs && lkInputs.forEach((lkInput) => {
            lkInput.disabled = false;
        })
    })

    const lkFilterItems = document.querySelectorAll('.lk-filter__item');
    lkFilterItems && lkFilterItems.forEach(filter => {
        filter.addEventListener('click', () => {
            lkFilterItems.forEach(item => item.classList.remove('active'));
            filter.classList.add('active');
        })
    })

    const lkSortItems = document.querySelectorAll('.lk-sort__item');
    lkSortItems && lkSortItems.forEach(sort => {
        sort.addEventListener('click', () => {
            sort.classList.toggle('active');
        })
    })
}
