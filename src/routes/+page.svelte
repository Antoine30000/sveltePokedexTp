<script lang="ts">
	
	import { page } from '$app/stores';
	
    const pokemons = $page.data.pokemons;
</script>

<div class="grid w-full">
	{#each pokemons as pokemon}
	<a href="./{pokemon.name}">
		<div class="flex-container flex-vertical preview w-full p-2 m-2">
		  <!-- svelte-ignore a11y-missing-attribute -->
		  <img src="{pokemon.image}">
		  <span>{pokemon.name}</span>
		</div>
	  </a>
	{/each}
</div>
