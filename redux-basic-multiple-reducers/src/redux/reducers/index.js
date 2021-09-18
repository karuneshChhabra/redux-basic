import * as constants from "../constants";

export const initialValues = {
    value:0
}

export const rootReducers = (state=initialValues,action)=>{

    switch(action.type){
     
     case constants.INCREMENT_VALUE:
         return {...state, value:state.value + 1}
     case constants.DECREMENT_VALUE:
         return {...state, value:state.value - 1}    
     default:
          return state;   

    }
}