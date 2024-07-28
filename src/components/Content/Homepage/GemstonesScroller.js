import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ItemScrollerBox } from "./style.js";

function SampleNextArrow(props) {
  const { onClick } = props;

  return (
    <img
      alt="scroller-next-arrow"
      src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/scroller-arrow.png"
      onClick={onClick}
      style={{ width: "12px", height: "auto" }}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;

  return (
    <img
      alt="scroller-previous-arrow"
      src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/scroller-arrow.png"
      onClick={onClick}
      style={{ transform: "rotate(180deg)", width: "12px", height: "auto" }}
    />
  );
}

export default function BestSellers() {
  const [gemstoneNumber, setGemstoneNumber] = useState(0);
  const gemstones = [
    "blue sapphire",
    "cats eye",
    "emerald",
    "pearl",
    "red coral",
    "ruby",
    "yellow sapphire",
    "opal",
    "hesonite",
  ];

  const scrollerSettings = {
    dots: false,
    className: "center",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "60px",
    centerMode: true,
    useCSS: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1300, // width to change options
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "10px",
        },
      },
    ],
    afterChange(currentSlide) {
      setGemstoneNumber(currentSlide);
    },
  };

  return (
    <ItemScrollerBox>
      <h2>Discover Gemstones</h2>
      <p>An awe-inspiring array of gemstones</p>
      <Slider {...scrollerSettings}>
        <a href="/gemstones/blue-sapphire">
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/blue-sapphire.png`}
            alt="blue-sapphire"
          />
        </a>
        <a href="/gemstones/cats-eye">
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/cats-eye.png`}
            alt="cats-eye"
          />
        </a>
        <a href="/gemstones/emerald">
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/emerald.png`}
            alt="emerald"
          />
        </a>
        <a href="/gemstones/pearl">
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/pearl.png`}
            alt="pearl"
          />
        </a>
        <a href="/gemstones/red-coral">
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/red-coral.png`}
            alt="red-coral"
          />
        </a>
        <a href="/gemstones/ruby">
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/ruby.png`}
            alt="ruby"
          />
        </a>
        <a href="/gemstones/yellow-sapphire">
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/yellow-sapphire.png`}
            alt="yellow-sapphire"
          />
        </a>
        <a href="/gemstones/opal">
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/opal.png`}
            alt="opal"
          />
        </a>
        <a href="/gemstones/hesonite">
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/hesonite.png`}
            alt="hesonite"
          />
        </a>
      </Slider>
      <p className="name-displayer">( {gemstones[gemstoneNumber]} )</p>
    </ItemScrollerBox>
  );
}
