<script>

    export let color = "purple"
    export let title = "Button"
    export let twClass = ""

    let modal
    function toggleModal (){
        modal.showModal()
    }

</script>

<button on:click={toggleModal} type="button" class="{twClass} focus:outline-none text-white bg-{color}-700 hover:bg-{color}-800 focus:ring-4 focus:ring-{color}-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-{color}-600 dark:hover:bg-{color}-700 dark:focus:ring-{color}-900">
    {title}
</button>

<dialog bind:this={modal} class="bg-transparent">
    <div class="overflow-y-auto overflow-x-hidden z-50 justify-center items-center  md:inset-0 rounded-lg backdrop-blur-xl" >
        <div class="relative w-full max-w-md max-h-full dark:bg-gray-700">
            <!-- Modal content -->
            <div class="relative shadow dark:bg-gray-700">                
                <button on:click={()=>modal.close()} type="button" class="text-gray-500 dark:text-gray-400    p-2.5 absolute right-0">
                    <svg height="10" width="10" class="justify-items-center" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
                <!-- Modal header -->
                <slot name="header"></slot>                
                <!-- Modal body -->
                <slot name="body"></slot>
            </div>
        </div>
    </div> 
</dialog>

<style>
    dialog::backdrop{
        backdrop-filter: blur(10px);
    }
</style>