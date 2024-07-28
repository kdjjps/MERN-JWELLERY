import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailsBox } from "../style";
import SocialSharing from "../SocialSharing";
import USPBanner from "../USPBanner";
import SmallUSPBanner from "../SmallUSPBanner";
import { useCookies } from "react-cookie";
import getTotalPrice from "../../../../helper/getTotalPrice";
import DeliverabilityChecker from "../../DeliverabilityChecker";
import diamondQualityFormatter from "../../../../helper/diamondQualityFormatter";
import metalSizeFormatter from "../../../../helper/metalSizeFormatter";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../Loader/Loader";
import { findJewelry } from "../../../../store/actions/jewelryActions";
import { addMensRing } from "../../../../store/actions/cartActions";
import { letsShowFlash } from "../../../../store/actions/flashAction";
import { addToWishlist } from "../../../../store/actions/wishlistActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

let modifiedUrl = "";
export default function MensRingDetails(props) {
  const data = useSelector((state) => state);
  const mensRings = data.jewelryReducer.unfilteredMensRingsArray;

  const dispatch = useDispatch();

  const innerRef = useRef();
  const { mensRingId } = useParams();
  const [cookies] = useCookies();
  const nfObject = new Intl.NumberFormat("en-US");

  const [diamondQuality, setDiamondQuality] = useState("IJSI");
  const [ringSize, setRingSize] = useState(13);
  const [wishlistStatus, setWishlistStatus] = useState(false);
  const wishlistItems = data.wishlistReducer.wishlistItems;

  const item = findJewelry(mensRings, mensRingId);

  const addItemToWishlist = (item) => {
    if (wishlistStatus) {
      dispatch(letsShowFlash("Ring Removed From The Cart!"));
    } else {
      dispatch(letsShowFlash("Ring Added To The Cart!"));
    }
    setWishlistStatus(!wishlistStatus);
    dispatch(
      addToWishlist({ stockNumber: item.stockNumber, itemType: "mens-ring" })
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
    console.log("ringgggg", item.imageUrl);
    modifiedUrl = item.imageUrl?.replace(
      /https:\/\/lgc-media-bucket\.s3\.ap-south-1\.amazonaws\.com/g,
      "https://lgcgems.s3.ap-south-1.amazonaws.com"
    );
  }, [item]);

  const magnify = (e) => {
    const inner = document.querySelector(".inner");
    let { left, top, width, height } = innerRef.current.getBoundingClientRect();
    let x = ((e.pageX - left) / width) * 100;
    let y = ((e.pageY - top) / height) * 100;
    inner.style.backgroundPosition = `${x}% ${y}%`;
  };

  return item ? (
    <DetailsBox quality={diamondQuality} wishlistStatus={wishlistStatus}>
      <div className="details-page-upperbody">
        <div className="big-media-displayer">
          <div className="media-holder">
            <div class="left" onMouseMove={magnify} ref={innerRef}>
              <img src={`${modifiedUrl}`} />
            </div>
            <div class="right">
              <div
                className="inner"
                style={{ backgroundImage: `url(${modifiedUrl})` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="summary-holder">
          <section>
            <p className="heading">{item.ringName} Men's Ring</p>
            <p className="sku">
              <span style={{ fontWeight: "bold" }}>SKU: </span>LGC-{mensRingId}
            </p>
            <p className="info">
              <span style={{ fontWeight: "bold" }}>Description: </span>
              {item.diamondCarat} Carat Diamond Set in {item.purity}{" "}
              {item.metal}
            </p>
            <p className="price">
              <span style={{ fontWeight: "bold" }}>
                Our Price : {cookies.currencyCode}{" "}
                {getTotalPrice(
                  "mens-ring",
                  item,
                  cookies,
                  item.diamondCarat,
                  diamondQuality,
                  ringSize
                )}
              </span>
              <span style={{ fontSize: "1.3rem", display: "block" }}>
                (Price is for the ring plus diamond, excluding VAT & GST)
              </span>
            </p>
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

          <section>
            <p style={{ marginBottom: "6px", marginTop: "6px" }}>
              <span style={{ fontWeight: "bold" }}>Ring Size: </span>
              {parseInt(ringSize) + 5}
            </p>
            <select
              style={{ padding: "5px" }}
              onChange={(e) => setRingSize(e.target.value)}
            >
              {item.metalWeightArray.map((x, i) =>
                i === 13 ? (
                  <option selected="selected" value={i}>
                    {(i + 5).toFixed(2)} Size ({x.toFixed(2)} gms)
                  </option>
                ) : (
                  <option value={i}>
                    {(i + 5).toFixed(2)} Size ({x.toFixed(2)} gms)
                  </option>
                )
              )}
            </select>
          </section>

          <DeliverabilityChecker />

          <section className="buttons-container">
            <button
              onClick={() => {
                dispatch(
                  addMensRing({
                    ringId: item.stockNumber,
                    carat: item.diamondCarat,
                    quality: diamondQuality,
                    weightIndex: ringSize,
                  })
                );
                dispatch(letsShowFlash("Ring Added To The Cart"));
              }}
            >
              Add To Bag
            </button>
            <div onClick={() => addItemToWishlist(item)}>
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </section>
          <section>
            <p style={{ margin: "6px 0px" }}>Share on: </p>
            <SocialSharing />
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
              <p>{item.purity}</p>
            </div>
            <div className="data-row">
              <p>Weight</p>
              <p style={{ textTransform: "none" }}>
                {item.metalWeightArray[ringSize]} gms
              </p>
            </div>
            <div className="data-row">
              <p>Setting</p>
              <p>{item.setting}</p>
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
