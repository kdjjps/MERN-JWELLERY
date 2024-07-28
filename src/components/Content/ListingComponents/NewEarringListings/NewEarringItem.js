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

export default function NewEarringItem({ item, parentMetalColor }) {
  const data = useSelector((state) => state);

  const dispatch = useDispatch();

  const [cookies, setCookie] = useCookies();
  const { url } = useRouteMatch();
  const nfObject = new Intl.NumberFormat("en-US");
  const [smallDiamondPrice, setSmallDiamondPrice] = useState(0);
  const [solitaireDiamondPrice, setSolitaireDiamondPrice] = useState(0);
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
    let availability = wishlistItems.find(
      (wishlistItem, index) => wishlistItem.stockNumber === item.stockNumber
    );
    if (availability) {
      setWishlistStatus(true);
    }
  }, []);

  useEffect(() => {
    let priceForSmallDiamonds = 0;
    let priceForSolitaireDiamonds = 0;

    if (item.smallDiamondsArray.length != 0) {
      item.smallDiamondsArray.map((object, index) => {
        priceForSmallDiamonds = priceForSmallDiamonds + object["IJSI"];
      });
    }

    if (item.solitaireDiamondsArray.length != 0) {
      item.solitaireDiamondsArray.map((object, index) => {
        priceForSolitaireDiamonds = priceForSolitaireDiamonds + object["IJSI"];
      });
    }

    setSmallDiamondPrice(priceForSmallDiamonds);
    setSolitaireDiamondPrice(priceForSolitaireDiamonds);
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
              {item.diamondShape} Diamond Earrings
            </div>
            <div className="jewelry-builder--grid-price">
              From : {cookies.currencyCode}{" "}
              {nfObject.format(
                getNewArrivalsTotalPrice(
                  "diamond-earring",
                  item.metalWeight,
                  cookies,
                  smallDiamondPrice,
                  solitaireDiamondPrice
                )
              )}
            </div>
          </div>
        </a>
      </div>
      {/* <a className='details-link' href={`${url}/LGC-NA-${item.stockNumber}`}>View Earring</a> */}
    </JewelryGridItemBox>
  );
}
