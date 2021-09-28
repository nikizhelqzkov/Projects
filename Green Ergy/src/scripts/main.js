/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import $ from './libs/jquery.min';
import formLoader from './modules/formLoader';
import checkout from './modules/checkout';
import newsUnderseite from './modules/news_underseite';
// import index from './index';

$(document).ready(() => {
    formLoader.presentModal();
    formLoader.presentForm();
    checkout.navigation();
    checkout.firstFormEvent();
    newsUnderseite.prevClick();
    newsUnderseite.nextClick();
});
