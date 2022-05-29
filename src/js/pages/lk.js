export default function() {
    const lkEditBtn = document.querySelector('.lk-btn-edit');

    lkEditBtn && lkEditBtn.addEventListener('click', () => {
        const lkForm = document.querySelector('.lk-form');
        const lkInputs = lkForm.querySelectorAll('input');
        lkInputs && lkInputs.forEach((lkInput) => {
            lkInput.disabled = false;
            lkForm.classList.add('active');
        })
    })
}
