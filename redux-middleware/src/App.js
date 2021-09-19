import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNewTime} from './redux/actions/index'

function App() {
  const dispatch = useDispatch();
  const currentTime = useSelector(state => state.currentTime)

  return (
    <div className="App">
      <button onClick={()=>dispatch(fetchNewTime())}>
        Get the Updated Time
      </button>
       <h1>
         Current Time: {currentTime}
      </h1>
     
    </div>
  );
}

export default App;
