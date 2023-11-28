import React, { Component } from "react";
import PropTypes from "prop-types";
export class ClassPropsEx extends Component {
  render() {
    return (
      <>
        <div>ClassProsEx ( Props )</div>
        <div>
          classComp test: title= {this.props.title}, content=
          {this.props.content}
        </div>
      </>
    );
  }

  static defaultProps = {
    number: 25,
  };

  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    number: PropTypes.number,
  };
}
// ClassPropsEx.defaultProps = {
//   number: 25,
// };

// ClassPropsEx.propTypes = {
//   title: PropTypes.string,
//   content: PropTypes.string.isRequired,
//   number: PropTypes.number,
// };

export default ClassPropsEx;
