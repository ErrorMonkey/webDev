import React from "react";
import PropTypes from "prop-types";

function PracProps2({ title, author, price, type }) {
  return (
    <div className="PracProps2__wrapper">
      <h1>이번주 베스트셀러</h1>
      <img src="" />
      <div>
        <h2>{title}</h2>
        <h5>저자: {author}</h5>
        <h5>판매가: {price}</h5>
        <h5>구분: {type}</h5>
      </div>
    </div>
  );
}

PracProps2.defaultProps = {
  food: "국밥",
};

PracProps2.propTypes = {
  food: PropTypes.string,
};

export default PracProps2;
