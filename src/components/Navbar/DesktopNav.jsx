import React from "react";
import { Link } from "react-router-dom";

const DesktopNav = () => (
  <ul className="nav__list">
    <li className="nav__list-item">
      <Link to="/">Home</Link>
    </li>
    <li className="nav__list-item">
      <Link to="/portfolio">Portfolio</Link>
    </li>
    <li className="nav__list-item">
      <Link to="/contact-me">Contact Me</Link>
    </li>
  </ul>
);

export default DesktopNav;
