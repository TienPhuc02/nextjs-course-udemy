"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
const MainContentHomePage = () => {
  var settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <>next</>,
    prevArrow: <>prev</>,
  };
  return (
    <Slider {...settings}>
      <div>
        <h1>1</h1>
      </div>
      <div>
        <h1>2</h1>
      </div>
      <div>
        <h1>3</h1>
      </div>
      <div>
        <h1>4</h1>
      </div>
      <div>
        <h1>5</h1>
      </div>
      <div>
        <h1>6</h1>
      </div>
    </Slider>
  );
};

export default MainContentHomePage;
