/* eslint-disable no-plusplus */
const newsDetails = {
    gallery() {
        const bigElem = document.getElementById('news-details__gallery--big');
        const imgs = Array.from(document.querySelectorAll('.news-details__body--gallery__list img'));
        if (bigElem && imgs) {
            for (let i = 0; i < imgs.length; i++) {
                const img = imgs[i];
                img.onclick = (event) => {
                    // eslint-disable-next-line prefer-destructuring
                    const src = bigElem.src;
                    bigElem.src = event.target.src;
                    // eslint-disable-next-line no-param-reassign
                    event.target.src = src;
                };
            }
        }
    }
};
export default newsDetails;
