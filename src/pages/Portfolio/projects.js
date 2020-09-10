import ManageMobileSm from "images/portfolio/mobile/image-portfolio-manage.jpg";
import ManageTabletSm from "images/portfolio/tablet/image-portfolio-manage.jpg";
import ManageMobileBg from "images/portfolio/mobile/image-portfolio-manage@2x.jpg";
import ManageTabletBg from "images/portfolio/tablet/image-portfolio-manage@2x.jpg";
import ManageDesktopSm from "images/portfolio/desktop/image-portfolio-manage.jpg";
import ManageDesktopBg from "images/portfolio/desktop/image-portfolio-manage@2x.jpg";

import BookmarkMobileSm from "images/portfolio/mobile/image-portfolio-bookmark.jpg";
import BookmarkTabletSm from "images/portfolio/tablet/image-portfolio-bookmark.jpg";
import BookmarkMobileBg from "images/portfolio/mobile/image-portfolio-bookmark@2x.jpg";
import BookmarkTabletBg from "images/portfolio/tablet/image-portfolio-bookmark@2x.jpg";
import BookmarkDesktopSm from "images/portfolio/desktop/image-portfolio-bookmark.jpg";
import BookmarkDesktopBg from "images/portfolio/desktop/image-portfolio-bookmark@2x.jpg";

import InsureMobileSm from "images/portfolio/mobile/image-portfolio-insure.jpg";
import InsureTabletSm from "images/portfolio/tablet/image-portfolio-insure.jpg";
import InsureMobileBg from "images/portfolio/mobile/image-portfolio-insure@2x.jpg";
import InsureTabletBg from "images/portfolio/tablet/image-portfolio-insure@2x.jpg";
import InsureDesktopSm from "images/portfolio/desktop/image-portfolio-insure.jpg";
import InsureDesktopBg from "images/portfolio/desktop/image-portfolio-insure@2x.jpg";

import FyloMobileSm from "images/portfolio/mobile/image-portfolio-fylo.jpg";
import FyloTabletSm from "images/portfolio/tablet/image-portfolio-fylo.jpg";
import FyloMobileBg from "images/portfolio/mobile/image-portfolio-fylo@2x.jpg";
import FyloTabletBg from "images/portfolio/tablet/image-portfolio-fylo@2x.jpg";
import FyloDesktopSm from "images/portfolio/desktop/image-portfolio-fylo.jpg";
import FyloDesktopBg from "images/portfolio/desktop/image-portfolio-fylo@2x.jpg";

const projects = [
  {
    id: "manage",
    title: "Manage",
    text:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
    cover: {
      MobileSm: ManageMobileSm,
      TabletSm: ManageTabletSm,
      MobileBg: ManageMobileBg,
      TabletBg: ManageTabletBg,
      DesktopSm: ManageDesktopSm,
      DesktopBg: ManageDesktopBg
    }
  },
  {
    id: "bookmark",
    title: "Bookmark",
    text:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section. ",
    cover: {
      MobileSm: BookmarkMobileSm,
      TabletSm: BookmarkTabletSm,
      MobileBg: BookmarkMobileBg,
      TabletBg: BookmarkTabletBg,
      DesktopSm: BookmarkDesktopSm,
      DesktopBg: BookmarkDesktopBg
    }
  },
  {
    id: "insure",
    title: "Insure",
    text:
      "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
    cover: {
      MobileSm: InsureMobileSm,
      TabletSm: InsureTabletSm,
      MobileBg: InsureMobileBg,
      TabletBg: InsureTabletBg,
      DesktopSm: InsureDesktopSm,
      DesktopBg: InsureDesktopBg
    }
  },
  {
    id: "fylo",
    title: "Fylo",
    text:
      "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
    cover: {
      MobileSm: FyloMobileSm,
      TabletSm: FyloTabletSm,
      MobileBg: FyloMobileBg,
      TabletBg: FyloTabletBg,
      DesktopSm: FyloDesktopSm,
      DesktopBg: FyloDesktopBg
    }
  }
];

export default projects;
