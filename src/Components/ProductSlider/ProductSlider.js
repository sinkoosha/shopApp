import React from "react";
import "./ProductSlider.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function App({ images, autoPlayp }) {
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={autoPlayp ? true : false}
      showStatus={false}
      showArrows={false}
      showThumbs={false}
      interval={5000}
    >
      {images?.map((item) => (
        <div>
          <img src={item} />
        </div>
      ))}
    </Carousel>
  );
}
