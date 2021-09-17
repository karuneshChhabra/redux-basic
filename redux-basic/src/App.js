import './App.css';
import {getCurrentTime} from "./redux/actions/index";
import {useDispatch,useSelector} from "react-redux";



function App(props) {

  const dispatch = useDispatch();
  const currentTime = useSelector(state => state.currentTime);
  console.log(currentTime);

   
  return (
    <div className="App">
      <button onClick={()=>dispatch(getCurrentTime())}>Get Current Time ⏲</button>
      {currentTime && <h1>{currentTime}</h1>}
    </div>
  );
}

export default App;