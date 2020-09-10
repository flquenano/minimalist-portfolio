import React from "react";
import "./getintouch.scss";

import { ReactComponent as Github } from "images/icons/github.svg";
import { ReactComponent as Twitter } from "images/icons/twitter.svg";
import { ReactComponent as LinkedIn } from "images/icons/linkedin.svg";

const GetInTouch = () => (
  <div className="git">
    <h1 className="git__heading heading-2">Get in Touch</h1>
    <div className="git__content">
      <p className="git__body body-1">
        I’d love to hear about what you’re working on and how I could help. I’m
        currently looking for a new role and am open to a wide range of
        opportunities. My preference would be to find a position in a company in
        London. But I’m also happy to hear about opportunites that don’t fit
        that description. I’m a hard-working and positive person who will always
        approach each task with a sense of purpose and attention to detail.
        Please do feel free to check out my online profiles below and get in
        touch using the form.
      </p>
      <div className="git__sns">
        <Github className="git__icon" />
        <Twitter className="git__icon" />
        <LinkedIn className="git__icon" />
      </div>
    </div>
  </div>
);

export default GetInTouch;
  