<script lang="ts">
	
	import { page } from '$app/stores';
	
    const pokemons = $page.data.pokemons;
</script>

<div class="flex-conrtainer">
	{#each pokemons as pokemon}
	<!-- <a href="./{pokemon.name}"> -->
		<div class="flex">
		  <img src="{pokemon.sprite}" alt="image of {pokemon.name}">
		  <span>{pokemon.name}</span>
		</div>
	  <!-- </a> -->
	{/each}
</div>
