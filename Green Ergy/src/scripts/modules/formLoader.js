import $ from '../libs/jquery.min';

const formLoader = {
    getWidth() {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
        );
    },
    getCurrentScrollPosition() {
        const currentScroll = document.documentElement.scrollTop;
        return currentScroll;
    },
    presentForm() {
        $(function () {
            const elements = $('header').children();
            elements.each((index, element) => {
                if ($(element).hasClass('form__reservation--top')) {
                    $(window).scroll(() => {
                        if (formLoader.getWidth() > 1000) {
                            const form = $('.form__reservation--top');
                            const scrollPos = formLoader.getCurrentScrollPosition();
                            const getFormPos =
                                $('.header__main__reservation').offset().top + $('.header__main__reservation').height();
                            if (scrollPos > getFormPos && $(window).width() > 1100) {
                                form.fadeIn();
                                form.css({ display: 'flex' });
                            } else {
                                form.fadeOut();
                            }
                        }
                    });
                }
            });
        });
    },
    presentModal() {
        $('#header__main__res__form__button a').click((event) => {
            $('#fInput').val('');
            event.preventDefault();
        });
    }
};
export default formLoader;
