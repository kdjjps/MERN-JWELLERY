import React, { useState, useEffect } from "react";
import { JewelryGridItemBox } from "../style";
import { useRouteMatch } from "react-router-dom";
import { useCookies } from "react-cookie";
import getNewArrivalsTotalPrice from "../../../../helper/getNewArrivalsTotalPrice";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../../../store/actions/wishlistActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { letsShowFlash } from "../../../../store/actions/flashAction.js";

export default function NosePinItem({ item }) {
  const data = useSelector((state) => state);

  const dispatch = useDispatch();

  const [cookies, setCookie] = useCookies();
  const { url } = useRouteMatch();
  const nfObject = new Intl.NumberFormat("en-US");
  const [wishlistStatus, setWishlistStatus] = useState(false);
  const wishlistItems = data.wishlistReducer.wishlistItems;

  const addItemToWishlist = (item) => {
    if (wishlistStatus) {
      dispatch(letsShowFlash("Nose Pin Removed From The Cart!"));
    } else {
      dispatch(letsShowFlash("Nose Pin Added To The Cart!"));
    }
    setWishlistStatus(!wishlistStatus);
    dispatch(
      addToWishlist({ stockNumber: item.stockNumber, itemType: "nose-pin" })
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
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className="jewelry-builder--grid-inner">
        <a href={`${url}/LGC-NA-${item.stockNumber}`}>
          <div className="jewelry-builder--grid-image ring">
            <img src={item.imageArray[0]} />
          </div>
        </a>
        <div className="jewelry-builder--grid-metal-thumbnails"></div>
        <a href={`${url}/LGC-NA-${item.stockNumber}`}>
          <div className="jewelry-builder--grid-info">
            <div className="jewelry-builder--grid-name">{item.productName}</div>
            <div className="jewelry-builder--grid-about">
              {item.diamondShape} Diamond Nose Pin
            </div>
            <div className="jewelry-builder--grid-price">
              From : {cookies.currencyCode}{" "}
              {nfObject.format(
                getNewArrivalsTotalPrice(
                  "nose-pin",
                  item.metalWeight,
                  cookies,
                  item.IJSI,
                  null
                )
              )}
            </div>
          </div>
        </a>
      </div>
    </JewelryGridItemBox>
  );
}
