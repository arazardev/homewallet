import { writable } from "svelte/store";

function createMonths(){

    const {update,subscribe} = writable(JSON.parse(localStorage.getItem("months")) ?? [])

    function add({month,fixedCosts,active}){
        let totalPrice = 0
        fixedCosts.forEach((fc)=>{
            totalPrice+=fc.price
        })
        const newMonth = {month,fixedCosts,active,paid:false,totalPrice}
        update(m=>{
            const updatedMonths = [...m,newMonth]
            localStorage.setItem("months",JSON.stringify(updatedMonths))
            return updatedMonths
        })
    }

    function calculateMonth({month,fixedCosts,active}){
        let isPaid = true
        let totalPrice = 0
        fixedCosts.forEach((fc)=>{
            if (!fc.paid){
                totalPrice+=fc.price
                isPaid = false
            }
            if (fc.paid && isPaid){
                isPaid = true
            }
        })
        console.log(totalPrice)
        return {
            month,fixedCosts,active,paid:isPaid,totalPrice
        }

    }

    function updateMonth({month,fixedCosts,active}){
        update(months=>{
            const updatedMonths = months.map((m)=>{
                console.log(m)
                if (m.month === month){
                    return calculateMonth({month,fixedCosts,active})
                } else {
                    return m
                }
            })
            localStorage.setItem("months",JSON.stringify(updatedMonths))
            return updatedMonths
        })
    }

    return {subscribe,add,updateMonth}
}

export const months = createMonths()