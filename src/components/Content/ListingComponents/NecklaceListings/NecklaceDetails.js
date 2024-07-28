import React, { useState, useEffect, useRef } from "react";
import { DetailsBox } from "../style";
import { useParams, useRouteMatch } from "react-router-dom";
import SocialSharing from "../SocialSharing";
import USPBanner from "../USPBanner";
import SmallUSPBanner from "../SmallUSPBanner";
import { useCookies } from "react-cookie";
import getTotalPrice from "../../../../helper/getTotalPrice";
import DeliverabilityChecker from "../../DeliverabilityChecker";
import metalSizeFormatter from "../../../../helper/metalSizeFormatter";
import DiamondSizeLookerForNeck from "../DiamondSizeLookerForNeck";
import { useSelector, useDispatch } from "react-redux";
import { findJewelry } from "../../../../store/actions/jewelryActions";
import Loader from "../../Loader/Loader";
import { addToWishlist } from "../../../../store/actions/wishlistActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { letsShowFlash } from "../../../../store/actions/flashAction.js";

export default function NecklaceDetails({ handleViewHandModal, slider }) {
  const data = useSelector((state) => state);
  const necklaces = data.jewelryReducer.unfilteredSolitaireNecklacesArray;

  const dispatch = useDispatch();

  const innerRef = useRef();
  const [metal, setMetal] = useState(null);
  const [metalCode, setMetalCode] = useState("0");
  const [imageViewStatus, setImageViewStatus] = useState(true);
  const [moduleStatus, setModuleStatus] = useState(false);
  const [length, setLength] = useState(16);
  const [stoneNumber, setStoneNumber] = useState(0);

  const { necklaceId } = useParams();
  const [cookies, setCookie] = useCookies();
  const stockNumber = necklaceId.slice(7, 11);
  const nfObject = new Intl.NumberFormat("en-US");

  const item = findJewelry(necklaces, stockNumber);

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

  const onSelectNecklace = (necklaceId, shape) => {
    if (cookies.whatGotSelectedFirstForCustomNecklace == undefined) {
      setCookie("whatGotSelectedFirstForCustomNecklace", "necklace", {
        path: "/",
      });
      setCookie("_necklaceSelectedForCustomNecklace", necklaceId, {
        path: "/",
      });
      setCookie("_necklaceMetalForCustomNecklace", metal, { path: "/" });
      setCookie("_necklaceLengthForCustomNecklace", length, { path: "/" });
      window.location = `/create-your-own-necklace/diamonds?name=${shape}`;
    } else if (cookies.whatGotSelectedFirstForCustomNecklace === "necklace") {
      setCookie("_necklaceSelectedForCustomNecklace", necklaceId, {
        path: "/",
      });
      setCookie("_necklaceMetalForCustomNecklace", metal, { path: "/" });
      setCookie("_necklaceLengthForCustomNecklace", length, { path: "/" });
      window.location = `/create-your-own-necklace/diamonds?name=${shape}`;
    } else {
      setCookie("_necklaceSelectedForCustomNecklace", necklaceId, {
        path: "/",
      });
      setCookie("_necklaceMetalForCustomNecklace", metal, { path: "/" });
      setCookie("_necklaceLengthForCustomNecklace", length, { path: "/" });
      window.location = "/create-your-own-necklace/review-order";
    }
  };

  useEffect(() => {
    let metalCode = necklaceId[11];
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
        setMetal("rose-gold");
        setMetalCode("2");
        break;
      case "3":
        setMetal("platinum");
        setMetalCode("3");
        break;
      default:
        setMetal("white-gold");
        setMetalCode("0");
        break;
    }
  }, []);

  const addItemToWishlist = (item, itemType) => {
    if (wishlistStatus) {
      dispatch(letsShowFlash("Necklace Removed From The Cart!"));
    } else {
      dispatch(letsShowFlash("Necklace Added To The Cart!"));
    }
    setWishlistStatus(!wishlistStatus);
    dispatch(
      addToWishlist({ stockNumber: item.stockNumber, itemType: itemType })
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
    <DetailsBox
      metal={metal}
      length={length}
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
            <DiamondSizeLookerForNeck
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
            <img
              src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/view-on-body/view-on-neck.png"
              alt="view-on-neck"
            />
          </div>
        </div>

        <div className="summary-holder">
          <section>
            <p className="heading">
              {item.necklaceName} {item.diamondShape} Solitaire Necklace
            </p>
            <p className="sku">
              <span style={{ fontWeight: "bold" }}>SKU: </span>
              {necklaceId.slice(0, 10)}
            </p>
            <p className="price">
              <span style={{ fontWeight: "bold" }}>
                Our Price : {cookies.currencyCode}{" "}
                {nfObject.format(
                  parseInt(getTotalPrice("custom-necklace", item, cookies))
                )}
              </span>
              <span style={{ fontSize: "1.3rem", display: "block" }}>
                (Price is for the necklace only, excluding VAT)
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
                className="metal-link"
                href={`/create-your-own-necklace/necklaces/LGC-CJ-${stockNumber}0`}
              >
                White Gold
              </a>
              <a
                className="metal-link"
                href={`/create-your-own-necklace/necklaces/LGC-CJ-${stockNumber}1`}
              >
                Yellow Gold
              </a>
              <a
                className="metal-link"
                href={`/create-your-own-necklace/necklaces/LGC-CJ-${stockNumber}2`}
              >
                Rose Gold
              </a>
              <a
                className="metal-link"
                href={`/create-your-own-necklace/necklaces/LGC-CJ-${stockNumber}3`}
              >
                Platinum
              </a>
            </div>
          </section>

          <section className="length-changer">
            <p style={{ marginBottom: "10px", marginTop: "10px" }}>
              <span style={{ fontWeight: "bold" }}>Length: </span>
              {length} Inch
            </p>
            <div className="buttons-container">
              <div className="length-button" onClick={() => setLength(16)}>
                16 Inch
              </div>
              <div className="length-button" onClick={() => setLength(18)}>
                18 Inch
              </div>
            </div>
          </section>

          <DeliverabilityChecker />

          <section className="buttons-container">
            <button
              onClick={() => onSelectNecklace(necklaceId, item.diamondShape)}
            >
              Select Necklace
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
              <p>setting</p>
              <p>{item.setting}</p>
            </div>
          </div>
        </section>
        <SmallUSPBanner />
        <USPBanner />
      </div>
    </DetailsBox>
  ) : (
    <Loader />
  );
}
