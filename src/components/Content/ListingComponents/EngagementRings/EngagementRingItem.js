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

export default function EngagementRingItem({ item, parentMetalColor }) {
  const data = useSelector((state) => state);

  const dispatch = useDispatch();

  const [metal, setMetal] = useState(null);
  const [metalCode, setMetalCode] = useState(null);
  const [cookies] = useCookies();
  const { url } = useRouteMatch();
  const nfObject = new Intl.NumberFormat("en-US");
  const [smallDiamondPrice, setSmallDiamondPrice] = useState(0);
  const [solitaireDiamondPrice, setSolitaireDiamondPrice] = useState(0);
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
      addToWishlist({ stockNumber: item.stockNumber, itemType: "fashion-ring" })
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

  const changeMetal = (metal) => {
    switch (metal) {
      case "platinum":
        setMetal("platinum");
        setMetalCode("3");
        break;
      case "rose-gold":
        setMetal("rose-gold");
        setMetalCode("2");
        break;
      case "yellow-gold":
        setMetal("yellow-gold");
        setMetalCode("1");
        break;
      case "white-gold":
        setMetal("white-gold");
        setMetalCode("0");
        break;
    }
  };

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

    changeMetal(parentMetalColor);
  }, [parentMetalColor]);

  return (
    <JewelryGridItemBox
      metal={metal}
      metalCode={metalCode}
      wishlistStatus={wishlistStatus}
    >
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
              {item.diamondShape} Diamond Ring
            </div>
            <div className="jewelry-builder--grid-price">
              From : {cookies.currencyCode}{" "}
              {nfObject.format(
                getNewArrivalsTotalPrice(
                  "fashion-ring",
                  item.ringSizeWeightArray[0],
                  cookies,
                  smallDiamondPrice,
                  solitaireDiamondPrice,
                  item,
                  0
                )
              )}
            </div>
          </div>
        </a>
      </div>
    </JewelryGridItemBox>
  );
}
