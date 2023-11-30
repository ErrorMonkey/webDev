import React, { useState } from "react";

function EventFunc() {
  const [msg, setMsg] = useState("hello");
  const [name, setName] = useState("");

  const handleOnclick = () => {
    console.log(this);
    msg === "hello" ? setMsg("world") : setMsg("hello");
  };

  const handleOnclickTest = (message) => {
    setMsg("event.type: " + message);
  };

  const handleEnter = (name, e) => {
    if (e.key === "Enter") {
      console.log(name + ": 엔터 눌림");
    }
  };

  return (
    <>
      <div className="flex-col bg-slate-200 gap-10 p-10 border-box w-100">
        <h3>함수형 컴포넌트 event 핸들링 공부</h3>
        <div className="flex-col">
          <span>{msg}</span>
          <div className="flex gap-2">
            <button
              className="bg-blue-400 p-2 rounded-md"
              onClick={handleOnclick}
            >
              click
            </button>

            {/* 함수에서 매개 변수를 받고 싶을 때 */}
            {/* 첫 번째 방법 onClick에서 익명 함수를 선언, 그 내부에서 함수 실행시킨다 */}
            <button
              className="bg-yellow-400 p-2 rounded-md"
              onClick={(e) => {
                handleOnclickTest(e.type);
              }}
            >
              test
            </button>

            {/* 두 번째 방법 .bind()를 이용한다 */}
            {/* binde의 첫 번째 매개변수는 체이닝하는 함수의 this를 결정한다 */}
            <button
              className="bg-gradient-to-r from-stone-400 to-red-500 p-2 rounded-md"
              onClick={handleOnclickTest.bind(this, "안녕")}
            >
              test
            </button>

            {/* input 태그에서 엔터를 누르면 "엔터를 눌렀습니다" 문구 콘솔 찍히도록 */}
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              onKeyDown={handleEnter.bind(this, name)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EventFunc;
