/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Slider from "react-infinite-logo-slider";
import Imgs from "../assets/svgs/1.svg";
import Imgs2 from "../assets/svgs/2.svg";
import Imgs3 from "../assets/svgs/3.svg";
import Imgs4 from "../assets/svgs/4.svg";
import Imgs5 from "../assets/svgs/5.svg";
import Imgs6 from "../assets/svgs/6.svg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBeforeChange = (prevIndex, nextIndex) => {
    setCurrentIndex(nextIndex);
  };

  return (
    <div>
      <h1 className="text-center text-lg font-bold mb-8 md:text-3xl">
        OUR CANDIDATES ARE PLACED AT
      </h1>
      <Slider
        width="250px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={"#fff"}
        className="grid grid-cols-6 gap-5"
        beforeChange={handleBeforeChange}
        currentSlide={currentIndex}
      >
        <Slider.Slide>
          <img
            src={Imgs}
            alt="Netflix Logo"
            className="carousel-image col-span-1 mx-8"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={Imgs2}
            alt="Netflix Logo"
            className="carousel-image col-span-1 mx-8"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={Imgs3}
            alt="Google Doodle"
            className="carousel-image col-span-1 mx-8"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={Imgs4}
            alt="Flipkart Logo"
            className="carousel-image col-span-1 mx-8"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={Imgs5}
            alt="Amazon Logo"
            className="carousel-image col-span-1 mx-8"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={Imgs6}
            alt="Img Logo"
            className="carousel-image col-span-1 mx-8"
          />
        </Slider.Slide>
      </Slider>
    </div>
  );
};

export default Carousel;
