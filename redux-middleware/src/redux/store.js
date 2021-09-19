import { createStore, applyMiddleware } from "redux";
import { rootReducers } from "./reducers/index";
import { loggingMiddleware } from "./redux-middleware/loggingMiddleware";
import { apimiddleware } from "./redux-middleware/apimiddleware";


export const store = createStore(rootReducers,applyMiddleware(apimiddleware,loggingMiddleware))