import React, { useState, useRef, useEffect } from "react";
import { DetailsBox } from "../style";
import { useCookies } from "react-cookie";
import SocialSharing from "../SocialSharing";
import { useParams, useRouteMatch } from "react-router-dom";
import USPBanner from "../USPBanner";
import SmallUSPBanner from "../SmallUSPBanner";
import GemstoneSettingModal from "./GemstoneSettingModal";
import gemCertification from "../../../../fakedata/gemCertification";
import getTotalPrice from "../../../../helper/getTotalPrice";
import { useSelector, useDispatch } from "react-redux";
import { addLooseGemstone } from "../../../../store/actions/cartActions";
import { letsShowFlash } from "../../../../store/actions/flashAction";
import Loader from "../../Loader/Loader";
import { addToWishlist } from "../../../../store/actions/wishlistActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function GemstoneDetails(props) {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const innerRef = useRef();
  const { path } = useRouteMatch();

  const allGemstones = data.jewelryReducer.unfilteredGemstonesArray;

  const [selectedSetting, setSelectedSetting] = useState(null);
  const [gemstoneSetting, setGemstoneSetting] = useState("loose");
  const [scrollY, setScrollY] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies();
  const { gemstone, stockNumber } = useParams();
  const [weightSelected, setWeightSelected] = useState(8);
  const [certificateSelected, setCertificateSelected] = useState(0);
  const [optionModalStatus, setOptionModalStatus] = useState(false);
  const nfObject = new Intl.NumberFormat("en-US");

  const findGemstone = (gems, stockNumber) => {
    return gems.find((item, index) => item.stockNumber === stockNumber);
  };

  const [wishlistStatus, setWishlistStatus] = useState(false);
  const wishlistItems = data.wishlistReducer.wishlistItems;

  const addItemToWishlist = (item) => {
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

  const handleOptionModalStatus = () => {
    if (optionModalStatus === false) {
      setOptionModalStatus(true);
      setScrollY(window.scrollY);
      // document.body.setAttribute('style', `position: fixed; top: ${window.scrollY}; left: 0; `)
      document
        .getElementById("root")
        .setAttribute(
          "style",
          `position: fixed; top: ${window.scrollY}; left: 0; right: 0;`
        );
    } else {
      setOptionModalStatus(false);
      document.getElementById("root").setAttribute("style", "");
      window.scrollTo(0, scrollY);
    }
  };

  const magnify = (e) => {
    const inner = document.querySelector(".inner");
    let { left, top, width, height } = innerRef.current.getBoundingClientRect();
    let x = ((e.pageX - left) / width) * 100;
    let y = ((e.pageY - top) / height) * 100;
    inner.style.backgroundPosition = `${x}% ${y}%`;
  };

  const item = findGemstone(allGemstones, stockNumber);

  const weightArray = item
    ? item.priceDetails.map((priceItem, index) => {
        if (index === 8) {
          return (
            <option selected={true} value={index}>
              ({priceItem.ratti} Ratti) ({priceItem.carat} Carat) (
              {cookies.currencyCode}{" "}
              {parseInt(
                priceItem.price * cookies.exchangeRate[cookies.currencyCode]
              )}
              )
            </option>
          );
        } else {
          return (
            <option value={index}>
              ({priceItem.ratti} Ratti) ({priceItem.carat} Carat) (
              {cookies.currencyCode}{" "}
              {parseInt(
                priceItem.price * cookies.exchangeRate[cookies.currencyCode]
              )}
              )
            </option>
          );
        }
      })
    : [];

  const certificateArray = gemCertification.map((item, index) => {
    return (
      <option value={index}>
        {item.standard}{" "}
        {index === 0
          ? ""
          : `(+${item.day} Days) (+${cookies.currencyCode} ${parseInt(
              item.price * cookies.exchangeRate[cookies.currencyCode]
            )})`}
      </option>
    );
  });

  const selectGemstone = (e) => {
    let id = e.target.id;

    switch (id) {
      case "ring-selector":
        if (cookies.whatGotSelectedFirstForCustomGemRing === undefined) {
          setCookie("whatGotSelectedFirstForCustomGemRing", "gem", {
            path: "/",
          });
          setCookie(
            "_gemstoneSelectedForCustomGemRing",
            { gemstone, stockNumber },
            { path: "/" }
          );
          setCookie("_gemstoneWeightForCustomGemRing", weightSelected, {
            path: "/",
          });
          setCookie(
            "_gemstoneCertificationForCustomGemRing",
            certificateSelected,
            { path: "/" }
          );
          setCookie("_gemstoneTypeForCustomGemRing", gemstone, { path: "/" });
          window.location = `/create-your-own-gem-ring/rings?gem=${gemstone}`;
        } else if (cookies.whatGotSelectedFirstForCustomGemRing === "ring") {
          setCookie(
            "_gemstoneSelectedForCustomGemRing",
            { gemstone, stockNumber },
            { path: "/" }
          );
          setCookie("_gemstoneWeightForCustomGemRing", weightSelected, {
            path: "/",
          });
          setCookie(
            "_gemstoneCertificationForCustomGemRing",
            certificateSelected,
            { path: "/" }
          );
          window.location = `/create-your-own-gem-ring/review-order`;
        } else {
          setCookie(
            "_gemstoneSelectedForCustomGemRing",
            { gemstone, stockNumber },
            { path: "/" }
          );
          setCookie("_gemstoneWeightForCustomGemRing", weightSelected, {
            path: "/",
          });
          setCookie(
            "_gemstoneCertificationForCustomGemRing",
            certificateSelected,
            { path: "/" }
          );
          window.location = `/create-your-own-gem-ring/rings?gem=${gemstone}`;
        }
        break;
      case "pendant-selector":
        if (cookies.whatGotSelectedFirstForCustomGemPendant === undefined) {
          setCookie("whatGotSelectedFirstForCustomGemPendant", "gem", {
            path: "/",
          });
          setCookie(
            "_gemstoneSelectedForCustomGemPendant",
            { gemstone, stockNumber },
            { path: "/" }
          );
          setCookie("_gemstoneWeightForCustomGemPendant", weightSelected, {
            path: "/",
          });
          setCookie(
            "_gemstoneCertificationForCustomGemPendant",
            certificateSelected,
            { path: "/" }
          );
          setCookie("_gemstoneTypeForCustomGemPendant", gemstone, {
            path: "/",
          });
          window.location = `/create-your-own-gem-pendan/pendants?gem=${gemstone}`;
        } else if (
          cookies.whatGotSelectedFirstForCustomGemPendant === "pendant"
        ) {
          setCookie("whatGotSelectedFirstForCustomGemPendant", "gem", {
            path: "/",
          });
          setCookie(
            "_gemstoneSelectedForCustomGemPendant",
            { gemstone, stockNumber },
            { path: "/" }
          );
          setCookie("_gemstoneWeightForCustomGemPendant", weightSelected, {
            path: "/",
          });
          setCookie(
            "_gemstoneCertificationForCustomGemPendant",
            certificateSelected,
            { path: "/" }
          );
          window.location = `/create-your-own-gem-pendant/review-order`;
        } else {
          setCookie(
            "_gemstoneSelectedForCustomGemPendant",
            { gemstone, stockNumber },
            { path: "/" }
          );
          setCookie("_gemstoneWeightForCustomGemPendant", weightSelected, {
            path: "/",
          });
          setCookie(
            "_gemstoneCertificationForCustomGemPendant",
            certificateSelected,
            { path: "/" }
          );
          window.location = `/create-your-own-gem-pendant/pendants?gem=${gemstone}`;
        }
        break;
      case "loose-gemstone-selector":
        setCookie(
          "_gemstoneSelectedAsLoose",
          { gemstone, stockNumber },
          { path: "/" }
        );
        break;
    }
  };

  useEffect(() => {
    if (item) {
      let availability = wishlistItems.find(
        (wishlistItem, index) => wishlistItem.stockNumber === item.stockNumber
      );
      if (availability) {
        setWishlistStatus(true);
      }
    }
  }, [item]);

  return item ? (
    <DetailsBox
      gemstoneSetting={gemstoneSetting}
      wishlistStatus={wishlistStatus}
    >
      <div className="details-page-upperbody">
        <div className="big-media-displayer">
          <div className="media-holder gemstone-image">
            <div class="left" onMouseMove={magnify} ref={innerRef}>
              <img
                src={item.images[0]}
                alt={item.stockNumber}
                id={item.stockNumber}
              />
            </div>
            <div class="right">
              <div
                class="inner"
                style={{ backgroundImage: `url(${item.images[0]})` }}
              ></div>
            </div>
          </div>
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            ** Gemstone color may vary as per our inventory **
          </p>
        </div>

        <div className="summary-holder">
          <section>
            <p className="heading">{item.type}</p>
            <p className="info">{item.description}</p>
            <p className="sku" style={{ fontStyle: "italic" }}>
              <span style={{ fontWeight: "bold" }}>SKU: </span>LGC-
              {item.stockNumber}
            </p>
            <p className="price-per-carat">
              <span style={{ fontWeight: "bold" }}>Price Per Carat: </span>
              {cookies.currencyCode}{" "}
              {nfObject.format(
                parseInt(
                  item.pricePerCarat *
                    cookies.exchangeRate[cookies.currencyCode]
                )
              )}
            </p>
            <p className="price">
              <span style={{ fontWeight: "bold" }}>
                Total Price : {cookies.currencyCode}{" "}
                {nfObject.format(
                  getTotalPrice(
                    "loose-gemstone",
                    item,
                    cookies,
                    null,
                    null,
                    weightSelected,
                    null,
                    certificateSelected
                  )
                )}
              </span>
              <span style={{ fontSize: "1.3rem", display: "block" }}>
                (Price is for the gemstone plus certificate, excluding VAT)
              </span>
            </p>
            <div className="note">
              ** We deliver 100% Pure & Natural Gemstones **
            </div>
          </section>

          <section className="drop-selection">
            <p>Weight: </p>
            <select
              style={{ padding: "5px" }}
              onChange={(e) => setWeightSelected(e.target.value)}
            >
              {weightArray}
            </select>
          </section>

          <section className="drop-selection">
            <p>Certification: </p>
            <select
              style={{ padding: "5px" }}
              onChange={(e) => setCertificateSelected(e.target.value)}
            >
              {certificateArray}
            </select>
          </section>

          {selectedSetting ? (
            <section className="selected-setting">
              <p>Setting Selected</p>
              <div>
                <img src={selectedSetting} />
                <p className="setting-price">
                  + {cookies.currencyCode}{" "}
                  {nfObject.format(
                    parseInt(
                      (800 / 72) * cookies.exchangeRate[cookies.currencyCode]
                    )
                  )}
                </p>
              </div>
            </section>
          ) : (
            <div></div>
          )}

          <section className="buttons-container">
            {path ===
            "/create-your-own-gem-ring/gemstones/:gemstone/:stockNumber" ? (
              <button id="ring-selector" onClick={selectGemstone}>
                Add To Ring
              </button>
            ) : path ===
              "/create-your-own-gem-pendant/gemstones/:gemstone/:stockNumber" ? (
              <button id="pendant-selector" onClick={selectGemstone}>
                Add To Pendant
              </button>
            ) : (
              <button
                id="loose-gemstone-selector"
                onClick={handleOptionModalStatus}
              >
                Select This Gemstone
              </button>
            )}

            <div
              className="wishlist-button-container"
              onClick={() => addItemToWishlist(item)}
            >
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </section>

          <section>
            <p style={{ marginBottom: "10px" }}>Share on:</p>
            <SocialSharing />
          </section>
        </div>
      </div>

      <div className="details-page-lowerbody">
        <section className="details-table">
          <h3>Gemstone Details</h3>
          <div className="top-row">
            <p>
              <span style={{ fontWeight: "bold" }}>Stock no : </span>
              {item.stockNumber}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}> Price Per Carat : </span>{" "}
              {cookies.currencyCode}{" "}
              {nfObject.format(
                parseInt(
                  item.pricePerCarat *
                    cookies.exchangeRate[cookies.currencyCode]
                )
              )}
            </p>
          </div>
          <div className="details-body">
            <div className="data-row">
              <p style={{ fontWeight: "bold" }}>Name</p>
              <p>{item.gemDetails.gemName}</p>
            </div>
            <div className="data-row">
              <p style={{ fontWeight: "bold" }}>Cut</p>
              <p>{item.gemDetails.cut}</p>
            </div>
            <div className="data-row">
              <p style={{ fontWeight: "bold" }}>Composition</p>
              <p>{item.gemDetails.composition}</p>
            </div>
            <div className="data-row">
              <p style={{ fontWeight: "bold" }}>Origin</p>
              <p>{item.gemDetails.origin}</p>
            </div>
            <div className="data-row">
              <p style={{ fontWeight: "bold" }}>Color</p>
              <p>{item.gemDetails.color}</p>
            </div>
            <div className="data-row">
              <p style={{ fontWeight: "bold" }}>Certification</p>
              <p>{gemCertification[certificateSelected].standard}</p>
            </div>
            <div className="data-row">
              <p style={{ fontWeight: "bold" }}>Specific Gravity</p>
              <p>{item.gemDetails.specificGravity}</p>
            </div>
            <div className="data-row">
              <p style={{ fontWeight: "bold" }}>Refractive Index</p>
              <p>{item.gemDetails.refractiveIndex}</p>
            </div>
            <div className="data-row">
              <p style={{ fontWeight: "bold" }}>Shape</p>
              <p>{item.gemDetails.shape}</p>
            </div>
            <div className="data-row">
              <p style={{ fontWeight: "bold" }}>Treatment</p>
              <p>{item.gemDetails.treatment}</p>
            </div>
          </div>
        </section>
        <SmallUSPBanner />
        <USPBanner />
      </div>
      <GemstoneSettingModal
        status={optionModalStatus}
        setOptionModalStatus={handleOptionModalStatus}
        weightSelected={weightSelected}
        certificateSelected={certificateSelected}
        addLooseGemstone={addLooseGemstone}
        letsShowFlash={letsShowFlash}
      />
    </DetailsBox>
  ) : (
    <Loader />
  );
}
