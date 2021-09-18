import * as constants from "../constants";

export const initialValue = {
  currentTime: '',
};

export const timeReducers = (state = initialValue, action) => {
  
  switch (action.type) {
    case constants.FETCH_TIME:
      return { ...state, currentTime: action.payload };
    default:
      return state;
  }
};
