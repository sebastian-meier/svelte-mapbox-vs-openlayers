<script lang="typescript">
  import Map from '../components/map/Index.svelte';

  let map;
</script>

<Map provider='ll' bind:map={map} />