import React from "react";
import "../styles/origin.scss";

function SassComponent() {
  return (
    <>
      <div className="origin-scss">
        <div className="box r"></div>
        <div className="box o"></div>
        <div className="box y"></div>
        <div className="box g"></div>
        <div className="box b"></div>
        <div className="box p"></div>
      </div>

      <div className="scss-parents">
        안녕?
        <ul>
          <li>Hello</li>
        </ul>
      </div>
      <div className="box1"></div>
      <div className="box2"></div>
      <button className="btn">일반 버튼</button>
      <button className="btn-primary">강조 버튼</button>
    </>
  );
}

export default SassComponent;
