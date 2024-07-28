import React, { useState, useContext, useEffect } from "react";
import { JewelryGridItemBox } from "../style";
import { useRouteMatch } from "react-router-dom";
import { PriceContext } from "../../../../contexts/PriceContext";
import { useCookies } from "react-cookie";
import getTotalPrice from "../../../../helper/getTotalPrice";
import { addToWishlist } from "../../../../store/actions/wishlistActions";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { letsShowFlash } from "../../../../store/actions/flashAction.js";

export default function NecklaceItem({ item, parentMetalColor }) {
  const data = useSelector((state) => state);

  const dispatch = useDispatch();

  const [metal, setMetal] = useState(null);
  const [metalCode, setMetalCode] = useState(null);
  const { userCurrency } = useContext(PriceContext);
  const [metalDisplayer, setMetalDisplayer] = useState("");
  const { url } = useRouteMatch();
  const [cookies] = useCookies();
  const nfObject = new Intl.NumberFormat("en-US");

  const [wishlistStatus, setWishlistStatus] = useState(false);
  const wishlistItems = data.wishlistReducer.wishlistItems;

  const addItemToWishlist = (item, itemType) => {
    if (wishlistStatus) {
      dispatch(letsShowFlash("Necklace Removed From The Cart!"));
    } else {
      dispatch(letsShowFlash("Necklace Added To The Cart!"));
    }
    setWishlistStatus(!wishlistStatus);
    dispatch(
      addToWishlist({
        stockNumber: item.stockNumber,
        itemType: "solitaire-necklace",
      })
    );
  };

  const checkMetalColor = (metal) => {
    switch (metal) {
      case "white-gold":
        return "#dedede";
        break;
      case "yellow-gold":
        return "#efd9a7";
        break;
      case "rose-gold":
        return "#eebda0";
        break;
      case "platinum":
        return "#dedede";
        break;
      default:
        return "#dedede";
        break;
    }
  };

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
    changeMetal(parentMetalColor);
    let availability = wishlistItems.find(
      (wishlistItem, index) => wishlistItem.stockNumber === item.stockNumber
    );
    if (availability) {
      setWishlistStatus(true);
    }
  }, [parentMetalColor]);

  return (
    <JewelryGridItemBox metal={metal} wishlistStatus={wishlistStatus}>
      <div className="wishlist-button" onClick={() => addItemToWishlist(item)}>
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className="jewelry-builder--grid-inner">
        <a href={`${url}/LGC-CJ-${item.stockNumber}${metalCode}`}>
          <div className="jewelry-builder--grid-image ring">
            {item.metals.map((metal, index) => {
              return (
                <img
                  src={metal.imgURL}
                  alt={`${item.id}-${index}`}
                  className={metal.metal}
                  key={index}
                />
              );
            })}
          </div>
        </a>
        <div
          className="jewelry-builder--grid-metal-thumbnails"
          style={{ marginTop: "-40px" }}
        >
          <ul>
            {item.metals.map((metal, index) => {
              return (
                <li>
                  <div
                    className="jewelry-builder--grid-metal-thumbnail"
                    style={{ backgroundColor: checkMetalColor(metal.metal) }}
                    id={`${item.stockNumber}-${index}`}
                    onClick={() => changeMetal(metal.metal)}
                    onMouseOver={() => setMetalDisplayer(metal.metal)}
                    onMouseOut={() => setMetalDisplayer("")}
                  ></div>
                </li>
              );
            })}
          </ul>
          <div className="metal-displayer">{metalDisplayer}</div>
        </div>
        <a href={`${url}/LGC-CJ-${item.stockNumber}${metalCode}`}>
          <div className="jewelry-builder--grid-info">
            <div className="jewelry-builder--grid-name">
              {item.necklaceName}
            </div>
            <div className="jewelry-builder--grid-about">
              {item.diamondShape} Diamond Necklace in {metal}
            </div>
            <div className="jewelry-builder--grid-price">
              Our Price: {userCurrency} {cookies.currencyCode}{" "}
              {nfObject.format(getTotalPrice("custom-necklace", item, cookies))}
            </div>
          </div>
        </a>
      </div>
      {/* <a className='details-link'>View Necklace</a> */}
    </JewelryGridItemBox>
  );
}
