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

export default function DiamondShapeScroller() {
  var onShapeChangeFilter;
  const slider = useRef(null);
  // const {onShapeChangeFilter} = useContext(DiamondsContext)
  const [shapeNumber, setShapeNumber] = useState(0);
  const shapes = [
    "round",
    "radiant",
    "princess",
    "pear",
    "oval",
    "marquise",
    "heart",
    "emerald",
    "cushion",
    "asscher",
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "10px",
        },
      },
    ],
    afterChange(currentSlide) {
      setShapeNumber(currentSlide);
    },
  };
  return (
    <ItemScrollerBox>
      <h2>Discover Diamonds</h2>
      <p>Adorn yourself with what is trendy</p>
      <Slider {...diamondsSettings} ref={slider}>
        <a href="/diamonds?name=round" onClick={() => onShapeChangeFilter(0)}>
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shapes-images/round.jpg`}
            alt="round-diamond"
          />
        </a>
        <a href="/diamonds?name=radiant" onClick={() => onShapeChangeFilter(9)}>
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shapes-images/radiant.jpg`}
            alt="radiant-diamond"
          />
        </a>
        <a
          href="/diamonds?name=princess"
          onClick={() => onShapeChangeFilter(8)}
        >
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shapes-images/princess.jpg`}
            alt="princess-diamond"
          />
        </a>
        <a href="/diamonds?name=pear" onClick={() => onShapeChangeFilter(7)}>
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shapes-images/pear.jpg`}
            alt="pear-diamond"
          />
        </a>
        <a href="/diamonds?name=pear" onClick={() => onShapeChangeFilter(7)}>
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shapes-images/oval.jpg`}
            alt="oval-diamond"
          />
        </a>
        <a
          href="/diamonds?name=marquise"
          onClick={() => onShapeChangeFilter(3)}
        >
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shapes-images/marquise.jpg`}
            alt="marquise-diamond"
          />
        </a>
        <a href="/diamonds?name=heart" onClick={() => onShapeChangeFilter(5)}>
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shapes-images/heart.jpg`}
            alt="heart-diamond"
          />
        </a>
        <a href="/diamonds?name=emerald" onClick={() => onShapeChangeFilter(1)}>
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shapes-images/emerald.jpg`}
            alt="emerald-diamond"
          />
        </a>
        <a href="/diamonds?name=cushion" onClick={() => onShapeChangeFilter(4)}>
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shapes-images/cushion.jpg`}
            alt="cushion-diamond"
          />
        </a>
        <a
          href="/diamonds?name=square-emerald"
          onClick={() => onShapeChangeFilter(2)}
        >
          <img
            src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shapes-images/asscher.jpg`}
            alt="asscher-diamond"
          />
        </a>
      </Slider>
      <p className="name-displayer">( {shapes[shapeNumber]} )</p>
    </ItemScrollerBox>
  );
}
