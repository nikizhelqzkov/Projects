import $ from './libs/jquery.min';

const index = {
    pagesDataURL() {
        return '../assets/data/pages.json';
    },
    loadData() {
        const data = [];
        $(function () {
            $(window).on('load', () => {
                $.ajax({
                    url: index.pagesDataURL(),
                    success: (result) => {
                        result.forEach((res) => {
                            data.push(res.page);
                        });
                    }
                });
            });
        });
        return data;
    },
    isOnValidPage() {
        const location = window.location.href;
        console.log(location);
        let num = location.indexOf('/');
        num = location.indexOf('/', num + 1);
        const startPoint = location.indexOf('/', num + 1) + 1;

        console.log(location.slice(startPoint));
    }
};

export default index;
