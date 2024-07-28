import React, { useState, useEffect, useRef } from "react";
import { AlternateDetailsBox } from "../../style";
import { useParams, useRouteMatch } from "react-router-dom";
import SocialSharing from "../../SocialSharing";
import USPBanner from "../../USPBanner";
import SmallUSPBanner from "../../SmallUSPBanner";
import { useCookies } from "react-cookie";
import getTotalPrice from "../../../../../helper/getTotalPrice";
import DeliverabilityChecker from "../../../DeliverabilityChecker";
import diamondQualityFormatter from "../../../../../helper/diamondQualityFormatter";
import metalSizeFormatter from "../../../../../helper/metalSizeFormatter";
import DiamondSizeLookerForEar from "../../DiamondSizeLookerForEar";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../Loader/Loader";
import { findJewelry } from "../../../../../store/actions/jewelryActions";
import { letsShowFlash } from "../../../../../store/actions/flashAction";
import {
  addMensStud,
  addPresetStud,
} from "../../../../../store/actions/cartActions";
import { addToWishlist } from "../../../../../store/actions/wishlistActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function PresetStudDetails() {
  const data = useSelector((state) => state);
  const studs = data.jewelryReducer.unfilteredSolitaireStudsArray;

  const dispatch = useDispatch();

  const innerRef = useRef();
  const slider = useRef(null);
  const [moduleStatus, setModuleStatus] = useState(false);
  const [stoneNumber, setStoneNumber] = useState(0);
  const [metal, setMetal] = useState("white-gold");
  const [metalCode, setMetalCode] = useState(0);

  const [wishlistStatus, setWishlistStatus] = useState(false);
  const wishlistItems = data.wishlistReducer.wishlistItems;

  const { studId } = useParams();
  const { url, path } = useRouteMatch();
  const [cookies] = useCookies();
  const nfObject = new Intl.NumberFormat("en-US");

  const [imageViewStatus, setImageViewStatus] = useState(true);
  const [videoViewStatus, setVideoViewStatus] = useState(false);

  const [carat, setCarat] = useState("0.3");
  const [diamondQuality, setDiamondQuality] = useState("IJSI");
  const [quantity, setQuantity] = useState(1);

  const item = findJewelry(studs, studId.slice(7, 11));

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

  const displayImage = () => {
    setImageViewStatus(true);
    setVideoViewStatus(false);
  };

  const displayModule = () => {
    setImageViewStatus(false);
    setVideoViewStatus(false);
    setModuleStatus(true);
  };

  const magnify = (e) => {
    const inner = document.querySelector(".inner");
    let { left, top, width, height } = innerRef.current.getBoundingClientRect();
    let x = ((e.pageX - left) / width) * 100;
    let y = ((e.pageY - top) / height) * 100;
    inner.style.backgroundPosition = `${x}% ${y}%`;
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
    let metalCode = studId[11];
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
      default:
        setMetal("white-gold");
        setMetalCode(0);
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

  return item ? (
    <AlternateDetailsBox
      moduleViewStatus={moduleStatus}
      quantity={quantity}
      imageViewStatus={imageViewStatus}
      videoViewStatus={videoViewStatus}
      metal={metal}
      carat={carat}
      quality={diamondQuality}
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
          <div className="media-holder">
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

          {/* <div className='media-holder'>
                        {item.metals.map((metal, index) => {
                        return(
                            <video
                            poster='https://furtaev.ru/preview/play_small.png'
                            src={metal.videoURL} className={metal.metal}
                            onClick={displayVideo}
                            loop muted='muted' >
                            Your browser does not support HTML5 video.
                            </video>
                            )
                        })}
                    </div> */}

          {path === "/preset-jewelry/mens/studs/:studId" ? (
            <div className="media-holder">
              <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/view-on-body/view-on-ear-men.png" />
            </div>
          ) : (
            <div className="media-holder" onClick={displayModule}>
              <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/view-on-body/view-on-ear.png" />
            </div>
          )}
        </div>

        <div className="summary-holder">
          <section>
            <p className="heading">
              {" "}
              {item.studName} {item.diamondShape} Solitaire Stud
            </p>
            <p className="sku" style={{ fontStyle: "italic" }}>
              <span style={{ fontWeight: "bold" }}>SKU :</span> {studId}
            </p>
            <p className="price">
              <span style={{ fontWeight: "bold" }}>
                Our Price : {cookies.currencyCode}{" "}
                {nfObject.format(
                  parseInt(
                    getTotalPrice(
                      "preset-stud",
                      item,
                      cookies,
                      carat,
                      diamondQuality,
                      null,
                      quantity
                    )
                  )
                )}
              </span>
              <span style={{ fontSize: "1.3rem", display: "flex" }}>
                (Price is for the stud plus diamond, excluding VAT & GST)
              </span>
            </p>
          </section>

          <section className="metal-changer">
            <p style={{ marginBottom: "10px" }}>
              <span style={{ fontWeight: "bold" }}>Metal: </span>18K {metal}
            </p>
            <div>
              <a
                className="stud-metal-link"
                href={`LGC-PJ-${item.stockNumber}0`}
              >
                White Gold
              </a>
              <a
                className="stud-metal-link"
                href={`LGC-PJ-${item.stockNumber}1`}
              >
                Yellow Gold
              </a>
              <a
                className="stud-metal-link"
                href={`LGC-PJ-${item.stockNumber}3`}
              >
                Platinum
              </a>
            </div>
          </section>

          <section className="carat-changer">
            <p style={{ margin: "10px 0px" }}>
              <span style={{ fontWeight: "bold" }}>Diamond Carat: </span>
            </p>
            <div className="buttons-container">
              <div
                className="carat-button"
                onClick={() => setCarat(String(0.3))}
              >
                0.30
              </div>
              <div
                className="carat-button"
                onClick={() => setCarat(String(0.5))}
              >
                0.50
              </div>
              <div
                className="carat-button"
                onClick={() => setCarat(String(0.7))}
              >
                0.70
              </div>
              <div
                className="carat-button"
                onClick={() => setCarat(String(1.0))}
              >
                1.00
              </div>
              <div
                className="carat-button"
                onClick={() => setCarat(String(2.0))}
              >
                2.00
              </div>
            </div>
          </section>

          <section className="diamond-quality-changer">
            <p style={{ margin: "10px 0px" }}>
              <span style={{ fontWeight: "bold" }}>Diamond Quality: </span>
            </p>
            <div className="buttons-container">
              <div
                className="diamond-quality-button"
                onClick={() => setDiamondQuality("IJSI")}
              >
                IJ SI
              </div>
              <div
                className="diamond-quality-button"
                onClick={() => setDiamondQuality("GHVS")}
              >
                GH VS
              </div>
            </div>
          </section>

          <section className="quantity-changer">
            <p style={{ marginBottom: "6px", marginTop: "6px" }}>
              <span style={{ fontWeight: "bold" }}>Quantity: </span>
              {quantity}
            </p>
            <div className="buttons-container">
              <div className="quantity-button" onClick={() => setQuantity(1)}>
                Single
              </div>
              <div className="quantity-button" onClick={() => setQuantity(2)}>
                Pair
              </div>
            </div>
          </section>

          <DeliverabilityChecker />

          <section className="buttons-container">
            {path === "/preset-jewelry/mens/studs/:studId" ? (
              <button
                onClick={() => {
                  dispatch(
                    addMensStud({
                      studId: item.stockNumber,
                      carat: carat,
                      quality: diamondQuality,
                      quantity: quantity,
                      metalCode: metalCode,
                      metal: metal,
                    })
                  );
                  dispatch(letsShowFlash("Stud Added To The Cart"));
                }}
              >
                Add To Bag
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch(
                    addPresetStud({
                      studId: item.stockNumber,
                      carat: carat,
                      quality: diamondQuality,
                      quantity: quantity,
                      metal: metal,
                      metalCode: metalCode,
                    })
                  );
                  dispatch(letsShowFlash("Stud Added To The Cart"));
                }}
              >
                Add To Bag
              </button>
            )}
            <div onClick={() => addItemToWishlist(item)}>
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </section>

          <section className="summary-footer">
            <div className="social-sharing">
              <p style={{ marginBottom: "6px" }}>Share on:</p>
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
              <p>{item.metalWeight}</p>
            </div>
            <div className="data-row">
              <p>Setting</p>
              <p>{item.setting}</p>
            </div>
          </div>

          <h3>Diamond Details</h3>
          <div className="details-body">
            <div className="data-row">
              <p>Diamond Type</p>
              <p>{diamondQualityFormatter(diamondQuality)}</p>
            </div>
            <div className="data-row">
              <p>Diamond Setting</p>
              <p>{item.setting}</p>
            </div>
            <div className="data-row">
              <p>Diamond Weight</p>
              <p style={{ textTransform: "none" }}>{carat} CT</p>
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
