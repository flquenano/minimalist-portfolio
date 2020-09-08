import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import "./navbar.scss";

import { ReactComponent as Logo } from "images/logo";
import { ReactComponent as Burger } from "images/icons/hamburger";
import { ReactComponent as Close } from "images/icons/close";

import MobileNav from "./MobileNav.jsx";
import DesktopNav from "./DesktopNav.jsx";

const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);
  return (
    <nav className="nav">
      <Logo className="nav__logo" />
      <DesktopNav />
      {navVisible ? (
        <Close
          className="nav__mobile-icon"
          onClick={() => setNavVisible(false)}
        />
      ) : (
        <Burger
          className="nav__mobile-icon"
          onClick={() => setNavVisible(true)}
        />
      )}

      <CSSTransition
        in={navVisible}
        timeout={250}
        classNames="nav-animation"
        unmountOnExit
      >
        <MobileNav />
      </CSSTransition>
    </nav>
  );
};

export default Navbar;
