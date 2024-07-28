import React, { useState, useEffect } from "react";
import { CustomRingTopLabelBox } from "./style.js";
import { useCookies } from "react-cookie";
import getImage from "../../../helper/getImage.js";
import getTotalPrice from "../../../helper/getTotalPrice.js";
import { useSelector } from "react-redux";

export default function CustomRingTopLabel() {
  const nfObject = new Intl.NumberFormat("en-US");
  const [cookies, setCookie, removeCookie] = useCookies("");

  const data = useSelector((state) => state);
  const studs = data.jewelryReducer.unfilteredSolitaireStudsArray;

  const allDiamonds = data.diamondReducer.unfilteredDiamondArray;

  const [metalId, setMetalId] = useState(0);
  const [stepStatus, setStepStatus] = useState(null);
  const [labelOneStatus, setLabelOneStatus] = useState("");
  const [labelTwoStatus, setLabelTwoStatus] = useState("");
  const [labelThreeStatus, setLabelThreeStatus] = useState("");
  const [selectedJewelryStatus, setSelectedJewelryStatus] = useState(false);
  const [selectedDiamondStatus, setSelectedDiamondStatus] = useState(false);
  const studId = cookies._studSelectedForCustomStud;
  const firstDiamondId = cookies._firstDiamondSelectedForCustomStud;
  const secondDiamondId = cookies._secondDiamondSelectedForCustomStud;

  const displayJewelryDetail = () => {
    setSelectedJewelryStatus(!selectedJewelryStatus);
  };

  const displayDiamondDetail = () => {
    setSelectedDiamondStatus(!selectedDiamondStatus);
  };

  let crumbsArray = window.location.pathname.split("/");
  let earrringParam = crumbsArray[3];
  let diamondParam = crumbsArray[4];

  const studItem = studs.find((item, index) => {
    return item.stockNumber === studId;
  });

  const firstDiamondItem = allDiamonds.find((item, index) => {
    return item.stockNumber === firstDiamondId;
  });

  const secondDiamondItem = allDiamonds.find((item, index) => {
    return item.stockNumber === secondDiamondId;
  });

  const handleStepLabelContent = () => {
    let path = window.location.pathname;

    switch (path) {
      case "/create-your-own-stud/studs":
      case `/create-your-own-stud/studs/${earrringParam}`:
        if (
          cookies.whatGotSelectedFirstForCustomStud === "diamond" &&
          (cookies.whatGotSelectedSecondForCustomStud === undefined ||
            cookies.whatGotSelectedSecondForCustomStud === null ||
            cookies.whatGotSelectedSecondForCustomStud === "diamond")
        ) {
          setLabelOneStatus("diamond");
          setLabelTwoStatus("diamond");
          setLabelThreeStatus("stud");
          setStepStatus(3);
        } else if (cookies.whatGotSelectedFirstForCustomStud === undefined) {
          setLabelOneStatus("stud");
          setLabelTwoStatus("diamond");
          setLabelThreeStatus("diamond");
          setStepStatus(1);
        } else {
          setLabelOneStatus("stud");
          setLabelTwoStatus("diamond");
          setLabelThreeStatus("diamond");
          setStepStatus(1);
        }
        break;
      case "/create-your-own-stud/diamonds/first":
      case `/create-your-own-stud/diamonds/first/${diamondParam}`:
        if (cookies.whatGotSelectedFirstForCustomStud === "stud") {
          setLabelOneStatus("stud");
          setLabelTwoStatus("diamond");
          setLabelThreeStatus("diamond");
          setStepStatus(2);
        } else {
          setLabelOneStatus("diamond");
          setLabelTwoStatus("diamond");
          setLabelThreeStatus("stud");
          setStepStatus(1);
        }
        break;
      case "/create-your-own-stud/diamonds/second":
      case `/create-your-own-stud/diamonds/second/${diamondParam}`:
        if (cookies.whatGotSelectedFirstForCustomStud === "stud") {
          setLabelOneStatus("stud");
          setLabelTwoStatus("diamond");
          setLabelThreeStatus("diamond");
          setStepStatus(3);
        } else {
          setLabelOneStatus("diamond");
          setLabelTwoStatus("diamond");
          setLabelThreeStatus("stud");
          setStepStatus(2);
        }
        break;
      case "/create-your-own-stud/review-order":
        if (cookies.whatGotSelectedFirstForCustomStud === "stud") {
          setStepStatus(4);
          setLabelOneStatus("stud");
          setLabelTwoStatus("diamond");
          setLabelThreeStatus("diamond");
        } else {
          setStepStatus(4);
          setLabelOneStatus("diamond");
          setLabelTwoStatus("diamond");
          setLabelThreeStatus("stud");
        }
    }
  };

  const removeSelectedItemFromStep = (itemType) => {
    switch (itemType) {
      case "diamond":
        removeCookie("_diamondSelectedForCustomNecklace", { path: "/" });
        removeCookie("_diamondShapeSelectedForCustomNecklace", { path: "/" });

        if (cookies.whatGotSelectedFirstForCustomNecklace === "diamond") {
          if (cookies._studSelectedForCustomNecklace != null) {
            setCookie("whatGotSelectedFirstForCustomNecklace", "stud", {
              path: "/",
            });
            window.location = "/create-your-own-stud/studs";
          } else {
            removeCookie("whatGotSelectedFirstForCustomNecklace", {
              path: "/",
            });
            window.location = "/create-your-own-stud/diamonds";
          }
        }

        break;
      case "stud":
        removeCookie("_studSelectedForCustomNecklace", { path: "/" });
        removeCookie("_studSizeForCustomNecklace", { path: "/" });
        removeCookie("_studSizeStandardForCustomNecklace", {
          path: "/",
        });
        removeCookie("_studMetalForCustomNecklace", { path: "/" });

        if (cookies.whatGotSelectedFirstForCustomNecklace === "stud") {
          if (cookies._diamondSelectedForCustomNecklace != null) {
            setCookie("whatGotSelectedFirstForCustomNecklace", "diamond", {
              path: "/",
            });
            window.location = "/create-your-own-stud/diamonds";
          } else {
            removeCookie("whatGotSelectedFirstForCustomNecklace", {
              path: "/",
            });
            window.location = "/create-your-own-stud/studs";
          }
        }

        break;
      default:
        removeCookie("_diamondSelectedForCustomNecklace", { path: "/" });
        removeCookie("_diamondShapeSelectedForCustomNecklace", { path: "/" });

        if (cookies.whatGotSelectedFirstForCustomNecklace === "diamond") {
          if (cookies._studSelectedForCustomNecklace != null) {
            setCookie("whatGotSelectedFirstForCustomNecklace", "stud", {
              path: "/",
            });
            window.location = "/create-your-own-stud/studs";
          } else {
            removeCookie("whatGotSelectedFirstForCustomNecklace", {
              path: "/",
            });
            window.location = "/create-your-own-stud/diamonds";
          }
        }
        break;
    }
  };

  useEffect(() => {
    switch (cookies._studMetal) {
      case "white-gold":
        setMetalId(0);
        break;
      case "yellow-gold":
        setMetalId(1);
        break;
      case "rose-gold":
        setMetalId(2);
        break;
      case "platinum":
        setMetalId(3);
        break;
      default:
        setMetalId(0);
        break;
    }
  }, []);

  useEffect(() => {
    handleStepLabelContent();
  }, []);

  return (
    <CustomRingTopLabelBox
      stepStatus={stepStatus}
      jewelryModalStatus={selectedJewelryStatus}
      diamondModalStatus={selectedDiamondStatus}
    >
      <section>
        <div className="step-container" id="step1">
          <div className="step" onClick={displayJewelryDetail}>
            <div className="step-details">
              <div className="step-number">1.</div>
              <div className="step-title">
                <div className="before-selected">
                  <p className="item-action">Choose</p>
                  <p className="item-type">{labelOneStatus}</p>
                </div>
              </div>
            </div>
            <div className="step-shape">
              {labelOneStatus === "stud" ? (
                cookies._studSelectedForCustomStud ? (
                  studItem ? (
                    <div className="product-image">
                      <div className="big-screen-content">
                        <section>
                          <p style={{ fontWeight: "bold" }}>
                            {cookies.currencyCode}{" "}
                            {nfObject.format(
                              parseInt(
                                getTotalPrice("custom-stud", studItem, cookies)
                              )
                            )}
                          </p>
                          <div className="link-container">
                            <a
                              className="step-one-link"
                              href={`/create-your-own-stud/studs/LGC-CJ-${studItem.stockNumber}`}
                            >
                              View
                            </a>
                            <hr
                              style={{
                                width: "1px",
                                height: "auto",
                                background: "rgb(232,232,232)",
                                margin: "0px 3px",
                              }}
                            />
                            <a className="step-one-link" href="/">
                              Remove
                            </a>
                          </div>
                        </section>
                        <img
                          src={`${studItem.metals[metalId].imgURL}`}
                          alt="stud"
                        />
                      </div>
                      <div className="small-screen-content">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/tick.png"
                          style={{ width: "15px", height: "15px" }}
                          alt="tick"
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <img
                        src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </div>
                  )
                ) : (
                  <div className="product-icon">
                    <img
                      src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/setting_dbdbdb_38x38.png"
                      alt="setting"
                    />
                  </div>
                )
              ) : cookies._firstDiamondSelectedForCustomStud ? (
                firstDiamondItem ? (
                  <div className="product-image">
                    <div className="big-screen-content">
                      <section>
                        <p style={{ fontWeight: "bold" }}>
                          {cookies.currencyCode}{" "}
                          {nfObject.format(
                            parseInt(
                              getTotalPrice(
                                "loose-diamond",
                                firstDiamondItem,
                                cookies
                              )
                            )
                          )}
                        </p>
                        <div>
                          <a
                            className="step-one-link"
                            href={`/create-your-own-stud/diamonds/first/${firstDiamondItem.stockNumber}`}
                          >
                            View
                          </a>
                          <hr
                            style={{
                              width: "1px",
                              height: "auto",
                              background: "rgb(232,232,232)",
                              margin: "0px 3px",
                            }}
                          />
                          <a className="step-one-link" href="/">
                            Remove
                          </a>
                        </div>
                      </section>
                      <img
                        src={
                          firstDiamondItem.imageUrl.length > 5
                            ? firstDiamondItem.imageUrl
                            : getImage(firstDiamondItem.diamondShape).imgURL
                        }
                        alt="diamond"
                        id={firstDiamondItem.id}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = getImage(
                            firstDiamondItem.diamondShape
                          ).imgURL;
                        }}
                      />
                    </div>
                    <div className="small-screen-content">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/tick.png"
                        style={{ width: "15px", height: "15px" }}
                        alt="tick"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <img
                      src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
                      style={{ width: "30px", height: "30px" }}
                      alt="loading"
                    />
                  </div>
                )
              ) : (
                <div>
                  <img
                    src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/diamond_dbdbdb_38x38.png"
                    alt="diamond"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="step-container" id="step2">
          <div className="step">
            <div className="step-details">
              <div className="step-number">2.</div>
              <div className="step-title">
                <div className="before-selected">
                  <p className="item-action">Choose</p>
                  <p className="item-type">{labelTwoStatus}</p>
                </div>
              </div>
            </div>
            <div className="step-shape">
              {labelTwoStatus === "diamond" &&
              cookies.whatGotSelectedFirstForCustomStud === "diamond" ? (
                cookies._secondDiamondSelectedForCustomStud ? (
                  secondDiamondItem ? (
                    <div className="product-image">
                      <div className="big-screen-content">
                        <section>
                          <p style={{ fontWeight: "bold" }}>
                            {cookies.currencyCode}{" "}
                            {nfObject.format(
                              parseInt(
                                getTotalPrice(
                                  "loose-diamond",
                                  secondDiamondItem,
                                  cookies
                                )
                              )
                            )}
                          </p>
                          <div>
                            <a
                              className="step-two-link"
                              href={`/create-your-own-stud/diamonds/second/${secondDiamondItem.stockNumber}`}
                            >
                              View
                            </a>
                            <hr
                              style={{
                                width: "1px",
                                height: "auto",
                                background: "rgb(232,232,232)",
                                margin: "0px 3px",
                              }}
                            />
                            <a className="step-two-link" href="/">
                              Remove
                            </a>
                          </div>
                        </section>
                        <img
                          src={
                            secondDiamondItem.imageUrl.length > 5
                              ? secondDiamondItem.imageUrl
                              : getImage(secondDiamondItem.diamondShape).imgURL
                          }
                          alt="diamond"
                          id={secondDiamondItem.id}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = getImage(
                              secondDiamondItem.diamondShape
                            ).imgURL;
                          }}
                        />
                      </div>
                      <div className="small-screen-content">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/tick.png"
                          style={{ width: "15px", height: "15px" }}
                          alt="tick"
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <img
                        src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
                        style={{ width: "30px", height: "30px" }}
                        alt="loading"
                      />
                    </div>
                  )
                ) : (
                  <div>
                    <img
                      src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/diamond_003366_38x38.png"
                      alt="diamond"
                    />
                  </div>
                )
              ) : cookies._firstDiamondSelectedForCustomStud ? (
                firstDiamondItem ? (
                  <div className="product-image">
                    <div className="big-screen-content">
                      <section>
                        <p style={{ fontWeight: "bold" }}>
                          {cookies.currencyCode}{" "}
                          {nfObject.format(
                            parseInt(
                              getTotalPrice(
                                "loose-diamond",
                                firstDiamondItem,
                                cookies
                              )
                            )
                          )}
                        </p>
                        <div className="link-container">
                          <a
                            className="step-two-link"
                            href={`/create-your-own-stud/diamonds/first/${firstDiamondItem.stockNumber}`}
                          >
                            View
                          </a>
                          <hr
                            style={{
                              width: "1px",
                              height: "auto",
                              background: "rgb(232,232,232)",
                              margin: "0px 3px",
                            }}
                          />
                          <a className="step-two-link" href="/">
                            Remove
                          </a>
                        </div>
                      </section>
                      <img
                        src={
                          firstDiamondItem.imageUrl.length > 5
                            ? firstDiamondItem.imageUrl
                            : getImage(firstDiamondItem.diamondShape).imgURL
                        }
                        alt="diamond"
                        id={firstDiamondItem.id}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = getImage(
                            firstDiamondItem.diamondShape
                          ).imgURL;
                        }}
                      />{" "}
                    </div>
                    <div className="small-screen-content">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/tick.png"
                        style={{ width: "15px", height: "15px" }}
                        alt="tick"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <img
                      src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
                      style={{ width: "30px", height: "30px" }}
                      alt="loading"
                    />
                  </div>
                )
              ) : (
                <div>
                  <img
                    src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/diamond_003366_38x38.png"
                    alt="diamond"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="step-container" id="step3">
          <div className="step">
            <div className="step-details">
              <div className="step-number">3.</div>
              <div className="step-title">
                <div className="before-selected">
                  <p className="item-action">Choose</p>
                  <p className="item-type">{labelThreeStatus}</p>
                </div>
              </div>
            </div>
            <div className="step-shape">
              {labelThreeStatus === "diamond" ? (
                cookies._secondDiamondSelectedForCustomStud ? (
                  secondDiamondItem ? (
                    <div className="product-image">
                      <div className="big-screen-content">
                        <section>
                          <p style={{ fontWeight: "bold" }}>
                            {cookies.currencyCode}{" "}
                            {nfObject.format(
                              parseInt(
                                getTotalPrice(
                                  "loose-diamond",
                                  secondDiamondItem,
                                  cookies
                                )
                              )
                            )}
                          </p>
                          <div>
                            <a
                              className="step-three-link"
                              href={`/create-your-own-stud/diamonds/second/${secondDiamondItem.stockNumber}`}
                            >
                              View
                            </a>
                            <hr
                              style={{
                                width: "1px",
                                height: "auto",
                                background: "rgb(232,232,232)",
                                margin: "0px 3px",
                              }}
                            />
                            <a className="step-three-link" href="/">
                              Remove
                            </a>
                          </div>
                        </section>
                        <img
                          src={
                            secondDiamondItem.imageUrl.length > 5
                              ? secondDiamondItem.imageUrl
                              : getImage(secondDiamondItem.diamondShape).imgURL
                          }
                          alt="diamond"
                          id={secondDiamondItem.id}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = getImage(
                              secondDiamondItem.diamondShape
                            ).imgURL;
                          }}
                        />
                      </div>
                      <div className="small-screen-content">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/tick.png"
                          style={{ width: "15px", height: "15px" }}
                          alt="tick"
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <img
                        src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
                        style={{ width: "30px", height: "30px" }}
                        alt="loading"
                      />
                    </div>
                  )
                ) : (
                  <div>
                    <img
                      src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/diamond_003366_38x38.png"
                      alt="diamond"
                    />
                  </div>
                )
              ) : cookies._studSelectedForCustomStud ? (
                studItem ? (
                  <div className="product-image">
                    <div className="big-screen-content">
                      <section>
                        <p style={{ fontWeight: "bold" }}>
                          {cookies.currencyCode}{" "}
                          {nfObject.format(
                            parseInt(
                              getTotalPrice("custom-stud", studItem, cookies)
                            )
                          )}
                        </p>
                        <div className="link-container">
                          <a
                            className="step-three-link"
                            href={`/create-your-own-stud/studs/LGC-CJ-${studItem.stockNumber}`}
                          >
                            View
                          </a>
                          <hr
                            style={{
                              width: "1px",
                              height: "auto",
                              background: "rgb(232,232,232)",
                              margin: "0px 3px",
                            }}
                          />
                          <a className="step-three-link" href="/">
                            Remove
                          </a>
                        </div>
                      </section>
                      <img src={`${studItem.metals[metalId].imgURL}`} />
                    </div>
                    <div className="small-screen-content">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/tick.png"
                        style={{ width: "15px", height: "15px" }}
                        alt="tick"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <img
                      src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </div>
                )
              ) : (
                <div>
                  <img
                    src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/setting_dbdbdb_38x38.png"
                    alt="setting"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="step-container" id="step4">
          <div className="step">
            <div className="step-details">
              <div className="step-number">4.</div>
              <div className="step-title">
                <div className="before-selected">
                  <p className="item-action">Review </p>
                  <p className="item-type">Order</p>
                </div>
              </div>
            </div>
            <div className="step-shape">
              <div>
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/studs.png"
                  alt="stud"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomRingTopLabelBox>
  );
}
