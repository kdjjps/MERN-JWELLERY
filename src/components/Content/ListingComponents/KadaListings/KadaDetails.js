import React, { useState, useRef, useEffect } from "react";
import { AlternateDetailsBox } from "../style";
import { useParams } from "react-router-dom";
import SocialSharing from "../SocialSharing";
import USPBanner from "../USPBanner";
import SmallUSPBanner from "../SmallUSPBanner";
import { useCookies } from "react-cookie";
import getTotalPrice from "../../../../helper/getTotalPrice";
import DeliverabilityChecker from "../../DeliverabilityChecker";
import metalSizeFormatter from "../../../../helper/metalSizeFormatter";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../Loader/Loader";
import { findJewelry } from "../../../../store/actions/jewelryActions";
import { letsShowFlash } from "../../../../store/actions/flashAction";
import { addMensKada } from "../../../../store/actions/cartActions";
import { addToWishlist } from "../../../../store/actions/wishlistActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

let modifiedUrl = "";
export default function KadaDetails() {
  const data = useSelector((state) => state);
  const kadas = data.jewelryReducer.unfilteredMensKadasArray;

  const dispatch = useDispatch();

  const innerRef = useRef();
  const { kadaId } = useParams();
  const [cookies, setCookie] = useCookies();

  const [kadaLength, setKadaLength] = useState(2);
  const [wishlistStatus, setWishlistStatus] = useState(false);
  const wishlistItems = data.wishlistReducer.wishlistItems;

  const item = findJewelry(kadas, kadaId);

  const magnify = (e) => {
    const inner = document.querySelector(".inner");
    let { left, top, width, height } = innerRef.current.getBoundingClientRect();
    let x = ((e.pageX - left) / width) * 100;
    let y = ((e.pageY - top) / height) * 100;
    inner.style.backgroundPosition = `${x}% ${y}%`;
  };

  const addItemToWishlist = (item) => {
    if (wishlistStatus) {
      dispatch(letsShowFlash("Kada Removed From The Cart!"));
    } else {
      dispatch(letsShowFlash("Kada Added To The Cart!"));
    }
    setWishlistStatus(!wishlistStatus);
    dispatch(
      addToWishlist({ stockNumber: item.stockNumber, itemType: "mens-kada" })
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
      modifiedUrl = item.imageUrl.replace(
        /https:\/\/lgc-media-bucket\.s3\.ap-south-1\.amazonaws\.com/g,
        "https://lgcgems.s3.ap-south-1.amazonaws.com"
      );
    }
  }, [item]);

  return item ? (
    <AlternateDetailsBox imageViewStatus={true} wishlistStatus={wishlistStatus}>
      <div className="details-page-upperbody">
        <div className="big-media-displayer">
          <div className="media-holder diamond-image">
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
            <p className="heading">{item.kadaName}</p>
            <p className="sku">
              <span style={{ fontWeight: "bold" }}>SKU: </span> LGC-
              {item.stockNumber}
            </p>
            <p className="price">
              <span style={{ fontWeight: "bold" }}>
                Our Price : {cookies.currencyCode}{" "}
                {getTotalPrice(
                  "mens-kada",
                  item,
                  cookies,
                  null,
                  null,
                  kadaLength
                )}
              </span>
              <span style={{ fontSize: "1.3rem", display: "block" }}>
                (Price is for the kada only, excluding VAT & GST)
              </span>
            </p>
          </section>

          <section className="drop-selection">
            <p style={{ marginBottom: "10px", marginTop: "10px" }}>
              <span style={{ fontWeight: "bold" }}>Kada Length: </span>
              {kadaLength}
            </p>
            <select
              style={{ padding: "5px" }}
              onChange={(e) => setKadaLength(e.target.value)}
            >
              {item.metalWeightArray.map((x, i) =>
                i === 2 ? (
                  <option selected="selected" value={i}>
                    {parseFloat("2." + 2 * (i + 1)).toFixed(2)} Anna (
                    {x.toFixed(2)} gms)
                  </option>
                ) : (
                  <option value={i}>
                    {parseFloat("2." + 2 * (i + 1)).toFixed(2)} Anna (
                    {x.toFixed(2)} gms)
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
                  addMensKada({
                    kadaId: item.stockNumber,
                    weightIndex: kadaLength,
                  })
                );
                dispatch(letsShowFlash("Kada Added To The Cart"));
              }}
            >
              Add To Bag
            </button>
            <div onClick={() => addItemToWishlist(item)}>
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </section>

          <section>
            <p style={{ margin: "10px 0px" }}>Share on: </p>
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
                {item.metalWeightArray[kadaLength]} gms
              </p>
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
