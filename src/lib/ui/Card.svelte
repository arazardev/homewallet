<script>
    export let title
    export let width = "w-auto"
    export let height = "h-fit"

    let card 
    let showDetail = false
    
    function toggleShowDetails(){
        showDetail = !showDetail
    }

</script>

<button on:click={toggleShowDetails} bind:this={card} class="backdrop rounded-lg p-4 bg-slate-900 hover:bg-black hover:scale-110 hover:z-50 z-10 {width} {height}">
    <h1 class="text-xl text-center mb-3 font-mono truncate">{title}</h1>
    {#if showDetail}
        <slot name="detail-top"></slot>
    {/if}
    <slot name="body"></slot>
    {#if showDetail}
        <slot name="detail-bottom"></slot>
    {/if}
</button>

<style>
    button {
        transition: 500ms;
    }

    button:hover h1{
        text-overflow: clip;
        white-space: initial;
    }
</style>