<script lang="typescript">
  import mapbox from 'mapbox-gl';
  import { v4 as uuid } from 'uuid';
  import {onMount} from 'svelte';
  import type {DeckGL} from 'deck.gl';

  const id = uuid();
  
  export let map: DeckGL;
  export let cssClass = '';
  export let center: [number, number] = [0, 0];
  export let zoom: number = 4;

  onMount(() => {
    map = new deck.DeckGL({
      container: 'map-'+id,
      map: mapbox,
      mapboxApiAccessToken: __global.env.MAPBOXKEY,
      mapStyle: "mapbox://styles/mapbox/light-v10",
      initialViewState: {
        latitude: center[1],
        longitude: center[0],
        zoom: zoom,
        bearing: 0,
        pitch: 0
      },
      controller: true,
      layers: []
    });
  });
</script>

<svelte:head>
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />
</svelte:head>

<div class="map {cssClass}" id="map-{id}">
</div>
