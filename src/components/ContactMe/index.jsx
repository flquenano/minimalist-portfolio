import React, { useState, useRef } from "react";
import Button from "components/Button/Secondary";
import "./contactme.scss";

const Contactme = () => {
  const txtName = useRef(null);
  const txtEmail = useRef(null);
  const txtArea = useRef(null);

  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [msgValid, setMsgValid] = useState(true);

  const submit = (e) => {
    e.preventDefault();
    console.log(e);
    setNameValid(txtName.current.value !== "" ? true : false);
    setMsgValid(txtArea.current.value !== "" ? true : false);
    validateEmail();
  };

  const validateEmail = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = re.test(txtEmail.current.value.toLowerCase());
    setEmailValid(result);
  };

  return (
    <div className="contact-me">
      <h1 className="form__heading heading-2">Contact Me</h1>
      <form action="Post" className="contactForm" onSubmit={submit}>
        <fieldset>
          <label htmlFor="name" className="form__label">
            Name
          </label>
          <input
            ref={txtName}
            className={`form__input form__input-txt ${
              !nameValid ? "form__input--warning" : ""
            }`}
            type="text"
            id="name"
            name="email"
          />
          {nameValid ? null : (
            <h1 className="warning-message">This field is required</h1>
          )}
        </fieldset>
        <fieldset>
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            ref={txtEmail}
            className={`form__input form__input-txt ${
              !emailValid ? "form__input--warning" : ""
            }`}
            type="email"
            name="email"
            id="email"
          />
          {emailValid ? null : (
            <h1 className="warning-message">This field is required</h1>
          )}
        </fieldset>
        <fieldset>
          <label htmlFor="Message" className="form__label">
            Message
          </label>
          <textarea
            ref={txtArea}
            className={`form__input form__input-area ${
              !msgValid ? "form__input--warning" : ""
            }`}
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
          {msgValid ? null : (
            <h1 className="warning-message">This field is required</h1>
          )}
        </fieldset>
        <button className="btn--submit" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contactme;
