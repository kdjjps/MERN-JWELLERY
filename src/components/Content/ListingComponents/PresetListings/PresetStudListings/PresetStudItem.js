import React, { useState, useEffect } from "react";
import { JewelryGridItemBox } from "../../style";
import { useRouteMatch } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../../../../store/actions/wishlistActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { letsShowFlash } from "../../../../../store/actions/flashAction.js";

export default function StudItem({ item, getFromAmount, parentMetalColor }) {
  const data = useSelector((state) => state);

  const dispatch = useDispatch();

  const { url } = useRouteMatch();
  const [cookies] = useCookies();
  const [metal, setMetal] = useState(null);
  const [metalCode, setMetalCode] = useState(null);
  const [metalDisplayer, setMetalDisplayer] = useState("");
  const nfObject = new Intl.NumberFormat("en-US");

  const [wishlistStatus, setWishlistStatus] = useState(false);
  const wishlistItems = data.wishlistReducer.wishlistItems;

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

  const addItemToWishlist = (item, itemType) => {
    if (wishlistStatus) {
      dispatch(letsShowFlash("Stud Removed From The Cart!"));
    } else {
      dispatch(letsShowFlash("Stud Added To The Cart!"));
    }
    setWishlistStatus(!wishlistStatus);
    dispatch(
      addToWishlist({
        stockNumber: item.stockNumber,
        itemType: "solitaire-stud",
      })
    );
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
        <a href={`${url}/LGC-PJ-${item.stockNumber}${metalCode}`}>
          <div className="jewelry-builder--grid-image ring">
            {item.metals.map((metal, index) => {
              return (
                <img
                  src={metal.imgURL}
                  alt={`${item.id}-${index}`}
                  className={metal.metal}
                />
              );
            })}
          </div>
        </a>
        <div className="jewelry-builder--grid-metal-thumbnails">
          <ul>
            {item.metals.map((metal, index) => {
              return (
                <li>
                  <div
                    className="jewelry-builder--grid-metal-thumbnail"
                    style={{ backgroundColor: checkMetalColor(metal.metal) }}
                    id={`${item.id}-${index}`}
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
        <a href={`${url}/LGC-PJ-${item.stockNumber}${metalCode}`}>
          <div className="jewelry-builder--grid-info">
            <div className="jewelry-builder--grid-name">{item.studName}</div>
            <div className="jewelry-builder--grid-about">
              {item.diamondShape} Diamond Stud in {metal}
            </div>
            <div className="jewelry-builder--grid-price">
              From {cookies.currencyCode}{" "}
              {nfObject.format(
                parseInt(getFromAmount(item, "preset-earring", cookies))
              )}
            </div>
          </div>
        </a>
      </div>
    </JewelryGridItemBox>
  );
}
