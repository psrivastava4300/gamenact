import React from "react";
import "./Carousel.css";
import { useState } from "react";
import Slider from "react-slick";
import carousel1 from "./assets/carousel1.jpg";
import carousel2 from "./assets/carousel2.jpg";
import carousel3 from "./assets/carousel3.jpg";
import carousel4 from "./assets/carousel4.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [carousel1, carousel2, carousel3, carousel4];

const Carousel = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img className="carousel__img" src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
