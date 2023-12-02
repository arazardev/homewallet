<script>
	import Modal from "./Modal.svelte";

    export let title
    export let width = "w-auto"
    export let height = "h-fit"
    export let twClass = ""

    let card 
    let showModal = false

    $: console.log(showModal)
    
    function toggleShowModal(){
        showModal = !showModal
    }

</script>

<button on:click={toggleShowModal} bind:this={card} class="backdrop rounded-lg p-4 bg-slate-900 hover:bg-black hover:scale-110 hover:z-50 z-10 {width} {height} {twClass}">
    <h1 class="text-xl text-center mb-3 font-mono truncate">{title}</h1>
    <slot name="body"></slot>
</button>

<Modal bind:show={showModal}>
    <slot name="modal" slot="body"></slot>
</Modal>

<style>
    button {
        transition: 500ms;
    }

    button:hover h1{
        text-overflow: clip;
        white-space: initial;
    }
</style>