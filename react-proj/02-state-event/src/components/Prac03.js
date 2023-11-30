import React, { Component } from "react";

export class Prac03 extends Component {
  constructor() {
    super();
    this.state = {
      text: "Hello World!",
    };
  }
  changeText = () => {
    this.state.text === "Hello World!"
      ? this.setState({ text: "Goodbye World!" })
      : this.setState({ text: "Hello World!" });
  };
  render() {
    return (
      <>
        <div className="flex p-10 bg-stone-100">
          <div>{this.state.text}</div>
          <button className="bg-blue-300 p-2" onClick={this.changeText}>
            change
          </button>
        </div>
      </>
    );
  }
}

export default Prac03;
