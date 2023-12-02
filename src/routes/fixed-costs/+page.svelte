<script>
	import Title from "$lib/ui/Title.svelte";
	import Form from "$lib/ui/Form.svelte";
	import Btn from "$lib/ui/Btn.svelte";
	import BtnModal from "$lib/ui/BtnModal.svelte";
    import {fixedCosts} from "$lib/stores/fixed-costs"
    import {months} from "$lib/stores/month"
	import FixCostCard from "./FixCostCard.svelte";
	import Board from "../../lib/ui/Board.svelte";
	import FormNewMonth from "./FormNewMonth.svelte";
	import MonthCard from "./MonthCard.svelte";

    let name
    let price
    let description
    let date
    let nextPay = 0

    $: {
        nextPay = 0
        $fixedCosts.forEach(fc => {
        nextPay += fc.price
    });}

    function createFixedCost (){
        fixedCosts.add({
            id: crypto.randomUUID(),
            name,
            price,
            description,
            date,
            active: true
        })
    }

</script>

<!-- ---------------- HTML ---------------- -->
<Title>Gastos Fijos</Title>
<BtnModal color="purple" twClass="mt-10 w-fit place-self-center" title="+ Gasto Fijo">
 <Form slot="body">
    <div class="grid gap-4 grid-cols-2 w-72">
        <div class="col-span-2">
            <label for="name"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
            <input type="text" name="name" bind:value={name} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Nombre" required>
        </div>
        <div class="col-span-1">
            <label for="price"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
            <input type="number" name="price" bind:value={price} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required>
        </div>
        <div class="col-span-1">
            <label for="date"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de inicio</label>
            <input type="date" name="date" bind:value={date} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required>
        </div>
        <div class="col-span-2">
            <label for="description"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
            <textarea type="text" name="description" bind:value={description} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Descripción" required/>
        </div>
        <Btn color="green" twClass="w-72" title="Crear" on:click={createFixedCost}></Btn>
    </div>
 </Form>
</BtnModal>

<section class="grid gap-4 mt-6 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
    {#each $fixedCosts as fc}
        <FixCostCard {fc}></FixCostCard>
    {/each}
</section>

<Board color="red">
    <h1 class="text-xl text-center mt-5 text-red-300">Total </h1>
    <h2 class="text-center text-3xl mt-5 text-red-300 mb-5">${nextPay}</h2>
</Board>

<BtnModal color="green" title="Iniciar Mes" twClass="mt-10 w-fit place-self-center">
    <FormNewMonth slot="body"></FormNewMonth>
</BtnModal>

{#each $months as month (month.month)}
    <MonthCard {month}></MonthCard>
{/each}