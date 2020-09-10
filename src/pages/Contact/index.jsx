import React from "react";
import "./contactPage.scss";

import GetInTouch from "components/GetInTouch";
import ContactMe from "components/ContactMe";
const ContactPage = () => {
  return (
    <div className="contact-page">
      <GetInTouch />
      <ContactMe />
    </div>
  );
};

export default ContactPage;
