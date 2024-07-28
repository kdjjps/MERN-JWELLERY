import React, { useState, useEffect } from "react";
import { TopLabelBox } from "./style.js";
import { useCookies } from "react-cookie";
import getImage from "../../../helper/getImage.js";
import getTotalPrice from "../../../helper/getTotalPrice.js";
import { useSelector } from "react-redux";

export default function TopLabel() {
  const nfObject = new Intl.NumberFormat("en-US");
  const [cookies, setCookie, removeCookie] = useCookies();

  const data = useSelector((state) => state);

  const rings = data.jewelryReducer.unfilteredSolitaireRingsArray;

  const allDiamonds = data.diamondReducer.unfilteredDiamondArray;

  const [stepStatus, setStepStatus] = useState(null);
  const [labelOneStatus, setLabelOneStatus] = useState("");
  const [labelTwoStatus, setLabelTwoStatus] = useState("");
  const [selectedJewelryStatus, setSelectedJewelryStatus] = useState(false);
  const [selectedDiamondStatus] = useState(false);
  const ringId = cookies._ringSelectedForCustomRing
    ? cookies._ringSelectedForCustomRing.slice(7, 11)
    : null;
  const metalId = cookies._ringSelectedForCustomRing
    ? cookies._ringSelectedForCustomRing.slice(11)
    : null;
  const diamondId = cookies._diamondSelectedForCustomRing;

  const displayJewelryDetail = () => {
    setSelectedJewelryStatus(!selectedJewelryStatus);
  };

  let crumbsArray = window.location.pathname.split("/");
  let param = crumbsArray[3];

  const ringItem = rings.find((item, index) => {
    return item.stockNumber === ringId;
  });

  const diamondItem = allDiamonds.find((item, index) => {
    return item.stockNumber === diamondId;
  });

  const handleStepLabelContent = () => {
    let whatGotSelectedFirstForCustomRing =
      cookies.whatGotSelectedFirstForCustomRing;
    let path = window.location.pathname;

    switch (path) {
      case "/create-your-own-ring/rings":
      case `/create-your-own-ring/rings/${param}`:
        if (whatGotSelectedFirstForCustomRing === "diamond") {
          setLabelOneStatus("diamond");
          setLabelTwoStatus("ring");
          setStepStatus(2);
        } else {
          setLabelOneStatus("ring");
          setLabelTwoStatus("diamond");
          setStepStatus(1);
        }

        break;
      case "/create-your-own-ring/diamonds":
      case `/create-your-own-ring/diamonds/${param}`:
        if (whatGotSelectedFirstForCustomRing === "ring") {
          setLabelOneStatus("ring");
          setLabelTwoStatus("diamond");
          setStepStatus(2);
        } else {
          setLabelOneStatus("diamond");
          setLabelTwoStatus("ring");
          setStepStatus(1);
        }

        break;
      case "/create-your-own-ring/review-order":
        if (whatGotSelectedFirstForCustomRing === "ring") {
          setLabelOneStatus("ring");
          setLabelTwoStatus("diamond");
          setStepStatus(3);
        } else {
          setLabelOneStatus("diamond");
          setLabelTwoStatus("ring");
          setStepStatus(3);
        }
        break;
    }
  };

  const removeSelectedItemFromStep = (itemType) => {
    switch (itemType) {
      case "diamond":
        removeCookie("_diamondSelectedForCustomRing", { path: "/" });
        removeCookie("_diamondShapeSelectedForCustomRing", { path: "/" });

        if (cookies.whatGotSelectedFirstForCustomRing === "diamond") {
          if (cookies._ringSelectedForCustomRing != null) {
            setCookie("whatGotSelectedFirstForCustomRing", "ring", {
              path: "/",
            });
            window.location = "/create-your-own-ring/rings";
          } else {
            removeCookie("whatGotSelectedFirstForCustomRing", { path: "/" });
            window.location = "/create-your-own-ring/diamonds";
          }
        }

        break;
      case "ring":
        removeCookie("_ringSelectedForCustomRing", { path: "/" });
        removeCookie("_ringSizeForCustomRing", { path: "/" });
        removeCookie("_ringSizeStandardForCustomRing", {
          path: "/",
        });
        removeCookie("_ringMetalForCustomRing", { path: "/" });

        if (cookies.whatGotSelectedFirstForCustomRing === "ring") {
          if (cookies._diamondSelectedForCustomRing != null) {
            setCookie("whatGotSelectedFirstForCustomRing", "diamond", {
              path: "/",
            });
            window.location = "/create-your-own-ring/diamonds";
          } else {
            removeCookie("whatGotSelectedFirstForCustomRing", { path: "/" });
            window.location = "/create-your-own-ring/rings";
          }
        }

        break;
      default:
        removeCookie("_diamondSelectedForCustomRing", { path: "/" });
        removeCookie("_diamondShapeSelectedForCustomRing", { path: "/" });

        if (cookies.whatGotSelectedFirstForCustomRing === "diamond") {
          if (cookies._ringSelectedForCustomRing != null) {
            setCookie("whatGotSelectedFirstForCustomRing", "ring", {
              path: "/",
            });
            window.location = "/create-your-own-ring/rings";
          } else {
            removeCookie("whatGotSelectedFirstForCustomRing", { path: "/" });
            window.location = "/create-your-own-ring/diamonds";
          }
        }
        break;
    }
  };

  useEffect(() => {
    handleStepLabelContent();
  }, []);

  return (
    <TopLabelBox
      stepStatus={stepStatus}
      jewelryModalStatus={selectedJewelryStatus}
      diamondModalStatus={selectedDiamondStatus}
    >
      <section>
        <div className="step-container">
          <div className="step" onClick={displayJewelryDetail}>
            <div className="step-details">
              <div className="step-number">1.</div>
              <div className="step-title">
                <div className="before-selected">
                  <p className="item-action">Choose a </p>
                  <p className="item-type">{labelOneStatus}</p>
                </div>
              </div>
            </div>
            <div className="step-shape">
              {labelOneStatus === "ring" ? (
                cookies._ringSelectedForCustomRing ? (
                  ringItem ? (
                    <div className="product-image">
                      <div className="big-screen-content">
                        <section>
                          <p style={{ fontWeight: "bold" }}>
                            {cookies.currencyCode}{" "}
                            {nfObject.format(
                              parseInt(
                                getTotalPrice("custom-ring", ringItem, cookies)
                              )
                            )}
                          </p>
                          <div className="link-container">
                            <a
                              className="step-one-link"
                              href={`/create-your-own-ring/rings/${cookies._ringSelectedForCustomRing}`}
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
                            <a
                              className="step-one-link"
                              href="#"
                              onClick={() => removeSelectedItemFromStep("ring")}
                            >
                              Remove
                            </a>
                          </div>
                        </section>
                        <img src={`${ringItem.metals[metalId].imgURL}`} />
                      </div>
                      <div className="small-screen-content">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/tick.png"
                          style={{ width: "15px", height: "15px" }}
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
                    <img src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/setting_dbdbdb_38x38.png" />
                  </div>
                )
              ) : cookies._diamondSelectedForCustomRing ? (
                diamondItem ? (
                  <div className="product-image">
                    <div className="big-screen-content">
                      <section>
                        <p style={{ fontWeight: "bold" }}>
                          {cookies.currencyCode}{" "}
                          {nfObject.format(
                            getTotalPrice("loose-diamond", diamondItem, cookies)
                          )}
                        </p>
                        <div>
                          <a
                            className="step-one-link"
                            href={`/create-your-own-ring/diamonds/${cookies._diamondSelectedForCustomRing}`}
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
                          <a
                            className="step-one-link"
                            href="#"
                            onClick={() =>
                              removeSelectedItemFromStep("diamond")
                            }
                          >
                            Remove
                          </a>
                        </div>
                      </section>
                      <img
                        src={
                          diamondItem.imageUrl.length > 5
                            ? diamondItem.imageUrl
                            : getImage(diamondItem.diamondShape).imgURL
                        }
                        alt="diamond"
                        id={diamondItem.id}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = getImage(
                            diamondItem.diamondShape
                          ).imgURL;
                        }}
                      />
                    </div>
                    <div className="small-screen-content">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/tick.png"
                        style={{ width: "15px", height: "15px" }}
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
                  <img src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/diamond_dbdbdb_38x38.png" />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="step-container" id="custom-step-container">
          <div className="step" id="custom-step">
            <div className="step-details">
              <div className="step-number">2.</div>
              <div className="step-title">
                <div className="before-selected">
                  <p className="item-action">Choose a </p>
                  <p className="item-type">{labelTwoStatus}</p>
                </div>
              </div>
            </div>
            <div className="step-shape">
              {labelTwoStatus === "diamond" ? (
                cookies._diamondSelectedForCustomRing ? (
                  diamondItem ? (
                    <div className="product-image">
                      <div className="big-screen-content">
                        <section>
                          <p style={{ fontWeight: "bold" }}>
                            {cookies.currencyCode}{" "}
                            {nfObject.format(
                              getTotalPrice(
                                "loose-diamond",
                                diamondItem,
                                cookies
                              )
                            )}
                          </p>
                          <div>
                            <a
                              className="step-two-link"
                              href={`/create-your-own-ring/diamonds/${cookies._diamondSelectedForCustomRing}`}
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
                            <a
                              className="step-two-link"
                              href="#"
                              onClick={() =>
                                removeSelectedItemFromStep("diamond")
                              }
                            >
                              Remove
                            </a>
                          </div>
                        </section>
                        <img
                          src={
                            diamondItem.imageUrl.length > 5
                              ? diamondItem.imageUrl
                              : getImage(diamondItem.diamondShape).imgURL
                          }
                          alt="diamond"
                          id={diamondItem.id}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = getImage(
                              diamondItem.diamondShape
                            ).imgURL;
                          }}
                        />
                      </div>
                      <div className="small-screen-content">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/tick.png"
                          style={{ width: "15px", height: "15px" }}
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
                    <img src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/diamond_dbdbdb_38x38.png" />
                  </div>
                )
              ) : cookies._ringSelectedForCustomRing ? (
                ringItem ? (
                  <div className="product-image">
                    <div className="big-screen-content">
                      <section>
                        <p style={{ fontWeight: "bold" }}>
                          {cookies.currencyCode}{" "}
                          {nfObject.format(
                            parseInt(
                              getTotalPrice("custom-ring", ringItem, cookies)
                            )
                          )}
                        </p>
                        <div className="link-container">
                          <a
                            className="step-two-link"
                            href={`/create-your-own-ring/rings/${cookies._ringSelectedForCustomRing}`}
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
                          <a
                            className="step-two-link"
                            href="#"
                            onClick={() => removeSelectedItemFromStep("ring")}
                          >
                            Remove
                          </a>
                        </div>
                      </section>
                      <img src={`${ringItem.metals[metalId].imgURL}`} />
                    </div>
                    <div className="small-screen-content">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/tick.png"
                        style={{ width: "15px", height: "15px" }}
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
                  <img src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/setting_dbdbdb_38x38.png" />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="step-container">
          <div className="step">
            <div className="step-details">
              <div className="step-number">3.</div>
              <div className="step-title">
                <div className="before-selected">
                  <p className="item-action">Review </p>
                  <p className="item-type">Order</p>
                </div>
              </div>
            </div>
            <div className="step-shape">
              <div>
                <img src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/complete_dbdbdb_38x38.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </TopLabelBox>
  );
}
