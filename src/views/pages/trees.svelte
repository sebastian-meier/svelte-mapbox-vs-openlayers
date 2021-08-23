<script lang="ts">
  import {onMount} from 'svelte';
/*
 * 1. Entscheidet euch für Leaflet, Mapbox oder OpenLayers
 * kopiert die notwendigen Code Bausteine hier in das Dokument.
 * 2. Visualisiert alle Bäume aus st_pauli-light.csv auf eurer Karte.
 * Nutzt das Fetch-Beispiel um die Daten zu laden.
 * 2.1 Zentriert die Karte so, dass man alle Bäume sehen kann.
 * 2.2 (optional) Visualisiert das Pflanzjahr z.B. durch Farbe oder Größe
 * 3. Erstellt ein Klick-Event auf jedem Baum durch welches die Detailinformationen
 * für den jeweiligen Baum geladen werden (siehe Fetch-Beispiel für Detaildaten)
 * 4. Erstellt ein neues Element (Tooltip, Sidebar, etc.) in welcher die Detail-
 * informationen angezeigt werden.
 */

 onMount(() => {
  fetch('https://hcu-teaching-data.s3.eu-central-1.amazonaws.com/trees/st_pauli-light.csv')
    .then(result => result.text())
    .then(file => {
      const allTrees = [];
      const lines = file.split('\n');
      for (let l = 1; l < lines.length; l += 1) {
        const fields = lines[l].split(',');
        let year = parseInt(fields[1]) || 2020;
        if (year < 1800 || year > 2020) { year = 2020; }
        allTrees.push({
          id: fields[0],
          year: year,
          coordinates: [parseFloat(fields[2]), parseFloat(fields[3])]
        });
      }

      /*
       * Ergänzt hierunter euren Code.
       * In der Variable allTrees sind alle Bäume enthalten mit id, year und coordinates
       */

      /*
       * Beispiel zum Laden der Detailinformationen: 
       */
      // 
      // ...onclick = async () => {
      //   const treeData = {};
      //   const result = await fetch(`https://hcu-teaching-data.s3.eu-central-1.amazonaws.com/trees/details/${TREE_ID}.csv`);
      //   const file = await result.text();
      //   const lines = file.split('\n');
      //   const keys = lines[0].split(',');
      //   const values = lines[1].split(',');
      //   for (let k = 0; k < keys.length; k += 1) {
      //     treeData[keys[k]] = values[k];
      //   }
      // // Jetzt sind in treeData alle Detailinformationen enthalten
      //   console.log(JSON.stringify(treeData));
      // };
    });
  });

</script>