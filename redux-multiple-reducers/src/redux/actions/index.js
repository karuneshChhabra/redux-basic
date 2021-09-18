import * as constants from "../constants";

export const incrementValue = () =>{
    return{
        type:constants.INCREMENT_VALUE,
        payload:1
    }
}

export const decrementValue = () =>{
    return{
        type:constants.DECREMENT_VALUE,
        payload:1
    }
}

export const fetchCurrentTime = () =>{
    return{
        type:constants.FETCH_TIME,
        payload:new Date().toString()
    }
}