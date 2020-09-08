import React from "react";
import "./footer.scss";

import { ReactComponent as Logo } from "images/logo.svg";
import { ReactComponent as Github } from "images/icons/github.svg";
import { ReactComponent as Twitter } from "images/icons/twitter.svg";
import { ReactComponent as LinkedIn } from "images/icons/linkedin.svg";

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="footer__left">
        <Logo className="footer__logo" />
        <ul className="footer__nav">
          <li className="footer__nav-item">Home</li>
          <li className="footer__nav-item">Portfolio</li>
          <li className="footer__nav-item">Contact me</li>
        </ul>
      </div>
      <div className="footer__right">
        <Github className="footer__sns" />
        <Twitter className="footer__sns" />
        <LinkedIn className="footer__sns" />
      </div>
    </div>
  </footer>
);

export default Footer;
