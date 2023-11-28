import React from "react";
import PropTypes from "prop-types";

function PracticeComp2(props) {
  const { name, age, gender, children } = props;
  return (
    <>
      <div className=".PracticeComp2__title">
        <p>{children}</p>
        <p>{name}</p>
      </div>
      성함: {name} 나이: {age} 성별: {gender}
    </>
  );
}

PracticeComp2.defaultProps = {
  name: "코딩온",
};

PracticeComp2.prototype = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
};

export default PracticeComp2;
