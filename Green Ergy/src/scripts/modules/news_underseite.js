import $ from '../libs/jquery.min';

const newsUnderseite = {
    prevClick() {
        $('#news_unt__main__footer--prev-arrow').click(() => {
            let location = window.location.href;
            if (location.includes('1.html')) {
                window.location.href = location.replace('_1', '');
            } else {
                const num = Number(
                    window.location.href.substring(window.location.href.length - 6, window.location.href.length - 5)
                );
                if (!Number.isNaN(num)) {
                    location = location.replace(num.toString(), (num - 1).toString());
                    window.location.href = location;
                } else {
                    window.location.href = location.replace('.html', '_3.html');
                }
            }
        });
    },
    nextClick() {
        $('#news_unt__main__footer--next-arrow').click(() => {
            let location = window.location.href;
            if (location.includes('3.html')) {
                window.location.href = location.replace('_3', '');
            } else {
                const num = Number(
                    window.location.href.substring(window.location.href.length - 6, window.location.href.length - 5)
                );
                if (!Number.isNaN(num)) {
                    location = location.replace(num.toString(), (num + 1).toString());
                    window.location.href = location;
                } else {
                    window.location.href = location.replace('.html', '_1.html');
                }
            }
        });
    }
};
export default newsUnderseite;
