import React from "react";
import useToggle from "../hooks/useToggle";

function CustomHooksEx() {
  const [isPopup, togglePopup] = useToggle(false);
  // 커스텀 훅을 객체 구조를 받을 때는 받는 곳에서도 이름이 같아야 함
  // const { value, toggle } = useToggle(false);
  return (
    <>
      <h3>CustomHooksEx</h3>
      {isPopup && <h1>test pop</h1>}
      <button onClick={togglePopup}>{isPopup ? "hide" : "pop!"}</button>
      {/* {value && <h1>test pop</h1>}
      <button onClick={toggle}>{value ? "hide" : "pop"}</button> */}
    </>
  );
}

export default CustomHooksEx;
