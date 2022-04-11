import React from "react";
import { Carousel } from "react-responsive-carousel";
import luca from '../assets/pictures/slider-1.jpg'
import raya from '../assets/pictures/slider-2.jpg'
import skeleton from '../assets/pictures/slider-3.jpg'
import walle from '../assets/pictures/slider-4.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export const Slider = () => {
  return (
    <section className="relative mt-7 shadow-2xl max-w-screen-2xl mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src={luca} alt="luca" />
        </div>
        <div>
          <img loading="lazy" src={raya} alt="raya" />
        </div>
        <div>
          <img loading="lazy" src={skeleton} alt="skeleton" />
        </div>
        <div>
          <img loading="lazy" src={walle} alt="walle" />
        </div>
      </Carousel>
    </section>
  );
};
