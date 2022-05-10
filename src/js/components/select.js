import NiceSelect from "nice-select2/dist/js/nice-select2";

export default function() {
    NiceSelect.bind(document.getElementById("a-select"), {searchable: true});
}
