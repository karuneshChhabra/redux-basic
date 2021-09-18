import {rootReducers} from './reducers/index';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';


const myLogger = (state) => (next) => (action) =>{
    console.log("mylogger",action);
    next(action);
}

export const store= createStore(rootReducers,
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    applyMiddleware(myLogger,logger));