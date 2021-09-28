const calculator = {
    buttons() {
        if (window.location.href.includes('calculator.html') || window.location.href.includes('garancionen-fond')) {
            const buttonsUp = document.getElementsByClassName('custom-numerator--buttons--up');
            for (let i = 0; i < buttonsUp.length; i += 1) {
                const button = buttonsUp[i];
                button.onclick = (event) => calculator.increment(event.target);
            }
            const buttonsDown = document.getElementsByClassName('custom-numerator--buttons--down');
            for (let i = 0; i < buttonsDown.length; i += 1) {
                const button = buttonsDown[i];
                button.onclick = (event) => calculator.decrement(event.target);
            }
            const navList = document.querySelectorAll('.calculator__main__calculators__calculator__nav__list__items');
            for (let i = 0; i < navList.length; i += 1) {
                const list = navList[i];
                list.onclick = (event) => calculator.changeContent(event.target);
            }
        }
    },
    increment(button) {
        const parent = button.parentNode;
        const input = parent.previousElementSibling;
        const num = +input.value;
        input.value = Number.isNaN(num) ? 0 : num + 1;
    },
    decrement(button) {
        const parent = button.parentNode;
        const input = parent.previousElementSibling;
        const num = +input.value;
        input.value = Number.isNaN(num) ? 0 : num - 1;
    },
    changeContent(list) {
        if (!list.classList.contains('active-tab')) {
            list.classList.add('active-tab');
            if (list.nextElementSibling) {
                list.nextElementSibling.classList.remove('active-tab');
            } else {
                list.previousElementSibling.classList.remove('active-tab');
            }
        }
    }
};

export default calculator;
