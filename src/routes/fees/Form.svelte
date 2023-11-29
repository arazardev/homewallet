<script>
    import {fees} from "$lib/stores/fee"

    let name 
    let totalFee 
    let paidFee 
    let price 
    let buyDate 
    let card 
    let category 
    let description


    function addFee (){
        let fee = {id: crypto.randomUUID(),
            name, totalFee, paidFee, price, buyDate, card, category, description}
        fees.add(fee)
    }
</script>

<form class="p-4 md:p-5">
    <div class="grid gap-4 mb-4 grid-cols-2">
        <div class="col-span-2">
            <label for="name"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
            <input type="text" name="name" id="name" bind:value={name} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Nombre del producto" required>
        </div>
        <div class="lg:col-span-1 col-span-2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cuotas totales</label>
            <input type="number" name="name" bind:value={totalFee} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Cuotas totales" required>
        </div>
        <div class="lg:col-span-1 col-span-2">
            <label for="paidfee" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cuotas pagadas</label>
            <input type="number" name="paidfee" bind:value={paidFee} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Cuotas pagadas" required>
        </div>
        <div class="col-span-2 sm:col-span-1">
            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
            <input type="number" name="price" bind:value={price} id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required>
        </div>
        
        <div class="col-span-2 sm:col-span-1">
            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de compra</label>
            <input type="date" name="date" bind:value={buyDate} id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required>
        </div>
        
        <div class="col-span-2 sm:col-span-1">
            <label for="card" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tarjeta</label>
            <select name="card" required bind:value={card} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option value=""></option>
                <option value="Visa">Visa</option>
                <option value="Master">Mastercard</option>
                <option value="Amex">Amex</option>
            </select>
        </div>
        
        <div class="col-span-2 sm:col-span-1">
            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
            <select id="category" required bind:value={category} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option value=""></option>
                <option value="Tecnologia">Tecnologia</option>
                <option value="Ocio">Ocio</option>
                <option value="Mecanico">Mecanico</option>
                <option value="Ropa">Ropa</option>
                <option value="Credito">Credito</option>
                <option value="Servicio">Servicio</option>
            </select>
        </div>
        <div class="col-span-2">
            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
            <textarea id="description" rows="4" bind:value={description} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe la descripcion aqui"></textarea>                    
        </div>
    </div>
    <button type="submit" on:click|preventDefault={addFee} class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
        Agregar pago
    </button>
</form>
