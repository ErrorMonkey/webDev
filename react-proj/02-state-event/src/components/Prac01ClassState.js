import React, { Component } from "react";

export default class Prac01ClassState extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <>
        <div className="box-border sm flex-auto justify-center p-5 bg-slate-50 rounded-xl text-lg	">
          <div>Prac01ClassState</div>
          <div>state number: {this.state.number}</div>
          <div className="flex gap-1">
            <button
              className="h-12 min-w-[4rem] rounded-lg border-2 border-blue-600 bg-blue-500 text-blue-50 shadow-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-600"
              onClick={() => this.setState({ number: this.state.number + 2 })}
            >
              +2
            </button>
            <button
              className="h-12 w-[4em] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600"
              onClick={() => this.setState({ number: this.state.number - 1 })}
            >
              -1
            </button>
          </div>
        </div>
      </>
    );
  }
}
