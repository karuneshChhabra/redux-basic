import {FETCH_TIME_VALUE,FETCH_TIME_VALUE_USING_HOOKS} from "../Constants"

export const getCurrentTime = () =>{


    return {
        type:FETCH_TIME_VALUE,
        payload:new Date().toString()
    }
}

export const getCurrentTimeUsingHooks = () =>{


    return {
        type:FETCH_TIME_VALUE_USING_HOOKS,
        payload:new Date().toString()
    }
}
