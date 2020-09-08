import React from "react";
import PropTypes from "prop-types";

const Secondary = ({ text, otherProps }) => (
  <button className="btn btn--secondary" {...otherProps}>
    {text}
  </button>
);

Secondary.propTypes = {
  text: PropTypes.string
};

export default Secondary;
