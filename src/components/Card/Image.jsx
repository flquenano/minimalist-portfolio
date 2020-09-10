import React from "react";
import PropTypes from "prop-types";

const CardImage = ({ id, cover, pos }) => {
  return (
    <picture className={`${pos % 2 ? "odd" : ""}`}>
      <source
        media="(min-width: 1280px)"
        srcSet={`${cover.DesktopSm}, ${cover.DesktopBg} 2x`}
      />
      <source
        media="(min-width: 768px)"
        srcSet={`${cover.TabletSm} , ${cover.Tabletbg} 2x`}
      />
      <source srcSet={`${cover.MobileSm}, ${cover.MobileBg} 2x`} />
      <img
        src={cover.MobileSm}
        alt="Portfolio Image"
        className={`card__image card__image${pos % 2 ? "-odd" : ""}`}
      />
    </picture>
  );
};

CardImage.propTypes = {
  project: PropTypes.string
};

export default CardImage;
