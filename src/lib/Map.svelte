<script>
    import {onMount, onDestroy} from 'svelte';
    import data from '$lib/assets/data/schools.json';
    import {browser} from '$app/environment';

    import markerIcon2x from '$lib/assets/img/leaflet/marker-icon-2x.png';
    import markerIcon from '$lib/assets/img/leaflet/marker-icon.png';
    import markerShadow from '$lib/assets/img/leaflet/marker-shadow.png';

    import "leaflet/dist/images/marker-shadow.png";

    let mapElement;
    let map;

    onMount(async () => {
        if (browser) {
            const leaflet = await import('leaflet');

            const iconRetinaUrl = markerIcon2x;
            const iconUrl = markerIcon;
            const shadowUrl = markerShadow;
            const iconDefault = leaflet.icon({
                iconRetinaUrl,
                iconUrl,
                shadowUrl,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41]
            });
            leaflet.Marker.prototype.options.icon = iconDefault;

            map = leaflet.map(mapElement, {
                scrollWheelZoom: false
            }).setView([50.9412784,6.9582814], 13);
            leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            data.schools.forEach((school) => {
                leaflet.marker([school.lat, school.long]).addTo(map)
                    .bindPopup(`<h3>${school.name}</h3>
                                <a href="${school.url}" target="_blank">Link zur Schulwebsite</a>`);
            });

        }
    });

    onDestroy(async () => {
        if (map) {
            map.remove();
        }
    });
</script>

<section id="map" bind:this={mapElement} class="page-container h-screen max-h-screen" data-scrollspy="Karte">
</section>

<style>
    @import 'leaflet/dist/leaflet.css';

    #map {
        height: 100vh;
    }
</style>
