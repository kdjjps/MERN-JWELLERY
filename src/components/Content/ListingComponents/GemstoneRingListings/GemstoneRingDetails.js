import React, { useState, useRef, useEffect } from "react";
import { GemSettingDetailsBox } from "./style";
import { useParams } from "react-router-dom";
import SocialSharing from "../SocialSharing";
import USPBanner from "../USPBanner";
import SmallUSPBanner from "../SmallUSPBanner";
import { useCookies } from "react-cookie";
import getTotalPrice from "../../../../helper/getTotalPrice";
import DeliverabilityChecker from "../../DeliverabilityChecker";
import ringSizeObject from "../../../../fakedata/ringSizeData";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../Loader/Loader";
import { addToWishlist } from "../../../../store/actions/wishlistActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { letsShowFlash } from "../../../../store/actions/flashAction.js";

export default function GemstoneRingDetails() {
  const innerRef = useRef();
  const data = useSelector((state) => state);

  const dispatch = useDispatch();

  const gemRings = data.jewelryReducer.unfilteredGemstonesRingsArray;
  const [cookies, setCookie] = useCookies();
  const [errorMessage, setErrorMessage] = useState("");
  const [ringSize, setRingSize] = useState("");
  const [ringSizeStandard, setRingSizeStandard] = useState(
    cookies.currencyCode
  );
  const { stockNumber } = useParams();
  const ringNumber = stockNumber.split("-")[stockNumber.split("-").length - 1];
  const nfObject = new Intl.NumberFormat("en-US");
  const [metalSelected, setMetalSelected] = useState(0);

  const [wishlistStatus, setWishlistStatus] = useState(false);
  const wishlistItems = data.wishlistReducer.wishlistItems;

  let urlStringArray = window.location.pathname.split("/");

  const selectedRingSizeStandard = ringSizeObject.filter((item, index) => {
    return item.currency === ringSizeStandard;
  });

  const filteredGemstoneSettingData = gemRings.filter((item, index) => {
    return item.gemstone === urlStringArray[3];
  });

  const ringImage =
    filteredGemstoneSettingData.length != 0
      ? filteredGemstoneSettingData[ringNumber].ring
      : null;

  const ringSizeArray = selectedRingSizeStandard[0].ringSizeArray.map(
    (item, index) => {
      if (index === 0) {
        return (
          <option value="" disabled selected hidden>
            Please Choose...
          </option>
        );
      } else {
        return <option key={index}>{item.size}</option>;
      }
    }
  );

  const magnify = (e) => {
    const inner = document.querySelector(".inner");
    let { left, top, width, height } = innerRef.current.getBoundingClientRect();
    let x = ((e.pageX - left) / width) * 100;
    let y = ((e.pageY - top) / height) * 100;
    inner.style.backgroundPosition = `${x}% ${y}%`;
  };

  const changeRingSize = (e) => {
    setErrorMessage("");
    setRingSize(e.target.value);
  };

  const onSelectRing = () => {
    if (ringSize === "") {
      setErrorMessage("Please select ring size first!");
    } else {
      if (cookies.whatGotSelectedFirstForCustomGemRing === "gem") {
        setCookie(
          "_ringSelectedForCustomGemRing",
          `${filteredGemstoneSettingData[ringNumber].stockNumber}`,
          { path: "/" }
        );
        setCookie("_ringMetalForCustomGemRing", metalSelected, { path: "/" });
        setCookie("_ringSizeStandardForCustomGemRing", ringSizeStandard, {
          path: "/",
        });
        setCookie("_ringSizeForCustomGemRing", ringSize, { path: "/" });
        window.location = "/create-your-own-gem-ring/review-order";
      } else if (cookies.whatGotSelectedFirstForCustomGemRing === undefined) {
        setCookie(
          "_ringSelectedForCustomGemRing",
          `${filteredGemstoneSettingData[ringNumber].stockNumber}`,
          { path: "/" }
        );
        setCookie("_ringMetalForCustomGemRing", metalSelected, { path: "/" });
        setCookie("_ringSizeStandardForCustomGemRing", ringSizeStandard, {
          path: "/",
        });
        setCookie("_ringSizeForCustomGemRing", ringSize, { path: "/" });
        setCookie("whatGotSelectedFirstForCustomGemRing", "ring", {
          path: "/",
        });
        setCookie(
          "_gemstoneTypeForCustomGemRing",
          `${urlStringArray[urlStringArray.length - 2]}`,
          { path: "/" }
        );
        window.location = `/create-your-own-gem-ring/gemstones/${
          urlStringArray[urlStringArray.length - 2]
        }`;
      } else {
        setCookie(
          "_ringSelectedForCustomGemRing",
          `${filteredGemstoneSettingData[ringNumber].stockNumber}`,
          { path: "/" }
        );
        setCookie("_ringMetalForCustomGemRing", metalSelected, { path: "/" });
        setCookie("_ringSizeStandardForCustomGemRing", ringSizeStandard, {
          path: "/",
        });
        setCookie("_ringSizeForCustomGemRing", ringSize, { path: "/" });
        setCookie("whatGotSelectedFirstForCustomGemRing", "ring", {
          path: "/",
        });
        setCookie(
          "_gemstoneTypeForCustomGemRing",
          `${urlStringArray[urlStringArray.length - 2]}`,
          { path: "/" }
        );
        window.location = `/create-your-own-gem-ring/gemstones/${
          urlStringArray[urlStringArray.length - 2]
        }`;
      }
    }
  };

  const getMetalName = () => {
    switch (metalSelected) {
      case 0:
        return "Silver";
        break;
      case 1:
        return "Panchdhatu";
        break;
      case 2:
        return "Platinum 950";
        break;
      case 3:
        return "18K Yellow Gold";
        break;
      case 4:
        return "18K White Gold";
        break;
      case 5:
        return "22K Yellow Gold";
        break;
    }
  };

  const addItemToWishlist = (item, itemType) => {
    if (wishlistStatus) {
      dispatch(letsShowFlash("Ring Removed From The Cart!"));
    } else {
      dispatch(letsShowFlash("Ring Added To The Cart!"));
    }
    setWishlistStatus(!wishlistStatus);
    dispatch(
      addToWishlist({ stockNumber: item.stockNumber, itemType: "gem-ring" })
    );
  };

  useEffect(() => {
    if (filteredGemstoneSettingData[ringNumber]) {
      let availability = wishlistItems.find(
        (wishlistItem, index) =>
          wishlistItem.stockNumber ===
          filteredGemstoneSettingData[ringNumber].stockNumber
      );
      if (availability) {
        setWishlistStatus(true);
      }
    }
  }, [filteredGemstoneSettingData[ringNumber]]);

  return ringImage ? (
    <GemSettingDetailsBox
      metalStatus={metalSelected}
      wishlistStatus={wishlistStatus}
    >
      <div className="details-page-upperbody">
        <div className="gemstone-setting-big-media-displayer">
          <div className="media-holder">
            <div className="left" onMouseMove={magnify} ref={innerRef}>
              <img src={ringImage} alt={`ring-${ringNumber}`} />
            </div>
            <div className="right">
              <div
                className="inner"
                style={{ backgroundImage: `url(${ringImage})` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="summary-holder">
          <section>
            <p className="heading">
              {urlStringArray[3]} Ring (R{ringNumber})
            </p>
            <p className="sku">
              <span style={{ fontWeight: "bold" }}>SKU: </span>LGC-
              {filteredGemstoneSettingData[ringNumber].stockNumber}
            </p>
            <p className="price">
              <span style={{ fontWeight: "bold" }}>
                Our Price : {cookies.currencyCode}{" "}
                {parseInt(
                  getTotalPrice(
                    "gem-ring",
                    null,
                    cookies,
                    null,
                    null,
                    metalSelected
                  )
                )}
              </span>
              <span style={{ fontSize: "1.3rem", display: "block" }}>
                (Price is for the ring only, excluding VAT)
              </span>
            </p>
          </section>

          <section className="drop-selection">
            <p>
              <span style={{ fontWeight: "bold" }}>Metal: </span>
              {getMetalName(metalSelected)}
            </p>
            <div id="gem-setting-metal-changer">
              <button onClick={() => setMetalSelected(0)}>
                <div>Silver</div>
              </button>
              <button onClick={() => setMetalSelected(1)}>
                <div>Panchdhatu</div>
              </button>
              <button onClick={() => setMetalSelected(2)}>
                <div>Platinum 950</div>
              </button>
              <button onClick={() => setMetalSelected(3)}>
                <div>18K Yellow Gold</div>
              </button>
              <button onClick={() => setMetalSelected(4)}>
                <div>18K White Gold</div>
              </button>
              <button onClick={() => setMetalSelected(5)}>
                <div>22K Yellow Gold</div>
              </button>
            </div>
          </section>

          <section className="drop-selection">
            <p style={{ marginBottom: "10px", marginTop: "10px" }}>
              <span style={{ fontWeight: "bold" }}>Ring Size: </span>{" "}
              <span style={{ color: "red" }}>{errorMessage}</span>
            </p>
            <div id="ring-selector">
              <select
                id="ring-standard"
                style={{ padding: "8px" }}
                value={ringSizeStandard}
                onChange={(e) => setRingSizeStandard(e.target.value)}
              >
                <option value={"AUD"}>Australia</option>
                <option value={"EUR"}>Europe</option>
                <option value={"INR"}>India</option>
                <option value={"NZD"}>New Zealand</option>
                <option value={"AED"}>Saudi Arabia</option>
                <option value={"SGD"}>Singapore</option>
                <option value={"GBP"}>United Kingdom</option>
                <option value={"USD"}>United States</option>
              </select>
              <select
                id="ring-sizes"
                style={{ padding: "8px" }}
                value={ringSize}
                onChange={changeRingSize}
              >
                {ringSizeArray}
              </select>
            </div>
          </section>

          <DeliverabilityChecker />

          <section className="buttons-container">
            <button onClick={onSelectRing}>Select Ring</button>
            <div
              onClick={() =>
                addItemToWishlist(filteredGemstoneSettingData[ringNumber])
              }
            >
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </section>

          <section className="summary-footer">
            <div className="social-sharing">
              <p style={{ margin: "6px 0px" }}>Share on: </p>
              <SocialSharing />
            </div>
          </section>
        </div>
      </div>
      <div className="details-page-lowerbody">
        {/* <section className="details-table">
                    <h3>
                        Gemstone Ring Details
                    </h3>
                    <div className='top-row'>
                        <p><span style={{fontWeight:'bold'}}>Stock no : </span>LGC-{gemObjectSelectedForRing.gemstone}-R{ringNumber}</p>
                        <p><span style={{fontWeight:'bold'}}> Price : </span> {cookies.currencyCode} {gemItem.pricePerCarat} per carat</p>
                    </div>
                    <div className='details-body'>
                        <div className='data-row'>
                            <p style={{fontWeight:'bold'}}>Name</p>
                            <p>{gemItem.gemDetails.gemName}</p>
                        </div>
                        <div className='data-row'>
                            <p style={{fontWeight:'bold'}}>Cut</p>
                            <p>{gemItem.gemDetails.cut}</p>
                        </div>
                        <div className='data-row'>
                            <p style={{fontWeight:'bold'}}>Composition</p>
                            <p>{gemItem.gemDetails.composition}</p>
                        </div>
                        <div className='data-row'>
                            <p style={{fontWeight:'bold'}}>Origin</p>
                            <p>{gemItem.gemDetails.origin}</p>
                        </div>
                        <div className='data-row'>
                            <p style={{fontWeight:'bold'}}>Color</p>
                            <p>{gemItem.gemDetails.color}</p>
                        </div>
                        <div className='data-row'>
                            <p style={{fontWeight:'bold'}}>Certification</p>
                            <p>{gemItem.gemDetails.certification}</p>
                        </div>
                        <div className='data-row'>
                            <p style={{fontWeight:'bold'}}>Treatment</p>
                            <p>{gemItem.gemDetails.treatment}</p>
                        </div>
                        <div className='data-row'>
                            <p style={{fontWeight:'bold'}}>Specific Gravity</p>
                            <p>{gemItem.gemDetails.specificGravity}</p>
                        </div>
                        <div className='data-row'>
                            <p style={{fontWeight:'bold'}}>Refractive Index</p>
                            <p>{gemItem.gemDetails.refractiveIndex}</p>
                        </div>
                        <div className='data-row'>
                            <p style={{fontWeight:'bold'}}>Shape</p>
                            <p>{gemItem.gemDetails.shape}</p>
                        </div>
                    </div>
                </section> */}
        <SmallUSPBanner />
        <USPBanner />
      </div>
    </GemSettingDetailsBox>
  ) : (
    <Loader />
  );
}
