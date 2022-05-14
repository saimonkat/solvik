import NiceSelect from "nice-select2/dist/js/nice-select2";

export default function() {
    const selects = document.querySelectorAll('select');

    selects.length && selects.forEach(select => {
        new NiceSelect(select, {
            // searchable: true,
            placeholder : "Выбрать"
        });
    })
}
