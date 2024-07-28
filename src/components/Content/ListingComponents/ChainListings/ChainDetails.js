import React, { useState, useRef, useEffect } from "react";
import SocialSharing from "../SocialSharing";
import USPBanner from "../USPBanner";
import SmallUSPBanner from "../SmallUSPBanner";
import { useParams } from "react-router-dom";
import { DetailsBox } from "../style";
import { useCookies } from "react-cookie";
import getTotalPrice from "../../../../helper/getTotalPrice";
import DeliverabilityChecker from "../../DeliverabilityChecker";
import metalSizeFormatter from "../../../../helper/metalSizeFormatter";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../Loader/Loader";
import { findJewelry } from "../../../../store/actions/jewelryActions";
import { addChain } from "../../../../store/actions/cartActions";
import { letsShowFlash } from "../../../../store/actions/flashAction";
import { addToWishlist } from "../../../../store/actions/wishlistActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

let modifiedUrl = "";
export default function ChainDetails() {
  const data = useSelector((state) => state);
  const chains = data.jewelryReducer.unfilteredMensChainsArray;

  const dispatch = useDispatch();

  const innerRef = useRef();
  const { chainId } = useParams();
  const [cookies] = useCookies();

  const [chainLength, setChainLength] = useState(2);
  const [wishlistStatus, setWishlistStatus] = useState(false);
  const wishlistItems = data.wishlistReducer.wishlistItems;

  const item = findJewelry(chains, chainId);

  const addItemToWishlist = (item) => {
    if (wishlistStatus) {
      dispatch(letsShowFlash("Chain Removed From The Cart!"));
    } else {
      dispatch(letsShowFlash("Chain Added To The Cart!"));
    }
    setWishlistStatus(!wishlistStatus);
    dispatch(
      addToWishlist({ stockNumber: item.stockNumber, itemType: "gold-chain" })
    );
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
      modifiedUrl = item.imageUrl?.replace(
        /https:\/\/lgc-media-bucket\.s3\.ap-south-1\.amazonaws\.com/g,
        "https://lgcgems.s3.ap-south-1.amazonaws.com"
      );
    }
  }, [item]);

  return item ? (
    <DetailsBox wishlistStatus={wishlistStatus}>
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
            <p className="heading">
              {item.chainName} {item.diamondShape}
            </p>
            <p className="sku">
              <span style={{ fontWeight: "bold", fontStyle: "style" }}>
                SKU:{" "}
              </span>
              LGC-{chainId}
            </p>
            <p className="price">
              <span style={{ fontWeight: "bold" }}>
                Our Price : {cookies.currencyCode}{" "}
                {getTotalPrice(
                  "gold-chain",
                  item,
                  cookies,
                  null,
                  null,
                  chainLength
                )}
              </span>
              <span style={{ fontSize: "1.3rem", display: "block" }}>
                (Price is for the chain only, excluding VAT & GST)
              </span>
            </p>
          </section>

          <section>
            <p style={{ marginBottom: "6px", marginTop: "6px" }}>
              <span style={{ fontWeight: "bold" }}>Chain Length: </span>
              {2 * chainLength + 16}
            </p>
            <select
              style={{ padding: "5px" }}
              onChange={(e) => setChainLength(e.target.value)}
            >
              {item.metalWeightArray.map((x, i) =>
                i === 2 ? (
                  <option selected="selected" value={i}>
                    {2 * i + 16} Inch ({x.toFixed(2)} Gms)
                  </option>
                ) : (
                  <option value={i}>
                    {2 * i + 16} Inch ({x.toFixed(2)} Gms)
                  </option>
                )
              )}
            </select>
          </section>

          <DeliverabilityChecker />

          <section className="buttons-container">
            <button
              style={{ width: "100%" }}
              onClick={() => {
                dispatch(
                  addChain({
                    chainId: item.stockNumber,
                    weightIndex: chainLength,
                  })
                );
                dispatch(letsShowFlash("Chain Added To The Cart"));
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
                {metalSizeFormatter(item.width)}
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
                {item.metalWeightArray[chainLength] != undefined
                  ? item.metalWeightArray[chainLength].toFixed(2)
                  : "-"}{" "}
                gms
              </p>
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
