<script>
  import Router from 'svelte-spa-router';
  import {link} from 'svelte-spa-router';
  import Menu from './views/components/Menu.svelte';
  import { routes } from './lib/routes/root'
</script>

<header>
  <a id="logo" href="/" use:link={"/"}>
    <img src="/assets/images/tree.svg" alt="Tree by Alice Noir from the Noun Project" />
    <span>TreeApp</span>
  </a>
  <Menu />
</header>
<main>
  <Router {routes} />
</main>

<style lang="scss" global>
	@import 'styles/vars';
	@import 'styles/global';
</style>