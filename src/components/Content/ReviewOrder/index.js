import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import getImage from "../../../helper/getImage";
import ReviewOrderBox from "./style";
import { useRouteMatch } from "react-router-dom";
import getTotalPrice from "../../../helper/getTotalPrice";
import { useSelector, useDispatch } from "react-redux";
import {
  addCustomizedGemRing,
  addCustomizedGemPendant,
  addCustomizedRing,
  addCustomizedNecklace,
  addCustomizedStud,
} from "../../../store/actions/cartActions";
import { letsShowFlash } from "../../../store/actions/flashAction";
import Loader from "../Loader/Loader";

export default function ReviewOrder({ isMasterAllSet }) {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const nfObject = new Intl.NumberFormat("en-US");
  const { path } = useRouteMatch();
  const data = useSelector((state) => state);

  const dispatch = useDispatch();

  const [diamondDisplayer, setDiamondDisplayer] = useState(true);
  const [jewelryDisplayer, setJewelryDisplayer] = useState(false);
  const [studMetalCode, setStudMetalCode] = useState(0);

  const rings = data.jewelryReducer.unfilteredSolitaireRingsArray;
  const necklaces = data.jewelryReducer.unfilteredSolitaireNecklacesArray;
  const studs = data.jewelryReducer.unfilteredSolitaireStudsArray;
  const allDiamonds = data.diamondReducer.unfilteredDiamondArray;
  const allGemstones = data.jewelryReducer.unfilteredGemstonesArray;
  const gemRings = data.jewelryReducer.unfilteredGemstonesRingsArray;
  const gemPendants = data.jewelryReducer.unfilteredGemstonesPendantsArray;

  const diamondForNecklace = allDiamonds.find((item, index) => {
    if (cookies._diamondSelectedForCustomNecklace) {
      return item.stockNumber === cookies._diamondSelectedForCustomNecklace;
    }
  });

  const diamondForRing = allDiamonds.find((item, index) => {
    if (cookies._diamondSelectedForCustomRing) {
      return item.stockNumber === cookies._diamondSelectedForCustomRing;
    }
  });

  console.log(diamondForRing);

  const firstDiamondForStud = allDiamonds.find((item, index) => {
    if (cookies._firstDiamondSelectedForCustomStud) {
      return item.stockNumber === cookies._firstDiamondSelectedForCustomStud;
    }
  });

  const secondDiamondForStud = allDiamonds.find((item, index) => {
    if (cookies._secondDiamondSelectedForCustomStud) {
      return item.stockNumber === cookies._secondDiamondSelectedForCustomStud;
    }
  });

  const ring = rings.find((ring, index) => {
    if (cookies._ringSelectedForCustomRing) {
      let ringId = cookies._ringSelectedForCustomRing.slice(7, 11);
      return ring.stockNumber === ringId;
    } else {
      return false;
    }
  });

  const necklace = necklaces.find((necklace, index) => {
    if (cookies._necklaceSelectedForCustomNecklace) {
      let necklaceId = cookies._necklaceSelectedForCustomNecklace.slice(7, 11);
      return necklace.stockNumber === necklaceId;
    } else {
      return false;
    }
  });

  const stud = studs.find((stud, index) => {
    if (cookies._studSelectedForCustomStud) {
      let studId = cookies._studSelectedForCustomStud;
      return stud.stockNumber === studId;
    } else {
      return false;
    }
  });

  // Start of custom gem ring section
  const gemstoneForRing = allGemstones.find((item, index) => {
    if (cookies._gemstoneSelectedForCustomGemRing) {
      return (
        item.stockNumber ===
        cookies._gemstoneSelectedForCustomGemRing.stockNumber
      );
    }
  });

  const ringForGemstone = gemRings.find((item, index) => {
    if (cookies._ringSelectedForCustomGemRing) {
      return item.stockNumber === cookies._ringSelectedForCustomGemRing;
    }
  });

  // End of custom gem ring section

  const gemstoneForPendant = allGemstones.find((item, index) => {
    if (cookies._gemstoneSelectedForCustomGemPendant) {
      return (
        item.stockNumber ===
        cookies._gemstoneSelectedForCustomGemPendant.stockNumber
      );
    }
  });

  const pendantForGemstone = gemPendants.find((item, index) => {
    if (cookies._pendantSelectedForCustomGemPendant) {
      return item.stockNumber === cookies._pendantSelectedForCustomGemPendant;
    }
  });

  const ringMetalCode = cookies._ringSelected ? cookies._ringSelected[11] : 0;
  const necklaceMetalCode = cookies._necklaceSelected
    ? cookies._necklaceSelected[11]
    : 0;

  useEffect(() => {
    switch (cookies._studMetal) {
      case "white-gold":
        setStudMetalCode("0");
        break;
      case "yellow-gold":
        setStudMetalCode("1");
        break;
      case "rose-gold":
        setStudMetalCode("2");
        break;
      case "platinum":
        setStudMetalCode("3");
        break;
    }
  }, []);

  const handleAddToCart = () => {
    switch (path) {
      case "/create-your-own-ring/review-order":
        dispatch(
          addCustomizedRing({
            diamondId: cookies._diamondSelectedForCustomRing,
            ringId: cookies._ringSelectedForCustomRing.slice(7, 11),
            ringSize: cookies._ringSizeForCustomRing,
            ringSizeStandard: cookies._ringSizeStandardForCustomRing,
            metal: cookies._ringMetalForCustomRing,
            diamondShape: diamondForRing.diamondShape,
            carat: diamondForRing.carat,
            lab: diamondForRing.lab,
            color: diamondForRing.color,
            clarity: diamondForRing.clarity,
            cut: diamondForRing.cut,
            culet: diamondForRing.culet,
            symmetry: diamondForRing.symmetry,
            fluorescence: diamondForRing.fluorescence,
            measurement: diamondForRing.measurement,
            polish: diamondForRing.polish,
            girdlePercentage: diamondForRing.girdlePercentage,
            ratio: diamondForRing.ratio,
            table: diamondForRing.table,
            depth: diamondForRing.depthPercentage,
            black: diamondForRing.black,
            white: diamondForRing.white,
          })
        );
        dispatch(letsShowFlash("Custom Diamond Ring Added To The Cart"));
        removeCookie("_diamondSelectedForCustomRing", { path: "/" });
        removeCookie(" _diamondShapeSelectedForCustomRing", { path: "/" });
        removeCookie("_ringSelectedForCustomRing", { path: "/" });
        removeCookie("_ringSizeForCustomRing", { path: "/" });
        removeCookie("_ringSizeStandardForCustomRing", { path: "/" });
        removeCookie("_ringMetalForCustomRing", { path: "/" });
        removeCookie("whatGotSelectedFirstForCustomRing", { path: "/" });
        window.location = "/";
        break;
      case "/create-your-own-necklace/review-order":
        dispatch(
          addCustomizedNecklace({
            diamondId: cookies._diamondSelectedForCustomNecklace,
            necklaceId: cookies._necklaceSelectedForCustomNecklace.slice(7, 11),
            necklaceLength: cookies._necklaceLengthForCustomNecklace,
            metal: cookies._necklaceMetalForCustomNecklace,
            diamondShape: diamondForNecklace.diamondShape,
            carat: diamondForNecklace.carat,
            lab: diamondForNecklace.lab,
            color: diamondForNecklace.color,
            clarity: diamondForNecklace.clarity,
            cut: diamondForNecklace.cut,
            culet: diamondForNecklace.culet,
            symmetry: diamondForNecklace.symmetry,
            fluorescence: diamondForNecklace.fluorescence,
            measurement: diamondForNecklace.measurement,
            polish: diamondForNecklace.polish,
            girdlePercentage: diamondForNecklace.girdlePercentage,
            ratio: diamondForNecklace.ratio,
            table: diamondForNecklace.table,
            depth: diamondForNecklace.depthPercentage,
            black: diamondForNecklace.black,
            white: diamondForNecklace.white,
          })
        );
        dispatch(letsShowFlash("Custom Diamond Necklace Added To The Cart"));
        removeCookie("_necklaceSelectedForCustomNecklace", { path: "/" });
        removeCookie("_necklaceMetalForCustomNecklace", { path: "/" });
        removeCookie("_necklaceLengthForCustomNecklace", { path: "/" });
        removeCookie("_diamondShapeSelectedForCustomNecklace", { path: "/" });
        removeCookie("_diamondSelectedForCustomNecklace", { path: "/" });
        removeCookie("whatGotSelectedFirstForCustomNecklace", { path: "/" });
        window.location = "/";
        break;
      case "/create-your-own-stud/review-order":
        dispatch(
          addCustomizedStud({
            firstDiamondId: cookies._firstDiamondSelectedForCustomStud,
            secondDiamondId: cookies._secondDiamondSelectedForCustomStud,
            studId: cookies._studSelectedForCustomStud,
            shape: cookies._diamondShapeSelectedForCustomStud,
            metal: cookies._studMetalForCustomStud,
            backing: cookies._studBackingSelectedForCustomStud,
            firstDiamondCarat: firstDiamondForStud.carat,
            firstDiamondLab: firstDiamondForStud.lab,
            firstDiamondColor: firstDiamondForStud.color,
            firstDiamondClarity: firstDiamondForStud.clarity,
            firstDiamondCut: firstDiamondForStud.cut,
            firstDiamondCulet: firstDiamondForStud.culet,
            firstDiamondSymmetry: firstDiamondForStud.symmetry,
            firstDiamondFluorescence: firstDiamondForStud.fluorescence,
            firstDiamondMeasurement: firstDiamondForStud.measurement,
            firstDiamondPolish: firstDiamondForStud.polish,
            firstDiamondGirdlePercentage: firstDiamondForStud.girdlePercentage,
            firstDiamondRatio: firstDiamondForStud.ratio,
            firstDiamondTable: firstDiamondForStud.table,
            firstDiamondDepth: firstDiamondForStud.depthPercentage,
            firstDiamondBlack: firstDiamondForStud.black,
            firstDiamondWhite: firstDiamondForStud.white,
            secondDiamondCarat: secondDiamondForStud.carat,
            secondDiamondLab: secondDiamondForStud.lab,
            secondDiamondColor: secondDiamondForStud.color,
            secondDiamondClarity: secondDiamondForStud.clarity,
            secondDiamondCut: secondDiamondForStud.cut,
            secondDiamondCulet: secondDiamondForStud.culet,
            secondDiamondSymmetry: secondDiamondForStud.symmetry,
            secondDiamondFluorescence: secondDiamondForStud.fluorescence,
            secondDiamondMeasurement: secondDiamondForStud.measurement,
            secondDiamondPolish: secondDiamondForStud.polish,
            secondDiamondGirdlePercentage:
              secondDiamondForStud.girdlePercentage,
            secondDiamondRatio: secondDiamondForStud.ratio,
            secondDiamondTable: secondDiamondForStud.table,
            secondDiamondDepth: secondDiamondForStud.depthPercentage,
            secondDiamondBlack: secondDiamondForStud.black,
            secondDiamondWhite: secondDiamondForStud.white,
          })
        );
        dispatch(letsShowFlash("Custom Diamond Stud Added To The Cart"));
        removeCookie("_studMetalForCustomStud", { path: "/" });
        removeCookie("_studBackingSelectedForCustomStud", { path: "/" });
        removeCookie("_diamondShapeSelectedForCustomStud", { path: "/" });
        removeCookie("_diamondCaratSelectedForCustomStud", { path: "/" });
        removeCookie("_studSelectedForCustomStud", { path: "/" });
        removeCookie("_firstDiamondSelectedForCustomStud", { path: "/" });
        removeCookie("_secondDiamondSelectedForCustomStud", { path: "/" });
        removeCookie("whatGotSelectedFirstForCustomStud", { path: "/" });
        removeCookie("whatGotSelectedSecondForCustomStud", { path: "/" });
        window.location = "/";
        break;
      case "/create-your-own-gem-ring/review-order":
        dispatch(
          addCustomizedGemRing({
            gemId: gemstoneForRing.stockNumber,
            gemstoneWeight: cookies._gemstoneWeightForCustomGemRing,
            gemstoneCertification:
              cookies._gemstoneCertificationForCustomGemRing,
            ringId: cookies._ringSelectedForCustomGemRing,
            ringMetal: cookies._ringMetalForCustomGemRing,
            ringSizeStandard: cookies._ringSizeStandardForCustomGemRing,
            ringSize: cookies._ringSizeForCustomGemRing,
          })
        );
        dispatch(letsShowFlash("Custom Gem Ring Added To The Cart"));
        removeCookie("whatGotSelectedFirstForCustomGemRing", { path: "/" });
        removeCookie("_gemstoneSelectedForCustomGemRing", { path: "/" });
        removeCookie("_gemstoneWeightForCustomGemRing", { path: "/" });
        removeCookie("_gemstoneCertificationForCustomGemRing", { path: "/" });
        removeCookie("_ringSelectedForCustomGemRing", { path: "/" });
        removeCookie("_ringMetalForCustomGemRing", { path: "/" });
        removeCookie("_ringSizeStandardForCustomGemRing", { path: "/" });
        removeCookie("_ringSizeForCustomGemRing", { path: "/" });
        removeCookie("_gemstoneTypeForCustomGemRing", { path: "/" });
        window.location = "/";
        break;
      case "/create-your-own-gem-pendant/review-order":
        dispatch(
          addCustomizedGemPendant({
            gemId: gemstoneForPendant.stockNumber,
            gemstoneWeight: cookies._gemstoneWeightForCustomGemPendant,
            gemstoneCertification:
              cookies._gemstoneCertificationForCustomGemPendant,
            pendantId: cookies._pendantSelectedForCustomGemPendant,
            pendantMetal: cookies._pendantMetalForCustomGemPendant,
          })
        );
        dispatch(letsShowFlash("Custom Gem Pendant Added To The Cart"));
        removeCookie("whatGotSelectedFirstForCustomGemPendant", { path: "/" });
        removeCookie("_gemstoneSelectedForCustomGemPendant", { path: "/" });
        removeCookie("_gemstoneWeightForCustomGemPendant", { path: "/" });
        removeCookie("_gemstoneCertificationForCustomGemPendant", {
          path: "/",
        });
        removeCookie("_pendantSelectedForCustomGemPendant", { path: "/" });
        removeCookie("_pendantMetalForCustomGemPendant", { path: "/" });
        removeCookie("_gemstoneTypeForCustomGemPendant", { path: "/" });
        window.location = "/";
        break;
      default:
        return;
    }
  };

  return isMasterAllSet ? (
    path === "/create-your-own-ring/review-order" && diamondForRing && ring ? (
      <ReviewOrderBox
        diamondDisplayer={diamondDisplayer}
        jewelryDisplayer={jewelryDisplayer}
      >
        <div className="data-holder">
          <section className="diamond-displayer">
            <img
              className="diamond-image"
              src={
                diamondForRing.imageUrl.length > 5
                  ? diamondForRing.imageUrl
                  : getImage(diamondForRing.diamondShape).imgURL
              }
              alt="diamond"
              id={diamondForRing.stockNumber}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = getImage(diamondForRing.diamondShape).imgURL;
              }}
            />
            <img
              className="jewelry-image"
              src={ring.metals[ringMetalCode].imgURL}
              onClick={() => {
                setJewelryDisplayer(true);
                setDiamondDisplayer(false);
              }}
            />
          </section>
          <section className="jewelry-displayer">
            <img
              className="diamond-image"
              src={
                diamondForRing.imageUrl.length > 5
                  ? diamondForRing.imageUrl
                  : getImage(diamondForRing.diamondShape).imgURL
              }
              alt="diamond"
              id={diamondForRing.stockNumber}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = getImage(diamondForRing.diamondShape).imgURL;
              }}
              onClick={() => {
                setDiamondDisplayer(true);
                setJewelryDisplayer(false);
              }}
            />
            <img
              className="jewelry-image"
              src={ring.metals[ringMetalCode].imgURL}
            />
          </section>
        </div>
        <div className="data-holder">
          <div>
            <h2>Custom Diamond Jewelry</h2>
            <section className="details-container">
              <div className="details">
                <div style={{ display: "flex" }}>
                  <img src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/diamond_dbdbdb_38x38.png" />
                  <div>
                    <p className="text-detail">
                      {diamondForRing.carat} Carat{" "}
                      {diamondForRing.cut != "-"
                        ? `${diamondForRing.cut} Cut`
                        : ""}
                      {diamondForRing.diamondShape} Shaped Diamond
                    </p>
                    <p className="number-detail">
                      <span style={{ fontWeight: "bold" }}>SKU:</span>{" "}
                      {diamondForRing.stockNumber}{" "}
                      <span style={{ fontWeight: "bold" }}>Price:</span>{" "}
                      {cookies.currencyCode}{" "}
                      {nfObject.format(
                        parseInt(
                          getTotalPrice(
                            "loose-diamond",
                            diamondForRing,
                            cookies
                          )
                        )
                      )}
                    </p>
                  </div>
                </div>
                <a
                  href={`/create-your-own-ring/diamonds?name=${diamondForRing.diamondShape}`}
                >
                  Change
                </a>
              </div>
              <hr style={{ margin: "5px 0px" }} />
              <div className="details">
                <div style={{ display: "flex" }}>
                  <img src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/setting_dbdbdb_38x38.png" />
                  <div>
                    <p className="text-detail">
                      {ring.ringName} {ring.diamondShape} Solitaire Ring
                    </p>
                    <p className="number-detail">
                      <span style={{ fontWeight: "bold" }}>SKU:</span> LGC-CJ-
                      {ring.stockNumber}
                      {ringMetalCode}{" "}
                      <span style={{ fontWeight: "bold" }}>Price:</span>{" "}
                      {cookies.currencyCode}{" "}
                      {nfObject.format(
                        parseInt(getTotalPrice("custom-ring", ring, cookies))
                      )}
                    </p>
                  </div>
                </div>
                <a
                  href={`/create-your-own-ring/rings?shape=${ring.diamondShape}`}
                >
                  Change
                </a>
              </div>
            </section>
          </div>

          <div>
            <h2>
              Total Price: {cookies.currencyCode}{" "}
              {parseInt(
                getTotalPrice("custom-ring", ring, cookies) +
                  getTotalPrice("loose-diamond", diamondForRing, cookies)
              )}
            </h2>
            <p style={{ fontStyle: "italic" }}>(Without GST and VAT)</p>
          </div>

          <button onClick={handleAddToCart}>Add To Cart</button>
        </div>
      </ReviewOrderBox>
    ) : path === "/create-your-own-necklace/review-order" &&
      diamondForNecklace &&
      necklace ? (
      <ReviewOrderBox
        diamondDisplayer={diamondDisplayer}
        jewelryDisplayer={jewelryDisplayer}
      >
        <div className="data-holder">
          <section className="diamond-displayer">
            <img
              className="diamond-image"
              src={
                diamondForNecklace.imageUrl.length > 5
                  ? diamondForNecklace.imageUrl
                  : getImage(diamondForNecklace.diamondShape).imgURL
              }
              alt="diamond"
              id={diamondForNecklace.stockNumber}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = getImage(diamondForNecklace.diamondShape).imgURL;
              }}
            />
            <img
              className="jewelry-image"
              src={necklace.metals[necklaceMetalCode].imgURL}
              onClick={() => {
                setJewelryDisplayer(true);
                setDiamondDisplayer(false);
              }}
            />
          </section>
          <section className="jewelry-displayer">
            <img
              className="diamond-image"
              src={
                diamondForNecklace.imageUrl.length > 5
                  ? diamondForNecklace.imageUrl
                  : getImage(diamondForNecklace.diamondShape).imgURL
              }
              alt="diamond"
              id={diamondForNecklace.stockNumber}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = getImage(diamondForNecklace.diamondShape).imgURL;
              }}
              onClick={() => {
                setDiamondDisplayer(true);
                setJewelryDisplayer(false);
              }}
            />
            <img
              className="jewelry-image"
              src={necklace.metals[necklaceMetalCode].imgURL}
            />
          </section>
        </div>
        <div className="data-holder">
          <div>
            <h2>Custom Diamond Jewelry</h2>
            <section className="details-container">
              <div className="details">
                <div style={{ display: "flex" }}>
                  <img src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/diamond_dbdbdb_38x38.png" />
                  <div>
                    <p className="text-detail">
                      {diamondForNecklace.carat} Carat {diamondForNecklace.cut}{" "}
                      Cut {diamondForNecklace.shape} Shaped Diamond
                    </p>
                    <p className="number-detail">
                      <span style={{ fontWeight: "bold" }}>SKU:</span>{" "}
                      {diamondForNecklace.stockNumber}{" "}
                      <span style={{ fontWeight: "bold" }}>Price:</span>{" "}
                      {cookies.currencyCode}{" "}
                      {nfObject.format(
                        parseInt(
                          getTotalPrice(
                            "loose-diamond",
                            diamondForNecklace,
                            cookies
                          )
                        )
                      )}
                    </p>
                  </div>
                </div>
                <a
                  href={`/create-your-own-necklace/diamonds?name=${diamondForNecklace.diamondShape}`}
                >
                  Change
                </a>
              </div>
              <hr style={{ margin: "5px 0px" }} />
              <div className="details">
                <div style={{ display: "flex" }}>
                  <img src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/setting_dbdbdb_38x38.png" />
                  <div>
                    <p className="text-detail">
                      {necklace.necklaceName} {necklace.diamondShape} Solitaire
                      Ring
                    </p>
                    <p className="number-detail">
                      <span style={{ fontWeight: "bold" }}>SKU:</span> LGC-CJ-
                      {necklace.stockNumber}
                      {necklaceMetalCode}{" "}
                      <span style={{ fontWeight: "bold" }}>Price:</span>{" "}
                      {cookies.currencyCode}{" "}
                      {nfObject.format(
                        parseInt(
                          getTotalPrice("custom-necklace", necklace, cookies)
                        )
                      )}
                    </p>
                  </div>
                </div>
                <a
                  href={`/create-your-own-necklace/necklaces?shape=${necklace.diamondShape}`}
                >
                  Change
                </a>
              </div>
            </section>
          </div>

          <div>
            <h2>
              Total Price: {cookies.currencyCode}{" "}
              {parseInt(
                getTotalPrice("loose-diamond", diamondForNecklace, cookies) +
                  getTotalPrice("custom-necklace", necklace, cookies)
              )}
            </h2>
            <p style={{ fontStyle: "italic" }}>(Without GST and VAT)</p>
          </div>

          <button onClick={handleAddToCart}>Add To Cart</button>
        </div>
      </ReviewOrderBox>
    ) : path === "/create-your-own-stud/review-order" &&
      firstDiamondForStud &&
      secondDiamondForStud &&
      stud ? (
      <ReviewOrderBox
        diamondDisplayer={diamondDisplayer}
        jewelryDisplayer={jewelryDisplayer}
      >
        <div className="data-holder">
          <section className="diamond-displayer">
            <img
              className="diamond-image"
              src={
                firstDiamondForStud.imageUrl.length > 5
                  ? firstDiamondForStud.imageUrl
                  : getImage(firstDiamondForStud.shape).imgURL
              }
              alt="diamond"
              id={firstDiamondForStud.stockNumber}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = getImage(firstDiamondForStud.shape).imgURL;
              }}
            />
            <img
              className="jewelry-image"
              src={stud.metals[studMetalCode].imgURL}
              onClick={() => {
                setJewelryDisplayer(true);
                setDiamondDisplayer(false);
              }}
            />
          </section>
          <section className="jewelry-displayer">
            <img
              className="diamond-image"
              src={
                firstDiamondForStud.imageUrl.length > 5
                  ? firstDiamondForStud.imageUrl
                  : getImage(firstDiamondForStud.shape).imgURL
              }
              alt="diamond"
              id={firstDiamondForStud.stockNumber}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = getImage(firstDiamondForStud.shape).imgURL;
              }}
              onClick={() => {
                setDiamondDisplayer(true);
                setJewelryDisplayer(false);
              }}
            />
            <img
              className="jewelry-image"
              src={stud.metals[studMetalCode].imgURL}
            />
          </section>
        </div>
        <div className="data-holder">
          <div>
            <h2>Custom Diamond Jewelry</h2>
            <section className="details-container">
              <div className="details">
                <div style={{ display: "flex" }}>
                  <img src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/diamond_dbdbdb_38x38.png" />
                  <div>
                    <p className="text-detail">
                      {firstDiamondForStud.carat} Carat{" "}
                      {firstDiamondForStud.cut} Cut {firstDiamondForStud.shape}{" "}
                      Shaped Diamond
                    </p>
                    <p className="number-detail">
                      <span style={{ fontWeight: "bold" }}>SKU:</span>{" "}
                      {firstDiamondForStud.stockNumber}{" "}
                      <span style={{ fontWeight: "bold" }}>Price:</span>{" "}
                      {cookies.currencyCode}{" "}
                      {nfObject.format(
                        parseInt(
                          getTotalPrice(
                            "loose-diamond",
                            firstDiamondForStud,
                            cookies
                          )
                        )
                      )}
                    </p>
                  </div>
                </div>
                <a
                  href={`/create-your-own-stud/diamonds/first?name=${firstDiamondForStud.diamondShape}`}
                >
                  Change
                </a>
              </div>
              <hr style={{ margin: "5px 0px" }} />
              <div className="details">
                <div style={{ display: "flex" }}>
                  <img src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/diamond_dbdbdb_38x38.png" />
                  <div>
                    <p className="text-detail">
                      {secondDiamondForStud.carat} Carat{" "}
                      {secondDiamondForStud.cut} Cut{" "}
                      {secondDiamondForStud.shape} Shaped Diamond
                    </p>
                    <p className="number-detail">
                      <span style={{ fontWeight: "bold" }}>SKU:</span>{" "}
                      {secondDiamondForStud.stockNumber}{" "}
                      <span style={{ fontWeight: "bold" }}>Price:</span>{" "}
                      {cookies.currencyCode}{" "}
                      {nfObject.format(
                        parseInt(
                          getTotalPrice(
                            "loose-diamond",
                            secondDiamondForStud,
                            cookies
                          )
                        )
                      )}
                    </p>
                  </div>
                </div>
                <a
                  href={`/create-your-own-stud/diamonds/second?name=${secondDiamondForStud.diamondShape}`}
                >
                  Change
                </a>
              </div>
              <hr style={{ margin: "5px 0px" }} />
              <div className="details">
                <div style={{ display: "flex" }}>
                  <img src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/setting_dbdbdb_38x38.png" />
                  <div>
                    <p className="text-detail">
                      {stud.studName} {stud.diamondShape} Solitaire Stud
                    </p>
                    <p className="number-detail">
                      <span style={{ fontWeight: "bold" }}>SKU:</span> LGC-CJ-
                      {stud.stockNumber}
                      {studMetalCode}{" "}
                      <span style={{ fontWeight: "bold" }}>Price:</span>{" "}
                      {cookies.currencyCode}{" "}
                      {nfObject.format(
                        parseInt(getTotalPrice("custom-stud", stud, cookies))
                      )}
                    </p>
                  </div>
                </div>
                <a
                  href={`/create-your-own-stud/studs?shape=${stud.diamondShape}`}
                >
                  Change
                </a>
              </div>
            </section>
          </div>

          <div>
            <h2>
              Total Price: {cookies.currencyCode}{" "}
              {nfObject.format(
                parseInt(
                  getTotalPrice("loose-diamond", firstDiamondForStud, cookies) +
                    getTotalPrice(
                      "loose-diamond",
                      secondDiamondForStud,
                      cookies
                    ) +
                    getTotalPrice("custom-stud", stud, cookies)
                )
              )}
            </h2>
            <p style={{ fontStyle: "italic" }}>(Without GST and VAT)</p>
          </div>

          <button onClick={handleAddToCart}>Add To Cart</button>
        </div>
      </ReviewOrderBox>
    ) : path === "/create-your-own-gem-ring/review-order" &&
      gemstoneForRing &&
      ringForGemstone ? (
      <ReviewOrderBox
        diamondDisplayer={diamondDisplayer}
        jewelryDisplayer={jewelryDisplayer}
      >
        <div className="data-holder">
          <section className="diamond-displayer">
            <img
              className="diamond-image"
              src={gemstoneForRing.images[0]}
              alt="gemstone"
              id={gemstoneForRing.gemId}
            />
            <img
              className="jewelry-image"
              src={ringForGemstone.ring}
              onClick={() => {
                setJewelryDisplayer(true);
                setDiamondDisplayer(false);
              }}
            />
          </section>
          <section className="jewelry-displayer">
            <img
              className="diamond-image"
              src={gemstoneForRing.images[0]}
              alt="gemstone"
              id={gemstoneForRing.gemId}
              onClick={() => {
                setDiamondDisplayer(true);
                setJewelryDisplayer(false);
              }}
            />
            <img className="jewelry-image" src={ringForGemstone.ring} />
          </section>
        </div>
        <div className="data-holder">
          <div>
            <h2>Custom Gemstone Jewelry</h2>
            <section className="details-container">
              <div className="details">
                <div style={{ display: "flex" }}>
                  <img src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/diamond_dbdbdb_38x38.png" />
                  <div>
                    <p className="text-detail">
                      {gemstoneForRing.pricePerCarat} Price Per Carat{" "}
                      {cookies._gemstoneSelectedForCustomGemRing.gemstone}{" "}
                      Diamond
                    </p>
                    <p className="number-detail">
                      <span style={{ fontWeight: "bold" }}>SKU:</span>{" "}
                      {cookies._ringSelectedForCustomGemRing}{" "}
                      <span style={{ fontWeight: "bold" }}>Price:</span>{" "}
                      {cookies.currencyCode}{" "}
                      {nfObject.format(
                        parseInt(
                          getTotalPrice(
                            "loose-gemstone",
                            gemstoneForRing,
                            cookies,
                            null,
                            null,
                            cookies._gemstoneWeightForCustomGemRing,
                            null,
                            cookies._gemstoneCertificationForCustomGemRing
                          )
                        )
                      )}
                    </p>
                  </div>
                </div>
                <a>Change</a>
              </div>
              <hr style={{ margin: "5px 0px" }} />
              <div className="details">
                <div style={{ display: "flex" }}>
                  <img src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/setting_dbdbdb_38x38.png" />
                  <div>
                    <p className="text-detail"> Ring</p>
                    <p className="number-detail">
                      <span style={{ fontWeight: "bold" }}>SKU:</span> LGC-
                      {cookies._gemstoneSelectedForCustomGemRing.gemstone}-
                      {cookies._ringSelectedForCustomGemRing}{" "}
                      <span style={{ fontWeight: "bold" }}>Price:</span>{" "}
                      {cookies.currencyCode}{" "}
                      {nfObject.format(
                        parseInt(
                          getTotalPrice(
                            "gem-ring",
                            null,
                            cookies,
                            null,
                            null,
                            cookies._ringMetalForCustomGemRing
                          )
                        )
                      )}
                    </p>
                  </div>
                </div>
                <a>Change</a>
              </div>
            </section>
          </div>

          <div>
            <h2>
              Total Price: {cookies.currencyCode}{" "}
              {nfObject.format(
                getTotalPrice(
                  "gem-ring",
                  null,
                  cookies,
                  null,
                  null,
                  cookies._ringMetalForCustomGemRing
                ) +
                  getTotalPrice(
                    "loose-gemstone",
                    gemstoneForRing,
                    cookies,
                    null,
                    null,
                    cookies._gemstoneWeightForCustomGemRing,
                    null,
                    cookies._gemstoneCertificationForCustomGemRing
                  )
              )}
            </h2>
            <p style={{ fontStyle: "italic" }}>(Without GST and VAT)</p>
          </div>

          <button onClick={handleAddToCart}>Add To Cart</button>
        </div>
      </ReviewOrderBox>
    ) : path === "/create-your-own-gem-pendant/review-order" &&
      gemstoneForPendant &&
      pendantForGemstone ? (
      <ReviewOrderBox
        diamondDisplayer={diamondDisplayer}
        jewelryDisplayer={jewelryDisplayer}
      >
        <div className="data-holder">
          <section className="diamond-displayer">
            <img
              className="diamond-image"
              src={gemstoneForPendant.images[0]}
              alt="gemstone"
              id={gemstoneForPendant.gemId}
            />
            <img
              className="jewelry-image"
              src={pendantForGemstone.pendant}
              onClick={() => {
                setJewelryDisplayer(true);
                setDiamondDisplayer(false);
              }}
            />
          </section>
          <section className="jewelry-displayer">
            <img
              className="diamond-image"
              src={gemstoneForPendant.images[0]}
              alt="gemstone"
              id={gemstoneForPendant.gemId}
              onClick={() => {
                setDiamondDisplayer(true);
                setJewelryDisplayer(false);
              }}
            />
            <img className="jewelry-image" src={pendantForGemstone.pendant} />
          </section>
        </div>
        <div className="data-holder">
          <div>
            <h2>Custom Gemstone Jewelry</h2>
            <section className="details-container">
              <div className="details">
                <div style={{ display: "flex" }}>
                  <img src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/diamond_dbdbdb_38x38.png" />
                  <div>
                    <p className="text-detail">
                      {gemstoneForPendant.pricePerCarat} Price Per Carat{" "}
                      {cookies._gemstoneSelectedForCustomGemPendant.gemstone}{" "}
                      Diamond
                    </p>
                    <p className="number-detail">
                      <span style={{ fontWeight: "bold" }}>SKU:</span>{" "}
                      {cookies._pendantSelectedForCustomGemPendant}{" "}
                      <span style={{ fontWeight: "bold" }}>
                        Price:{" "}
                        {nfObject.format(
                          getTotalPrice(
                            "loose-gemstone",
                            gemstoneForPendant,
                            cookies,
                            null,
                            null,
                            cookies._gemstoneWeightForCustomGemPendant,
                            null,
                            cookies._gemstoneCertificationForCustomGemPendant
                          )
                        )}
                      </span>{" "}
                    </p>
                  </div>
                </div>
                <a>Change</a>
              </div>
              <hr style={{ margin: "5px 0px" }} />
              <div className="details">
                <div style={{ display: "flex" }}>
                  <img src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/setting_dbdbdb_38x38.png" />
                  <div>
                    <p className="text-detail"> Pendant</p>
                    <p className="number-detail">
                      <span style={{ fontWeight: "bold" }}>SKU:</span> LGC-CJ-{" "}
                      <span style={{ fontWeight: "bold" }}>
                        Price:{" "}
                        {nfObject.format(
                          getTotalPrice(
                            "gem-pendant",
                            pendantForGemstone,
                            cookies,
                            null,
                            null,
                            cookies._pendantMetalForCustomGemPendant
                          )
                        )}
                      </span>{" "}
                    </p>
                  </div>
                </div>
                <a>Change</a>
              </div>
            </section>
          </div>

          <div>
            <h2>
              Total Price: {cookies.currencyCode}{" "}
              {nfObject.format(
                getTotalPrice(
                  "gem-pendant",
                  pendantForGemstone,
                  cookies,
                  null,
                  null,
                  cookies._pendantMetalForCustomGemPendant
                ) +
                  getTotalPrice(
                    "loose-gemstone",
                    gemstoneForPendant,
                    cookies,
                    null,
                    null,
                    cookies._gemstoneWeightForCustomGemPendant,
                    null,
                    cookies._gemstoneCertificationForCustomGemPendant
                  )
              )}
            </h2>
            <p style={{ fontStyle: "italic" }}>(Without GST and VAT)</p>
          </div>

          <button onClick={handleAddToCart}>Add To Cart</button>
        </div>
      </ReviewOrderBox>
    ) : (
      <div
        style={{
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "rgb(30,46,76)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          Please complete your setting and come back
        </h2>
      </div>
    )
  ) : (
    <Loader />
  );
}
