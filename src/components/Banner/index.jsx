import React from "react";

const Banner = ({ cover }) => {
  return (
    <picture>
      <source
        media="(min-width: 1280px)"
        srcSet={`${cover.DesktopSm}, ${cover.DesktopBg} 2x`}
      />
      <source
        media="(min-width: 768px)"
        srcSet={`${cover.TabletSm} , ${cover.TabletBg} 2x`}
      />
      <source srcSet={`${cover.MobileSm} 2x, ${cover.MobileBg} 2x`} />
      <img
        src={cover.MobileSm}
        alt="Profile Image"
        className="project__banner"
      />
    </picture>
  );
};

export default Banner;
