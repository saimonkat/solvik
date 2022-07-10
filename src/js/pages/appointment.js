export default function() {
    const appointment = document.querySelector('.appointment');
    if (appointment) {
        const dates = appointment.querySelector('.appointment__form');
        const timelines = appointment.querySelector('.appointment__timelines');
        const btnNext = appointment.querySelector('button.choose-time');
        const btnSubmit = appointment.querySelector('button[type="submit"]');
        const dateInputs = dates.querySelectorAll('input, select');
        const timeInputs = timelines.querySelectorAll('input');

        const unlockNextBtn = () => btnNext.disabled = '';
        const unlockTimelines = () => timelines.style.display = 'block';
        const unlockSubmitBtn = () => btnSubmit.disabled = '';

        dateInputs.forEach(dateInput => {
            dateInput.addEventListener('change', () => {
                unlockNextBtn();
            })
        });

        btnNext.onclick = () => unlockTimelines();

        timeInputs.forEach(timeInput => {
            timeInput.addEventListener('change', () => {
                unlockSubmitBtn();
            })
        });

        // Datepicker
        const datepickers = document.querySelectorAll('.datepicker');
        const datepickerFrom = document.getElementById('datepicker_from');
        const datepickerTo = document.getElementById('datepicker_to');
        const dateParams = {year: 'numeric', month: '2-digit', day: '2-digit'};
        const dateFormat = (date) => date.toLocaleDateString('ru-RU', dateParams);

        const DateTime = easepick.DateTime;
        const lokedDatesArr = [
            '2022-07-16',
            '2022-07-25',
            '2022-07-28',
            '2022-08-05',
            ['2022-08-06', '2022-08-08'],
        ];
        const lokedDates = lokedDatesArr.map(d => {
            if (d instanceof Array) {
                const start = new DateTime(d[0], 'YYYY-MM-DD');
                const end = new DateTime(d[1], 'YYYY-MM-DD');

                return [start, end];
            }

            return new DateTime(d, 'YYYY-MM-DD');
        });

        const calendar = new easepick.create({
            element: '.datepicker',
            css: [
              'libs/easepick/index.css',
              'libs/easepick/custom.css'
            ],
            zIndex: 10,
            lang: "ru-RU",
            grid: 2,
            calendars: 2,
            locale: {
                nextMonth: '<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.34314 13L6.99999 7.34315L1.34314 1.68629" stroke="#164168" stroke-width="2" stroke-linecap="round"/></svg>',
                previousMonth: '<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.65686 1L2.00001 6.65685L7.65686 12.3137" stroke="#164168" stroke-width="2" stroke-linecap="round"/></svg>'
            },
            plugins: ['RangePlugin', 'LockPlugin'],
            RangePlugin: {
              tooltipNumber(num) {
                return false; // num - 1
              },
              locale: {
                one: 'день',
                other: 'дней',
              },
            },
            LockPlugin: {
              minDate: new Date(),
              minDays: 2,
              inseparable: true,
              filter(date, picked) {
                if (picked.length === 1) {
                  const incl = date.isBefore(picked[0]) ? '[)' : '(]';
                  return !picked[0].isSame(date, 'day') && date.inArray(lokedDates, incl);
                }

                return date.inArray(lokedDates, '[)');
              },
            },
        })

        calendar.on('select', (e) => {
            datepickerFrom.value = dateFormat(e.detail.start);
            datepickerTo.value = dateFormat(e.detail.end);
            unlockNextBtn();
        });

        calendar.on('view', (e) => {
            if (!calendar.isShown())
                datepickers.forEach(picker => picker.classList.remove('active'));
        });

        datepickers.forEach(datepicker => {
            datepicker.onclick = () => {
                calendar.show();
                datepickers.forEach(picker => picker.classList.add('active'));
            }
        });
    }
}
