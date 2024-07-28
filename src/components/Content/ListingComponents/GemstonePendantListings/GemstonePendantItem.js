import React, { useState, useEffect } from "react";
import { JewelryGridItemBox } from "../style";
import { useRouteMatch } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist } from "../../../../store/actions/wishlistActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { letsShowFlash } from "../../../../store/actions/flashAction.js";

export default function GemstonePendantItem({ item, pendantNo, gem }) {
  const data = useSelector((state) => state);

  const dispatch = useDispatch();

  const { url } = useRouteMatch();
  const [cookies] = useCookies();

  const [wishlistStatus, setWishlistStatus] = useState(false);
  const wishlistItems = data.wishlistReducer.wishlistItems;

  const addItemToWishlist = (item, itemType) => {
    if (wishlistStatus) {
      dispatch(letsShowFlash("Pendant Removed From The Cart!"));
    } else {
      dispatch(letsShowFlash("Pendant Added To The Cart!"));
    }
    setWishlistStatus(!wishlistStatus);
    dispatch(
      addToWishlist({ stockNumber: item.stockNumber, itemType: "gem-pendant" })
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
        <a
          href={`${url}/${item.pendant.split("/")[7]}/LGC-Gem-Pendant-${
            item.stockNumber
          }`}
        >
          <div className="jewelry-builder--grid-image pendant">
            <img src={item.pendant} alt={`gemstone-pendant-${pendantNo}`} />
          </div>
        </a>
        <a
          href={`${url}/${
            item.pendant.split("/")[7]
          }/LGC-Gem-Pendant-${pendantNo}`}
        >
          <div className="jewelry-builder--grid-info">
            <div className="jewelry-builder--grid-name">
              {gem} Pendant {pendantNo}
            </div>
            <div className="jewelry-builder--grid-about">
              {item.gemstone.toUpperCase()}
            </div>
            <div className="jewelry-builder--grid-price">
              From : {cookies.currencyCode}{" "}
              {parseInt(14 * cookies.exchangeRate[cookies.currencyCode])}
            </div>
          </div>
        </a>
      </div>
    </JewelryGridItemBox>
  );
}
