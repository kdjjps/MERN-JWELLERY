import React, { useState, useRef, useEffect } from "react";
import { DetailsBox, ItemNotFound } from "../style";
import { useCookies } from "react-cookie";
import getImage from "../../../../helper/getImage";
import SocialSharing from "../SocialSharing";
import { useParams, useRouteMatch } from "react-router-dom";
import USPBanner from "../USPBanner";
import SmallUSPBanner from "../SmallUSPBanner";
import getTotalPrice from "../../../../helper/getTotalPrice";
import DeliverabilityChecker from "../../DeliverabilityChecker";
import DiamondCertificateModal from "./DiamondCertificateModal";
import DiamondSettingModal from "./DiamondSettingModal";
import { useSelector, useDispatch } from "react-redux";
import { findDiamond } from "../../../../store/actions/diamondActions";
import Loader from "../../Loader/Loader";
import { addToWishlist } from "../../../../store/actions/wishlistActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { letsShowFlash } from "../../../../store/actions/flashAction.js";

export default function DiamondDetailsPage({
  nfObject,
  handleViewHandModal,
  slider,
  caratSlider,
}) {
  const innerRef = useRef();
  const { diamondId } = useParams();
  const { path } = useRouteMatch();
  const [diamondDetailsStatus, setDiamondDetailsStatus] = useState(true);
  const [imageViewStatus, setImageViewStatus] = useState(false);
  const [videoViewStatus, setVideoViewStatus] = useState(true);
  const [diamondCertModal, setDiamondCertModal] = useState(false);
  const [optionModalStatus, setOptionModalStatus] = useState(false);
  const [itemFound, setItemFound] = useState(false);

  const [item, setItem] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [cookies, setCookie] = useCookies();

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const [wishlistStatus, setWishlistStatus] = useState(false);
  const wishlistItems = data.wishlistReducer.wishlistItems;

  const addItemToWishlist = (item) => {
    if (wishlistStatus) {
      dispatch(letsShowFlash("Diamond Removed From The Cart!"));
    } else {
      dispatch(letsShowFlash("Diamond Added To The Cart!"));
    }
    setWishlistStatus(!wishlistStatus);
    dispatch(
      addToWishlist({
        stockNumber: item.stockNumber,
        itemType: "loose-diamond",
      })
    );
  };

  const handleOptionModalStatus = () => {
    if (optionModalStatus === false) {
      setOptionModalStatus(true);
      setScrollY(window.scrollY);
      document
        .getElementById("root")
        .setAttribute(
          "style",
          `position: fixed; top: ${window.scrollY}; left: 0; right: 0;`
        );
    } else {
      setOptionModalStatus(false);
      document.getElementById("root").setAttribute("style", "");
      window.scrollTo(0, scrollY);
    }
  };

  const magnify = (e) => {
    const inner = document.querySelector(".inner");
    let { left, top, width, height } = innerRef.current.getBoundingClientRect();
    let x = ((e.pageX - left) / width) * 100;
    let y = ((e.pageY - top) / height) * 100;
    inner.style.backgroundPosition = `${x}% ${y}%`;
  };

  const displayImage = () => {
    setImageViewStatus(true);
    setVideoViewStatus(false);
  };

  const displayVideo = () => {
    setImageViewStatus(false);
    setVideoViewStatus(true);
  };

  const onSelectDiamond = (diamondId, shape, carat) => {
    switch (path) {
      case "/create-your-own-ring/diamonds/:diamondId":
        if (cookies.whatGotSelectedFirstForCustomRing == undefined) {
          setCookie("whatGotSelectedFirstForCustomRing", "diamond", {
            path: "/",
          });
          setCookie("_diamondSelectedForCustomRing", diamondId, { path: "/" });
          setCookie("_diamondShapeSelectedForCustomRing", shape, { path: "/" });
          window.location = `/create-your-own-ring/rings?shape=${shape}`;
        } else if (cookies.whatGotSelectedFirstForCustomRing === "diamond") {
          setCookie("_diamondSelectedForCustomRing", diamondId, { path: "/" });
          setCookie("_diamondShapeSelectedForCustomRing", shape, { path: "/" });
          window.location = `/create-your-own-ring/rings?shape=${shape}`;
        } else {
          setCookie("_diamondSelectedForCustomRing", diamondId, { path: "/" });
          setCookie("_diamondShapeSelectedForCustomRing", shape, { path: "/" });
          window.location = "/create-your-own-ring/review-order";
        }
        break;
      case "/create-your-own-necklace/diamonds/:diamondId":
        if (cookies.whatGotSelectedFirstForCustomNecklace == undefined) {
          setCookie("whatGotSelectedFirstForCustomNecklace", "diamond", {
            path: "/",
          });
          setCookie("_diamondSelectedForCustomNecklace", diamondId, {
            path: "/",
          });
          setCookie("_diamondShapeSelectedForCustomNecklace", shape, {
            path: "/",
          });
          window.location = `/create-your-own-necklace/necklaces?shape=${shape}`;
        } else if (
          cookies.whatGotSelectedFirstForCustomNecklace === "diamond"
        ) {
          setCookie("_diamondSelectedForCustomNecklace", diamondId, {
            path: "/",
          });
          setCookie("_diamondShapeSelectedForCustomNecklace", shape, {
            path: "/",
          });
          window.location = `/create-your-own-necklace/necklaces?shape=${shape}`;
        } else {
          setCookie("_diamondSelectedForCustomNecklace", diamondId, {
            path: "/",
          });
          setCookie("_diamondShapeSelectedForCustomNecklace", shape, {
            path: "/",
          });
          window.location = "/create-your-own-necklace/review-order";
        }
        break;
      case "/create-your-own-stud/diamonds/first/:diamondId":
        if (cookies.whatGotSelectedFirstForCustomStud == undefined) {
          setCookie("whatGotSelectedFirstForCustomStud", "diamond", {
            path: "/",
          });
          setCookie("_firstDiamondSelectedForCustomStud", diamondId, {
            path: "/",
          });
          setCookie("_diamondShapeSelectedForCustomStud", shape, { path: "/" });
          setCookie("_diamondCaratSelectedForCustomStud", carat, { path: "/" });
          window.location = `/create-your-own-stud/diamonds/second?name=${shape}&caratFrom=${carat}&caratTo=${
            carat + 0.5
          }`;
        } else {
          setCookie("_firstDiamondSelectedForCustomStud", diamondId, {
            path: "/",
          });
          setCookie("_diamondShapeSelectedForCustomStud", shape, { path: "/" });
          window.location = `/create-your-own-stud/diamonds/second?name=${shape}&caratFrom=${carat}&caratTo=${
            carat + 0.5
          }`;
        }
        break;
      case "/create-your-own-stud/diamonds/second/:diamondId":
        if (
          cookies.whatGotSelectedFirstForCustomStud === "diamond" &&
          cookies.whatGotSelectedSecondForCustomStud === "diamond"
        ) {
          setCookie("_secondDiamondSelectedForCustomStud", diamondId, {
            path: "/",
          });
          setCookie("_diamondShapeSelectedForCustomStud", shape, { path: "/" });
          window.location = `/create-your-own-stud/studs?shape=${shape}`;
        } else if (
          cookies.whatGotSelectedFirstForCustomStud === "diamond" &&
          cookies.whatGotSelectedSecondForCustomStud === "stud"
        ) {
          setCookie("_secondDiamondSelectedForCustomStud", diamondId, {
            path: "/",
          });
          setCookie("_diamondShapeSelectedForCustomStud", shape, { path: "/" });
          window.location = `/create-your-own-stud/review-order`;
        } else if (
          cookies.whatGotSelectedFirstForCustomStud === "diamond" &&
          (cookies.whatGotSelectedSecondForCustomStud == undefined ||
            cookies.whatGotSelectedSecondForCustomStud == null)
        ) {
          setCookie("whatGotSelectedSecondForCustomStud", "diamond", {
            path: "/",
          });
          setCookie("_secondDiamondSelectedForCustomStud", diamondId, {
            path: "/",
          });
          setCookie("_diamondShapeSelectedForCustomStud", shape, { path: "/" });
          window.location = `/create-your-own-stud/studs?shape=${shape}`;
        }
        break;
    }
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

  useEffect(() => {
    if (data.diamondReducer.loadingDone) {
      let diamond = findDiamond(
        data.diamondReducer.unfilteredDiamondArray,
        diamondId
      );
      if (diamond) {
        setItem(diamond);
      } else {
        setItem({});
      }
    }
  }, [data.diamondReducer.loadingDone]);

  let modifiedUrl = item?.imageUrl?.replace(
    /https:\/\/lgc-media-bucket\.s3\.ap-south-1\.amazonaws\.com/g,
    "https://lgcgems.s3.ap-south-1.amazonaws.com"
  );

  return item ? (
    Object.keys(item).length != 0 ? (
      <DetailsBox
        status={diamondDetailsStatus}
        imageViewStatus={imageViewStatus}
        videoViewStatus={videoViewStatus}
        wishlistStatus={wishlistStatus}
      >
        <div className="details-page-upperbody">
          <div className="big-media-displayer">
            <div className="media-holder diamond-video">
              <video
                loop
                muted="muted"
                autoPlay
                controls
                poster="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
                src={
                  item.videoUrl.length > 5
                    ? item.videoUrl
                    : "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/misc/no-video-available.mp4"
                }
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/misc/no-video-available.mp4";
                }}
              >
                Your browser does not support HTML5 video.
              </video>
            </div>

            <div className="media-holder diamond-image">
              <div className="left" onMouseMove={magnify} ref={innerRef}>
                <img
                  src={
                    item.imageUrl.length > 5
                      ? modifiedUrl
                      : getImage(item.diamondShape).imgURL
                  }
                  alt="diamond"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = getImage(item.diamondShape).imgURL;
                  }}
                />
              </div>
              <div className="right">
                <div
                  className="inner"
                  style={{
                    backgroundImage: `url(${
                      item.imageUrl.length > 5
                        ? modifiedUrl
                        : getImage(item.diamondShape).imgURL
                    })`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="small-media-displayer">
            <div className="media-holder productImage" onClick={displayImage}>
              <img
                src={
                  item.imageUrl.length > 5
                    ? modifiedUrl
                    : getImage(item.diamondShape).imgURL
                }
                alt="diamond"
                id={item.stockNumber}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = getImage(item.diamondShape).imgURL;
                }}
              />
            </div>

            <div className="media-holder productVideo" onClick={displayVideo}>
              <video
                loop
                muted="muted"
                poster="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/misc/360.png"
                src={
                  item.videoUrl.length > 5
                    ? item.videoUrl
                    : "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/misc/no-video-available.mp4"
                }
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/misc/no-video-available.mp4";
                }}
              >
                Your browser does not support HTML5 video.
              </video>
            </div>

            <div
              className="media-holder certImage"
              onClick={() => setDiamondCertModal(true)}
            >
              {item.lab === "GIA" ? (
                <img
                  className="cert-image"
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/certification/gia-cert.png"
                />
              ) : item.lab === "IGI" ? (
                <img
                  className="cert-image"
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/certification/igi-cert.png"
                />
              ) : item.lab === "HRD" ? (
                <img
                  className="cert-image"
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/certification/hrd-cert.png"
                />
              ) : item.lab === "AGS" ? (
                <img
                  className="cert-image"
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/certification/ags-cert.png"
                />
              ) : (
                <img
                  className="cert-image"
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/certification/gia-cert.png"
                />
              )}
            </div>

            <div
              className="view-on-hand-button media-holder"
              onClick={() =>
                handleViewHandModal(
                  item.diamondShape,
                  slider,
                  caratSlider,
                  item.carat
                )
              }
            >
              <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/view-on-body/view-on-hand.png" />
            </div>
          </div>

          <div className="summary-holder">
            <section>
              <p className="heading">
                {item.carat.toFixed(2)} Carat {item.diamondShape} Shaped Diamond
              </p>
              <p className="info">
                {item.color} Color{" "}
                <span style={{ fontWeight: "bold" }}>&middot;</span>{" "}
                {item.clarity} Clarity
              </p>
              <p className="sku">
                <span style={{ fontWeight: "bold" }}>SKU: </span>
                {item.stockNumber}
              </p>
              <p className="price">
                <span style={{ fontWeight: "bold" }}>
                  Our Price : {cookies.currencyCode}{" "}
                  {nfObject.format(
                    getTotalPrice("loose-diamond", item, cookies)
                  )}
                </span>
                <span style={{ fontSize: "1.3rem", display: "block" }}>
                  (Price is for the diamond only, excluding VAT)
                </span>
              </p>
            </section>

            <DeliverabilityChecker />

            <section className="links-container buttons-container">
              {path === "/create-your-own-ring/diamonds/:diamondId" ? (
                <button
                  id="add-to-ring-button"
                  onClick={() => onSelectDiamond(diamondId, item.diamondShape)}
                >
                  Add To Ring
                </button>
              ) : path === "/create-your-own-necklace/diamonds/:diamondId" ? (
                <button
                  id="add-to-pendant-button"
                  onClick={() => onSelectDiamond(diamondId, item.diamondShape)}
                >
                  Add To Necklace
                </button>
              ) : path === "/create-your-own-stud/diamonds/first/:diamondId" ? (
                <button
                  id="add-to-stud-one-button"
                  onClick={() =>
                    onSelectDiamond(diamondId, item.diamondShape, item.carat)
                  }
                >
                  Add First Diamond
                </button>
              ) : path ===
                "/create-your-own-stud/diamonds/second/:diamondId" ? (
                <button
                  id="add-to-stud-two-button"
                  onClick={() =>
                    onSelectDiamond(diamondId, item.diamondShape, item.carat)
                  }
                >
                  Add Second Diamond
                </button>
              ) : (
                <button onClick={handleOptionModalStatus}>
                  Select Diamond
                </button>
              )}

              <div
                className="wishlist-button-container"
                onClick={() => addItemToWishlist(item)}
              >
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </section>
            <section className="summary-footer">
              <div className="social-sharing">
                <p style={{ marginBottom: "5px" }}>Share on:</p>
                <SocialSharing />
              </div>
            </section>
          </div>
        </div>

        <div className="details-page-lowerbody">
          <section className="details-table">
            <h3>Diamond Details</h3>
            <div className="top-row">
              <p>
                <span style={{ fontWeight: "bold" }}>Stock no : </span>
                {item.stockNumber}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}> Price : </span>{" "}
                {cookies.currencyCode}{" "}
                {nfObject.format(getTotalPrice("loose-diamond", item, cookies))}
              </p>
            </div>
            <div className="details-body">
              <div className="data-row">
                <p>Shape</p>
                <p>{item.diamondShape}</p>
              </div>
              <div className="data-row">
                <p>Carat</p>
                <p>{item.carat.toFixed(2)}</p>
              </div>
              <div className="data-row">
                <p>Color</p>
                <p>{item.color}</p>
              </div>
              <div className="data-row">
                <p>Clarity</p>
                <p>{item.clarity}</p>
              </div>
              <div className="data-row">
                <p>Cut</p>
                <p>{item.cut}</p>
              </div>
              <div className="data-row">
                <p>Polish</p>
                <p>{item.polish}</p>
              </div>
              <div className="data-row">
                <p>Symmetry</p>
                <p>{item.symmetry}</p>
              </div>
              <div className="data-row">
                <p>Fluorescence</p>
                <p>{item.fluorescence}</p>
              </div>
              <div className="data-row">
                <p>Measurements</p>
                <p>{item.measurement}</p>
              </div>
              <div className="data-row">
                <p>Ratio</p>
                <p>{item.eyeclean}</p>
              </div>
              <div className="data-row">
                <p>Table (%)</p>
                <p>{item.tablePercentage.toFixed(2)}</p>
              </div>
              <div className="data-row">
                <p>Depth (%)</p>
                <p>{item.depthPercentage.toFixed(2)}</p>
              </div>
              <div className="data-row">
                <p>Culet</p>
                <p>{item.culet}</p>
              </div>
              <div className="data-row">
                <p>Certificate</p>
                <p>{item.lab}</p>
              </div>
            </div>
          </section>
          <SmallUSPBanner />
          <USPBanner />
        </div>

        <DiamondCertificateModal
          lab={item.lab}
          status={diamondCertModal}
          closeModal={setDiamondCertModal}
        />
        <DiamondSettingModal
          status={optionModalStatus}
          setOptionModalStatus={handleOptionModalStatus}
          // addLooseDiamond={addLooseDiamond}
          diamondId={diamondId}
          shape={item.diamondShape}
          lab={item.lab}
          carat={item.carat}
          color={item.color}
          cut={item.cut}
          clarity={item.clarity}
          culet={item.culet}
          symmetry={item.symmetry}
          fluorescence={item.fluorescence}
          measurement={item.measurement}
          polish={item.polish}
          ratio={item.ratio}
          girdlePercentage={item.girdlePercentage}
          depth={item.depthPercentage}
          table={item.tablePercentage}
          black={item.black}
          white={item.white}
        />
      </DetailsBox>
    ) : (
      <ItemNotFound>Diamond not found!</ItemNotFound>
    )
  ) : (
    <Loader />
  );
}
