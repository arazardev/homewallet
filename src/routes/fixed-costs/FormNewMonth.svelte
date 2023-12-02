<script>
	import Btn from "$lib/ui/Btn.svelte";
	import Form from "$lib/ui/Form.svelte";
    import {months} from "$lib/stores/month"
    import {fixedCosts} from "$lib/stores/fixed-costs"

    let newMonth

    function create(){
        months.add({
            month:newMonth,
            fixedCosts: $fixedCosts.filter(fc=>fc.active).map(fc=>{
                return {
                    name: fc.name,
                    price: fc.price,
                    paid: false
                }
            }),
            active:true
        })
        console.log($months)
    }

</script>

<Form>
    <div class="col-span-2">
        <label for="month"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mes</label>
        <input bind:value={newMonth} type="month" name="month" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Nombre" required>
    </div>
    <Btn title="Iniciar" twClass="mt-5" on:click={create}></Btn>
</Form>