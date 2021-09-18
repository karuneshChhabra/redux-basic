import * as constants from "../Constants";

export const initialValues = {
    value:0
}

export const rootReducer = (state = initialValues, action) =>{

    switch(action.type){
     case constants.INCREMENT_VALUE:
         return {...state,value:state.value+action.payload}
    case constants.DECREMENT_VALUE:
            return {...state,value:state.value-action.payload}    
     default:
         return state;    

    }


}