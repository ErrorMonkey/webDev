import React from "react";
import PropTypes from "prop-types";

function PracProps1({ food }) {
  return (
    <div className="PracProps__wrapper">
      <p>제가 좋아하는 음식은</p>
      <div className="PracProps__food">{food}</div>
    </div>
  );
}

PracProps1.defaultProps = {
  food: "국밥",
};

PracProps1.propTypes = {
  food: PropTypes.string,
};

export default PracProps1;
