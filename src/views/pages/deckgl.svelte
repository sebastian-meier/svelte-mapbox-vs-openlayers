<script lang="typescript">
  import Map from '../components/map/Index.svelte';
  import {onMount} from 'svelte';
  import {scaleLinear} from 'd3-scale';

  let map;

  let showTooltip = false;
  let tooltipData = {
    id: null,
    year: null
  };

  onMount(() => {
    fetch('https://hcu-teaching-data.s3.eu-central-1.amazonaws.com/trees/trees.csv')
      .then(result => result.text())
      .then(file => {
        const data = [];
        const colorScale = scaleLinear().range(['#23801B', '#86FC7C']).domain([1800, 2020]);
        const lines = file.split('\n');
        for (let l = 1; l < lines.length; l += 1) {
          const fields = lines[l].split(',');
          let year = parseInt(fields[1]) || 2020;
          if (year < 1800 || year > 2020) { year = 2020; }
          data.push({
            id: fields[0],
            year: year,
            color: colorScale(year).match(/[0-9]*/g).filter(n => n.length > 0).map(n => parseInt(n)),
            coordinates: [parseFloat(fields[2]), parseFloat(fields[3])]
          });
        }

        const layer = new deck.ScatterplotLayer({
          id: 'trees',
          data: data,
          stroked: false,
          filled: true,
          getPosition: d => d.coordinates,
          radiusScale: 10,
          radiusMinPixels: 0.5,
          getFillColor: d => d.color,
          pickable: true,
          onClick: (info) => {
            if ('object' in info) {
              tooltipData = info.object;
              showTooltip = true;
            }
          }
        });

        map.setProps({ layers: [layer] });
      });
  });
  
</script>

<Map provider='dgl' center={[9.997068254548198, 53.534648869961316]} bind:map={map} />
{#if showTooltip}
<div class="tooltip">
  <h2>{tooltipData.id}</h2>
  <p>Jahr: {tooltipData.year}</p>
  <button on:click={() => {showTooltip = false;}}>Schließen</button>
</div>
{/if}

<style lang="scss">
  .tooltip{
    position:fixed;
    right:0;
    bottom:0;
    background-color:white;
    padding:30px;
  }
</style>