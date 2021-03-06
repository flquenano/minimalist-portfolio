import HeroMobileSm from "images/detail/mobile/image-manage-hero.jpg";
import HeroTabletSm from "images/detail/tablet/image-manage-hero.jpg";
import HeroDesktopSm from "images/detail/desktop/image-manage-hero.jpg";
import HeroMobileBg from "images/detail/mobile/image-manage-hero@2x.jpg";
import HeroTabletBg from "images/detail/tablet/image-manage-hero@2x.jpg";
import HeroDesktopBg from "images/detail/desktop/image-manage-hero@2x.jpg";

import PrevOneMobileSm from "images/detail/mobile/image-manage-preview-1.jpg";
import PrevOneTabletSm from "images/detail/tablet/image-manage-preview-1.jpg";
import PrevOneDesktopSm from "images/detail/desktop/image-manage-preview-1.jpg";
import PrevOneMobileBg from "images/detail/mobile/image-manage-preview-1@2x.jpg";
import PrevOneTabletBg from "images/detail/tablet/image-manage-preview-1@2x.jpg";
import PrevOneDesktopBg from "images/detail/desktop/image-manage-preview-1@2x.jpg";

import PrevTwoMobileSm from "images/detail/mobile/image-manage-preview-2.jpg";
import PrevTwoTabletSm from "images/detail/tablet/image-manage-preview-2.jpg";
import PrevTwoDesktopSm from "images/detail/desktop/image-manage-preview-2.jpg";
import PrevTwoMobileBg from "images/detail/mobile/image-manage-preview-2@2x.jpg";
import PrevTwoTabletBg from "images/detail/tablet/image-manage-preview-2@2x.jpg";
import PrevTwoDesktopBg from "images/detail/desktop/image-manage-preview-2@2x.jpg";

const project = {
  id: "manage",
  title: "Manage",
  desc:
    "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
  stack: [],
  prev: "Fylo",
  next: "Bookmark",
  cover: {
    MobileSm: HeroMobileSm,
    TabletSm: HeroTabletSm,
    MobileBg: HeroMobileBg,
    TabletBg: HeroTabletBg,
    DesktopSm: HeroDesktopSm,
    DesktopBg: HeroDesktopBg
  },
  previewOne: {
    MobileSm: PrevOneMobileSm,
    TabletSm: PrevOneTabletSm,
    MobileBg: PrevOneMobileBg,
    TabletBg: PrevOneTabletBg,
    DesktopSm: PrevOneDesktopSm,
    DesktopBg: PrevOneDesktopBg
  },
  previewTwo: {
    MobileSm: PrevTwoMobileSm,
    TabletSm: PrevTwoTabletSm,
    MobileBg: PrevTwoMobileBg,
    TabletBg: PrevTwoTabletBg,
    DesktopSm: PrevTwoDesktopSm,
    DesktopBg: PrevTwoDesktopBg
  }
};

export default project;
