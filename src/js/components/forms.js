import IMask from 'imask';

export default function() {
    // Inputs is filled check
    const inputs = document.querySelectorAll('input');
    inputs && inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.value.length) {
                input.classList.add('is-filled');
            } else {
                input.classList.remove('is-filled');
            }
        })
    })

    // Phone inputs mask
    const phoneInputs = document.querySelectorAll('input[name="phone"]');
    phoneInputs && phoneInputs.forEach(input => {
        IMask(input, {
            mask: '+{7}(000)000 00 00'
        });
    })

    // Login inputs mask
    const loginInputs = document.querySelectorAll('input[name="login"]');
    loginInputs && loginInputs.forEach(input => {
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

    // Auto numbers inputs mask
    const autoNumInputs = document.querySelectorAll('input[name="auto_number"]');
    autoNumInputs && autoNumInputs.forEach(input => {
        IMask(input, {
            mask: '00-aaaa-00'
        });
    })

    // Auto VINs inputs mask
    const autoVinInputs = document.querySelectorAll('input[name="auto_vin"]');
    autoVinInputs && autoVinInputs.forEach(input => {
        IMask(input, {
            mask: '0000-0000-0000'
        });
    })

    // Recover forms on submit
    const recoverForms = document.querySelectorAll('.form-recover');
    recoverForms && recoverForms.forEach(recoverForm => {
        recoverForm.addEventListener('submit', e => {
            e.preventDefault();
            const newModal = recoverForm.querySelector('.on-submit');
            newModal.click();
        })
    });

    // Form toggler
    const formTogglers = document.querySelectorAll('.form-toggler__item');
    formTogglers.forEach(toggler => {
        toggler.addEventListener('click', () => {
            const form = toggler.closest('.form');
            form.classList.toggle('active');

            formTogglers.forEach(toggler => {
                toggler.classList.remove('active')
            })
            toggler.classList.add('active');
        })
    })

    // File upload
    const fileUploadFields = document.querySelectorAll('.file-upload__field');
    fileUploadFields && fileUploadFields.forEach(field => {
        fileUploadProcessing(field);
    });

	function fileUploadProcessing(input) {
		const labelSpan = input.nextElementSibling,
			  fileParent = input.closest('.file-upload');

		input.addEventListener('change', () => {
				const fileName = input.files[0].name;
				if (fileName) {
					labelSpan.textContent = fileName;
					fileParent.classList.add('file-upload--loaded');
				} else {
					fileParent.classList.remove('file-upload--loaded');
				}
			}, { passive: true },
		);
	}
}
