/* eslint-disable prettier/prettier */
import $ from '../libs/jquery.min';

const navigation = {
    presentSearch() {
        if ($('#nav--search-bar--close')) {
            $('#nav--search-bar--close').click((event) => {
                $('#navigation__list--search-logo--img--blue').addClass('hidden');
                $('#nav__dropdown--products').removeAttr('style');
                $('#navigation__list--search-logo--img').removeClass('hidden');
                $('.nav--search-bar').addClass('hidden');
                event.preventDefault();
                event.stopPropagation();
            });
        }
        $('#navigation__list--search-logo').click((event) => {
            event.preventDefault();
            if ($('#navigation__list--search-logo--img--blue').hasClass('hidden')) {
                $('#navigation__list--search-logo--img').addClass('hidden');
                $('#navigation__list--search-logo--img--blue').removeClass('hidden');
            } else {
                $('#navigation__list--search-logo--img--blue').addClass('hidden');
                $('#navigation__list--search-logo--img').removeClass('hidden');
            }
            $('.nav--search-bar').toggleClass('hidden');
            if (!$('.nav--search-bar').hasClass('hidden')) {
                $('#nav__dropdown--products').css('margin-top', '2.65rem');
            } else {
                $('#nav__dropdown--products').removeAttr('style');
            }
        });
        if ($('#nav--mobile--search-bar--close')) {
            $('#nav--mobile--search-bar--close').click((event) => {
                $('#nav--mobile__list--search-logo--img--blue').addClass('hidden');
                $('#nav--mobile__list--search-logo--img').removeClass('hidden');
                $('.nav--mobile--search-bar').addClass('hidden');
                event.preventDefault();
                event.stopPropagation();
            });
        }
        $('#nav--mobile__inner__right__list--search').click((event) => {
            event.preventDefault();
            if ($('#nav--mobile__list--search-logo--img--blue').hasClass('hidden')) {
                $('#nav--mobile__list--search-logo--img').addClass('hidden');
                $('#nav--mobile__list--search-logo--img--blue').removeClass('hidden');
            } else {
                $('#nav--mobile__list--search-logo--img--blue').addClass('hidden');
                $('#nav--mobile__list--search-logo--img').removeClass('hidden');
            }
            $('.nav--mobile--search-bar').toggleClass('hidden');
        });
    },
    presentDropDown() {
        $('#navigation__right__list__items--product').click((event) => {
            event.preventDefault();
            $('#nav__dropdown--products').toggleClass('open');
            if (!$('.nav--search-bar').hasClass('hidden')) {
                $('#nav__dropdown--products').css('margin-top', '2.65rem');
            }
            navigation.openMoreDropdown();
        });
    },
    openMoreDropdown() {
        $('#nav__dropdown--products').click((event) => {
            event.stopPropagation();
        });
        $('#nav__dropdown--products__list--first').click((event) => {
            event.stopPropagation();
            $('#nav__dropdown--products__list--product').toggleClass('hidden');

            $('#nav__dropdown--products').toggleClass('selected');
            const listImages = Array.from(
                $('#nav__dropdown--products__list--first .nav__dropdown--products__list--first--buttons img')
            );
            $('#nav__dropdown--products__list--first').toggleClass('active');
            if ($(listImages[1]).hasClass('hidden')) {
                $(listImages[0]).addClass('hidden');
                $(listImages[1]).removeClass('hidden');
            } else {
                $(listImages[1]).addClass('hidden');
                $(listImages[0]).removeClass('hidden');
                $('#nav__dropdown--products__list--first').removeClass('active');
            }
        });
    },
    presentNavMobileContent() {
        $('#nav--mobile__list--menu').click(() => {
            if ($('#nav--mobile__list--menu').hasClass('open')) {
                $('#nav--mobile__list--menu').removeClass('open');
                $('#nav--mobile__list--menu__list').addClass('hidden', 'slow');
                $('.1').removeClass('first-row');
                $('.2-1').addClass('second-row--first');
                $('.2-2').addClass('second-row--second');
                $('.2-3').addClass('second-row--third');
                $('.3-1').addClass('third-row--first');
                $('.3-2').addClass('third-row--second');
                $('.3-3').addClass('third-row--third');
                $('.3-4').addClass('third-row--fourth');
                $('.3-5').addClass('third-row--fifth');
                $('.3-6').addClass('third-row--sixth');
                $('.4-1').addClass('fourth-row--first');
                $('.4-2').addClass('fourth-row--second');
                $('.4-3').addClass('fourth-row--third');
                $('.4-4').addClass('fourth-row--fourth');
                $('.r-lang').addClass('row-lang');
                $('.lang').removeClass('first-row');
            } else {
                $('#nav--mobile__list--menu').addClass('open');
                $('#nav--mobile__list--menu__list').removeClass('hidden', 'slow');
            }
            if ($('#nav--mobile__list--menu').hasClass('open')) {
                navigation.mobileDropDown();
            }
        });
    },
    mobileDropDown() {
        $('#nav-0-0-1').click((event) => {
            event.stopPropagation();
            $('.1').addClass('first-row', 'slow');
            $('.2-1').removeClass('second-row--first', 'slow');
        });
        $('#nav-0-0-1--back').click((event) => {
            event.stopPropagation();
            $('.1').removeClass('first-row', 'slow');
            $('.2-1').addClass('second-row--first', 'slow');
        });
        $('#nav-0-1-1').click((event) => {
            event.stopPropagation();
            $('.1').addClass('first-row', 'slow');
            $('.2-2').removeClass('second-row--second', 'slow');
        });
        $('#nav-0-1-1--back').click((event) => {
            event.stopPropagation();
            $('.1').removeClass('first-row', 'slow');
            $('.2-2').addClass('second-row--second', 'slow');
        });
        $('#nav-0-2-1').click((event) => {
            event.stopPropagation();
            $('.1').addClass('first-row', 'slow');
            $('.2-3').removeClass('second-row--third', 'slow');
        });
        $('#nav-0-2-1--back').click((event) => {
            event.stopPropagation();
            $('.1').removeClass('first-row', 'slow');
            $('.2-3').addClass('second-row--third', 'slow');
        });
        $('#nav-1-0-2').click((event) => {
            event.stopPropagation();
            $('.2-1').addClass('second-row--first', 'slow');
            $('.3-1').removeClass('third-row--first', 'slow');
        });
        $('#nav-1-0-2--back').click((event) => {
            event.stopPropagation();
            $('.2-1').removeClass('second-row--first', 'slow');
            $('.3-1').addClass('third-row--first', 'slow');
        });
        $('#nav-1-1-2').click((event) => {
            event.stopPropagation();
            $('.2-1').addClass('second-row--first', 'slow');
            $('.3-2').removeClass('third-row--second', 'slow');
        });
        $('#nav-1-1-2--back').click((event) => {
            event.stopPropagation();
            $('.2-1').removeClass('second-row--first', 'slow');
            $('.3-2').addClass('third-row--second', 'slow');
        });
        $('#nav-1-2-2').click((event) => {
            event.stopPropagation();
            $('.2-2').addClass('second-row--second', 'slow');
            $('.3-3').removeClass('third-row--third', 'slow');
        });
        $('#nav-1-2-2--back').click((event) => {
            event.stopPropagation();
            $('.2-2').removeClass('second-row--second', 'slow');
            $('.3-3').addClass('third-row--third', 'slow');
        });
        $('#nav-1-3-2').click((event) => {
            event.stopPropagation();
            $('.2-2').addClass('second-row--second', 'slow');
            $('.3-4').removeClass('third-row--fourth', 'slow');
        });
        $('#nav-1-3-2--back').click((event) => {
            event.stopPropagation();
            $('.2-2').removeClass('second-row--second', 'slow');
            $('.3-4').addClass('third-row--fourth', 'slow');
        });
        $('#nav-1-4-2').click((event) => {
            event.stopPropagation();
            $('.2-2').addClass('second-row--second', 'slow');
            $('.3-5').removeClass('third-row--fifth', 'slow');
        });
        $('#nav-1-4-2--back').click((event) => {
            event.stopPropagation();
            $('.2-2').removeClass('second-row--second', 'slow');
            $('.3-5').addClass('third-row--fifth', 'slow');
        });
        $('#nav-1-5-2').click((event) => {
            event.stopPropagation();
            $('.2-2').addClass('second-row--second', 'slow');
            $('.3-6').removeClass('third-row--sixth', 'slow');
        });
        $('#nav-1-5-2--back').click((event) => {
            event.stopPropagation();
            $('.2-2').removeClass('second-row--second', 'slow');
            $('.3-6').addClass('third-row--sixth', 'slow');
        });
        $('#nav-2-0-3').click((event) => {
            event.stopPropagation();
            $('.3-3').addClass('third-row--third', 'slow');
            $('.4-1').removeClass('fourth-row--first', 'slow');
        });
        $('#nav-2-0-3--back').click((event) => {
            event.stopPropagation();
            $('.3-3').removeClass('third-row--third', 'slow');
            $('.4-1').addClass('fourth-row--first', 'slow');
        });
        $('#nav-2-1-3').click((event) => {
            event.stopPropagation();
            $('.3-3').addClass('third-row--third', 'slow');
            $('.4-2').removeClass('fourth-row--second', 'slow');
        });
        $('#nav-2-1-3--back').click((event) => {
            event.stopPropagation();
            $('.3-3').removeClass('third-row--third', 'slow');
            $('.4-2').addClass('fourth-row--second', 'slow');
        });
        $('#nav-2-2-3').click((event) => {
            event.stopPropagation();
            $('.3-3').addClass('third-row--third', 'slow');
            $('.4-3').removeClass('fourth-row--third', 'slow');
        });
        $('#nav-2-2-3--back').click((event) => {
            event.stopPropagation();
            $('.3-3').removeClass('third-row--third', 'slow');
            $('.4-3').addClass('fourth-row--third', 'slow');
        });
        $('#nav-2-3-3').click((event) => {
            event.stopPropagation();
            $('.3-5').addClass('third-row--fifth', 'slow');
            $('.4-4').removeClass('fourth-row--fourth', 'slow');
        });
        $('#nav-2-3-3--back').click((event) => {
            event.stopPropagation();
            $('.3-5').removeClass('third-row--fifth', 'slow');
            $('.4-4').addClass('fourth-row--fourth', 'slow');
        });
        $('#nav-lang').click((event) => {
            event.stopPropagation();
            $('.1').addClass('first-row', 'slow');
            $('.lang').addClass('first-row', 'slow');
            $('.r-lang').removeClass('row-lang', 'slow');
            $('.2-1').addClass('second-row--first');
            $('.2-2').addClass('second-row--second');
            $('.2-3').addClass('second-row--third');
            $('.3-1').addClass('third-row--first');
            $('.3-2').addClass('third-row--second');
            $('.3-3').addClass('third-row--third');
            $('.3-4').addClass('third-row--fourth');
            $('.3-5').addClass('third-row--fifth');
            $('.3-6').addClass('third-row--sixth');
            $('.4-1').addClass('fourth-row--first');
            $('.4-2').addClass('fourth-row--second');
            $('.4-3').addClass('fourth-row--third');
            $('.4-4').addClass('fourth-row--fourth');
        });
        $('#nav-lang--back').click((event) => {
            event.stopPropagation();
            $('.1').removeClass('first-row', 'slow');
            $('.lang').removeClass('first-row', 'slow');
            $('.r-lang').addClass('row-lang', 'slow');
        });
    }
};
export default navigation;
