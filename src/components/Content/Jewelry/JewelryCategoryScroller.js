import React, { useState, useContext, useRef } from "react";
import { ItemScrollerBox } from "./style.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { DiamondsContext } from "../../../contexts/DiamondsContext";

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

export default function JewelryCategoryScroller() {
  const slider = useRef(null);
  const { onShapeChangeFilter } = useContext(DiamondsContext);
  const [shapeNumber, setShapeNumber] = useState(0);
  const shapes = [
    "solitaire rings",
    "solitaire necklaces",
    "solitaire studs",
    "mens rings",
    "mens chains",
    "mens kadas",
    "mens bracelets",
    "fashion rings",
    "diamond pendants",
    "alphabet pendants",
    "diamond earrings",
    "nose pins",
  ];

  const diamondsSettings = {
    className: "center",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    useCSS: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1300, // width to change options
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
    afterChange(currentSlide) {
      setShapeNumber(currentSlide);
    },
  };

  return (
    <ItemScrollerBox>
      <h2>Crowning Jewels</h2>
      <p>A collection perfect for any occasion</p>
      <Slider {...diamondsSettings} ref={slider}>
        <a href="/preset-jewelry/rings" onClick={() => onShapeChangeFilter(0)}>
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-womens-ring.png`}
            alt="solitaire-rings"
          />
        </a>
        <a
          href="/preset-jewelry/necklaces"
          onClick={() => onShapeChangeFilter(9)}
        >
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-pendants.png`}
            alt="solitaire-necklaces"
          />
        </a>
        <a href="/preset-jewelry/studs" onClick={() => onShapeChangeFilter(8)}>
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-studs.png`}
            alt="solitaire-studs"
          />
        </a>
        <a href="/mens-rings" onClick={() => onShapeChangeFilter(7)}>
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-mens-ring.png`}
            alt="mens-rings"
          />
        </a>
        <a href="/chains" onClick={() => onShapeChangeFilter(7)}>
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-chain-min.png`}
            alt="mens-chains"
          />
        </a>
        <a href="/mens-kada" onClick={() => onShapeChangeFilter(3)}>
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-kada.png`}
            alt="mens-kadas"
          />
        </a>
        <a href="/mens-bracelet" onClick={() => onShapeChangeFilter(5)}>
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-bracelet.png`}
            alt="mens-bracelets"
          />
        </a>
        <a href="/fashion-rings" onClick={() => onShapeChangeFilter(1)}>
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-fashion-ring.png`}
            alt="fashion-rings"
          />
        </a>
        <a href="/new-pendants" onClick={() => onShapeChangeFilter(4)}>
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-diamond-pendant.png`}
            alt="diamond-pendants"
          />
        </a>
        <a href="/ganesh-pendants" onClick={() => onShapeChangeFilter(4)}>
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-alphabet-pendant.png`}
            alt="alphabet-diamond"
          />
        </a>
        <a href="/new-earrings" onClick={() => onShapeChangeFilter(2)}>
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-earrings.png`}
            alt="diamond-earrings"
          />
        </a>
        <a href="/nose-pins?pin=screw" onClick={() => onShapeChangeFilter(2)}>
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-nose-pin.png`}
            alt="nose-pins"
          />
        </a>
      </Slider>
      <p className="name-displayer">( {shapes[shapeNumber]} )</p>
    </ItemScrollerBox>
  );
}
