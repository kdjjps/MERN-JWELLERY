import React, { useState, useRef, useEffect } from "react";
import { GemSettingDetailsBox } from "../GemstoneRingListings/style";
import { useParams } from "react-router-dom";
import SocialSharing from "../SocialSharing";
import USPBanner from "../USPBanner";
import SmallUSPBanner from "../SmallUSPBanner";
import { useCookies } from "react-cookie";
import getTotalPrice from "../../../../helper/getTotalPrice";
import DeliverabilityChecker from "../../DeliverabilityChecker";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../Loader/Loader";
import { addToWishlist } from "../../../../store/actions/wishlistActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { letsShowFlash } from "../../../../store/actions/flashAction.js";

export default function GemstonePendantDetails() {
  const innerRef = useRef();
  const data = useSelector((state) => state);

  const dispatch = useDispatch();

  const gemPendants = data.jewelryReducer.unfilteredGemstonesPendantsArray;
  const { stockNumber } = useParams();
  const [cookies, setCookie] = useCookies();
  const pendantNumber =
    stockNumber.split("-")[stockNumber.split("-").length - 1];
  const nfObject = new Intl.NumberFormat("en-US");
  const [metalSelected, setMetalSelected] = useState(0);

  const [wishlistStatus, setWishlistStatus] = useState(false);
  const wishlistItems = data.wishlistReducer.wishlistItems;

  let urlStringArray = window.location.pathname.split("/");
  const filteredGemstoneSettingData = gemPendants.filter(
    (pendantImage, index) => {
      return pendantImage.gemstone === urlStringArray[3];
    }
  );

  const magnify = (e) => {
    const inner = document.querySelector(".inner");
    let { left, top, width, height } = innerRef.current.getBoundingClientRect();
    let x = ((e.pageX - left) / width) * 100;
    let y = ((e.pageY - top) / height) * 100;
    inner.style.backgroundPosition = `${x}% ${y}%`;
  };

  const pendantImage =
    filteredGemstoneSettingData.length != 0
      ? filteredGemstoneSettingData[pendantNumber].pendant
      : null;

  const onSelectPendant = () => {
    if (cookies.whatGotSelectedFirstForCustomGemPendant === "gem") {
      setCookie(
        "_pendantSelectedForCustomGemPendant",
        `${filteredGemstoneSettingData[pendantNumber].stockNumber}`,
        { path: "/" }
      );
      setCookie("_pendantMetalForCustomGemPendant", metalSelected, {
        path: "/",
      });
      window.location = "/create-your-own-gem-pendant/review-order";
    } else if (cookies.whatGotSelectedFirstForCustomGemPendant === undefined) {
      setCookie(
        "_pendantSelectedForCustomGemPendant",
        `${filteredGemstoneSettingData[pendantNumber].stockNumber}`,
        { path: "/" }
      );
      setCookie("_pendantMetalForCustomGemPendant", metalSelected, {
        path: "/",
      });
      setCookie("whatGotSelectedFirstForCustomGemPendant", "pendant", {
        path: "/",
      });
      setCookie(
        "_gemstoneTypeForCustomGemPendant",
        `${urlStringArray[urlStringArray.length - 2]}`,
        { path: "/" }
      );
      window.location = `/create-your-own-gem-pendant/gemstones/${
        urlStringArray[urlStringArray.length - 2]
      }`;
    } else {
      setCookie(
        "_pendantSelectedForCustomGemPendant",
        `${filteredGemstoneSettingData[pendantNumber].stockNumber}`,
        { path: "/" }
      );
      setCookie("_pendantMetalForCustomGemPendant", metalSelected, {
        path: "/",
      });
      setCookie("whatGotSelectedFirstForCustomGemPendant", "pendant", {
        path: "/",
      });
      setCookie(
        "_gemstoneTypeForCustomGemPendant",
        `${urlStringArray[urlStringArray.length - 2]}`,
        { path: "/" }
      );
      window.location = `/create-your-own-gem-pendant/gemstones/${
        urlStringArray[urlStringArray.length - 2]
      }`;
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
        return "22K Yellow Gold";
        break;
      case 3:
        return "18K Yellow Gold";
        break;
      case 4:
        return "18K White Gold";
        break;
      case 5:
        return "Platinum 950";
        break;
    }
  };

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
    if (filteredGemstoneSettingData[pendantNumber]) {
      let availability = wishlistItems.find(
        (wishlistItem, index) =>
          wishlistItem.stockNumber ===
          filteredGemstoneSettingData[pendantNumber].stockNumber
      );
      if (availability) {
        setWishlistStatus(true);
      }
    }
  }, [filteredGemstoneSettingData[pendantNumber]]);

  return pendantImage ? (
    <GemSettingDetailsBox
      metalStatus={metalSelected}
      wishlistStatus={wishlistStatus}
    >
      <div className="details-page-upperbody">
        <div className="gemstone-setting-big-media-displayer">
          <div className="media-holder">
            <div class="left" onMouseMove={magnify} ref={innerRef}>
              <img src={pendantImage} alt={`pendant-${pendantNumber}`} />
            </div>
            <div class="right">
              <div
                class="inner"
                style={{ backgroundImage: `url(${pendantImage})` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="summary-holder">
          <section>
            <p className="heading">
              {urlStringArray[3]} Pendant (P{pendantNumber})
            </p>
            <p className="sku">
              <span style={{ fontWeight: "bold" }}>SKU: </span>LGC-
              {filteredGemstoneSettingData[pendantNumber].stockNumber}
            </p>
            <p className="price">
              <span style={{ fontWeight: "bold" }}>
                Our Price : {cookies.currencyCode}{" "}
                {parseInt(
                  getTotalPrice(
                    "gem-pendant",
                    null,
                    cookies,
                    null,
                    null,
                    metalSelected
                  )
                )}
              </span>
              <span style={{ fontSize: "1.3rem", display: "block" }}>
                (Price is for the pendant only, excluding VAT)
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
                <div>22K Yellow Gold</div>
              </button>
              <button onClick={() => setMetalSelected(3)}>
                <div>18K Yellow Gold</div>
              </button>
              <button onClick={() => setMetalSelected(4)}>
                <div>18K White Gold</div>
              </button>
              <button onClick={() => setMetalSelected(5)}>
                <div>Platinum 950</div>
              </button>
            </div>
          </section>

          <DeliverabilityChecker />

          <section className="buttons-container">
            <button onClick={onSelectPendant}>Select Pendant</button>
            <div
              onClick={() =>
                addItemToWishlist(filteredGemstoneSettingData[pendantNumber])
              }
            >
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </section>

          <section className="summary-footer">
            <div className="social-shapendant">
              <p style={{ margin: "6px 0px" }}>Share on: </p>
              <SocialSharing />
            </div>
          </section>
        </div>
      </div>
      <div className="details-page-lowerbody">
        <section className="details-table">
          <h3>Gemstone Pendant Details</h3>
          {/* <div className='details-body'>
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
                    </div> */}
        </section>
        <SmallUSPBanner />
        <USPBanner />
      </div>
    </GemSettingDetailsBox>
  ) : (
    <Loader />
  );
}
