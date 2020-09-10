import React from "react";
import { useInView } from "react-intersection-observer";

import Image from "./Image.jsx";
import Body from "./Body.jsx";

const Card = ({ id, title, text, cover, pos }) => {
  const [ref, inView] = useInView({
    threshold: 0.7
  });
  return (
    <div ref={ref} className={`card ${pos % 2 ? "card-odd" : ""}`}>
      {/* <h1>InView: {inView.toString()}</h1> */}
      <Image id={id} cover={cover} pos={pos} />
      <Body title={title} text={text} id={id} />
    </div>
  );
};

export default Card;
