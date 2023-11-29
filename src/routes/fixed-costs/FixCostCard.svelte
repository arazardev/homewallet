<script>

    import {fixedCosts} from "$lib/stores/fixed-costs"
	import Modal from "$lib/ui/Modal.svelte";
	import Form from "$lib/ui/Form.svelte";
    import TrashIcon from "$lib/ui/icons/TrashIcon.svelte";
    import EditIcon from "$lib/ui/icons/EditIcon.svelte";
    import Btn from "$lib/ui/Btn.svelte";

    export let fc

    let showDetail
    let card
    let showModalEdit = false

    function toggleDetails(){
        showDetail = !showDetail
    }

    function toggleShowModalEdit (){
        showModalEdit = !showModalEdit
    }

    function editFixedCost(){
        fixedCosts.edit(fc)
        showModalEdit = false
    }

</script>


<button on:click={toggleDetails} bind:this={card} class="backdrop rounded-lg p-4 bg-slate-900 hover:bg-black hover:scale-110 hover:z-50 z-10 w-48 h-fit">
    <div class="text-left flex flex-row justify-between align-top">
        <h1 class="text-xl font-mono w-2/3 truncate">{fc.name}</h1>
        {#if showDetail}
        <button on:click={toggleShowModalEdit}>
            <EditIcon></EditIcon>
        </button>
        {/if}
    </div>
    <h2 class="text-md font-mono text-left">${fc.price}</h2>
    {#if showDetail}
        <h4 class="text-left text-xs mb-2 mt-2"> {fc.date}</h4>
        <p class="text-left text-xs w-2/3">{fc.description}</p>
        <div class="flex flex-row gap-6 mt-5 justify-center">
            <button class="" on:click={()=>fixedCosts.del(fc.id)}>
                <TrashIcon></TrashIcon>
            </button>
        </div>
    {/if}
    <Modal show={showModalEdit}>
        <Form slot="body">
            <div class="grid gap-4 grid-cols-2 w-72 text-left">
                <div class="col-span-2">
                    <label for="name"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                    <input type="text" name="name" bind:value={fc.name} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Nombre" required>
                </div>
                <div class="col-span-1">
                    <label for="price"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
                    <input type="number" name="price" bind:value={fc.price} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required>
                </div>
                <div class="col-span-1">
                    <label for="date"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de inicio</label>
                    <input type="date" name="date" bind:value={fc.date} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required>
                </div>
                <div class="col-span-2">
                    <label for="description"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
                    <textarea type="text" name="description" bind:value={fc.description} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Descripción" required/>
                </div>
                <Btn color="blue" twClass="w-72" title="Editar" on:click={editFixedCost}></Btn>
            </div>    
        </Form>
    </Modal>
</button>


<style>
    button {
        transition: 500ms;
    }

    button:hover h1{
        text-overflow: clip;
        text-align: left;
        white-space: initial;
    }
</style>