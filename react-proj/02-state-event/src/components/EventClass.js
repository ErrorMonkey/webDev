import React, { Component } from "react";

class EventClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "hello",
    };

    // 함수 선언문을 사용하여 메소드를 만들 때
    // 메소드 내부에서 클래스의 this를 사용하고 싶을 경우,
    // 생성자 내에서 this를 bind 해주는 작업을 거쳐야 한다

    // 함수 선언문을 이용하여 선언된 메소드는 this객체를 직접 바인딩 해줘야지
    // handleOnClick 내부에서 클래스를 가리키고 있는 this를 사용할 수 있다
    // 생성자 안에 새로운 함수를 만들면서 덮어 씌운다
    this.handleOnClick = this.handleOnClick.bind(this);
    // class 생성자 같은 건가?
    // class handleOnClick = new HandleOnclick(this)
  }

  // 함수 선언문을 사용하여 메소드 정의
  // 함수 내부에서 자체적인 this를 만들 수 있고, this가 클래스의 this가 아니게 됨
  // 해결법 1. 생성자 내부에서 this를 원하는 것으로 바인딩
  // 해결법 2. 함수 표현식을 사용한다
  // 함수 선언문은 동적 바인딩을 하기 때문에 함수가 사용될 때 this가 결정 된다
  handleOnClick() {
    console.log(this);
    this.setState({ msg: "hello" });
  }

  // 함수 표현식은 함수가 선언될 때 this를 결정 지음
  // 함수를 선언하는 코드를 읽을 때 this 결정 정적 바인딩
  // this가 부모 요소를 가르킴
  handleOnClickWorld = () => {
    console.log(this);
    this.setState({ msg: "world!" });
  };

  render() {
    return (
      <>
        <div className="flex-col gap-10 p-10 border-box w-100">
          <div>EventClass</div>
          <h3>클래스형 컴포넌트 event handling 공부</h3>
          <h1 className="">{this.state.msg}</h1>
          <div className="flex gap-1">
            <button
              className="inline-block rounded px-6 pb-2 pt-2.5 leading-normal shadow-[0_4px_9px_-4px_#333] text-white text-xs bg-emerald-500 hover:bg-emerald-600"
              onClick={this.handleOnClick}
            >
              hello
            </button>
            <button
              className="inline-block rounded px-6 pb-2 pt-2.5 leading-normal shadow-[0_4px_9px_-4px_#333] text-white text-xs bg-emerald-500 hover:bg-emerald-600"
              onClick={this.handleOnClickWorld}
            >
              world!
            </button>
            {/* 리액트가 만든 합성 이벤트 */}
            <button
              className="inline-block rounded px-6 pb-2 pt-2.5 leading-normal shadow-[0_4px_9px_-4px_#333] text-white text-xs bg-emerald-500 hover:bg-emerald-600"
              // e는 리액트 합성 이벤트 객체. 합성 이벤트에 대한 모든 정보를 담고 있음
              // 그 중에 target에 접근하면, 이벤트가 걸린 태그를 가져올 수 있음
              onClick={(e) => {
                console.log("e", e);
              }}
            >
              test
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default EventClass;
