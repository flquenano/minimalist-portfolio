import React from "react";
import { ReactComponent as Arrows } from "images/icons/down-arrows.svg";
const PrimryButton = () => (
  <div className="btn btn--primary">
    <Arrows className="btn--primary-arrow" />
    <span className="btn--primary-text">About Me</span>
  </div>
);
export default PrimryButton;
