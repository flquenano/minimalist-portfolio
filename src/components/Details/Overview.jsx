import React from "react";
import PropTypes from "prop-types";
import Button from "components/Button/Secondary";

const Overview = ({ title, desc, stack, link }) => {
  return (
    <div className="content__overview">
      <div className="content__overview-left">
        <h1 className="content__overview-heading heading-2">{title}</h1>
        <p className="content__overview-body body-2">{desc}</p>
        <div className="content__overview-stack">
          <p className="content__overview-stack-header">
            Interaction Design / Front End Development
          </p>
          <p className="content__overview-stack-body">
            Webpack / React / SCSS / Postcss
          </p>
        </div>
        <Button text="Visit Website" />
      </div>
      <div className="content__overview-right">
        <p className="content__overview-body body-2">{desc}</p>
      </div>
    </div>
  );
};

Overview.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  stack: PropTypes.array,
  link: PropTypes.string
};

export default Overview;
