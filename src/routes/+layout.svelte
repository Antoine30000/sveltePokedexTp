<script lang="ts">
  import Search from '$lib/Search.svelte';
  import '../styles.css'
</script>

<a href="/">
	<div class="flex-container w-full">
	<h1>Svelte Pokedex</h1>
</div>
</a>
<!-- Not the cleanest header with the search as there is a search page which will show the search input twice -->
<Search />
<div class="flex-container w-full">
	<slot />
</div>
