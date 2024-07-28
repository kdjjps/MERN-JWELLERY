import React, { useState, useEffect, useRef } from "react";
import { AlternateDetailsBox } from "../style";
import { useParams } from "react-router-dom";
import SocialSharing from "../SocialSharing";
import USPBanner from "../USPBanner";
import SmallUSPBanner from "../SmallUSPBanner";
import { useCookies } from "react-cookie";
import getTotalPrice from "../../../../helper/getTotalPrice";
import DeliverabilityChecker from "../../DeliverabilityChecker";
import metalSizeFormatter from "../../../../helper/metalSizeFormatter";
import DiamondSizeLookerForHand from "../DiamondSizeLookerForHand";
import ringSizeObject from "../../../../fakedata/ringSizeData";
import { useSelector, useDispatch } from "react-redux";
import { findJewelry } from "../../../../store/actions/jewelryActions";
import Loader from "../../Loader/Loader";
import { addToWishlist } from "../../../../store/actions/wishlistActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { letsShowFlash } from "../../../../store/actions/flashAction.js";

export default function RingDetails() {
  const data = useSelector((state) => state);
  const rings = data.jewelryReducer.unfilteredSolitaireRingsArray;

  const dispatch = useDispatch();

  const innerRef = useRef();
  const slider = useRef(null);

  const [cookies, setCookie] = useCookies();

  const [metal, setMetal] = useState(null);
  const [metalCode, setMetalCode] = useState(null);
  const [ringSize, setRingSize] = useState(3);
  const [ringSizeStandard, setRingSizeStandard] = useState("USD");
  const [imageViewStatus, setImageViewStatus] = useState(true);
  const [videoViewStatus, setVideoViewStatus] = useState(false);
  const [moduleStatus, setModuleStatus] = useState(false);
  const [stoneNumber, setStoneNumber] = useState(0);
  const { ringId } = useParams();
  const stockNumber = ringId.slice(7, 11);
  const nfObject = new Intl.NumberFormat("en-US");

  const item = findJewelry(rings, stockNumber);

  const [wishlistStatus, setWishlistStatus] = useState(false);
  const wishlistItems = data.wishlistReducer.wishlistItems;

  const selectedRingSizeStandard = ringSizeObject.filter((item, index) => {
    return item.currency === ringSizeStandard;
  });

  const ringSizeArray = selectedRingSizeStandard[0].ringSizeArray.map(
    (item, index) => {
      return <option value={index}>{item.size}</option>;
    }
  );

  const changeMetal = (metal) => {
    switch (metal) {
      case "platinum":
        setMetal("platinum");
        break;
      case "rose-gold":
        setMetal("rose-gold");
        break;
      case "yellow-gold":
        setMetal("yellow-gold");
        break;
      case "white-gold":
        setMetal("white-gold");
        break;
    }
  };

  const displayImage = () => {
    setImageViewStatus(true);
    setVideoViewStatus(false);
    setModuleStatus(false);
  };

  const displayVideo = () => {
    setImageViewStatus(false);
    setVideoViewStatus(true);
    setModuleStatus(false);
  };

  const displayModule = () => {
    setImageViewStatus(false);
    setVideoViewStatus(false);
    setModuleStatus(true);
  };

  const changeRingSize = (e) => {
    setRingSize(e.target.value);
  };

  const magnify = (e) => {
    const inner = document.querySelector(".inner");
    let { left, top, width, height } = innerRef.current.getBoundingClientRect();
    let x = ((e.pageX - left) / width) * 100;
    let y = ((e.pageY - top) / height) * 100;
    inner.style.backgroundPosition = `${x}% ${y}%`;
  };

  const onSelectRing = (ringId, shape) => {
    if (cookies.whatGotSelectedFirstForCustomRing == undefined) {
      setCookie("whatGotSelectedFirstForCustomRing", "ring", { path: "/" });
      setCookie("_ringSelectedForCustomRing", ringId, { path: "/" });
      setCookie("_ringSizeForCustomRing", ringSize, { path: "/" });
      setCookie("_ringSizeStandardForCustomRing", ringSizeStandard, {
        path: "/",
      });
      setCookie("_ringMetalForCustomRing", metal, { path: "/" });
      window.location = `/create-your-own-ring/diamonds?name=${shape}`;
    } else if (cookies.whatGotSelectedFirstForCustomRing === "ring") {
      setCookie("_ringSelectedForCustomRing", ringId, { path: "/" });
      setCookie("_ringSizeForCustomRing", ringSize, { path: "/" });
      setCookie("_ringSizeStandardForCustomRing", ringSizeStandard, {
        path: "/",
      });
      setCookie("_ringMetalForCustomRing", metal, { path: "/" });
      window.location = `/create-your-own-ring/diamonds?name=${shape}`;
    } else {
      setCookie("_ringSelectedForCustomRing", ringId, { path: "/" });
      setCookie("_ringSizeForCustomRing", ringSize, { path: "/" });
      setCookie("_ringSizeStandardForCustomRing", ringSizeStandard, {
        path: "/",
      });
      setCookie("_ringMetalForCustomRing", metal, { path: "/" });
      window.location = "/create-your-own-ring/review-order";
    }
  };

  useEffect(() => {
    let metalCode = ringId[11];
    switch (metalCode) {
      case "0":
        setMetal("white-gold");
        setMetalCode(0);
        break;
      case "1":
        setMetal("yellow-gold");
        setMetalCode(1);
        break;
      case "2":
        setMetal("rose-gold");
        setMetalCode(2);
        break;
      case "3":
        setMetal("platinum");
        setMetalCode(3);
        break;
    }
  }, []);

  useEffect(() => {
    if (!data.jewelryReducer.isLoading) {
      switch (item.diamondShape) {
        case "round":
          setStoneNumber(0);
          slider.current.slickGoTo(0);
          break;
        case "emerald":
          setStoneNumber(7);
          slider.current.slickGoTo(7);
          break;
        case "pear":
          setStoneNumber(3);
          slider.current.slickGoTo(3);
          break;
        case "cushion":
          setStoneNumber(8);
          slider.current.slickGoTo(8);
          break;
        case "marquise":
          setStoneNumber(5);
          slider.current.slickGoTo(5);
          break;
        case "heart":
          setStoneNumber(6);
          slider.current.slickGoTo(6);
          break;
        case "asscher":
          setStoneNumber(9);
          slider.current.slickGoTo(9);
          break;
        case "radiant":
          setStoneNumber(1);
          slider.current.slickGoTo(1);
          break;
        case "princess":
          setStoneNumber(2);
          slider.current.slickGoTo(2);
          break;
        case "oval":
          setStoneNumber(4);
          slider.current.slickGoTo(4);
          break;
        default:
          setStoneNumber(0);
          break;
      }
    }
  }, []);

  const addItemToWishlist = (item, itemType) => {
    if (wishlistStatus) {
      dispatch(letsShowFlash("Ring Removed From The Cart!"));
    } else {
      dispatch(letsShowFlash("Ring Added To The Cart!"));
    }
    setWishlistStatus(!wishlistStatus);
    dispatch(
      addToWishlist({
        stockNumber: item.stockNumber,
        itemType: "solitaire-ring",
      })
    );
  };

  useEffect(() => {
    if (item) {
      let availability = wishlistItems.find(
        (wishlistItem, index) => wishlistItem.stockNumber === item.stockNumber
      );
      if (availability) {
        setWishlistStatus(true);
      }
    }
  }, [item]);

  return item ? (
    <AlternateDetailsBox
      metal={metal}
      imageViewStatus={imageViewStatus}
      videoViewStatus={videoViewStatus}
      moduleViewStatus={moduleStatus}
      wishlistStatus={wishlistStatus}
    >
      <div className="details-page-upperbody">
        <div className="big-media-displayer">
          <div className="media-holder diamond-image">
            <div class="left" onMouseMove={magnify} ref={innerRef}>
              {item.metals.map((metal, index) => {
                return (
                  <img
                    src={metal.imgURL}
                    alt={`${item.id}-${index}`}
                    className={metal.metal}
                  />
                );
              })}
            </div>
            <div class="right">
              {item.metals.map((metal, index) => {
                return (
                  <div
                    className="inner"
                    id={`${metal.metal}`}
                    style={{ backgroundImage: `url(${metal.imgURL})` }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="media-holder diamond-video">
            {item.metals.map((metal, index) => {
              return (
                <video
                  autoPlay="autoplay"
                  src={metal.videoURL}
                  className={metal.metal}
                  loop
                  muted="muted"
                >
                  Your browser does not support HTML5 video.
                </video>
              );
            })}
          </div>
          <div className="diamond-module">
            <DiamondSizeLookerForHand
              stoneNumber={stoneNumber}
              setStoneNumber={setStoneNumber}
              slider={slider}
              status={moduleStatus}
            />
          </div>
        </div>
        <div className="small-media-displayer">
          <div className="media-holder productImage">
            {item.metals.map((metal, index) => {
              return (
                <img
                  onClick={displayImage}
                  src={metal.imgURL}
                  alt={`${item.id}-${index}`}
                  className={metal.metal}
                />
              );
            })}
          </div>
          <div className="media-holder productVideo">
            {item.metals.map((metal, index) => {
              return (
                <video
                  poster="https://furtaev.ru/preview/play_small.png"
                  src={metal.videoURL}
                  className={metal.metal}
                  onClick={displayVideo}
                  loop
                  muted="muted"
                >
                  Your browser does not support HTML5 video.
                </video>
              );
            })}
          </div>
          <div className="media-holder bodyModule" onClick={displayModule}>
            <img
              src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/view-on-body/view-on-hand.png"
              alt="view-on-hand"
            />
          </div>
        </div>
        <div className="summary-holder">
          <section>
            <p className="heading">
              {item.ringName} {item.diamondShape} Solitaire Ring
            </p>
            <p className="sku">
              <span style={{ fontWeight: "bold" }}>SKU: </span>
              {ringId.slice(0, 10)}
            </p>
            <p className="price">
              <span style={{ fontWeight: "bold" }}>
                Our Price : {cookies.currencyCode}{" "}
                {nfObject.format(
                  parseInt(getTotalPrice("custom-ring", item, cookies))
                )}
              </span>
              <span style={{ fontSize: "1.3rem", display: "block" }}>
                (Price is for the ring only, excluding VAT)
              </span>
            </p>
          </section>

          <section className="metal-changer">
            <p style={{ marginBottom: "10px" }}>
              <span style={{ fontWeight: "bold" }}>Metal: </span>
              {item.metalPurity} {metal}
            </p>
            <div>
              <a
                className="metal-link"
                href={`/create-your-own-ring/rings/LGC-CJ-${stockNumber}0`}
              >
                White Gold
              </a>
              <a
                className="metal-link"
                href={`/create-your-own-ring/rings/LGC-CJ-${stockNumber}1`}
              >
                Yellow Gold
              </a>
              <a
                className="metal-link"
                href={`/create-your-own-ring/rings/LGC-CJ-${stockNumber}2`}
              >
                Rose Gold
              </a>
              <a
                className="metal-link"
                href={`/create-your-own-ring/rings/LGC-CJ-${stockNumber}3`}
              >
                Platinum
              </a>
            </div>
          </section>

          <section className="drop-selection">
            <p style={{ marginBottom: "10px", marginTop: "10px" }}>
              <span style={{ fontWeight: "bold" }}>Ring Size: </span>
            </p>
            <div id="ring-selector">
              <select
                id="ring-standard"
                style={{ padding: "5px" }}
                value={ringSizeStandard}
                onChange={(e) => setRingSizeStandard(e.target.value)}
              >
                <option value={"AUD"}>Australia</option>
                <option value={"EUR"}>Europe</option>
                <option value={"INR"}>India</option>
                <option value={"NZD"}>New Zealand</option>
                <option value={"AED"}>Saudi Arabia</option>
                <option value={"SGD"}>Singapore</option>
                <option value={"GBP"}>United Kingdom</option>
                <option value={"USD"}>United States</option>
              </select>
              <select
                id="ring-sizes"
                style={{ padding: "5px" }}
                value={ringSize}
                onChange={changeRingSize}
              >
                {ringSizeArray}
              </select>
            </div>
          </section>

          <DeliverabilityChecker />

          <section className="buttons-container">
            <button onClick={() => onSelectRing(ringId, item.diamondShape)}>
              Select Ring
            </button>
            <div onClick={() => addItemToWishlist(item)}>
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </section>

          <section className="summary-footer">
            <div className="social-sharing">
              <p style={{ margin: "6px 0px" }}>Share on: </p>
              <SocialSharing />
            </div>
          </section>
        </div>
      </div>

      <div className="details-page-lowerbody">
        <section className="details-table">
          <h3>Product Details</h3>
          <div className="details-body">
            <div className="data-row">
              <p>Width</p>
              <p style={{ textTransform: "none" }}>
                {metalSizeFormatter(item.width)} mm
              </p>
            </div>
            <div className="data-row">
              <p>Height</p>
              <p style={{ textTransform: "none" }}>
                {metalSizeFormatter(item.height)} mm
              </p>
            </div>
            <div className="data-row">
              <p>Purity</p>
              <p>18 K</p>
            </div>
            <div className="data-row">
              <p>Weight</p>
              <p style={{ textTransform: "none" }}>{item.metalWeight} gms</p>
            </div>
            <div className="data-row">
              <p>Setting</p>
              <p>{item.setting}</p>
            </div>
          </div>
        </section>
        <SmallUSPBanner />
        <USPBanner />
      </div>
    </AlternateDetailsBox>
  ) : (
    <Loader />
  );
}
