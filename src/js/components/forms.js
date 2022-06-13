import IMask from 'imask';

export default function() {
    const inputs = document.querySelectorAll('input');
    const phoneInputs = document.querySelectorAll('input[name="phone"]');
    const loginInputs = document.querySelectorAll('input[name="login"]');
    const autoNumInputs = document.querySelectorAll('input[name="auto_number"]');
    const autoVinInputs = document.querySelectorAll('input[name="auto_vin"]');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.value.length) {
                input.classList.add('is-filled');
            } else {
                input.classList.remove('is-filled');
            }
        })
    })

    phoneInputs.forEach(input => {
        IMask(input, {
            mask: '+{7}(000)000 00 00'
        });
    })

    loginInputs.forEach(input => {
        IMask(input, {
            mask: [
                {
                  mask: '+{7}(000)000 00 00'
                },
                {
                  mask: /^\S*@?\S*$/
                }
            ]
        });
    })

    autoNumInputs.forEach(input => {
        IMask(input, {
            mask: '00-aaaa-00'
        });
    })

    autoVinInputs.forEach(input => {
        IMask(input, {
            mask: '0000-0000-0000'
        });
    })
}
