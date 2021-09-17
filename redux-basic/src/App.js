import './App.css';
import * as actionConstants from "./Cofig.js";
import {useDispatch,useSelector} from 'react-redux';

function App(props) {

console.log(props);

const currentTime = useSelector(state=> state.currentTime);
console.log(currentTime)

  const value =() =>{
   
    return{
      type: actionConstants.FETCH_TIME_VALUE,
      payload: new Date().toString() // Any serializable value
   }};
   
   
   const dispatch = useDispatch();
  
   
  return (
    <div className="App">
   {currentTime}<br/>
      <button  onClick={() => {dispatch(value())}}>Fetch Current Time</button>
    </div>
  );
}

export default App;