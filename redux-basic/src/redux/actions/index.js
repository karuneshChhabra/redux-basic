import {FETCH_TIME_VALUE} from "../Constants"

export const getCurrentTime = () =>{


    return {
        type:FETCH_TIME_VALUE,
        payload:new Date().toString()
    }
}