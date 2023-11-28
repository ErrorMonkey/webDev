import PropTypes from "prop-types";
import React, { Component } from "react";

class PracProps3 extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    text: "기본 text props입니다.",
  };

  render() {
    return (
      <>
        <div>{this.props.text}</div>
        <button className="PracPops3__btn" onClick={this.props.valid}>
          Valid 상속
        </button>
      </>
    );
  }
}

export default PracProps3;
