import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./body.scss";

import Button from "components/Button/Secondary";

const CardBody = ({ title, text, id }) => (
  <div className="card__body">
    <h1 className="card__heading heading-2">{title}</h1>
    <p className="card__text body-2">{text}</p>
    <Link to={`/${id}`}>
      <Button text="View Project" />
    </Link>
  </div>
);

CardBody.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string
};

export default CardBody;
