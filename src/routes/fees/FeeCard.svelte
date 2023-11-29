<script>

    import {fees} from "$lib/stores/fee"

    export let fee

    let showDetail = false
    let card

    function toggleShowDetails(){
        showDetail = !showDetail
    }

    $: if (card){
        if (showDetail){
            card.style.scale = 1.25
            card.style.zIndex = 60
            card.style.border = "solid 2px white"
        } else {
            card.style.scale = 1
            card.style.zIndex = 40
            card.style.position = ""
            card.style.placeSelf = ""
            card.style.border = ""
        }
    }

    $: percentagePaid = Math.round((fee.paidFee / fee.totalFee) * 100)
    $: restFee = fee.totalFee-fee.paidFee
    $: percentageColor = calculateColor(restFee)
    function calculateColor (restFee){
        switch (true) {
            case restFee >= 6:
                return "red"
            case restFee >= 4 && restFee < 6:
                return "orange"
            case restFee <= 3 && restFee > 1:
                return "blue"
            case restFee <= 1:
                return "green"
            default:
                return "slate";
        }
    }
</script>


<button on:click={toggleShowDetails} bind:this={card} class="backdrop rounded-lg p-4 bg-slate-900 hover:bg-black hover:scale-110 hover:z-50 z-10 w-auto h-fit">
    <h1 class="text-xl text-center mb-3 font-mono truncate">{fee.name}</h1>
    <h2 class="text-md font-mono text-left">${fee.price} (${Math.round(fee.price/fee.totalFee)})</h2>
    {#if showDetail}
        <h3 class="text-xs font-mono text-left">{fee.buyDate}</h3>
        <h3 class="text-xs font-mono text-left">{fee.card}</h3>
        <p class="text-left text-xs w-2/3">{fee.description}</p>
    {/if}
    <div class="w-100 font-mono bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-3 mb-3">
        <div class="bg-{percentageColor}-600 h-2.5 rounded-full dark:bg-{percentageColor}-500" style="width: {percentagePaid}%"></div>
    </div>
    <h4 class="text-xs font-mono text-left"> {fee.paidFee} / {fee.totalFee} - Restan: {restFee}</h4>
    {#if showDetail}
        <button class="mt-5" on:click={()=>fees.del(fee.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#e11d48" d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8Z"/></svg>
        </button>
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