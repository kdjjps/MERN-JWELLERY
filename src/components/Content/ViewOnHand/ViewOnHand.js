import React, { useState, useEffect, useRef } from "react";
import ViewOnHandBox from "./style.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import newDiamondCaratToMmDataset from "../../../helper/getCaratSize.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function SampleNextArrow(props) {
  const { onClick } = props;

  return (
    <div
      onClick={onClick}
      style={{
        color: "rgb(30,46,76)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{ width: "12px" }}
        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/scroller-arrow.png"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;

  return (
    <div
      onClick={onClick}
      style={{
        transform: "rotate(180deg)",
        color: "rgb(30,46,76)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{ width: "12px" }}
        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/scroller-arrow.png"
      />
    </div>
  );
}

export default function ViewOnHand({
  status,
  handleViewHandModal,
  stoneNumber,
  setStoneNumber,
  slider,
  caratSlider,
  caratNumber,
}) {
  const imgRef = React.createRef();
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [shapeNumber, setShapeNumber] = useState(stoneNumber);
  const [weightNumber, setWeightNumber] = useState(0);
  const [scale, setScale] = useState(false);

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
  const weights = [
    0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 1.0, 1.25, 1, 50, 1.75, 2.0, 2.5, 3.0,
  ];
  const transformValue = [
    0.4222, 0.4444, 0.5111, 0.5333, 0.5777, 0.6444, 0.6888, 0.7444, 0.8, 0.8333,
    0.8555, 0.9555, 1,
  ];
  const positionValues = [0, 68, 136, 204, 272, 340, 408, 476, 544, 612];

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
        breakpoint: 600, // width to change options
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
    afterChange(currentSlide) {
      setStoneNumber(currentSlide);
    },
  };

  const caratSettings = {
    className: "center",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    useCSS: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600, // width to change options
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
    afterChange(currentSlide) {
      setWeightNumber(currentSlide);
    },
  };

  useEffect(() => {
    setHeight(imgRef.current.clientHeight);
    setWidth(imgRef.current.clientWidth);
    setWeightNumber(caratNumber);
  }, [caratNumber]);

  const zoomIn = () => {
    setScale(true);
  };

  const zoomOut = () => {
    setScale(false);
  };

  return (
    <ViewOnHandBox
      status={status}
      scale={scale}
      shape={shapes[stoneNumber]}
      tXValue={newDiamondCaratToMmDataset[stoneNumber].transformX[weightNumber]}
      tYValue={newDiamondCaratToMmDataset[stoneNumber].transformY[weightNumber]}
      pValue={positionValues[stoneNumber]}
      tValue={transformValue[weightNumber]}
    >
      <div id="close-view-on-hand-module">
        <div>
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/logo-main.png"
            style={{ width: "90px" }}
          />
        </div>
        <div onClick={() => handleViewHandModal()} className="cross">
          <FontAwesomeIcon icon={faTimes} style={{ fontSize: "2.5rem" }} />
        </div>
      </div>
      <div id="zoom-controller">
        <button onClick={zoomIn} style={{ padding: "5px", fontSize: "2rem" }}>
          +
        </button>
        <button onClick={zoomOut} style={{ padding: "5px", fontSize: "2rem" }}>
          -
        </button>
      </div>
      <div className="handHolder" ref={imgRef}>
        <div className="hand">
          <div className="ringMid">
            <div className="stone"></div>
          </div>
        </div>
      </div>
      <div id="slider-container">
        <div id="shapeSlider">
          <Slider {...diamondsSettings} ref={slider}>
            <div className="shape-holder">
              <img
                src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_round.png`}
                alt="round_diamond"
              />
            </div>
            <div className="shape-holder">
              <img
                src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_radiant.png`}
                alt="radiant_diamond"
              />
            </div>
            <div className="shape-holder">
              <img
                src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_princess.png`}
                alt="princess_diamond"
              />
            </div>
            <div className="shape-holder">
              <img
                src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_pear.png`}
                alt="pear_diamond"
              />
            </div>
            <div className="shape-holder">
              <img
                src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_oval.png`}
                alt="oval_diamond"
              />
            </div>
            <div className="shape-holder">
              <img
                src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_marquise.png`}
                alt="marquise_diamond"
              />
            </div>
            <div className="shape-holder">
              <img
                src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_heart.png`}
                alt="heart_diamond"
              />
            </div>
            <div className="shape-holder">
              <img
                src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_emerald.png`}
                alt="emerald_dinner"
              />
            </div>
            <div className="shape-holder">
              <img
                src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_cushion.png`}
                alt="cushion_diamond"
              />
            </div>
            <div className="shape-holder">
              <img
                src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_asscher.png`}
                alt="asscher_diamond"
              />
            </div>
          </Slider>
        </div>

        <div id="caratSlider">
          <Slider {...caratSettings} ref={caratSlider}>
            <div className="weight-holder">
              <p>0.25</p>
            </div>
            <div className="weight-holder">
              <p>0.30</p>
            </div>
            <div className="weight-holder">
              <p>0.40</p>
            </div>
            <div className="weight-holder">
              <p>0.50</p>
            </div>
            <div className="weight-holder">
              <p>0.60</p>
            </div>
            <div className="weight-holder">
              <p>0.75</p>
            </div>
            <div className="weight-holder">
              <p>1.00</p>
            </div>
            <div className="weight-holder">
              <p>1.25</p>
            </div>
            <div className="weight-holder">
              <p>1.50</p>
            </div>
            <div className="weight-holder">
              <p>1.75</p>
            </div>
            <div className="weight-holder">
              <p>2.00</p>
            </div>
            <div className="weight-holder">
              <p>2.50</p>
            </div>
            <div className="weight-holder">
              <p>3.00</p>
            </div>
          </Slider>
        </div>
      </div>
    </ViewOnHandBox>
  );
}
