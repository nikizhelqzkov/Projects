const navigation = {
    mobileWork() {
        const btn = document.getElementById('nav--mobile--btn');
        if (btn) {
            btn.onclick = () => {
                const nav = document.getElementById('nav--mobile');
                if (nav) {
                    if (nav.classList.contains('active')) {
                        nav.classList.remove('active');
                        btn.classList.remove('active-btn');
                    } else {
                        nav.classList.add('active');
                        btn.classList.add('active-btn');
                    }
                }
            };
        }
        const dropdown = document.getElementById('dropdown__list--mobile--btn');
        if (dropdown) {
            dropdown.onclick = () => {
                const list = document.getElementsByClassName('dropdown__list--mobile');
                if (list) {
                    for (let i = 0; i < list.length; i += 1) {
                        const element = list[i];
                        if (element.style.display === 'none') {
                            element.style.display = 'block';
                        } else {
                            element.style.display = 'none';
                        }
                    }
                }
            };
        }
    },
    dropdown() {
        const btn = document.getElementById('nav--dropdown');
        const list = document.getElementById('nav__dropdown-list--forUs');
        if (btn && list) {
            btn.onclick = () => {
                if (list.classList.contains('drop-active')) {
                    list.classList.remove('drop-active');
                } else {
                    list.classList.add('drop-active');
                }
            };
        }
    }
};
export default navigation;
