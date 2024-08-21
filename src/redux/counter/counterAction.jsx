import { DECREMENT, INCREMENT, INCREMENTBY5 } from "./counterTypes"

export const Increment = () => {
    return{
        type : INCREMENT
    }
    }
    export const Decrement = () => {
        return{
            type : DECREMENT
        }
        }
        
        export const Incrementby5 = (number) => {
            return {
                type : INCREMENTBY5,
                payload : number
            }
        }