import React, { useState, useEffect, useRef } from "react";
import { DiamondSizeLookerModuleBox } from "./style.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import newDiamondCaratToMmDataset from "../../../helper/getCaratSize";

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

const baseImage =
  "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/view-on-body/base-neck.png";

export default function DiamondSizeLookerForNeck({
  status,
  stoneNumber,
  setStoneNumber,
  slider,
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
    slidesToShow: 1,
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
    slidesToShow: 1,
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
  }, []);

  const zoomIn = () => {
    setScale(true);
  };

  const zoomOut = () => {
    setScale(false);
  };

  return (
    <DiamondSizeLookerModuleBox
      baseImage={baseImage}
      status={status}
      scale={scale}
      shape={shapes[stoneNumber]}
      tXValue={newDiamondCaratToMmDataset[stoneNumber].transformX[weightNumber]}
      tYValue={newDiamondCaratToMmDataset[stoneNumber].transformY[weightNumber]}
      pValue={positionValues[stoneNumber]}
      tValue={transformValue[weightNumber]}
    >
      <div id="zoom-controller">
        <button onClick={zoomIn} style={{ padding: "5px", fontSize: "2rem" }}>
          +
        </button>
        <button onClick={zoomOut} style={{ padding: "5px", fontSize: "2rem" }}>
          -
        </button>
      </div>
      <div className="neckHolder" ref={imgRef}>
        <div className="hand">
          <div className="pendantMid">
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
          <Slider {...caratSettings}>
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
    </DiamondSizeLookerModuleBox>
  );
}
