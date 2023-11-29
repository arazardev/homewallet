
<script>
    import {fees} from "$lib/stores/fee"
    
    let nextPayTotal = 0
    let totalToPay = 0
    let nextToFree = 0

    $: {
        nextPayTotal = 0
        totalToPay = 0
        nextToFree = 0
        $fees.forEach(fee => {
        if (!(fee.totalFee === fee.paidFee)){
            let restFee = parseInt(fee.totalFee) - parseInt(fee.paidFee)
            let feePrice = Math.round(fee.price / fee.totalFee)
            nextPayTotal += feePrice
            totalToPay += feePrice * restFee
            if (restFee === 1){
                nextToFree += feePrice
            }
        }
    });}


</script>

<section class="bg-purple-950 border-dashed border-purple-400 border-4 rounded-lg mt-10 w-full h-auto">
    <h2 class="text-purple-200 text-xl text-center m-5">Total proximo pago: ${nextPayTotal}</h2>
    <h2 class="text-purple-200  text-xl text-center m-5">Total Restante a pagar: ${totalToPay}</h2>
    <h2 class="text-purple-200  text-xl text-center m-5">A liberar en proximo pago: ${nextToFree}</h2>
</section>

<style>
    section {
        font-family: monospace;
    }
</style>