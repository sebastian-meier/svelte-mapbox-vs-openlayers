<script lang="typescript">
    import 'ol/ol.css';
    import Map from 'ol/Map';
    import { fromLonLat } from 'ol/proj';
    import View from 'ol/View';
    import { v4 as uuid } from 'uuid';
    import {onMount} from 'svelte';
    import olms from 'ol-mapbox-style';

    const id = uuid();
    
    export let map: Map;
    export let cssClass = '';
    export let center: [number, number] = [0, 0];
    export let zoom: number = 4;
    export let loaded: boolean = false;

    $: view = new View({
        center: fromLonLat(center),
        zoom: zoom,
    });

    onMount(() => {
        map = new Map({
            target: `map-${id}`,
            view,
        });

        olms(map, __global.env.URL + '/assets/positron.json')
            .then(() => {
                loaded = true;
            });
    });
  </script>
  
  <div class="map {cssClass}" id="map-{id}">
  </div>