export default function() {
    const recoverForm = document.querySelector('#form-recover-phone');
    recoverForm && recoverForm.addEventListener('submit', e => {
        const formBtn = recoverForm.querySelector('.modal__btn');
        const formTimeout = recoverForm.querySelector('.modal__timeout');
        const formTimeoutSec = formTimeout.querySelector('span');

        e.preventDefault();

        formBtn.disabled = true;
        formTimeout.style.display = 'block';

        let seconds = 60;
        const myInterval = setInterval(() => {
            seconds--;
            formTimeoutSec.innerHTML = seconds;

            if (seconds == 0) {
                formBtn.disabled = false;
                formTimeoutSec.innerHTML = 60;
                formTimeout.style.display = 'none';
                clearInterval(myInterval);
            }
        }, 1000);
    })
}
