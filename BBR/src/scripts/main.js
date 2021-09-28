/* eslint-disable prettier/prettier */
import $ from './libs/jquery.min';
import customSelect from './modules/custom-select';
import additionPopUp from './modules/additionPopUp';
import navigation from './modules/navigation';
import newsDetails from './modules/news-details';
import creditForm from './modules/credit-form';
import googleMaps from './modules/googleMaps';
import zhalba from './modules/zhalba';
import register from './modules/register';
import calculator from './modules/calculator';

$(document).ready(() => {
    customSelect.starterHome();
    additionPopUp.presentPopUp();
    navigation.presentSearch();
    navigation.presentDropDown();
    navigation.presentNavMobileContent();
    newsDetails.gallery();
    googleMaps.initActivity();
    googleMaps.initContacts();
    creditForm.starter();
    zhalba.getVal();
    register.popUp();
    calculator.buttons();
});
