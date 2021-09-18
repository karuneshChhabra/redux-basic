import './App.css';
import {useDispatch,useSelector} from "react-redux";
import {incrementValue, decrementValue}  from "./redux/actions/index";


function App() {

  const dispatch = useDispatch();
  const value= useSelector(state=>state.value);


  return (
    <div className="App">

      <button onClick={()=>dispatch(incrementValue())}>Incerement Value ➕</button>
         <h1>Current Value: {value}</h1>
      <button onClick={()=>dispatch(decrementValue())}> Decrement Value ➖</button>
      
    </div>
  );
}

export default App;
