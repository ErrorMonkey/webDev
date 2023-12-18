import React from "react";
import { Box2Container, Box4Container } from "../containers/BoxesContainers";

export default function Boxes() {
  return <div>Boxes</div>;
}

export function Box1({ number }) {
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box2Container />
    </div>
  );
}

export function Box2({ number }) {
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box3 />
    </div>
  );
}

export function Box3() {
  return (
    <div className="box">
      <Box4Container />
    </div>
  );
}

export function Box4(props) {
  const { number, isData, counterIncrease, counterDecrease, isDataChange } =
    props;
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <button onClick={counterIncrease}>plus</button>
      <button onClick={counterDecrease}>minus</button>

      <hr />
      <div>isData: {`${isData}`}</div>
      <button onClick={isDataChange}>change</button>
    </div>
  );
}
