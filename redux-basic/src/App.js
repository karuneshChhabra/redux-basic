import './App.css';
import {getCurrentTime, getCurrentTimeUsingHooks} from "./redux/actions/index";
import {useDispatch, useSelector, connect} from "react-redux";

function App(props) {

  const dispatch = useDispatch();
  const currentTimeUsingHooks = useSelector(state => state.currentTimeUsingHooks);

  return (
    <div className="App">
      <button onClick={()=>dispatch(getCurrentTimeUsingHooks())}>Get Current Time using Hooks  ⏲</button>
      {currentTimeUsingHooks && <h1>{currentTimeUsingHooks}</h1>}
        <br/><br/>
      <button onClick={props.updateTime}>Get Current Time using Connect  ⏲</button>
      {props.currentTime && <h1>props Values {props.currentTime}</h1>}
    
    </div>
  );
}

const mapStateToProps = state => {
  // for pass the value from store to view(props);
   return {
     currentTime: state.currentTime 
   };
 };

 const mapDispatchToProps = dispatch => ({
   // for call the reducer we need it.
   updateTime: ()  => dispatch(getCurrentTime())
 })

export default connect(mapStateToProps,mapDispatchToProps)(App);