import React from "react";
import "./banner.scss";

import MobileSm from "images/homepage/mobile/image-homepage-hero.jpg";
import MobileBg from "images/homepage/mobile/image-homepage-hero@2x.jpg";
import TabletSm from "images/homepage/tablet/image-homepage-hero.jpg";
import TabletBg from "images/homepage/tablet/image-homepage-hero@2x.jpg";
import DesktopSm from "images/homepage/desktop/image-homepage-hero.jpg";
import DesktopBg from "images/homepage/desktop/image-homepage-hero@2x.jpg";

const HeroBanner = () => {
  return (
    <picture>
      <source
        media="(min-width: 1280px)"
        srcSet={`${DesktopSm}, ${DesktopBg} 2x`}
      />
      <source
        media="(min-width: 768px)"
        srcSet={`${TabletSm} , ${TabletBg} 2x`}
      />
      <source srcSet={`${MobileSm} 2x, ${MobileBg} 2x`} />
      <img src={MobileSm} alt="Profile Image" className="banner" />
    </picture>
  );
};

export default HeroBanner;
