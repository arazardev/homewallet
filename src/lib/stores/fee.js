import { writable } from 'svelte/store';
import { LOCAL_STORAGE } from '../constants/storage';

function createFeeStore(){

    let feesSaved = []
    if (localStorage.getItem(LOCAL_STORAGE.FEES)){
        feesSaved = JSON.parse(localStorage.getItem(LOCAL_STORAGE.FEES))
    }
    const feesStored = writable(feesSaved)

    function add(fee){
        if (fee.paidFee > fee.totalFee){
            fee.paidFee = fee.totalFee
        }
        feesStored.update((f)=>{
            const updatedFees = [...f,fee]
            localStorage.setItem(LOCAL_STORAGE.FEES,JSON.stringify(updatedFees))
            return updatedFees
            })
    }

    function del(idToDel){
        console.log(idToDel)
        feesStored.update((f)=>{
            const updatedFees = f.filter(({id})=>id !== idToDel)
            localStorage.setItem(LOCAL_STORAGE.FEES,JSON.stringify(updatedFees))
            return updatedFees
        })
    }

    function payFeeAll (){
        feesStored.update((f)=>{
            const updatedFees = f.map((fee)=>{
                if (fee.paidFee < fee.totalFee){
                    return{...fee,paidFee:fee.paidFee+1}
                } else {
                    return fee
                }
            })
            localStorage.setItem(LOCAL_STORAGE.FEES,JSON.stringify(updatedFees))
            return updatedFees
        })
    }

    function unpayFeeAll (){
        feesStored.update((f)=>{
            const updatedFees = f.map((fee)=>{
                if (fee.paidFee < fee.totalFee){
                    return{...fee,paidFee:fee.paidFee-1}
                } else {
                    return fee
                }
            })
            localStorage.setItem(LOCAL_STORAGE.FEES,JSON.stringify(updatedFees))
            return updatedFees
        })
    }

    return {
        subscribe: feesStored.subscribe,
        add,del,payFeeAll,unpayFeeAll
    }
}  

export const fees = createFeeStore()