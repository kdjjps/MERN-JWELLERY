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

export default function KadaItem({ item, getTotalRingPrice }) {
  const data = useSelector((state) => state);

  const dispatch = useDispatch();

  const [cookies] = useCookies();
  const { url } = useRouteMatch();
  const [wishlistStatus, setWishlistStatus] = useState(false);
  const wishlistItems = data.wishlistReducer.wishlistItems;

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
    let availability = wishlistItems.find(
      (wishlistItem, index) => wishlistItem.stockNumber === item.stockNumber
    );
    if (availability) {
      setWishlistStatus(true);
    }
  }, []);
  let modifiedUrl = item.imageUrl.replace(
    /https:\/\/lgc-media-bucket\.s3\.ap-south-1\.amazonaws\.com/g,
    "https://lgcgems.s3.ap-south-1.amazonaws.com"
  );

  return (
    <JewelryGridItemBox wishlistStatus={wishlistStatus}>
      <div className="wishlist-button" onClick={() => addItemToWishlist(item)}>
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className="jewelry-builder--grid-inner">
        <a href={`${url}/${item.stockNumber}`}>
          <div className="jewelry-builder--grid-image ring">
            <img src={modifiedUrl} alt={`${item.kadaName}`} />
          </div>
        </a>
        <div className="jewelry-builder--grid-metal-thumbnails"></div>
        <a href={`${url}/${item.stockNumber}`}>
          <div className="jewelry-builder--grid-info">
            <div className="jewelry-builder--grid-name">{item.kadaName}</div>
            <div className="jewelry-builder--grid-price">
              From: {cookies.currencyCode}{" "}
              {getTotalPrice("mens-kada", item, cookies, null, null, 0)}
            </div>
          </div>
        </a>
      </div>
    </JewelryGridItemBox>
  );
}
