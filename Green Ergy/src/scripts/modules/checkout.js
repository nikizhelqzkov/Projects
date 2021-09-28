/* eslint-disable no-console */
import $ from '../libs/jquery.min';

const checkout = {
    navigation() {
        $(function () {
            const button = $('#checkout__header__nav');
            button.on('click', () => {
                let src = button.children().eq(0).attr('src');
                const val = src.substring(src.length - 6);
                if (val === 'Dn.svg') {
                    src = src.replace('Dn', 'Up');

                    $('.nav__items').slideDown('slow');
                } else if (val === 'Up.svg') {
                    src = src.replace('Up', 'Dn');
                    $('.nav__items').slideUp('slow');
                }
                $('#checkout__header__nav').children().eq(0).attr('src', src);
            });
        });
    },
    firstFormEvent() {
        $(function () {
            $('#checkout--first__form').submit(function (event) {
                event.preventDefault();
                $.ajax({
                    url: './assets/data/section.json',
                    success: (result) => {
                        console.log('Success loading from AJAX');
                        $('#checkout__finish--first').html(result.html);
                        const name = `${$('#vorname').val()} ${$('#nachname').val()}`;
                        const email = `E-Mail: ${$('#email').val()}`;
                        const phone = `Telefon: ${$('#telefon').val()}`;
                        const date = `Geburtsdatum: ${$('#date').val()}`;
                        const data = [name, email, phone, date];
                        $('#checkout__finish--first__body__list li').text((index) => {
                            return data[index];
                        });
                        if ($(window).width() < 760) {
                            let h = $('.checkout').css('height');
                            h = h.slice(0, h.length - 2);
                            h = Number(h);
                            h += 200;
                            $('.checkout').css({ height: h });
                        }
                        $('#checkout--first__form').slideUp();
                        $('#checkout__finish--first').slideDown();
                        $('#second__form').slideUp();
                        $('#checkout--second__form').slideDown();
                    }
                });
            });
        });
    }
};
export default checkout;
