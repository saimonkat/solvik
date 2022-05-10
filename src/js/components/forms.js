import IMask from 'imask';

export default function() {
    const phoneInputs = document.querySelectorAll('input[name="phone"]');

    [...phoneInputs].forEach(input => {
        IMask(input, {
            mask: '+{7}(000)000-00-00'
        });
    })
}
