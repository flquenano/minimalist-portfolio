import React from "react";
import { Link } from "react-router-dom";
import "./projectnav.scss";

import { ReactComponent as ArrowLeft } from "images/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "images/icons/arrow-right.svg";

const ProjectNav = ({ prev, next }) => {
  return (
    <div className="bottom">
      <div className="bottom__nav-left">
        <Link to={`/${prev}`}>
          <ArrowLeft className="bottom__nav-left-arrow" />
          <div className="bottom__nav-left-content">
            <h1 className="heading-3">{prev}</h1>
            <p className="body-2">Previous Project</p>
          </div>
        </Link>
      </div>
      <div className="bottom__nav-right">
        <Link to={`/${next}`}>
          <ArrowRight className="bottom__nav-right-arrow" />
          <div className="bottom__nav-right-content">
            <h1 className="heading-3">{next} </h1>
            <p className="body-2">Next Project</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectNav;
