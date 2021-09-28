/* eslint-disable prettier/prettier */
import $ from '../libs/jquery.min';

const additionPopUp = {
    presentPopUp() {
        $(function () {
            $('.hasPopUp').click((event) => {
                const parent = event.currentTarget;
                $(parent).siblings('.hasPopUp').removeClass('open');
                $(parent).toggleClass('open');
                if ($(parent).attr('id') === 'additional--indexes') {
                    $('#additional--currency').removeAttr('style');
                } else {
                    $('#additional--indexes').removeAttr('style');
                }
                if ($(parent).hasClass('open')) {
                    $(parent).css('margin-left', '-150px');
                } else {
                    $(parent).removeAttr('style');
                }
                // $(parent).children('.popup').addClass('open');
                const box = $(parent).children('.popup');
                const changers = $(parent).children('.additional-info__items__popup__main')[0];
                const list = $(changers).children('.additional-info__items__popup__main--nav')[0];
                const listItems = $(list).children('.additional-info__items__popup__main--nav--items');
                if ($(parent).attr('id') === 'additional--indexes') {
                    if (box && changers && list && listItems) {
                        additionPopUp.changeIndexTable(listItems, box, list);
                    }
                } else {
                    additionPopUp.changeCurrencyTable(listItems, box, list);
                }
            });
        });
    },
    changeIndexTable(listItems, box, list) {
        $(function () {
            $(box).click((event) => {
                event.stopPropagation();
            });
            $(listItems).click((event) => {
                event.stopPropagation();
                const currentClassList = $(event.target).attr('class').split(/\s+/);
                if (!currentClassList.includes('selected')) {
                    $(event.target).siblings().removeClass('selected');
                    $(event.target).addClass('selected');
                    const tableFirst = $(list).siblings('#additional-info__items__popup__main--1')[0];
                    const secondTable = $(list).siblings('#additional-info__items__popup__main--2')[0];
                    const tableFirstClassList = $(tableFirst).attr('class').split(/\s+/);
                    if (tableFirstClassList.includes('selected')) {
                        $(tableFirst).removeClass('selected');
                        $(secondTable).addClass('selected');
                    } else {
                        $(secondTable).removeClass('selected');
                        $(tableFirst).addClass('selected');
                    }
                }
                event.preventDefault();
            });
        });
    },
    changeCurrencyTable(listItems, box, list) {
        $(box).click((event) => {
            event.stopPropagation();
        });
        $(listItems).click((event) => {
            event.stopPropagation();
            event.preventDefault();
            if (!event.target.classList.contains('selected')) {
                $(event.target).siblings().removeClass('selected');
                $(event.target).addClass('selected');
                const tables = Array.from($(list).siblings('.additional-info__items__popup__main--table'));
                // console.log($(list).siblings('.selected'));
                // console.log(tables[2]);
                const listArr = Array.from(list.children);
                $(list).siblings('.selected').removeClass('selected');
                for (let i = 0; i < listArr.length; i += 1) {
                    const element = listArr[i];
                    if (element.classList.contains('selected')) {
                        $(tables[i]).addClass('selected');
                    }
                }
            }
        });
    }
};
export default additionPopUp;
