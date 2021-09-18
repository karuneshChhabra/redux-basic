import {FETCH_TIME_VALUE,FETCH_TIME_VALUE_USING_HOOKS} from "../Constants";

const initialValue = {
    currentTime:'',
    currentTimeUsingHooks:''
}

export const rootReducers = (state=initialValue, action) =>{
    
    switch(action.type){
        case FETCH_TIME_VALUE:
             return {...state,currentTime:action.payload};
        case FETCH_TIME_VALUE_USING_HOOKS:
            console.log("called");
             return {...state,currentTimeUsingHooks:action.payload};     
        default:
            return state;     
    }

}