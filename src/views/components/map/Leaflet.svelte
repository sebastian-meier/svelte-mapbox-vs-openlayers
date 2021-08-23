<script lang="typescript">
  import {Map, map as llMap, tileLayer, control} from 'leaflet';
  import { v4 as uuid } from 'uuid';
  import {onMount} from 'svelte';

  const id = uuid();
  
  export let map: Map;
  export let cssClass = '';
  export let center: [number, number] = [0, 0];
  export let zoom: number = 4;
  export let loaded: boolean = false;

  onMount(() => {
      map = llMap(`map-${id}`, {
          center: [center[1], center[0]],
          zoom
      }).on('load', (e) => {
        loaded = true;
      });

      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
  });
</script>

<svelte:head>
  <link href='https://unpkg.com/leaflet@1.7.1/dist/leaflet.css' rel='stylesheet' />
</svelte:head>

<div class="map {cssClass}" id="map-{id}">
</div>
