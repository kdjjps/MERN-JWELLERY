import React, { useState, useEffect } from "react";
import { JewelryGridItemBox } from "../style";
import { useRouteMatch } from "react-router-dom";
import { useCookies } from "react-cookie";
import getTotalPrice from "../../../../helper/getTotalPrice";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../../../store/actions/wishlistActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { letsShowFlash } from "../../../../store/actions/flashAction.js";

export default function MensRingItem({ item, getTotalRingPrice }) {
  const data = useSelector((state) => state);

  let modifiedUrl = item.imageUrl.replace(
    /https:\/\/lgc-media-bucket\.s3\.ap-south-1\.amazonaws\.com/g,
    "https://lgcgems.s3.ap-south-1.amazonaws.com"
  );

  const dispatch = useDispatch();
  const [cookies] = useCookies();
  const { url } = useRouteMatch();
  const [wishlistStatus, setWishlistStatus] = useState(false);
  const wishlistItems = data.wishlistReducer.wishlistItems;

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
    let availability = wishlistItems.find(
      (wishlistItem, index) => wishlistItem.stockNumber === item.stockNumber
    );
    if (availability) {
      setWishlistStatus(true);
    }
  }, []);

  return (
    <JewelryGridItemBox wishlistStatus={wishlistStatus}>
      <div className="wishlist-button" onClick={() => addItemToWishlist(item)}>
        <div></div>
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className="jewelry-builder--grid-inner">
        <a href={`${url}/${item.stockNumber}`}>
          <div className="jewelry-builder--grid-image ring">
            <img src={modifiedUrl} alt={`${item.ringName}`} />
          </div>
        </a>
        <div className="jewelry-builder--grid-metal-thumbnails"></div>
        <a href={`${url}/${item.stockNumber}`}>
          <div className="jewelry-builder--grid-info">
            <div className="jewelry-builder--grid-name">{item.ringName}</div>
            <div className="jewelry-builder--grid-price">
              From: {cookies.currencyCode}{" "}
              {getTotalPrice(
                "mens-ring",
                item,
                cookies,
                item.diamondCarat,
                "IJSI",
                0
              )}
            </div>
          </div>
        </a>
      </div>
    </JewelryGridItemBox>
  );
}
