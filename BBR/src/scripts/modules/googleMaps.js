import { Loader } from 'google-maps';

const maps = {
    initActivity() {
        if (window.location.href.includes('activity-details.html')) {
            const loader = new Loader('AIzaSyDBpj1lFASHpNA9qAoK2LYeXUhY06c3ZUk');

            loader.load().then(function (google) {
                const coordinates = { lat: 42.01917156603869, lng: 23.096885441262827 };
                // The map, centered at Uluru
                const m = new google.maps.Map(document.getElementById('mapActivity'), {
                    zoom: 19,
                    center: coordinates
                });
                const img = '../../assets/images/map__indicator.svg';
                // The marker, positioned at Uluru
                const marker = new google.maps.Marker({
                    position: coordinates,
                    map: m,
                    icon: img
                });
            });
        }
    },
    initContacts() {
        if (window.location.href.includes('contacts.html')) {
            const loader = new Loader('AIzaSyDBpj1lFASHpNA9qAoK2LYeXUhY06c3ZUk');

            loader.load().then(function (google) {
                const coordinates = { lat: 43.41416079927299, lng: 23.220112935519495 };
                // The map, centered at Uluru
                const m = new google.maps.Map(document.getElementById('mapContacts'), {
                    zoom: 18,
                    center: coordinates
                });
                const img = '../../assets/images/map__indicator.svg';
                // The marker, positioned at Uluru
                const marker = new google.maps.Marker({
                    position: coordinates,
                    map: m,
                    icon: img
                });
            });
        }
    }
};
export default maps;
