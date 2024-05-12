<script lang="ts">
  import Search from '$lib/Search.svelte';
</script>

<a href="/">
	<div class="flex-container">
	Svelte Pokedex
</div>
</a>
<!-- Not the cleanest header with the search as there is a search page which will show the search input twice -->
<Search />
<div class="flex-container">
	<slot />
</div>
