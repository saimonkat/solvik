export default function () {
    function setCookie(name, value, options = {}) {
        options = {
            path: '/',
            expires: '',
        };

        let exp = options.expires;

        if (typeof exp == 'number' && exp) {
            const d = new Date();
            d.setTime(d.getTime() + exp * 24 * 60 * 60 * 1000);
            exp = options.expires = d;
        }

        let updatedCookie = name + '=' + encodeURIComponent(value);

        for (let optionKey in options) {
            updatedCookie += '; ' + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += '=' + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }

    function getCookie(name) {
        let matches = document.cookie.match(
            new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'),
        );
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function text(url) {
        return fetch(url).then((res) => res.text());
    }

    const cookies = document.querySelector('.cookies');
    const showClass = 'cookies--show';
    if (cookies) {
        let location;
        text('https://www.cloudflare.com/cdn-cgi/trace')
            .then((data) => {
                let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
                let ip = data.match(ipRegex)[0];
                location = ip;

                return ip;
            })
            .then((ip) => {
                getCookie('location') === ip
                    ? cookies.classList.remove(showClass)
                    : cookies.classList.add(showClass);
            });

        const cookiesBtn = document.querySelector('.cookies__btn');
        cookiesBtn && cookiesBtn.addEventListener('click', () => {
            cookies.classList.remove(showClass);
            setCookie('location', location, { expires: 1 });
        })
    }
}
