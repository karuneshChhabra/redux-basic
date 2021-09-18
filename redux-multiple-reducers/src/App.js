import "./App.css";
import TimeForm from "./TimeForm";
import { connect } from "react-redux";
import { incrementValue, decrementValue } from "./redux/actions/index";

function App(props) {
  return (
    <div className="App">
      <button onClick={props.incValue}>Increment Value</button>
      <h1>Current Value: {props.value}</h1>
      <button onClick={props.decValue}>Decrement Value</button>
      <br />
      <br />

      <TimeForm></TimeForm>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    value: state.incrementDecrementReducers.value,
  };
};

const mapDispatchToProps = (dispatch) => ({
  incValue: () => dispatch(incrementValue()),
  decValue: () => dispatch(decrementValue()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
