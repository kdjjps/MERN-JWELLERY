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
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../Loader/Loader";
import { findJewelry } from "../../../../store/actions/jewelryActions";
import { addDiamondPendant } from "../../../../store/actions/cartActions";
import { letsShowFlash } from "../../../../store/actions/flashAction";
import { addToWishlist } from "../../../../store/actions/wishlistActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function NewPendantDetails() {
  const data = useSelector((state) => state);
  const diamondPendants = data.jewelryReducer.unfilteredDiamondPendantsArray;

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
  const [wishlistStatus, setWishlistStatus] = useState(false);
  const wishlistItems = data.wishlistReducer.wishlistItems;

  const { pendantId } = useParams();
  const [cookies] = useCookies();
  const stockNumber = pendantId.substring(7);
  const nfObject = new Intl.NumberFormat("en-US");

  const item = findJewelry(diamondPendants, stockNumber);

  const addItemToWishlist = (item) => {
    if (wishlistStatus) {
      dispatch(letsShowFlash("Pendant Removed From The Cart!"));
    } else {
      dispatch(letsShowFlash("Pendant Added To The Cart!"));
    }
    setWishlistStatus(!wishlistStatus);
    dispatch(
      addToWishlist({
        stockNumber: item.stockNumber,
        itemType: "diamond-pendant",
      })
    );
  };

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

      let metalCode = pendantId[11];

      switch (metalCode) {
        case "0":
          setMetal("white-gold");
          break;
        case "1":
          setMetal("yellow-gold");
          break;
        case "2":
          setMetal("rose-gold");
          break;
        case "3":
          setMetal("platinum");
          break;
        default:
          setMetal("white-gold");
          break;
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
            <div className="left" onMouseMove={magnify} ref={innerRef}>
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
            <div className="right">
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
          {/* <div className='media-holder'>
                        <img src='https://lgc-static.s3.ap-south-1.amazonaws.com/view-on-body/view-on-hand.png' />
                    </div> */}
        </div>

        <div className="summary-holder">
          <section>
            <p className="heading">{item.productName} Diamond Pendant</p>
            <p className="sku">
              <span style={{ fontWeight: "bold" }}>SKU: </span>
              {pendantId.slice(0, 10)}
            </p>
            <p className="price">
              <span style={{ fontWeight: "bold" }}>
                Our Price : {cookies.currencyCode}{" "}
                {nfObject.format(
                  getNewArrivalsTotalPrice(
                    "diamond-pendant",
                    item.metalWeight,
                    cookies,
                    smallDiamondPrice,
                    solitaireDiamondPrice
                  )
                )}
              </span>
              <span style={{ fontSize: "1.3rem", display: "block" }}>
                (Price is for the pendant and diamonds, excluding VAT)
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
                  addDiamondPendant({
                    pendantId: item.stockNumber,
                    metal: metal,
                    weight: item.metalWeight,
                    smallDiamondPrice: smallDiamondPrice,
                    solitaireDiamondPrice: solitaireDiamondPrice,
                    solitaireDiamondQuality: solitaireDiamondQuality,
                    diamondQuality: diamondQuality,
                  })
                );
                dispatch(letsShowFlash("Diamond Pendant Added To The Cart"));
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
              <p>18K</p>
            </div>
            <div className="data-row">
              <p>Metal</p>
              <p>{metal}</p>
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
