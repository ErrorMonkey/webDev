import React, { Component, createRef } from "react";

export class ClassRef extends Component {
  input2 = React.createRef();

  // 콜백함수를 이용해 Ref 지정, ref 변수 사용 방법
  focusInput = () => {
    this.input.focus();
  };

  focusInput2 = () => {
    this.input2.current.focus();
  };

  render() {
    return (
      <>
        {/* 콜백함수를 이용한 ref 지정 */}
        <div>ClassRef1</div>
        <input
          type="text"
          ref={(ref) => {
            // ref에 콜백함수를 넘길 때 첫 번째 매개 변수는
            // ref가 걸려 있는 요소를 자동으로 담고 있다.
            this.input = ref;
          }}
          placeholder="클래스형 Ref"
        />
        <button type="button" onClick={this.focusInput}>
          버튼
        </button>

        <div>ClassRef2</div>
        <input type="text" ref={this.input2} placeholder="클래스형 Ref" />
        <button type="button" onClick={this.focusInput2}>
          버튼
        </button>
      </>
    );
  }
}

export default ClassRef;
