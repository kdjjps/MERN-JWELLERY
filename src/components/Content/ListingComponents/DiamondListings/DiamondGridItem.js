import React, { useEffect, useState } from "react";
import { ListGridItemBox } from "../style.js";
import { useRouteMatch } from "react-router-dom";
import { useCookies } from "react-cookie";
import getImage from "../../../../helper/getImage";
import getTotalPrice from "../../../../helper/getTotalPrice";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../../../store/actions/wishlistActions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { letsShowFlash } from "../../../../store/actions/flashAction.js";

export default function DiamondGridItem({
  item,
  handleViewHandModal,
  nfObject,
  slider,
  caratSlider,
}) {
  const data = useSelector((state) => state);

  const dispatch = useDispatch();

  const { url } = useRouteMatch();
  const [cookies] = useCookies();
  const [wishlistStatus, setWishlistStatus] = useState(false);
  const wishlistItems = data.wishlistReducer.wishlistItems;

  const addItemToWishlist = (item) => {
    if (wishlistStatus) {
      dispatch(letsShowFlash("Diamond Removed From The Cart!"));
    } else {
      dispatch(letsShowFlash("Diamond Added To The Cart!"));
    }
    setWishlistStatus(!wishlistStatus);
    dispatch(
      addToWishlist({
        stockNumber: item.stockNumber,
        itemType: "loose-diamond",
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

  let modifiedUrl = item.imageUrl.replace(
    /https:\/\/lgc-media-bucket\.s3\.ap-south-1\.amazonaws\.com/g,
    "https://lgcgems.s3.ap-south-1.amazonaws.com"
  );

  return (
    <ListGridItemBox wishlistStatus={wishlistStatus}>
      <section className="details-container">
        <div className="media-container">
          <a href={`${url}/${item.stockNumber}`}>
            <img
              src={
                item.imageUrl.length > 5
                  ? modifiedUrl
                  : getImage(item.diamondShape).imgURL
              }
              alt="diamond"
              id={item.id}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = getImage(item.diamondShape).imgURL;
              }}
            />
          </a>
        </div>
        <div className="diamond-details-box">
          <div className="detail-container">
            <div className="detail-row">
              <div className="detail-item">
                <h3>Shape</h3>
                <h3 style={{ textTransform: "capitalize" }}>
                  {item.diamondShape}
                </h3>
              </div>
              <div className="detail-item">
                <h3>Carat</h3>
                <h3>{item.carat.toFixed(2)}</h3>
              </div>
              <div className="detail-item">
                <h3>Cut</h3>
                <h3>{item.cut}</h3>
              </div>
            </div>
            <div className="detail-row">
              <div className="detail-item">
                <h3>Color</h3>
                <h3>{item.color}</h3>
              </div>
              <div className="detail-item">
                <h3>Clarity</h3>
                <h3>{item.clarity}</h3>
              </div>
              <div className="detail-item">
                <h3>Cert</h3>
                <h3>{item.lab}</h3>
              </div>
            </div>
            <div className="detail-row">
              <p>
                <span style={{ fontSize: "2rem", fontWeight: "bold" }}>
                  {cookies.currencyCode}{" "}
                  {nfObject.format(
                    getTotalPrice("loose-diamond", item, cookies).toFixed(2)
                  )}
                </span>
                <span
                  style={{
                    fontStyle: "italic",
                    textTransform: "none",
                    fontSize: "1rem",
                    marginLeft: "5px",
                  }}
                >
                  (ex VAT)
                </span>
              </p>
              <div>
                <div
                  className="view-on-hand-button"
                  onClick={() =>
                    handleViewHandModal(
                      item.diamondShape,
                      slider,
                      caratSlider,
                      item.carat
                    )
                  }
                >
                  <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/view-on-hand.png" />
                  <p>
                    See On <br /> Hand
                  </p>
                </div>
              </div>
            </div>
            <div className="detail-row" onClick={() => addItemToWishlist(item)}>
              <div className="add-to-wishlist">
                <FontAwesomeIcon icon={faHeart} />
                <p>Add To Wishlist</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="details-page-linkk"
        onClick={() => addItemToWishlist(item)}
      >
        <FontAwesomeIcon icon={faHeart} />
        <div>Add To Wishlist</div>
      </div>
    </ListGridItemBox>
  );
}
