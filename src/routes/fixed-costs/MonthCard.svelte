<script>
    import {yearMonthToString} from "$lib/utils/dates"
    import Btn from "$lib/ui/Btn.svelte"
	import CardModal from "../../lib/ui/CardModal.svelte";
    import {months} from "$lib/stores/month"
    export let month 

    let priceClass = "text-red-600"
    let borderColor = ""
    let pendingPay = false

    $: if(month){
        if (!month.totalPrice){
            priceClass = "text-green-600"
            pendingPay = false
            borderColor = "border"
        } else {
            pendingPay = true
            priceClass = "text-red-600"
        }
    }

</script>

<CardModal height="h-fit" width="w-48" title={yearMonthToString(month.month)} class="border">
    <p slot="body">A pagar: <strong class={priceClass}>$ {month.totalPrice}</strong> </p>
    <div slot="modal" class="p-5">
        {#each month.fixedCosts as fc }
            <div class="flex items-center mb-4">
                <input type="checkbox" bind:checked={fc.paid} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{fc.name} - $ {fc.price}</label>
            </div>
        {/each}
        <Btn color="green" title="Actualizar" on:click={()=>months.updateMonth({month:month.month,fixedCosts: month.fixedCosts, active: month.active})}></Btn>
    </div>
</CardModal>

<style>
    .border {
        border: solid 2px green;
    }
</style>