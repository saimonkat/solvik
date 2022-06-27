import { Fancybox } from '@fancyapps/ui';

export default function() {
    const dom = document.documentElement;

    const recoverForms = document.querySelectorAll('.form-recover');
    recoverForms.forEach(recoverForm => {
        recoverForm.addEventListener('submit', e => {
            e.preventDefault();
            const newModal = recoverForm.querySelector('.on-submit');
            newModal.click();
        })
    });
}
