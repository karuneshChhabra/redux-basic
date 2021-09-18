import * as constants from "../Constants";

export const incrementValue=()=>{
    return{
        type:constants.INCREMENT_VALUE,
        payload:3
    }
}

export const decrementValue=()=>{
    return{
        type:constants.DECREMENT_VALUE,
        payload:1
    }
}

