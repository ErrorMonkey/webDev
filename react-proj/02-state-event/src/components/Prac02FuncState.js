import React, { useState } from "react";

function Prac02FuncState() {
  const [number, setNumber] = useState(0);
  const increase = () => setNumber(number + 2);
  const decrease = () => setNumber(number - 1);
  return (
    <>
      <div className="box-border sm flex-auto shrink justify-center p-5 bg-slate-50 rounded-md text-lg	">
        <div>FuncStatePrac</div>
        <p>func component</p>
        <div>state number: {number}</div>
        <button
          className="h-12 min-w-[8rem] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600"
          onClick={increase}
        >
          +2
        </button>
        <button
          className="h-12 min-w-[8rem] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600"
          onClick={decrease}
        >
          -1
        </button>
      </div>
    </>
  );
}

export default Prac02FuncState;
