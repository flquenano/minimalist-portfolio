import React from "react";

const Background = ({ prevOne, prevTwo }) => (
  <div className="content__background">
    <h1 className="content__background-heading heading-3">
      Project Background
    </h1>
    <p className="content__background-body body-2">
      This project was a front-end challenge from Frontend Mentor. It’s a
      platform that enables you to practice building websites to a design and
      project brief. Each challenge includes mobile and desktop designs to show
      how the website should look at different screen sizes. Creating these
      projects has helped me refine my workflow and solve real-world coding
      problems. I’ve learned something new with each project, helping me to
      improve and adapt my style.
    </p>
    <h1 className="content__background-static-heading heading-3">
      Static Previews
    </h1>
    <picture>
      <source
        media="(min-width: 1280px)"
        srcSet={`${prevOne.DesktopSm}, ${prevOne.DesktopBg} 2x`}
      />
      <source
        media="(min-width: 768px)"
        srcSet={`${prevOne.TabletSm} , ${prevOne.Tabletbg} 2x`}
      />
      <source srcSet={`${prevOne.MobileSm}, ${prevOne.MobileBg} 2x`} />
      <img
        src={prevOne.MobileSm}
        alt="Portfolio Image"
        className="content__background-prevOne"
      />
    </picture>

    <picture>
      <source
        media="(min-width: 1280px)"
        srcSet={`${prevTwo.DesktopSm}, ${prevTwo.DesktopBg} 2x`}
      />
      <source
        media="(min-width: 768px)"
        srcSet={`${prevTwo.TabletSm} , ${prevTwo.Tabletbg} 2x`}
      />
      <source srcSet={`${prevTwo.MobileSm}, ${prevTwo.MobileBg} 2x`} />
      <img
        src={prevTwo.MobileSm}
        alt="Portfolio Image"
        className="content__background-prevTwo  "
      />
    </picture>
  </div>
);

export default Background;
