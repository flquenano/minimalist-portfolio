import React from "react";
import { Link } from "react-router-dom";

const MobileNav = () => (
  <ul className="nav__mobile-list">
    <li className="nav__mobile-list-item">
      <Link to="/" className="nav__link">
        Home
      </Link>
    </li>
    <li className="nav__mobile-list-item">
      <Link to="/portfolio" className="nav__link">
        Portfolio
      </Link>
    </li>
    <li className="nav__mobile-list-item">
      <Link to="/contact-me" className="nav__link">
        Contact Me
      </Link>
    </li>
  </ul>
);

export default MobileNav;
