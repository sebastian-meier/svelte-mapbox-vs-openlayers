<script lang="ts">

  let counterValue = 0;
  let state = false;

  const click = () => {
    state = !state;
    counterValue += 1;
  };

</script>

<h1>Welcome</h1>

<button id="button" on:click={click}>Click me</button>
<input id="counter" type="number" bind:value={counterValue} />
<div id="rectangle" class:active={state}></div>

<style lang="scss">
  #rectangle{
    width:100px;
    height:100px;
    border: 2px solid black;
  }
  #rectangle.active {
    background-color: red;
  }
</style>