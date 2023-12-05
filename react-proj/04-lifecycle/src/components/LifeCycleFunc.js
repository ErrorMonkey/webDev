import React from "react";
import { useEffect, useState } from "react";

function LifeCycleFunc(props) {
  const { number } = props;
  const [numNum, setNumNum] = useState(number);
  const [text, setText] = useState("");

  // useEffect(콜백함수, 의존성 배열)

  // 1. 의존성 배열이 빈 배열일 경우.
  // mount 시에 콜백 함수 실행시킴
  // 콜백함수 내부에서 return 뒤에 오는 함수를 unmount 시에 실행
  useEffect(() => {
    console.log("func component: 😆 mount");
    return () => {
      console.log("func component: 😤 unmount");
    };
  }, []);

  // 2. 의존성 배열을 전달하지 않을 경우
  // mount & update 콜백함수를 실행 시킨다
  useEffect(() => {
    console.log("func component: 🤩 update");
  });

  // 3. 의존성 배열이 존재할 경우
  // 해당 원소가 update 될 때마다 콜백함수 실행
  useEffect(() => {
    console.log("func component: 🧐 text update");
  }, [text]);

  return (
    <>
      <div className="flex-auto justify-center">
        <h2 className="p-5 bg-cyan-500">함수형 컴포넌트 LifeCycle 공부</h2>
        <p>{number}</p>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            setNumNum(numNum + 1);
          }}
        >
          숫자 증가 버튼
        </button>
      </div>
    </>
  );
}

export default LifeCycleFunc;
