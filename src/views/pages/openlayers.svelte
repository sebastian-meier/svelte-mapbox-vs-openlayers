<script lang="typescript">
  import Map from '../components/map/Index.svelte';

  let map;
</script>

<Map provider='ol' bind:map={map} />