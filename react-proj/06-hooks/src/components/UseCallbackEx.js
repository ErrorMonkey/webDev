import React, { useCallback, useState } from "react";

// useCallback: 함수를 기억함
// 컴포넌트가 렌더링될 때, 컴포넌트 내부에 있는 함수도 다시 선언하게 됨
// 다시 선언할 필요가 없는 함수는 다시 선언하지 않고,
// 이전에 선언한 함수를 사용할 수 있도록 도와준다
function UseCallbackEx() {
  const [text, setText] = useState("");

  // 의존성 배열이 빈값일 경우, 처음 마운트 될 때 선언한 함수를 기억하고,
  // update 될 때 다시 선언하지 않고 기억한 함수를 사용함
  // 컴포넌트 내부에서 변경될 수 있는 값은? state, props가 있음
  // handleOnChange 함수에서는 UseCallbackEx 컴포넌트에서
  // 유일하게 변경될 수 있는 값인 text를 활용한다
  const handleOnChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <>
      <h3>UseCallbackEx</h3>
      <input type="text" value={text} onChange={handleOnChange} />
    </>
  );
}

export default UseCallbackEx;
