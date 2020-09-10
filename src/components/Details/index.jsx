import React from "react";
import PropTypes from "prop-types";

import Overview from "./Overview.jsx";
import Background from "./Backgroud.jsx";

const Details = ({ project }) => (
  <div className="content">
    <Overview title={project.title} desc={project.desc} />
    <Background prevOne={project.previewOne} prevTwo={project.previewTwo} />
  </div>
);

export default Details;
