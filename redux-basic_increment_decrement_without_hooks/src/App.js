import './App.css';
import {connect} from "react-redux";
import {incrementValue,decrementValue}  from "./redux/actionCreator/index";

function App(props) {
  return (
    <div className="App">
     <button onClick={props.increment}>➕</button>
     <h1>{props.value}</h1>
     <button onClick={props.decrement}>➖</button>
    </div>
  );
}

const mapStateToProps = state =>{
  console.log(state);
  return {
    value:state.value
  }
}

const mapDispatchToProps = dispatch =>({
  increment:() =>dispatch(incrementValue()),
  decrement:() =>dispatch(decrementValue()),
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
