import Home from '../../views/pages/home.svelte'
import Mapbox from '../../views/pages/mapbox.svelte'
import OpenLayers from '../../views/pages/openlayers.svelte'
import Leaflet from '../../views/pages/leaflet.svelte'
import DeckGL from '../../views/pages/deckgl.svelte'
import Trees from '../../views/pages/trees.svelte'
import NotFound from '../../views/pages/404.svelte'

export const routes = {
  '/': Home,
  '/home': Home,
  '/mapbox': Mapbox,
  '/openlayers': OpenLayers,
  '/leaflet': Leaflet,
  '/deckgl': DeckGL,
  '/trees': Trees,
  '/404': NotFound,
  '*': NotFound,
}
