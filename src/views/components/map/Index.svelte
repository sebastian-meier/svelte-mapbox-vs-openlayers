<script lang="typescript">
    import DGLMap from './Deckgl.svelte';
    import type DeckGL from 'deck.gl';
    import MbMap from './MapBox.svelte';
    import type {map as MbMapType} from 'mapbox-gl';
    import OlMap from './OpenLayers.svelte';
    import type {Map as OlMapType} from 'ol/Map';
    import LlMap from './Leaflet.svelte';
    import type {Map as LlMapType} from 'leaflet';

    export let center: [number, number] = [10.452, 51.1605];
    export let zoom: number = 9;

    export let provider: 'ol' | 'mb' | 'll' | 'dgl' = 'mb';

    export let map: MbMapType | OlMapType | LlMapType | DeckGL;

</script>

{#if provider === 'ol'}
<OlMap
    bind:map={map}
    {center}
    {zoom} />
{:else if provider === 'll'}
<LlMap
    bind:map={map}
    {center}
    {zoom} />
{:else if provider === 'dgl'}
<DGLMap
    bind:map={map}
    {center}
    {zoom} />
{:else}
<MbMap
    bind:map={map}
    {center}
    {zoom} />
{/if}