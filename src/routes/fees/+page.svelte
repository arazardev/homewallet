<script>
	import BtnModal from "$lib/ui/BtnModal.svelte";
	import Form from "./Form.svelte";
    import {fees} from "$lib/stores/fee"
	import FeeCard from "./FeeCard.svelte";
	import Resume from "./Resume.svelte";
	import Btn from "../../lib/ui/Btn.svelte";
	import Title from "../../lib/ui/Title.svelte";

    let showCompleted = false
    let feesOrdered = false

    let filteredFees = []

    $: if (feesOrdered){
        filteredFees = filteredFees.sort((a,b)=>(a.totalFee - a.paidFee) - (b.totalFee - b.paidFee))
    } else {
        filteredFees = showCompleted ? $fees : $fees.filter((fee)=>fee.paidFee !== fee.totalFee)
    }


</script>


    <Title>Cuotas</Title>
    <div class="flex flex-row gap-3 mt-10 place-content-center">
        <BtnModal title={"+ Pago en Cuotas"} color="purple">
            <div slot="header" class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Nuevo pago en cuotas
                </h3>             
            </div>
            <div slot="body">
                <Form></Form>
            </div>
        </BtnModal>
        <BtnModal title="Pagar cuota" color="green">
            <div slot="header" class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Confirmacion
                </h3>             
            </div>
            <div slot="body"><p class="text-white text-xl m-10">¿Confirma que desea pagar una cuota?</p><Btn twClass="ml-2" color="green" title="Confirmar" on:click={fees.payFeeAll}></Btn></div>
        </BtnModal>
        <!-- <Btn twClass="ml-2" color="red" title="Borrar pago" on:click={fees.unpayFeeAll}></Btn> -->
        <div class="flex items-center mb-4">
            <input id="showCompleted" type="checkbox" bind:checked={showCompleted} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="showCompleted" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mostrar completados</label>
        </div>  
        <div class="flex items-center mb-4">
            <input id="feesOrdered" type="checkbox" bind:checked={feesOrdered} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="feesOrdered" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ordenar</label>
        </div>   
    </div>
    <section class="grid grid-rows-[150px] lg:grid-cols-[repeat(4,250px)] md:grid-cols-[repeat(3,250px)] sm:grid-cols-[repeat(2,250px)] mt-7 gap-3">
        {#each filteredFees as fee (fee.id)}
            <FeeCard fee={fee}></FeeCard>
        {/each}
    </section>
    <Resume></Resume>
