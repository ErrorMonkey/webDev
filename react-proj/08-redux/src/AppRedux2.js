import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./store/countReducer";

function AppRedux2() {
  return (
    <div>
      <Box1 />
    </div>
  );
}

function Box1() {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box2 />
    </div>
  );
}

function Box2() {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box3 />
    </div>
  );
}

function Box3(props) {
  return (
    <div className="box">
      <h3>number: </h3>
      <Box4 />
    </div>
  );
}

function Box4() {
  const number = useSelector((state) => state.counter.number);
  const isData = useSelector((state) => state.isData);
  const dispatch = useDispatch();
  return (
    <div className="box">
      <h3>number: {number}</h3>
      {/* <button onClick={() => dispatch({ type: "INCREMENT" })}>plus</button> */}
      {/* <button onClick={() => dispatch({ type: "DECREMENT" })}>minus</button> */}
      <button onClick={() => dispatch(increase())}>plus</button>
      <button onClick={() => dispatch(decrease())}>minus</button>

      <hr />
      <div>isData: {`${isData}`}</div>
      <button onClick={() => dispatch({ type: "CHANGE" })}>change</button>
    </div>
  );
}

export default AppRedux2;
