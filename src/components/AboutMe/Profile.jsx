import React from "react";
import "./profile.scss";

import MobileSm from "images/homepage/mobile/image-homepage-profile.jpg";
import MobileBg from "images/homepage/mobile/image-homepage-profile@2x.jpg";

import TabletSm from "images/homepage/tablet/image-homepage-profile.jpg";
import TabletBg from "images/homepage/tablet/image-homepage-profile@2x.jpg";

import DesktopSm from "images/homepage/desktop/image-homepage-profile.jpg";
import DesktopBg from "images/homepage/desktop/image-homepage-profile@2x.jpg";

const Profile = () => {
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

      <img src={MobileSm} alt="Profile Image" className="profile" />
    </picture>
    // <img
    //   src={MobileSm}
    //   alt="Hero Developer Image"
    //   srcSet={`${MobileSm} 300w, ${MobileBg} 540w, ${TabletSm} 768w, ${TabletBg} 1024w, ${DesktopSm} 1280w, ${DesktopBg} 1440w`}
    //   className="hero__profile"
    // />
  );
};

export default Profile;
