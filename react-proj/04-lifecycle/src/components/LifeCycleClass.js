import React, { Component } from "react";

class LifeCycleClass extends Component {
  state = { text: "" };

  // 1. 컴포넌트가 마운트 될 때
  componentDidMount() {
    console.log("class component: 😆 mount");
  }

  // 2. 컴포넌트가 업데이트 될 때
  componentDidUpdate(prevProps, prevState) {
    console.log("class component: 🤩 update");

    // text state 가 변경될 때마다 if문 안의 코드 실행
    if (prevState.text !== this.state.text) {
      console.log("class component: 🧐 text update");
    }
  }

  // 3. 컴포넌트가 unmount 될 때
  componentWillUnmount() {
    console.log("class component: 😤 unmount");
  }

  render() {
    return (
      <>
        <div className="flex flex-col items-center">
          <h2 className="text-xl max-w-lg p-5 bg-cyan-500">
            클래스형 컴포넌트 LifeCycle 공부
          </h2>
          <p>{this.props.number}</p>
          <input
            type="text"
            value={this.state.text}
            onChange={(e) => {
              this.setState({ text: e.target.value });
            }}
          />
        </div>
      </>
    );
  }
}

export default LifeCycleClass;
