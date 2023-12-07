import React, { useReducer, useState, useCallback } from "react";

const initialValue = { value: 0, data: "" };
// reducer는 utility 함수라 컴포넌트와 관련이 없어서 밖에 선언할 수 있음
// 파일을 분리할 수도 있음
// 매개변수로 받는 것 외에는 컴포넌트 내의 변수를 사용하지 않음
const reducer = (prevState, action) => {
  switch (action.type) {
    case "PLUS":
      return { value: prevState.value + 1 };
    case "MINUS":
      return { value: prevState.value - 1 };
    case "RESET":
      return initialValue;
    case "MULTIFLY":
      return { value: prevState.value * action.number };
    case "DIVIDE":
      return { value: prevState.value / action.number };
    default:
      return { value: prevState.value };
  }
};

// state: 상태
// dispatch: 액션을 발생시키는 함수
// reducer: 실질적으로 상태를 업데이트 하는 함수

function UseReducer() {
  // reducer를 사용하면 => reducer 함수만 읽어도, 기능 파악 가능
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [number, setNumber] = useState(0);

  const handleChangeNumber = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const plus = () => dispatch({ type: "PLUS" });
  const minus = () => dispatch({ type: "MINUS" });
  const reset = () => dispatch({ type: "RESET" });
  const multifly = () => dispatch({ type: "MULTIFLY", number: number });
  const divide = () => dispatch({ type: "DIVIDE", number: number });

  // 아래에선 +, -, 초기화만 하고 있지만,
  // 만약에 곱하기, 나누기 등 더 많은 연산을 이용한다면?
  // 또 컴포넌트 자체가 복잡해져 코드가 길어졌을 때,
  // state의 변화를 추적하고 싶음 => setState를 일일이 찾아가서 기능을 확인해야함
  // const [state, setState] = useState(initialValue);
  // const plus = () => setState({ value: state.value + 1 });
  // const minus = () => setState({ value: state.value - 1 });
  // const reset = () => setState(initialValue);

  return (
    <>
      <div>UseReducer</div>
      <h1>{state.value}</h1>
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
      <button onClick={reset}>Reset</button>
      <br />
      <input type="number" value={number} onChange={handleChangeNumber}></input>
      <button onClick={multifly}>곱하기</button>
      <button onClick={divide}>나누기</button>
    </>
  );
}

export default UseReducer;
