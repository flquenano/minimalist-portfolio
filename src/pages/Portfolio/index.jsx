import React from "react";
import "./portfolio.scss";

import Card from "components/Card";
import Contact from "components/Contact";
import projects from "./projects.js";

const Portfolio = () => {
  return (
    <div className="portfolio">
      {projects.map((project, idx) => (
        <Card
          pos={idx}
          key={project.id}
          id={project.id}
          title={project.title}
          text={project.text}
          cover={project.cover}
        />
      ))}
      <Contact />
    </div>
  );
};

export default Portfolio;
