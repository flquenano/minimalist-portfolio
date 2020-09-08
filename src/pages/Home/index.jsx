import React from "react";
import "./home.scss";

import Hero from "components/Hero";
import AboutMe from "components/AboutMe";
import Contact from "components/Contact";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <Hero />
      </div>
      <div className="home__content">
        <AboutMe />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
