import React, { useEffect } from "react";
import "./project.scss";

import manage from "./data/manage.js";
import bookmark from "./data/bookmark.js";
import insure from "./data/insure.js";
import fylo from "./data/fylo.js";

import Banner from "components/Banner";
import Details from "components/Details";
import Contact from "components/Contact";
import Footer from "components/ProjectNav";

const Project = ({ project }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const proj = () => {
    let temp = {};
    switch (project) {
      case "manage":
        temp = manage;
        break;
      case "bookmark":
        temp = bookmark;
        break;
      case "insure":
        temp = insure;
        break;
      case "fylo":
        temp = fylo;
        break;
      default:
        temp = {};
    }
    return temp;
  };

  return (
    <div className="project">
      <Banner cover={proj().cover} />
      <Details project={proj()} />
      <Footer prev={proj().prev} next={proj().next} />
      <Contact />
    </div>
  );
};

export default Project;
