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
}
