import React from "react";
import Button from "components/Button/Secondary";

import "./aboutme.scss";

const AboutMe = () => (
  <div className="aboutMe">
    <h1 className="aboutMe__heading heading-2">About Me</h1>
    <p className="aboutMe__body body-1">
      I’m a junior front-end developer looking for a new role in an exciting
      company. I focus on writing accessible HTML, using modern CSS practices
      and writing clean JavaScript. When writing JavaScript code, I mostly use
      React, but I can adapt to whatever tools are required. I’m based in
      London, UK, but I’m happy working remotely and have experience in remote
      teams. When I’m not coding, you’ll find me outdoors. I love being out in
      nature whether that’s going for a walk, run or cycling. I’d love you to
      check out my work.
    </p>
    <Button text="Go to portfolio" />
  </div>
);

export default AboutMe;
