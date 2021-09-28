import $ from '../libs/jquery.min';

const creditForm = {
    starter() {
        if (window.location.href.includes('credit-form.html')) {
            creditForm.addRow();
            creditForm.removeRow();
            $('.activity-details__main__form__main--button.credit-form__main--submit').click((event) => {
                event.preventDefault();
                let isEmpty = true;

                $('input').each((index, input) => {
                    if (input.required && isEmpty) {
                        if (!$(input).parent().parent().hasClass('form--hidden')) {
                            if (input.value === '') {
                                $(input).next().show('errorState');
                                isEmpty = false;
                                $(input).css('border', '1px solid #ec4d4d');
                                $('html').scrollTop($(input).offset().top - 50);
                            } else {
                                $(input).next().hide('errorState');
                                $(input).css('border', '0px');
                                isEmpty = true;
                            }
                        }
                    }
                });
            });
        }
    },
    addRow() {
        $('credit-form__main--button--add.add img').click((event) => {
            event.preventDefault();
            event.stopPropagation();
        });
        $('button.credit-form__main--button--add.add:not(img)').click((event) => {
            event.preventDefault();
            if (event.target.tagName !== 'IMG') {
                $(event.target).parents('.credit-form--buttons').prev().slideDown('slow');
                // console.log($(event.target).parents('.credit-form--buttons').prev());
                $(event.target).parents('.credit-form--buttons').prev().css('display', 'flex');
                $(event.target).parent().next().children('.rem').fadeIn();
                $(event.target).parent().next().children('.rem').children('img').fadeIn();
                $(event.target).fadeOut();
            } else {
                const button = $(event.target).parent();
                $(button).parents('.credit-form--buttons').prev().slideDown('slow');
                $(button).parents('.credit-form--buttons').prev().css('display', 'flex');
                $(button).parent().next().children('.rem').fadeIn();
                $(button).parent().next().children('.rem').children('img').fadeIn();
                $(button).fadeOut();
                $(event.target).fadeOut();
            }
        });
    },
    removeRow() {
        $('.credit-form__main--button--add.rem').click((event) => {
            event.preventDefault();
            if (event.target.tagName !== 'IMG') {
                $(event.target).parents('.credit-form--buttons').prev().slideUp('slow');
                $(event.target).parent().prev().children('.add').fadeIn();
                $(event.target).parent().prev().children('.add').children('img').fadeIn();
                $(event.target).fadeOut();
            } else {
                const button = $(event.target).parent();
                $(button).parents('.credit-form--buttons').prev().slideUp('slow');
                $(button).parent().prev().children('.add').fadeIn();
                $(button).parent().prev().children('.add').children('img').fadeIn();
                $(button).fadeOut();
                $(event.target).fadeOut();
            }
        });
    }
};

export default creditForm;
