import React from "react";
import { useRef } from "react";

function FuncRef() {
  const input = useRef();
  const localVar = useRef(0);
  // const localVar = 0;

  const focustInput = () => {
    input.current.focus();
  };

  const plusLocalVar = () => {
    localVar.current++;
    console.log("localVar.current", localVar.current);
  };

  return (
    <>
      <div>FuncRef</div>
      <input type="text" ref={input} placeholder="함수형 Ref" />
      <button type="button" onClick={focustInput}>
        버튼
      </button>
      <div>{localVar.current}</div>
      <button type="button" onClick={plusLocalVar}>
        버튼
      </button>
    </>
  );
}

export default FuncRef;
