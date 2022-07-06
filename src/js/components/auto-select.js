import NiceSelect from "nice-select2/dist/js/nice-select2";
import marksJSON from './marks.json';

export default function() {
    const autoSelects = document.querySelector('.auto-selects');
    if (autoSelects) {
        const ajaxUrl = 'https://api-test.americar.spb.ru/';
        const ajaxToken = 'lfjWcmtui-4573w-FDSe';
        const modelRequest = `${ajaxUrl}models?token=${ajaxToken}&mark_code=`;
        const equipRequest = `${ajaxUrl}equips?token=${ajaxToken}&model_code=`;

        const keyName = 'Код';
        const valName = 'Наименование';

        const markSelect = document.getElementById('auto_mark');
        const modelSelect = document.getElementById('auto_model');
        const equipSelect = document.getElementById('auto_equip');

        const getJSON = function(url, callback) {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'json';
            xhr.onload = function() {
            let status = xhr.status;
            if (status === 200) {
                callback(null, xhr.response);
            } else {
                callback(status, xhr.response);
            }
            };
            xhr.send();
        };

        function updateSelect(select, data) {
            select.disabled = true;
            const options = select.querySelectorAll('option');
            options.forEach(o => o.remove());

            if(data.length) {
                data.forEach(obj => {
                    let option = document.createElement('option');
                    option.value = obj[keyName];
                    option.text = obj[valName];
                    select.add(option);
                });

                select.disabled = false;
            }

            select.nextElementSibling.remove();
            new NiceSelect(select, {
                searchable: true,
                placeholder : "Выбрать"
            });
        }

        // Mark select
        if (markSelect) {
            updateSelect(markSelect, marksJSON.marks);

            markSelect.addEventListener('change', () => {
                let val = markSelect.value;
                let text = markSelect.options[markSelect.selectedIndex].text;
                console.log(`Mark selected: ${text} ${val}`);

                modelSelect && getJSON(modelRequest + val, function(err, modelsJSON) {
                    if (err === null) {
                        console.log(modelsJSON.models);
                        updateSelect(modelSelect, modelsJSON.models);
                    } else {
                        console.log('Models request error: ' + err);
                    }
                });
            })
        }

        // Model select
        modelSelect && modelSelect.addEventListener('change', () => {
            let val = modelSelect.value;
            let text = modelSelect.options[modelSelect.selectedIndex].text;
            console.log(`Model selected: ${text} ${val}`);

            equipSelect && getJSON(equipRequest + val, function(err, equipsJSON) {
                if (err === null) {
                    // Equip select
                    console.log(equipsJSON.equips);
                    updateSelect(equipSelect, equipsJSON.equips);
                } else {
                    console.log('Equips request error: ' + err);
                }
            });
        })

        // Equip select
        equipSelect && equipSelect.addEventListener('change', () => {
            let val = equipSelect.value;
            let text = equipSelect.options[equipSelect.selectedIndex].text;
            console.log(`Equip selected: ${text} ${val}`);
        })
    }
}
