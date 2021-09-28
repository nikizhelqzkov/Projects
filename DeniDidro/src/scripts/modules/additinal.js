const additinal = {
    leftTheScreen() {
        const close = document.getElementById('additional__list--close');
        if (close) {
            close.style.cursor = 'pointer';
            close.style.paddingLeft = '25%';
            close.style.paddingRight = '25%';
            close.onclick = () => {
                const element = document.querySelector('.additional');
                if (element) {
                    let opacity = 1;
                    let i;
                    setTimeout(() => {
                        if (opacity <= 0) {
                            clearInterval(i);
                        }
                    }, 300);
                    i = setInterval(() => {
                        if (opacity <= 0) {
                            element.style.display = 'none';
                        } else {
                            opacity -= 0.1;
                            element.style.opacity = opacity;
                        }
                    }, 20);
                }
            };
        }
    }
};
export default additinal;
