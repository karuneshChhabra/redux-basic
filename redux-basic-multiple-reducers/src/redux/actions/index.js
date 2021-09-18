import * as constants from "../constants";

export const incrementValue = () =>{
    return {
        type:constants.INCREMENT_VALUE
    }    
}

export const decrementValue = () =>{
    return {
        type:constants.DECREMENT_VALUE
    }    
}