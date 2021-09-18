import * as constants from "../constants";
import {timeReducers} from './timeReducers';
import { combineReducers } from "redux";

export const initialValue = {
  value: 0,
};

export const incrementDecrementReducers = (state = initialValue, action) => {
  console.log(action);
    switch (action.type) {
    case constants.INCREMENT_VALUE:
        return { ...state, value: state.value + action.payload };
    case constants.DECREMENT_VALUE:
        return { ...state, value: state.value - action.payload };  
    default:
      return state;
  }
};

export const rootReducers = combineReducers({incrementDecrementReducers,timeReducers})
