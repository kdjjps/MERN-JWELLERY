import React, { useState, useEffect } from "react";
import { TopLabelBox } from "./style.js";
import { useCookies } from "react-cookie";
import getTotalPrice from "../../../helper/getTotalPrice.js";
import { useSelector } from "react-redux";

export default function CustomGemstoneTopLabel() {
  const data = useSelector((state) => state);

  const [cookies, setCookie, removeCookie] = useCookies();
  const [stepStatus, setStepStatus] = useState(null);
  const [selectedJewelryStatus, setSelectedJewelryStatus] = useState(false);
  const [selectedDiamondStatus, setSelectedDiamondStatus] = useState(false);
  const [labelOneStatus, setLabelOneStatus] = useState("");
  const [labelTwoStatus, setLabelTwoStatus] = useState("");

  const allGemstones = data.jewelryReducer.unfilteredGemstonesArray;
  const gemRings = data.jewelryReducer.unfilteredGemstonesRingsArray;

  const displayJewelryDetail = () => {
    setSelectedJewelryStatus(!selectedJewelryStatus);
  };

  let crumbsArray = window.location.pathname.split("/");
  let gemType = crumbsArray[3];
  let gemId = crumbsArray[4];
  let settingParam = crumbsArray[4];

  let gemItem = allGemstones.find((item, index) => {
    if (cookies._gemstoneSelectedForCustomGemRing) {
      return (
        item.stockNumber ===
        cookies._gemstoneSelectedForCustomGemRing.stockNumber
      );
    }
  });

  let gemRing = gemRings.find((item, index) => {
    if (cookies._ringSelectedForCustomGemRing) {
      return item.stockNumber === cookies._ringSelectedForCustomGemRing;
    }
  });

  console.log(gemRing);

  const handleStepLabelContent = () => {
    let whatGotSelectedFirstForCustomGemRing =
      cookies.whatGotSelectedFirstForCustomGemRing;
    let path = window.location.pathname;

    switch (path) {
      case `/create-your-own-gem-ring/rings`:
      case `/create-your-own-gem-ring/rings/${gemType}`:
      case `/create-your-own-gem-ring/rings/${gemType}/${settingParam}`:
        if (whatGotSelectedFirstForCustomGemRing === "gem") {
          setLabelOneStatus("gem");
          setLabelTwoStatus("ring");
          setStepStatus(2);
        } else {
          setLabelOneStatus("ring");
          setLabelTwoStatus("gem");
          setStepStatus(1);
        }

        break;

      case "/create-your-own-gem-ring/gemstones":
      case `/create-your-own-gem-ring/gemstones/${gemType}`:
      case `/create-your-own-gem-ring/gemstones/${gemType}/${gemId}`:
        if (whatGotSelectedFirstForCustomGemRing === "ring") {
          setLabelOneStatus("ring");
          setLabelTwoStatus("gem");
          setStepStatus(2);
        } else {
          setLabelOneStatus("gem");
          setLabelTwoStatus("ring");
          setStepStatus(1);
        }

        break;

      case "/create-your-own-gem-ring/review-order":
        if (whatGotSelectedFirstForCustomGemRing === "ring") {
          setLabelOneStatus("ring");
          setLabelTwoStatus("gem");
          setStepStatus(3);
        } else {
          setLabelOneStatus("gem");
          setLabelTwoStatus("ring");
          setStepStatus(3);
        }

        break;

      default:
        return;
    }
  };

  const removeSelectedItemFromStep = (itemType) => {
    switch (itemType) {
      case "gem":
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
      gemstoneModalStatus={selectedDiamondStatus}
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
                cookies._ringSelectedForCustomGemRing ? (
                  gemRing ? (
                    <div className="product-image">
                      <div className="big-screen-content">
                        <section>
                          <p style={{ fontWeight: "bold" }}>
                            {parseInt(
                              getTotalPrice(
                                "gem-ring",
                                null,
                                cookies,
                                null,
                                null,
                                cookies._ringMetalForCustomGemRing
                              )
                            )}
                          </p>
                          <div>
                            <a
                              className="step-one-link"
                              href={`/create-your-own-gem-ring/rings/${gemRing.gemstone}/LGC-Gem-Ring-${gemRing.stockNumber}`}
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
                        <img src={`${gemRing.ring}`} />
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
                    <img
                      src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/setting_dbdbdb_38x38.png"
                      alt="setting"
                    />
                  </div>
                )
              ) : cookies._gemstoneSelectedForCustomGemRing ? (
                gemItem ? (
                  <div className="product-image">
                    <div className="big-screen-content">
                      <section>
                        <p style={{ fontWeight: "bold" }}>
                          {parseInt(
                            getTotalPrice(
                              "loose-gemstone",
                              gemItem,
                              cookies,
                              null,
                              null,
                              cookies._gemstoneWeightForCustomGemRing,
                              null,
                              cookies._gemstoneCertificationForCustomGemRing
                            )
                          )}
                        </p>
                        <div>
                          <a
                            className="step-one-link"
                            href={`/gemstones/${gemItem.gemDetails.gemName}/${gemItem.stockNumber}`}
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
                            onClick={() => removeSelectedItemFromStep("gem")}
                          >
                            Remove
                          </a>
                        </div>
                      </section>
                      <img src={`${gemItem.images[0]}`} />
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
                      style={{ width: "50px", height: "50px" }}
                      alt="loading"
                    />
                  </div>
                )
              ) : (
                <div>
                  <img
                    src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/gemstone.png"
                    alt="gem"
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
              {labelTwoStatus === "gem" ? (
                cookies._gemstoneSelectedForCustomGemRing ? (
                  gemItem ? (
                    <div className="product-image">
                      <div className="big-screen-content">
                        <section>
                          <p style={{ fontWeight: "bold" }}>
                            {parseInt(
                              getTotalPrice(
                                "loose-gemstone",
                                gemItem,
                                cookies,
                                null,
                                null,
                                cookies._gemstoneWeightForCustomGemRing,
                                null,
                                cookies._gemstoneCertificationForCustomGemRing
                              )
                            )}
                          </p>
                          <div>
                            <a
                              className="step-two-link"
                              href={`/gemstones/${gemItem.gemDetails.gemName}/${gemItem.stockNumber}`}
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
                              onClick={() => removeSelectedItemFromStep("gem")}
                            >
                              Remove
                            </a>
                          </div>
                        </section>
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
                        style={{ width: "50px", height: "50px" }}
                        alt="loading"
                      />
                    </div>
                  )
                ) : (
                  <div>
                    <img
                      src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/gemstone.png"
                      alt="gem"
                    />
                  </div>
                )
              ) : cookies._ringSelectedForCustomGemRing ? (
                gemRing ? (
                  <div className="product-image">
                    <div className="big-screen-content">
                      <section>
                        <p style={{ fontWeight: "bold" }}>
                          {parseInt(
                            getTotalPrice(
                              "gem-ring",
                              null,
                              cookies,
                              null,
                              null,
                              cookies._ringMetalForCustomGemRing
                            )
                          )}
                        </p>
                        <div>
                          <a
                            className="step-two-link"
                            href={`/create-your-own-gem-ring/rings/${gemRing.gemstone}/LGC-Gem-Ring-${gemRing.stockNumber}`}
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
                      <img src={`${gemRing.ring}`} />
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
                  <img
                    src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/setting_dbdbdb_38x38.png"
                    alt="setting"
                  />
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
                  <p>
                    Review <br />
                    <span
                      style={{ fontWeight: "bold", textTransform: "uppercase" }}
                    >
                      Order
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="step-shape">
              <div>
                <img
                  src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/complete_dbdbdb_38x38.png"
                  alt="setting"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </TopLabelBox>
  );
}
