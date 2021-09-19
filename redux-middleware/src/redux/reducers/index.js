import * as constant from '../constants';

const initialState ={
    currentTime:''
}

export const rootReducers = (state=initialState, action) =>{
    switch(action.type){
        case constant.FETCH_NEW_TIME:
            return {...state , currentTime:action.payload}
        default:
            return state;    
    }


}