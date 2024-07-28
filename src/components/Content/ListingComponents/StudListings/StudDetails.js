import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { AlternateDetailsBox } from "../style";
import SocialSharing from "../SocialSharing";
import USPBanner from "../USPBanner";
import SmallUSPBanner from "../SmallUSPBanner";
import { useCookies } from "react-cookie";
import getTotalPrice from "../../../../helper/getTotalPrice";
import DeliverabilityChecker from "../../DeliverabilityChecker";
import metalSizeFormatter from "../../../../helper/metalSizeFormatter";
import DiamondSizeLookerForEar from "../DiamondSizeLookerForEar";
import { useSelector, useDispatch } from "react-redux";
import { findJewelry } from "../../../../store/actions/jewelryActions";
import Loader from "../../Loader/Loader";
import { addToWishlist } from "../../../../store/actions/wishlistActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { letsShowFlash } from "../../../../store/actions/flashAction.js";

export default function StudDetails({ slider, stoneNumber, setStoneNumber }) {
  const data = useSelector((state) => state);
  const studs = data.jewelryReducer.unfilteredSolitaireStudsArray;

  const dispatch = useDispatch();

  const innerRef = useRef();
  const [metal, setMetal] = useState("white-gold");
  const [metalCode, setMetalCode] = useState("0");
  const { studId } = useParams();
  const [cookies, setCookie] = useCookies();
  const stockNumber = studId.slice(7, 11);
  const nfObject = new Intl.NumberFormat("en-US");

  const item = findJewelry(studs, stockNumber);

  const [imageViewStatus, setImageViewStatus] = useState(true);
  const [moduleStatus, setModuleStatus] = useState(false);
  const [backing, setBacking] = useState("screw");
  const [quantity, setQuantity] = useState(1);

  const [wishlistStatus, setWishlistStatus] = useState(false);
  const wishlistItems = data.wishlistReducer.wishlistItems;

  const displayImage = () => {
    setImageViewStatus(true);
    setModuleStatus(false);
  };

  const displayModule = () => {
    setImageViewStatus(false);
    setModuleStatus(true);
  };

  const magnify = (e) => {
    const inner = document.querySelector(".inner");
    let { left, top, width, height } = innerRef.current.getBoundingClientRect();
    let x = ((e.pageX - left) / width) * 100;
    let y = ((e.pageY - top) / height) * 100;
    inner.style.backgroundPosition = `${x}% ${y}%`;
  };

  const onSelectStud = (studId, shape, metalCode, backing) => {
    if (cookies.whatGotSelectedFirstForCustomStud == undefined) {
      setCookie("whatGotSelectedFirstForCustomStud", "stud", { path: "/" });
      setCookie("_studSelectedForCustomStud", studId, { path: "/" });
      setCookie("_studMetalForCustomStud", metal, { path: "/" });
      setCookie("_studBackingSelectedForCustomStud", backing, { path: "/" });
      window.location = `/create-your-own-stud/diamonds/first?name=${shape}`;
    } else if (cookies.whatGotSelectedFirstForCustomStud === "stud") {
      setCookie("_studSelectedForCustomStud", studId, { path: "/" });
      setCookie("_studMetalForCustomStud", metal, { path: "/" });
      setCookie("_studBackingSelectedForCustomStud", backing, { path: "/" });
      window.location = `/create-your-own-stud/diamonds/first?name=${shape}`;
    } else if (
      cookies.whatGotSelectedFirstForCustomStud === "diamond" &&
      cookies.whatGotSelectedSecondForCustomStud === "diamond"
    ) {
      setCookie("_studSelectedForCustomStud", studId, { path: "/" });
      setCookie("_studMetalForCustomStud", metal, { path: "/" });
      setCookie("_studBackingSelectedForCustomStud", backing, { path: "/" });
      window.location = "/create-your-own-stud/review-order";
    } else if (cookies.whatGotSelectedSecondForCustomStud === "stud") {
      setCookie("whatGotSelectedSecondForCustomStud", "stud", { path: "/" });
      setCookie("_studSelectedForCustomStud", studId, { path: "/" });
      setCookie("_studMetalForCustomStud", metal, { path: "/" });
      setCookie("_studBackingSelectedForCustomStud", backing, { path: "/" });
      window.location = `/create-your-own-stud/diamonds/second?name=${shape}&caratFrom=${
        cookies._diamondCaratSelectedForCustomStud
      }&caratTo=${
        parseFloat(cookies._diamondCaratSelectedForCustomStud) + 0.5
      }`;
    }
  };

  useEffect(() => {
    let metalCode = studId[11];

    switch (metalCode) {
      case "0":
        setMetal("white-gold");
        setMetalCode("0");
        break;
      case "1":
        setMetal("yellow-gold");
        setMetalCode("1");
        break;
      case "2":
        setMetal("platinum");
        setMetalCode("2");
        break;
      default:
        setMetal("white-gold");
        setMetalCode("0");
        break;
    }
  }, []);

  const addItemToWishlist = (item, itemType) => {
    if (wishlistStatus) {
      dispatch(letsShowFlash("Stud Removed From The Cart!"));
    } else {
      dispatch(letsShowFlash("Stud Added To The Cart!"));
    }
    setWishlistStatus(!wishlistStatus);
    dispatch(
      addToWishlist({
        stockNumber: item.stockNumber,
        itemType: "solitaire-stud",
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
      backing={backing}
      quantity={quantity}
      imageViewStatus={imageViewStatus}
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
                    alt={`${item.stockNumber}-${index}`}
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
          <div className="diamond-module">
            <DiamondSizeLookerForEar
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

          <div className="media-holder bodyModule" onClick={displayModule}>
            <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/view-on-body/view-on-ear.png" />
          </div>
        </div>

        <div className="summary-holder">
          <section>
            <p className="heading">
              {item.studName} {item.diamondShape} Diamond Solitaire Stud
            </p>
            <p className="sku">
              <span style={{ fontWeight: "bold", fontStyle: "style" }}>
                SKU:{" "}
              </span>
              {studId}
            </p>
            <p className="price">
              <span style={{ fontWeight: "bold" }}>
                Our Price : {cookies.currencyCode}{" "}
                {nfObject.format(
                  parseInt(getTotalPrice("custom-stud", item, cookies))
                )}
              </span>
              <span style={{ fontSize: "1.3rem", display: "block" }}>
                (Price is for single stud only, excluding VAT)
              </span>
            </p>
          </section>

          <section className="metal-changer">
            <p style={{ marginBottom: "10px" }}>
              <span style={{ fontWeight: "bold" }}>Metal: </span>
              {metal}
            </p>
            <div>
              <a
                className="stud-metal-link"
                href={`/create-your-own-stud/studs/LGC-CJ-${stockNumber}0`}
              >
                White Gold
              </a>
              <a
                className="stud-metal-link"
                href={`/create-your-own-stud/studs/LGC-CJ-${stockNumber}1`}
              >
                Yellow Gold
              </a>
              <a
                className="stud-metal-link"
                href={`/create-your-own-stud/studs/LGC-CJ-${stockNumber}3`}
              >
                Platinum
              </a>
            </div>
          </section>

          <section className="backing-changer">
            <p style={{ marginBottom: "10px", marginTop: "10px" }}>
              <span style={{ fontWeight: "bold" }}>Backing: </span>
              {backing} Backing
            </p>
            <div className="buttons-container">
              <div
                className="backing-button"
                onClick={() => setBacking("screw")}
              >
                Screw
              </div>
              <div
                className="backing-button"
                onClick={() => setBacking("push")}
              >
                Push
              </div>
            </div>
          </section>

          <DeliverabilityChecker />

          <section className="buttons-container">
            <button
              onClick={() =>
                onSelectStud(
                  item.stockNumber,
                  item.diamondShape,
                  metalCode,
                  backing
                )
              }
            >
              Select Stud
            </button>

            <div onClick={() => addItemToWishlist(item)}>
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </section>

          <section className="summary-footer">
            <div className="social-sharing">
              <p style={{ margin: "10px 0px" }}>Share on: </p>
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
