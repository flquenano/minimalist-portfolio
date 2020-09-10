import React from "react";
import { Link } from "react-router-dom";
import "./contact.scss";

import Button from "components/Button/Secondary";

const Contact = () => (
  <div className="contact">
    <h1 className="contact__heading heading-2">
      Interested in doing a project together?
    </h1>
    <span className="contact__hr"></span>
    <Link to="/contact-me">
      <Button text="Contact me" />
    </Link>
  </div>
);

export default Contact;
