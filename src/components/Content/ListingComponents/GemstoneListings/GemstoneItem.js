import React, { useState, useEffect } from "react";
import { JewelryGridItemBox } from "../style";
import { useRouteMatch, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist } from "../../../../store/actions/wishlistActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { letsShowFlash } from "../../../../store/actions/flashAction.js";

export default function GemstoneItem({ item }) {
  const data = useSelector((state) => state);

  const dispatch = useDispatch();

  const { url } = useRouteMatch();
  const { search } = useLocation();
  const { name } = queryString.parse(search);
  const [cookies, setCookie] = useCookies();
  const nfObject = new Intl.NumberFormat("en-US");

  const [wishlistStatus, setWishlistStatus] = useState(false);
  const wishlistItems = data.wishlistReducer.wishlistItems;

  const addItemToWishlist = (item, itemType) => {
    if (wishlistStatus) {
      dispatch(letsShowFlash("Gemstone Removed From The Cart!"));
    } else {
      dispatch(letsShowFlash("Gemstone Added To The Cart!"));
    }
    setWishlistStatus(!wishlistStatus);
    dispatch(
      addToWishlist({
        stockNumber: item.stockNumber,
        itemType: "loose-gemstone",
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

  return (
    <JewelryGridItemBox wishlistStatus={wishlistStatus}>
      <div className="wishlist-button" onClick={() => addItemToWishlist(item)}>
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className="jewelry-builder--grid-inner">
        <a href={`${url}/${item.stockNumber}`}>
          <div className="jewelry-builder--grid-image ring">
            <img src={item.images[0]} alt="Gemstone" />
          </div>
        </a>
        <div className="jewelry-builder--grid-metal-thumbnails"></div>
        <a href={`${url}/${item.stockNumber}`}>
          <div className="jewelry-builder--grid-info">
            <div className="jewelry-builder--grid-name">{item.stockNumber}</div>
            <div className="jewelry-builder--grid-about">{item.type}</div>
            <div className="jewelry-builder--grid-price">
              Our Price: {cookies.currencyCode}{" "}
              {nfObject.format(
                parseInt(
                  item.pricePerCarat *
                    cookies.exchangeRate[cookies.currencyCode]
                )
              )}{" "}
              Per Carat
            </div>
          </div>
        </a>
      </div>
    </JewelryGridItemBox>
  );
}
