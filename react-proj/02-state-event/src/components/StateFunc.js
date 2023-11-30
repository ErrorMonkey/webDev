import { useState } from "react";

function StateFunc() {
  // useState는 배열을 반환 => 그 배열을 구조분해하여 number와 setNumber 선언
  // [state, state 변경 함수] = useState(state 초기값)
  const [number, setNumber] = useState(0);
  // const [text, setText] = useState("hello");
  // const setNumber = (event) => {
  //   event.target;
  // };
  return (
    <>
      <h3>함수형 컴포넌트 state 공부</h3>
      <div>number state value: {number}</div>
      <button
        onClick={() => {
          // 비동기라 +2가 되지 않음
          // setNumber(number + 1);
          // setNumber(number + 1);
          setNumber((prevNumber) => prevNumber + 1);
          setNumber((prevNumber) => prevNumber + 1);
        }}
      >
        +2
      </button>
    </>
  );
}

export default StateFunc;
