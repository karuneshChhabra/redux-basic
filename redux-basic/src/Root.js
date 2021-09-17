import React from 'react';
import {createStore} from 'redux';
import {Provider}  from 'react-redux';
import App from './App';
import {rootReducer,initialValues} from './redux/reducers';

function Root() {
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        
    );
    console.log(store);
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

export default Root
