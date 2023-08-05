<script lang="ts">
    let count = Math.round(Math.random() * 100);
</script>

<button on:click={() => count++}>
    Count: {count}
</button>