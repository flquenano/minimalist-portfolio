import React from "react";
import "./contact.scss";

import Button from "components/Button/Secondary";

const Contact = () => (
  <div className="contact">
    <h1 className="contact__heading heading-2">
      Interested in doing a project together?
    </h1>
    <Button text="Contact me" />
  </div>
);

export default Contact;
