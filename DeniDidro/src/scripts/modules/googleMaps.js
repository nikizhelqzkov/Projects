import { Loader } from 'google-maps';

const maps = {
    init() {
        if (window.location.href.slice(window.location.href.length - 13) === 'contacts.html') {
            const loader = new Loader('AIzaSyB2vujDmScag1vQWthhomS1zlJgtT6M7_M');

            loader.load().then(function (google) {
                const coordinates = { lat: 42.7031, lng: 23.13565 };
                // The map, centered at Uluru
                const m = new google.maps.Map(document.getElementById('map'), {
                    zoom: 18,
                    center: coordinates
                });
                const img = '../../assets/images/marker.svg';
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
