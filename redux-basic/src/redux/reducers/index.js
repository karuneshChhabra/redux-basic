import {FETCH_TIME_VALUE} from "../Constants";

const initialValue = {
    currentTime:''
}

export const rootReducers = (state=initialValue, action) =>{
    
    switch(action.type){
        case FETCH_TIME_VALUE:
             return {...state,currentTime:action.payload};
        default:
            return state;     
    }

}