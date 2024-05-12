<script lang="ts">
	
	import { page } from '$app/stores';
	
    const pokemons = $page.data.pokemons;
</script>

<div class="flex-container">
	{#each pokemons as pokemon}
	<!-- <a href="./{pokemon.name}"> -->
		<div class="flex-container">
		  <!-- svelte-ignore a11y-missing-attribute -->
		  <img src="{pokemon.image}">
		  <span>{pokemon.name}</span>
		</div>
	  <!-- </a> -->
	{/each}
</div>
