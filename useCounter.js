import { useState } from "react"



export const useCounter = (initialValue = 1) =>{
    const [counter, setCounter] = useState(initialValue);

    const suma = ()=>{
        setCounter(counter + 1)
    }
    const reset = ()=>{
        setCounter(initialValue)
    }
    const resta = ()=>{
        setCounter(counter - 1)
    }
    return {
        counter: counter,
        suma,
        reset,
        resta,
    }
}