import React, { useMemo, useState } from "react";

// useMemo: Rendering 할 때, 불필요한 연산을 방지
function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // [before]
  // count 변수가 변경되지 않아도, rendering 될 때마다 연산을 한다
  // => count가 변경될 때만 연산을 하려면 useMemo를 사용
  // const calc = () => {
  //   console.log("calc!!");
  //   return count * 2;
  // };

  // [after]
  // useMemo(콜백함수, 의존성 배열)
  // useMemo: 불필요한 연산 방지, 이전 값을 기억하고
  // 의존성 배열에 변경이 있을 때만 다시 연산해 calc에 담는다
  const calc = useMemo(() => {
    console.log("calc!!");
    return count * 2;
  }, [count]);

  return (
    <>
      <h3>useMemo 공부</h3>
      <div>UseMemoEx</div>
      <div>
        count: {count}
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
      {/* useMemo를 사용하지 않을 경우 */}
      {/* <div>calc: {calcValue}<div> */}
      {/* useMemo를 사용할 경우 */}
      <div>calc: {calc} </div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

export default UseMemoEx;
