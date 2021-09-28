/* eslint-disable prettier/prettier */
const customSelect = {
    starterHome() {
        const home = document.querySelector('#home__main__section--second #select__event');
        const list = document.querySelector('#home__main__section--second #selector__id');
        const span = document.querySelector('#home__main__section--second #selector__span--currency');
        const items = document.querySelectorAll('#selector__id .selector__body__list__items');

        const homeTime = document.querySelector('#select__event--time');
        const listTime = document.querySelector('#selector__id--time');
        const spanTime = document.querySelector('#selector__span--time');
        const itemsTime = document.querySelectorAll('#selector__id--time .selector__body__list__items');
        const homePurpose = document.querySelector('#home__main__section--second #select__event--purpose');
        const listPurpose = document.querySelector('#home__main__section--second #selector__id--purpose');
        const spanPurpose = document.querySelector('#selector__span--purpose');
        const itemsPurpose = document.querySelectorAll('#selector__id--purpose .selector__body__list__items');

        const listType = document.querySelector('#home__main__section--second #selector__id--type');
        const homeType = document.querySelector('#home__main__section--second #select__event--type');
        const spanType = document.querySelector('#selector__span--type');
        const itemsType = document.querySelectorAll('#selector__id--type .selector__body__list__items');

        const listTypeSecond = document.querySelector('#home__main__section--second #selector__id--type--second');
        const homeTypeSecond = document.querySelector('#home__main__section--second #select__event--type--second');
        const spanTypeSecond = document.querySelector('#selector__span--type--second');
        const itemsTypeSecond = document.querySelectorAll('#selector__id--type--second .selector__body__list__items');

        const listTypeThird = document.querySelector('#home__main__section--second #selector__id--type--third');
        const homeTypeThird = document.querySelector('#home__main__section--second #select__event--type--third');
        const spanTypeThird = document.querySelector('#selector__span--type--third');
        const itemsTypeThird = document.querySelectorAll('#selector__id--type--third .selector__body__list__items');

        const listTypeFourth = document.querySelector(' #selector__id--type--fourth');
        const homeTypeFourth = document.querySelector(' #select__event--type--fourth');
        const spanTypeFourth = document.querySelector('#selector__span--type--fourth');
        const itemsTypeFourth = document.querySelectorAll('#selector__id--type--fourth .selector__body__list__items');

        if (home && list && span && items) {
            customSelect.open(home, span, items, list);
            customSelect.listEvents(home, items, list, span);
        }
        if (homeTime && listTime && spanTime && itemsTime) {
            customSelect.open(homeTime, spanTime, itemsTime, listTime);
            customSelect.listEvents(homeTime, itemsTime, listTime, spanTime);
        }
        if (homePurpose && listPurpose && spanPurpose && itemsPurpose) {
            customSelect.open(homePurpose, spanPurpose, itemsPurpose, listPurpose);
            customSelect.listEvents(homePurpose, itemsPurpose, listPurpose, spanPurpose);
        }
        if (homeType && listType && spanType && itemsType) {
            customSelect.open(homeType, spanType, itemsType, listType);
            customSelect.listEvents(homeType, itemsType, listType, spanType);
        }
        if (homeTypeSecond && listTypeSecond && spanTypeSecond && itemsTypeSecond) {
            customSelect.open(homeTypeSecond, spanTypeSecond, itemsTypeSecond, listTypeSecond);
            customSelect.listEvents(homeTypeSecond, itemsTypeSecond, listTypeSecond, spanTypeSecond);
        }
        if (homeTypeThird && listTypeThird && spanTypeThird && itemsTypeThird) {
            customSelect.open(homeTypeThird, spanTypeThird, itemsTypeThird, listTypeThird);
            customSelect.listEvents(homeTypeThird, itemsTypeThird, listTypeThird, spanTypeThird);
        }
        if (homeTypeFourth && listTypeFourth && spanTypeFourth && itemsTypeFourth) {
            customSelect.open(homeTypeFourth, spanTypeFourth, itemsTypeFourth, listTypeFourth);
            customSelect.listEvents(homeTypeFourth, itemsTypeFourth, listTypeFourth, spanTypeFourth);
        }
    },
    event(h, l, it, sp) {
        const home = h;
        const list = l;
        if (list.classList.contains('selector__body__open')) {
            const items = Array.from(it);
            const selectedItem = items.find((item) => item.classList.contains('selected'));
            const span = sp;
            if (selectedItem) {
                span.style.color = '#000';
                span.style.opacity = '1';
                const value = selectedItem.childNodes[0].innerHTML;
                home.childNodes[1].innerHTML = value;
            } else {
                span.style.color = '#69666c';
                span.style.opacity = 0.52;
            }
            list.classList.remove('selector__body__open');
            home.classList.remove('selector__home__open');
        } else {
            list.classList.add('selector__body__open');
            home.classList.add('selector__home__open');
        }
    },
    open(h, sp, items, list) {
        const home = h;
        home.onclick = () => {
            const span = sp;
            customSelect.event(home, list, items, span);
        };
    },
    changer(item, home, list, it, span) {
        const items = Array.from(it);
        items.map((el) => el.classList.remove('selected'));
        item.classList.add('selected');
        customSelect.event(home, list, it, span);
    },
    listEvents(home, it, list, span) {
        const items = it;
        for (let i = 0; i < items.length; i += 1) {
            const item = items[i];
            item.onclick = () => {
                customSelect.changer(item, home, list, items, span);
            };
        }
    }
};
export default customSelect;
