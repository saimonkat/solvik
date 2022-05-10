export default function(){
    const textareas = document.querySelectorAll('.textarea-autosize');

    textareas.forEach(textarea => {
        textarea.querySelector('textarea').addEventListener('input', function(){
            this.parentNode.dataset.replicatedValue = this.value;
        })
    })
}
