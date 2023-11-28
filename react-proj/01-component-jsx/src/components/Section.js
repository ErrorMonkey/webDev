import PropTypes from "prop-types";

function Section(props) {
  return (
    <>
      <div className="Section__section">
        <h3 className="Section__title">{props.title}</h3>
        <div>{props.children}</div>
      </div>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
