import styled from "styled-components";

const ViewOnNeckBox = styled.div`
  display: ${(props) => (props.status ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(249, 249, 249);
  z-index: 5000;
  overflow: hidden;

  #close-view-on-hand-module {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.6);
    text-align: right;
    z-index: 200;

    div {
      padding: 10px;
    }
  }

  #zoom-controller {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: calc(50vh - 50px);
    left: 20px;
    display: flex;
    flex-direction: column;
    z-index: 201;
  }

  .handHolder {
    margin: auto;
    // width: 360px;
    // height: 545px;
    width: 580px;
    height: 880px;
    transform: ${(props) => (props.scale === true ? "scale(1.6)" : "none")};
    bottom: 0;
    left: calc(50vw - 290px);
    position: absolute;
  }

  .hand {
    background-image: url("https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/view-on-body/view-on-neck.png");
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: 100% 100%;
  }

  .ringMid {
    width: 51%;
    height: 48.8%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: visible;
  }

  .stone {
    position: absolute;
    z-index: 2;
    width: 100px;
    height: 100px;
    right: -50px;
    bottom: -50px;
    transform: ${(props) => `scale(${props.tValue})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: ${(props) => `-${props.pValue}px 0px`};
    transform-origin: center;
    background-image: url("https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/sprites/download.jpg");
    overflow: visible;
    transition: all 0.24s fade-in;
  }

  #slider-container {
    position: absolute;
    bottom: 30px;
    left: 0px;
    width: 100%;
  }

  #shapeSlider {
    width: 100%;
    background: rgba(255, 255, 255, 0.6);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  #caratSlider {
    width: 100%;
    background: rgba(255, 255, 255, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-list {
    height: 100%;

    .slick-track {
      height: 100px;
    }
  }

  .slick-slider {
    width: 95%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;

    .shape-holder {
      padding: 10px;
    }

    .weight-holder {
      padding: 10px;
    }

    img {
      width: 50px;
      height: 50px;
    }

    p {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .fi-cnsrxl-chevron-solid {
    font-size: 2rem;
  }

  .fi-cnslxl-chevron-solid {
    font-size: 2rem;
  }

  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }

  .center .slick-center .shape-holder {
    border-radius: 50%;
    box-shadow: 0px 0px 15px #e78267;
  }

  .center .slick-center .weight-holder {
    border-radius: 50%;
    box-shadow: 0px 0px 15px #e78267;
  }

  @media (max-width: 580px) {
    .handHolder {
      width: 100%;
      height: 100%;
      bottom: 0;
      left: 0;
    }

    .hand {
      background-size: cover;
    }
  }
`;
export default ViewOnNeckBox;
