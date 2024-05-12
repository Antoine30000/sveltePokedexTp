<script lang="ts">
    import { page } from '$app/stores';
  
    const pokemon = $page.data.pokemon;    
</script>

<div class="flex-container flex-vertical">
    <!-- svelte-ignore a11y-missing-attribute -->
    <h1>{pokemon.name}</h1>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="{pokemon.sprites.other.home.front_default}" >
    {#each pokemon.types as type, i}
    <span class="type">{type.type.name}</span>
    {/each}
    {#each pokemon.abilities as ability, i}
    <li class="ability">{ability.ability.name}</li>
    {/each}
</div>