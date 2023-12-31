import { Component } from "react";

export default class StateClass extends Component {
  // // 클래스 컴포넌트 예전 방식
  // constructor(props) {
  //   super(props); // super() 부모 클래스의 생성자
  //   // super를 실행시켜야 this 객체를 사용할 수 있다.
  //   this.state = {
  //     number: 0,
  //     text: "hello",
  //   };
  // }

  // 만약 생성자를 구현하지 않으면, 기본 생성자가 자동으로 실행된다.
  // constructor(props) {
  // super(props)
  // }

  // 클래스 컴포넌트 최근 방식
  state = {
    number: 0,
    text: "world",
  };

  render() {
    const { number } = this.state;
    return (
      <>
        <div>props 예시{this.props.name}</div>
        <h3>클래스형 컴포넌트 state</h3>
        <div>
          number state value {number}
          <button
            onClick={() => {
              // state 변경은 보통 일반 변수 변경 시키듯이 변수에 값을 재할당하는 것이 아니고,
              // state를 변경 시키는 함수를 사용한다. 클래스형 컴포넌트는 setState 메소드가 제공됨
              // this.setState({ number: this.state.number + 1 });
              // this.setState({ number: this.state.number + 1 });
              // 만약 setState를 연달아 2번 사용할 때, 위처럼 사용하면
              // setState 는 비동기로 실행되기 때문에 원하는 결과를 얻을 수 없음

              this.setState((prevState) => {
                return { number: prevState.number + 1 };
              });
              this.setState((prevState) => ({ number: prevState.number + 1 }));
            }}
          >
            +2
          </button>
        </div>
      </>
    );
  }
}
