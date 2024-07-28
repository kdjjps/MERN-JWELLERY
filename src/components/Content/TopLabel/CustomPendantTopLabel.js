import React, { useState, useEffect } from "react";
import { TopLabelBox } from "./style.js";
import { useCookies } from "react-cookie";
import getImage from "../../../helper/getImage.js";
import getTotalPrice from "../../../helper/getTotalPrice.js";
import { useSelector } from "react-redux";

export default function TopLabel() {
  const data = useSelector((state) => state);
  const necklaces = data.jewelryReducer.unfilteredSolitaireNecklacesArray;

  const nfObject = new Intl.NumberFormat("en-US");
  const [cookies, setCookie, removeCookie] = useCookies("");

  const allDiamonds = data.diamondReducer.unfilteredDiamondArray;

  const [stepStatus, setStepStatus] = useState(null);
  const [labelOneStatus, setLabelOneStatus] = useState("");
  const [labelTwoStatus, setLabelTwoStatus] = useState("");
  const [selectedJewelryStatus, setSelectedJewelryStatus] = useState(false);
  const [selectedDiamondStatus, setSelectedDiamondStatus] = useState(false);
  const necklaceId = cookies._necklaceSelectedForCustomNecklace
    ? cookies._necklaceSelectedForCustomNecklace.slice(7, 11)
    : null;
  const metalId = cookies._necklaceSelectedForCustomNecklace
    ? cookies._necklaceSelectedForCustomNecklace.slice(11)
    : null;
  const diamondId = cookies._diamondSelectedForCustomNecklace;

  const displayJewelryDetail = () => {
    setSelectedJewelryStatus(!selectedJewelryStatus);
  };

  let crumbsArray = window.location.pathname.split("/");
  let param = crumbsArray[3];

  const necklaceItem = necklaces.find((item, index) => {
    return item.stockNumber === necklaceId;
  });

  const diamondItem = allDiamonds.find((item, index) => {
    return item.stockNumber === diamondId;
  });

  const handleStepLabelContent = () => {
    let whatGotSelectedFirstForCustomNecklace =
      cookies.whatGotSelectedFirstForCustomNecklace;
    let path = window.location.pathname;

    switch (path) {
      case "/create-your-own-necklace/necklaces":
      case `/create-your-own-necklace/necklaces/${param}`:
        if (whatGotSelectedFirstForCustomNecklace === "diamond") {
          setLabelOneStatus("diamond");
          setLabelTwoStatus("necklace");
          setStepStatus(2);
        } else {
          setLabelOneStatus("necklace");
          setLabelTwoStatus("diamond");
          setStepStatus(1);
        }
        break;
      case "/create-your-own-necklace/diamonds":
      case `/create-your-own-necklace/diamonds/${param}`:
        if (whatGotSelectedFirstForCustomNecklace === "necklace") {
          setLabelOneStatus("necklace");
          setLabelTwoStatus("diamond");
          setStepStatus(2);
        } else {
          setLabelOneStatus("diamond");
          setLabelTwoStatus("necklace");
          setStepStatus(1);
        }
        break;
      case "/create-your-own-necklace/review-order":
        if (whatGotSelectedFirstForCustomNecklace === "necklace") {
          setLabelOneStatus("necklace");
          setLabelTwoStatus("diamond");
          setStepStatus(3);
        } else {
          setLabelOneStatus("diamond");
          setLabelTwoStatus("necklace");
          setStepStatus(3);
        }
        break;
      case "/create-your-own-necklace/review-order":
        if (whatGotSelectedFirstForCustomNecklace === "necklace") {
          setLabelOneStatus("necklace");
          setLabelTwoStatus("diamond");
          setStepStatus(3);
        } else {
          setLabelOneStatus("diamond");
          setLabelTwoStatus("necklace");
          setStepStatus(3);
        }
        break;
      default:
        if (whatGotSelectedFirstForCustomNecklace === "necklace") {
          setLabelOneStatus("necklace");
          setLabelTwoStatus("diamond");
          setStepStatus(3);
        } else {
          setLabelOneStatus("diamond");
          setLabelTwoStatus("necklace");
          setStepStatus(3);
        }
        break;
    }
  };

  const removeSelectedItemFromStep = (itemType) => {
    switch (itemType) {
      case "diamond":
        removeCookie("_diamondSelectedForCustomNecklace", { path: "/" });
        removeCookie("_diamondShapeSelectedForCustomNecklace", { path: "/" });

        if (cookies.whatGotSelectedFirstForCustomNecklace === "diamond") {
          if (cookies._necklaceSelectedForCustomNecklace != null) {
            setCookie("whatGotSelectedFirstForCustomNecklace", "necklace", {
              path: "/",
            });
            window.location = "/create-your-own-necklace/necklaces";
          } else {
            removeCookie("whatGotSelectedFirstForCustomNecklace", {
              path: "/",
            });
            window.location = "/create-your-own-necklace/diamonds";
          }
        }

        break;
      case "necklace":
        removeCookie("_necklaceSelectedForCustomNecklace", { path: "/" });
        removeCookie("_necklaceSizeForCustomNecklace", { path: "/" });
        removeCookie("_necklaceSizeStandardForCustomNecklace", {
          path: "/",
        });
        removeCookie("_necklaceMetalForCustomNecklace", { path: "/" });

        if (cookies.whatGotSelectedFirstForCustomNecklace === "necklace") {
          if (cookies._diamondSelectedForCustomNecklace != null) {
            setCookie("whatGotSelectedFirstForCustomNecklace", "diamond", {
              path: "/",
            });
            window.location = "/create-your-own-necklace/diamonds";
          } else {
            removeCookie("whatGotSelectedFirstForCustomNecklace", {
              path: "/",
            });
            window.location = "/create-your-own-necklace/necklaces";
          }
        }

        break;
      default:
        removeCookie("_diamondSelectedForCustomNecklace", { path: "/" });
        removeCookie("_diamondShapeSelectedForCustomNecklace", { path: "/" });

        if (cookies.whatGotSelectedFirstForCustomNecklace === "diamond") {
          if (cookies._necklaceSelectedForCustomNecklace != null) {
            setCookie("whatGotSelectedFirstForCustomNecklace", "necklace", {
              path: "/",
            });
            window.location = "/create-your-own-necklace/necklaces";
          } else {
            removeCookie("whatGotSelectedFirstForCustomNecklace", {
              path: "/",
            });
            window.location = "/create-your-own-necklace/diamonds";
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
              {labelOneStatus === "necklace" ? (
                cookies._necklaceSelectedForCustomNecklace ? (
                  necklaceItem ? (
                    <div className="product-image">
                      <div className="big-screen-content">
                        <section>
                          <p style={{ fontWeight: "bold" }}>
                            {cookies.currencyCode}{" "}
                            {nfObject.format(
                              parseInt(
                                getTotalPrice(
                                  "custom-necklace",
                                  necklaceItem,
                                  cookies
                                )
                              )
                            )}
                          </p>
                          <div className="link-container">
                            <a
                              className="step-one-link"
                              href={`/create-your-own-necklace/necklaces/${cookies._necklaceSelectedForCustomNecklace}`}
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
                                removeSelectedItemFromStep("necklace")
                              }
                            >
                              Remove
                            </a>
                          </div>
                        </section>
                        <img
                          src={`${necklaceItem.metals[metalId].imgURL}`}
                          alt="necklace"
                        />
                      </div>
                      <div className="small-screen-content">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/tick.png"
                          alt="tick-icon"
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
                    <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/necklace.png" />
                  </div>
                )
              ) : cookies._diamondSelectedForCustomNecklace ? (
                diamondItem ? (
                  <div className="product-image">
                    <div className="big-screen-content">
                      <section>
                        <p style={{ fontWeight: "bold" }}>
                          {cookies.currencyCode}{" "}
                          {nfObject.format(
                            parseInt(
                              getTotalPrice(
                                "loose-diamond",
                                diamondItem,
                                cookies
                              )
                            )
                          )}
                        </p>
                        <div>
                          <a
                            className="step-one-link"
                            href={`/create-your-own-necklace/diamonds/${cookies._diamondSelectedForCustomNecklace}`}
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
                        alt="tick-icon"
                        style={{ width: "15px", height: "15px" }}
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <img
                      src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
                      alt="animated-loader"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                )
              ) : (
                <div>
                  <img
                    src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/diamond_dbdbdb_38x38.png"
                    alt="diamond-icon"
                  />
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
                cookies._diamondSelectedForCustomNecklace ? (
                  diamondItem ? (
                    <div className="product-image">
                      <div className="big-screen-content">
                        <section>
                          <p style={{ fontWeight: "bold" }}>
                            {cookies.currencyCode}{" "}
                            {nfObject.format(
                              parseInt(
                                getTotalPrice(
                                  "loose-diamond",
                                  diamondItem,
                                  cookies
                                )
                              )
                            )}
                          </p>
                          <div>
                            <a
                              className="step-two-link"
                              href={`/create-your-own-necklace/diamonds/${cookies._diamondSelectedForCustomNecklace}`}
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
                          alt="tick-icon"
                          style={{ width: "15px", height: "15px" }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <img
                        src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
                        alt="animated-loader"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                  )
                ) : (
                  <div>
                    <img
                      src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/diamond_dbdbdb_38x38.png"
                      alt="diamond-icon"
                    />
                  </div>
                )
              ) : cookies._necklaceSelectedForCustomNecklace ? (
                necklaceItem ? (
                  <div className="product-image">
                    <div className="big-screen-content">
                      <section>
                        <p style={{ fontWeight: "bold" }}>
                          {cookies.currencyCode}{" "}
                          {nfObject.format(
                            parseInt(
                              getTotalPrice(
                                "custom-necklace",
                                necklaceItem,
                                cookies
                              )
                            )
                          )}
                        </p>
                        <div className="link-container">
                          <a
                            className="step-two-link"
                            href={`/create-your-own-necklace/necklaces/${cookies._necklaceSelectedForCustomNecklace}`}
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
                              removeSelectedItemFromStep("necklace")
                            }
                          >
                            Remove
                          </a>
                        </div>
                      </section>
                      <img
                        src={`${necklaceItem.metals[metalId].imgURL}`}
                        alt="necklace"
                      />
                    </div>
                    <div className="small-screen-content">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/tick.png"
                        alt="tick-icon"
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
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/necklace.png"
                  alt="necklace-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </TopLabelBox>
  );
}
