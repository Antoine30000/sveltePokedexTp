<script lang="ts">
    import { page } from '$app/stores';
  
    const pokemon = $page.data.pokemon;    
</script>

<div class="flex-container">
    <h1>{pokemon.name}</h1>
</div>