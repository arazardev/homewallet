import { writable } from 'svelte/store';
import { LOCAL_STORAGE } from '../constants/storage';

function createFixedCostsStore(){
    let {update,subscribe} = writable(localStorage.getItem(LOCAL_STORAGE.FIXED_COSTS) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.FIXED_COSTS)) : [])

    function add({id,name,description,active,date,price}){
        update((f)=>{
            const updateFc = [...f,{id,name,date,description,active,price}]
            localStorage.setItem(LOCAL_STORAGE.FIXED_COSTS,JSON.stringify(updateFc))
            return updateFc
        })
    }

    function del(idToDel){
        update((f)=>{
            const updateFc = f.filter(({id})=>id!==idToDel)
            localStorage.setItem(LOCAL_STORAGE.FIXED_COSTS,JSON.stringify(updateFc))
            return updateFc
        })
    }

    function edit(newFc){
        update((f)=>{
            const updateFc = f.map((fc)=>{
                if (fc.id === newFc.id){
                    return newFc
                } else {
                    return fc
                }
            })
            localStorage.setItem(LOCAL_STORAGE.FIXED_COSTS,JSON.stringify(updateFc))
            return updateFc
        })
    }

    return {subscribe,add,del,edit}
}

export const fixedCosts = createFixedCostsStore()