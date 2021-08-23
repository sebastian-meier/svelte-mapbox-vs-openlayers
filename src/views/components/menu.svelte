<script lang="ts">
  import {link, location} from 'svelte-spa-router';
  
  const pages = [
    {
      label: 'Home',
      link: '/home'
    },
    {
      label: 'Leaflet',
      link: '/leaflet'
    },
    {
      label: 'Mapbox',
      link: '/mapbox'
    },
    {
      label: 'OpenLayers',
      link: '/openlayers'
    },
    {
      label: 'Deck.gl',
      link: '/deckgl'
    },
    {
      label: 'TreesApp',
      link: '/trees'
    }
  ];
</script>

<nav>
  <ul>
{#each pages as page}
    <li class:active={$location === page.link}>
      <a href={page.link} use:link={page.link}>{page.label}</a>
    </li>
{/each}
  </ul>
</nav>