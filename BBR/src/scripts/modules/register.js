const register = {
    popUp() {
        if (window.location.href.includes('register-second.html')) {
            setTimeout(() => {
                const popup = document.querySelector('#register--popup');
                popup.style.display = 'none';
            }, 5000);
        }
    }
};
export default register;
