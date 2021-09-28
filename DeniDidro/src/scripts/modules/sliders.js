import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

const sliders = {
    swipperInit() {
        Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

        const swiper = new Swiper('.header-slider', {
            slidesPerView: 1,
            fadeEffect: { crossFade: false },
            autoplay: {
                delay: 3500,
                disableOnInteraction: false
            },
            effect: 'fade',
            // spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        });
        return swiper;
    },
    swipperGallery() {
        Swiper.use([Navigation]);
        const swiper = new Swiper('.home-gallery-slider', {
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                640: {
                    slidesPerView: 1
                    // spaceBetween: 20
                },
                768: {
                    slidesPerView: 2
                    // spaceBetween: 40
                },
                1024: {
                    slidesPerView: 3
                    // spaceBetween: 50
                }
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
        return swiper;
    }
};
export default sliders;
