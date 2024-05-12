<script lang="ts">
    import { page } from '$app/stores';
  
    const pokemon = $page.data.pokemon;    
</script>

<div class="flex-container">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="{pokemon.sprites.other.home.front_default}" >
    <h1>{pokemon.name}</h1>
    {#each pokemon.types as type, i}
    <span class="badge badge-primary ml-2" id="type-{i+1}">{type.type.name}</span>
    {/each}
    {#each pokemon.abilities as ability, i}
    <li id="ability-{i+1}">{ability.ability.name}</li>
    {/each}
</div>