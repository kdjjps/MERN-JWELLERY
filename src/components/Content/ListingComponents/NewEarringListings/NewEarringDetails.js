import React, { useState, useEffect, useRef } from "react";
import { DetailsBox } from "../style";
import { useParams } from "react-router-dom";
import SocialSharing from "../SocialSharing";
import USPBanner from "../USPBanner";
import SmallUSPBanner from "../SmallUSPBanner";
import { useCookies } from "react-cookie";
import getNewArrivalsTotalPrice from "../../../../helper/getNewArrivalsTotalPrice";
import DeliverabilityChecker from "../../DeliverabilityChecker";
import metalSizeFormatter from "../../../../helper/metalSizeFormatter";
import diamondQualityFormatter from "../../../../helper/diamondQualityFormatter";
import Loader from "../../Loader/Loader";
import { findJewelry } from "../../../../store/actions/jewelryActions";
import { addDiamondEarring } from "../../../../store/actions/cartActions";
import { letsShowFlash } from "../../../../store/actions/flashAction";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../../../store/actions/wishlistActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function RingDetails() {
  const data = useSelector((state) => state);
  const diamondEarrings = data.jewelryReducer.unfilteredDiamondEarringsArray;

  const dispatch = useDispatch();

  const innerRef = useRef();
  const [metal, setMetal] = useState("white-gold");
  const [imageOneStatus, setImageOneStatus] = useState(true);
  const [imageTwoStatus, setImageTwoStatus] = useState(false);
  const [imageThreeStatus, setImageThreeStatus] = useState(false);
  const [imageNumber, setImageNumber] = useState(1);
  const [diamondQuality, setDiamondQuality] = useState("IJSI");
  const [solitaireDiamondQuality, setSolitaireDiamondQuality] =
    useState("GHVS");
  const [smallDiamondPrice, setSmallDiamondPrice] = useState(0);
  const [solitaireDiamondPrice, setSolitaireDiamondPrice] = useState(0);

  const { earringId } = useParams();
  const [cookies] = useCookies();
  const stockNumber = earringId.substring(7);
  const nfObject = new Intl.NumberFormat("en-US");

  const item = findJewelry(diamondEarrings, stockNumber);

  const [wishlistStatus, setWishlistStatus] = useState(false);
  const wishlistItems = data.wishlistReducer.wishlistItems;

  const addItemToWishlist = (item) => {
    if (wishlistStatus) {
      dispatch(letsShowFlash("Earring Removed From The Cart!"));
    } else {
      dispatch(letsShowFlash("Earring Added To The Cart!"));
    }
    setWishlistStatus(!wishlistStatus);
    dispatch(
      addToWishlist({
        stockNumber: item.stockNumber,
        itemType: "diamond-earring",
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
      default:
        setMetal("platinum");
        break;
    }
  };

  const displayRespectiveImage = (e) => {
    switch (e.currentTarget.id) {
      case "product-image-1":
        setImageOneStatus(true);
        setImageTwoStatus(false);
        setImageThreeStatus(false);
        setImageNumber(1);
        break;
      case "product-image-2":
        setImageOneStatus(false);
        setImageTwoStatus(true);
        setImageThreeStatus(false);
        setImageNumber(2);
        break;
      case "product-image-3":
        setImageOneStatus(false);
        setImageTwoStatus(false);
        setImageThreeStatus(true);
        setImageNumber(3);
        break;
      default:
        setImageOneStatus(true);
        setImageTwoStatus(false);
        setImageThreeStatus(false);
        setImageNumber(1);
        break;
    }
  };

  const magnify = (e) => {
    let inner;

    if (imageNumber === 1) {
      inner = document.querySelector(".product-imagee-1");
    } else if (imageNumber === 2) {
      inner = document.querySelector(".product-imagee-2");
    } else {
      inner = document.querySelector(".product-imagee-3");
    }

    let { left, top, width, height } = innerRef.current.getBoundingClientRect();
    let x = ((e.pageX - left) / width) * 100;
    let y = ((e.pageY - top) / height) * 100;
    inner.style.backgroundPosition = `${x}% ${y}%`;
  };

  useEffect(() => {
    if (!data.jewelryReducer.isLoading) {
      let priceForSmallDiamonds = 0;
      let priceForSolitaireDiamonds = 0;

      if (item.smallDiamondsArray.length !== 0) {
        item.smallDiamondsArray.map(
          (object, index) =>
            (priceForSmallDiamonds =
              priceForSmallDiamonds + object[diamondQuality])
        );
      }

      if (item.solitaireDiamondsArray.length !== 0) {
        item.solitaireDiamondsArray.map(
          (object, index) =>
            (priceForSolitaireDiamonds =
              priceForSolitaireDiamonds + object[solitaireDiamondQuality])
        );
      }

      setSmallDiamondPrice(priceForSmallDiamonds);
      setSolitaireDiamondPrice(priceForSolitaireDiamonds);
    }
  }, [
    smallDiamondPrice,
    diamondQuality,
    solitaireDiamondPrice,
    solitaireDiamondQuality,
    data.jewelryReducer.isLoading,
  ]);

  return item ? (
    <DetailsBox
      metal={metal}
      imageOneStatus={imageOneStatus}
      imageTwoStatus={imageTwoStatus}
      imageThreeStatus={imageThreeStatus}
      quality={diamondQuality}
      solitaireQuality={solitaireDiamondQuality}
      wishlistStatus={wishlistStatus}
    >
      <div className="details-page-upperbody">
        <div className="big-media-displayer">
          <div className="media-holder">
            <div class="left" onMouseMove={magnify} ref={innerRef}>
              {item.imageArray.map((imageUrl, index) => {
                return (
                  <img
                    src={imageUrl}
                    alt={`${item.stockNumber}-${index}`}
                    className={`product-image-${index + 1}`}
                  />
                );
              })}
            </div>
            <div class="right">
              {item.imageArray.map((imageUrl, index) => {
                return (
                  <div
                    className={`inner product-imagee-${index + 1}`}
                    style={{ backgroundImage: `url(${imageUrl})` }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="small-media-displayer">
          {item.imageArray.map((imageUrl, index) => {
            return (
              <div
                className={`media-holder`}
                id={`product-image-${index + 1}`}
                onClick={displayRespectiveImage}
              >
                <img src={imageUrl} alt={`img-${index}`} />
              </div>
            );
          })}
        </div>

        <div className="summary-holder">
          <section>
            <p className="heading">{item.productName} Diamond Earrings</p>
            <p className="sku">
              <span style={{ fontWeight: "bold" }}>SKU: </span>
              {earringId.slice(0, 10)}
            </p>
            <p className="price">
              <span style={{ fontWeight: "bold" }}>
                Our Price : {cookies.currencyCode}{" "}
                {nfObject.format(
                  getNewArrivalsTotalPrice(
                    "diamond-earring",
                    item.metalWeight,
                    cookies,
                    smallDiamondPrice,
                    solitaireDiamondPrice
                  )
                )}
              </span>
              <span style={{ fontSize: "1.3rem", display: "block" }}>
                (Price is for the earrings and diamonds, excluding VAT)
              </span>
            </p>
          </section>

          <section className="metal-changer">
            <p style={{ marginBottom: "10px" }}>
              <span style={{ fontWeight: "bold" }}>Metal: </span>18Kt{" "}
              {item.metalPurity} {metal}
            </p>
            <div>
              <div className="metal" onClick={() => changeMetal("white-gold")}>
                White Gold
              </div>
              <div className="metal" onClick={() => changeMetal("yellow-gold")}>
                Yellow Gold
              </div>
              <div className="metal" onClick={() => changeMetal("rose-gold")}>
                Rose Gold
              </div>
              <div className="metal" onClick={() => changeMetal("platinum")}>
                Platinum 950
              </div>
            </div>
          </section>

          {item.smallDiamondsArray.length !== 0 ? (
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
          ) : (
            <div></div>
          )}

          {item.solitaireDiamondsArray.length !== 0 ? (
            <section className="solitaire-diamond-quality-changer">
              <p style={{ margin: "10px 0px" }}>
                <span style={{ fontWeight: "bold" }}>
                  Solitaire Diamond Quality:{" "}
                </span>
              </p>
              <div className="buttons-container">
                <div
                  className="diamond-quality-button"
                  onClick={() => setSolitaireDiamondQuality("IJSI")}
                >
                  IJ SI
                </div>
                <div
                  className="diamond-quality-button"
                  onClick={() => setSolitaireDiamondQuality("GHVS")}
                >
                  GH VS
                </div>
              </div>
            </section>
          ) : (
            <div></div>
          )}

          <DeliverabilityChecker />

          <section className="buttons-container">
            <button
              onClick={() => {
                dispatch(
                  addDiamondEarring({
                    earringId: item.stockNumber,
                    weight: item.metalWeight,
                    smallDiamondPrice: smallDiamondPrice,
                    solitaireDiamondPrice: solitaireDiamondPrice,
                    diamondQuality: diamondQuality,
                    solitaireDiamondQuality: solitaireDiamondQuality,
                    metal: metal,
                  })
                );
                dispatch(letsShowFlash("Diamond Earring Added To The Cart"));
              }}
            >
              Add To Bag
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
                {metalSizeFormatter(item.width)}
              </p>
            </div>
            <div className="data-row">
              <p>Height</p>
              <p style={{ textTransform: "none" }}>
                {metalSizeFormatter(item.height)}
              </p>
            </div>
            <div className="data-row">
              <p>Purity</p>
              <p>18 K</p>
            </div>
            <div className="data-row">
              <p>Metal</p>
              <p>{metal}</p>
            </div>
            <div className="data-row">
              <p>Weight</p>
              <p style={{ textTransform: "none" }}>{item.metalWeight} gms</p>
            </div>
            <div className="data-row">
              <p>Setting</p>
              <p>{item.settingType}</p>
            </div>
          </div>

          {item.smallDiamondsArray.length !== 0 ? (
            <div>
              <h3>Diamond Details</h3>
              {item.smallDiamondsArray.map((arrayObject, index) => {
                return (
                  <div className="details-body">
                    <div className="data-row">
                      <p>Total Diamonds</p>
                      <p>{arrayObject.totalDiamonds}</p>
                    </div>
                    <div className="data-row">
                      <p>Total Diamond Weight</p>
                      <p style={{ textTransform: "none" }}>
                        {arrayObject.weight} Ct
                      </p>
                    </div>
                    <div className="data-row">
                      <p>Setting Type</p>
                      <p>{item.settingType}</p>
                    </div>
                    <div className="data-row">
                      <p>Diamond Quality</p>
                      <p>{diamondQualityFormatter(diamondQuality)}</p>
                    </div>
                    <div className="data-row">
                      <p>Diamond Shape</p>
                      <p>{item.diamondShape}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div></div>
          )}

          {item.solitaireDiamondsArray.length !== 0 ? (
            <div>
              <h3>Solitaire Details</h3>
              {item.solitaireDiamondsArray.map((arrayObject, index) => {
                return (
                  <div className="details-body">
                    <div className="data-row">
                      <p>Total Solitaire</p>
                      <p>{arrayObject.totalDiamonds}</p>
                    </div>
                    <div className="data-row">
                      <p>Total Solitaire Weight</p>
                      <p style={{ textTransform: "none" }}>
                        {arrayObject.weight} Ct
                      </p>
                    </div>
                    <div className="data-row">
                      <p>Solitaire Quality</p>
                      <p>{diamondQualityFormatter(solitaireDiamondQuality)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div></div>
          )}
        </section>
        <SmallUSPBanner />
        <USPBanner />
      </div>
    </DetailsBox>
  ) : (
    <Loader />
  );
}
