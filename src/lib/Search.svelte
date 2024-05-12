<script lang="ts">
    let name = '';
    function searchByName() {
        if (name) {
            window.location.href = `/${name}`;
        }
    }
</script>

<div class="flex-container">
    <button on:click={searchByName}>Go</button>
    <input type="text" placeholder="Pikachu" bind:value={name}>
</div>