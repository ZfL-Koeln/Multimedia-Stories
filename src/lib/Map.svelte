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
            await import('leaflet.markercluster');

            const iconUrl = markerIcon;
            const shadowUrl = markerShadow;

            leaflet.Marker.prototype.options.icon = leaflet.icon({
                markerIcon2x,
                iconUrl,
                shadowUrl,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41]
            });

            map = leaflet.map(mapElement, {
                scrollWheelZoom: false
            }).setView([50.9412784, 6.9582814], 13);
            leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            let markers = L.markerClusterGroup();
            let popupcontent = '';

            data.schools.forEach((school) => {
                popupcontent = `<h3>${school.name}</h3>`;
                school.url ? popupcontent += `<a href="${school.url}" target="_blank">Link zur Website</a>` : '';
                markers.addLayer(leaflet.marker([school.lat, school.long]).addTo(map)
                    .bindPopup(popupcontent));
            });

            map.addLayer(markers);
        }
    });

    onDestroy(async () => {
        if (map) {
            map.remove();
        }
    });
</script>

<section id="map" bind:this={mapElement} class="relative page-container h-screen max-h-screen"
         data-scrollspy="Schulkarte">
    <div class="absolute top-3 my-auto text-black drop-shadow-lg text-2xl md:text-4xl xl:text-4xl mt-12 font-black font-sans text-center w-full z-[1000] break-normal"
         style="line-height: 3.2rem; padding: 0 10px;">Hier sind Lehramtsstudierende für<br>Bildungsgerechtigkeit im
        Einsatz
    </div>
    <div class="text-xs w-full px-8 lg:px-0 lg:absolute p-4 bottom-2 lg:left-5 text-center lg:text-left"
         style="z-index: 1337; left: 10px;">Stand: SoSe 2023
    </div>
</section>
<div style="background-color: green; width: 100px; height: 100px; position: absolute; left: 10px; bottom: 10px;"></div>

<style>
    @import 'leaflet/dist/leaflet.css';
    @import 'leaflet.markercluster/dist/MarkerCluster.css';
    @import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

    #map {
        height: 100vh;
    }
</style>
