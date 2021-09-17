import * as actionConstants from "../Cofig.js";


export const initialValues = {
    currentTime: new Date().toString()
}

export const rootReducer = (state=initialValues,action)=>{

    switch(action.type){
        case actionConstants.FETCH_TIME_VALUE:
            return {...state, currentTime:action.payload};
        default:
            return state;     
    }

}