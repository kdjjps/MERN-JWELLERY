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
import { addAlphabetPendant } from "../../../../store/actions/cartActions";
import { letsShowFlash } from "../../../../store/actions/flashAction";
import { addToWishlist } from "../../../../store/actions/wishlistActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function GaneshaPendantDetails() {
  const data = useSelector((state) => state);
  const alphabetPendants = data.jewelryReducer.unfilteredAlphabetPendantsArray;

  const dispatch = useDispatch();

  const innerRef = useRef();

  const [metal, setMetal] = useState("white-gold");
  const [imageOneStatus, setImageOneStatus] = useState(true);
  const [imageTwoStatus, setImageTwoStatus] = useState(false);
  const [imageThreeStatus, setImageThreeStatus] = useState(false);
  const [diamondQuality, setDiamondQuality] = useState("IJSI");

  const { pendantId } = useParams();
  const [cookies] = useCookies();
  const stockNumber = pendantId.substring(7);
  const nfObject = new Intl.NumberFormat("en-US");

  const item = findJewelry(alphabetPendants, stockNumber);

  const [wishlistStatus, setWishlistStatus] = useState(false);
  const wishlistItems = data.wishlistReducer.wishlistItems;

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
        itemType: "alphabet-pendant",
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
        break;
      case "product-image-2":
        setImageOneStatus(false);
        setImageTwoStatus(true);
        setImageThreeStatus(false);
        break;
      case "product-image-3":
        setImageOneStatus(false);
        setImageTwoStatus(false);
        setImageThreeStatus(true);
        break;
      default:
        setImageOneStatus(true);
        setImageTwoStatus(false);
        setImageThreeStatus(false);
        break;
    }
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
  }, []);

  return item ? (
    <DetailsBox
      metal={metal}
      imageOneStatus={imageOneStatus}
      imageTwoStatus={imageTwoStatus}
      imageThreeStatus={imageThreeStatus}
      quality={diamondQuality}
      wishlistStatus={wishlistStatus}
    >
      <div className="details-page-upperbody">
        <div className="big-media-displayer">
          <div className="media-holder">
            <div className="left" onMouseMove={magnify} ref={innerRef}>
              <img src={item.image} alt="pendant-img" />
            </div>
            <div className="right">
              <div
                className="inner"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="summary-holder">
          <section>
            <p className="heading">
              {item.productName} Ganesha Diamond Pendant
            </p>
            <p className="sku">
              <span style={{ fontWeight: "bold" }}>SKU: </span>
              {pendantId.slice(0, 10)}
            </p>
            <p className="price">
              <span style={{ fontWeight: "bold" }}>
                Our Price : {cookies.currencyCode}{" "}
                {nfObject.format(
                  parseInt(
                    getNewArrivalsTotalPrice(
                      "alphabet-pendant",
                      item.metalWeight,
                      cookies,
                      item[diamondQuality]
                    )
                  )
                )}
              </span>
              <span style={{ fontSize: "1.3rem", display: "block" }}>
                (Price is for the pendant and diamond, excluding VAT)
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

          <DeliverabilityChecker />

          <section className="buttons-container">
            <button
              onClick={() => {
                dispatch(
                  addAlphabetPendant({
                    pendantId: item.stockNumber,
                    weight: item.metalWeight,
                    metal: metal,
                    smallDiamondPrice: item[diamondQuality],
                    diamondQuality: diamondQuality,
                  })
                );
                dispatch(letsShowFlash("Alphabet Pendant Added To The Cart"));
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

          <h3>Diamond Details</h3>
          <div className="details-body">
            <div className="data-row">
              <p>Total Diamonds</p>
              <p>{item.totalDiamonds}</p>
            </div>
            <div className="data-row">
              <p>Total Diamond Weight</p>
              <p style={{ textTransform: "none" }}>
                {item.totalDiamondWeight} Ct
              </p>
            </div>
            <div className="data-row">
              <p>Shape</p>
              <p>{item.diamondShape}</p>
            </div>
            <div className="data-row">
              <p>Diamond Quality</p>
              <p>{diamondQualityFormatter(diamondQuality)}</p>
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
