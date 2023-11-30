import React, { useState } from "react";

function Prac04() {
  const [text, setText] = useState("검정색 글씨");
  const [color, setColor] = useState("text-balck");

  const changeRed = () => {
    setColor("text-red-300");
    setText("빨간색 글씨;");
  };

  const changeBlue = () => {
    setColor("text-blue-300");
    setText("파란색 글씨;");
  };
  return (
    <>
      <div className="flex-col gap-10 p-4">
        <h1 className={`text-xl font-black ${color}`}>{text}</h1>
        <div className="flex gap-1">
          <button className="rounded-md bg-red-100" onClick={changeRed}>
            빨간색
          </button>
          <button className="rounded-md bg-blue-100" onClick={changeBlue}>
            파란색
          </button>
        </div>
      </div>
    </>
  );
}

export default Prac04;
