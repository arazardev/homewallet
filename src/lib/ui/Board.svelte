<script>
    export let color ="purple"
</script>

<section class="bg-{color}-900 border-dashed border-{color}-400 border-4 rounded-lg mt-10 w-full h-auto">
    <slot></slot>
</section>

<style>
    section {
        font-family: monospace;
    }
</style>