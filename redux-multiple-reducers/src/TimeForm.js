import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {fetchCurrentTime} from './redux/actions/index'

function TimeForm() {
    const dispatch = useDispatch()
    const currentTime = useSelector(state => state.timeReducers.currentTime);

    return (
        <div>
            <button onClick={()=>{dispatch(fetchCurrentTime())}}>
                Get Current Time
            </button>
            <h1>{currentTime}</h1>
            
        </div>
    )
}

export default TimeForm
