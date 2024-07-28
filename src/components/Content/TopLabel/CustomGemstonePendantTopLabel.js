import React, { useState, useEffect } from "react";
import { TopLabelBox } from "./style.js";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";

export default function CustomGemstonePendantTopLabel({
  titleOne,
  titleTwo,
  onChangeStatus,
}) {
  const data = useSelector((state) => state);

  const [cookies] = useCookies("");
  const [stepStatus, setStepStatus] = useState(null);
  const [stepTwoImageUrl, setStepTwoImageUrl] = useState("");
  const [stepThreeImageUrl, setStepThreeImageUrl] = useState("");
  const [selectedJewelryStatus, setSelectedJewelryStatus] = useState(false);
  const [selectedDiamondStatus, setSelectedDiamondStatus] = useState(false);
  const [labelOneStatus, setLabelOneStatus] = useState("");
  const [labelTwoStatus, setLabelTwoStatus] = useState("");

  const allGemstones = data.jewelryReducer.unfilteredGemstonesArray;
  const gemPendants = data.jewelryReducer.unfilteredGemstonesPendantsArray;

  const displayJewelryDetail = () => {
    setSelectedJewelryStatus(!selectedJewelryStatus);
  };

  let crumbsArray = window.location.pathname.split("/");
  let gemType = crumbsArray[3];
  let gemId = crumbsArray[4];
  let settingParam = crumbsArray[4];

  let gemItem = allGemstones.find((item, index) => {
    if (cookies._gemstoneSelectedForPendant) {
      return (
        item.stockNumber === cookies._gemstoneSelectedForPendant.stockNumber
      );
    }
  });

  let gemPendant = gemPendants.find((item, index) => {
    if (cookies._ringSelectedForGemstone) {
      return item.stockNumber === cookies._ringSelectedForGemstone;
    }
  });

  const handleStepLabelContent = () => {
    let whatGotSelectedFirstForCustomGemPendant =
      cookies.whatGotSelectedFirstForCustomGemPendant;
    let path = window.location.pathname;

    switch (path) {
      case `/create-your-own-gem-pendant/pendants`:
      case `/create-your-own-gem-pendant/pendants/${gemType}`:
      case `/create-your-own-gem-pendant/pendants/${gemType}/${settingParam}`:
        if (whatGotSelectedFirstForCustomGemPendant === "gem") {
          setLabelOneStatus("gem");
          setLabelTwoStatus("pendant");
          setStepStatus(2);
        } else {
          setLabelOneStatus("pendant");
          setLabelTwoStatus("gem");
          setStepStatus(1);
        }

        break;

      case "/create-your-own-gem-pendant/gemstones":
      case `/create-your-own-gem-pendant/gemstones/${gemType}`:
      case `/create-your-own-gem-pendant/gemstones/${gemType}/${gemId}`:
        if (whatGotSelectedFirstForCustomGemPendant === "pendant") {
          setLabelOneStatus("pendant");
          setLabelTwoStatus("gem");
          setStepStatus(2);
        } else {
          setLabelOneStatus("gem");
          setLabelTwoStatus("pendant");
          setStepStatus(1);
        }

        break;

      case "/create-your-own-gem-pendant/review-order":
        if (whatGotSelectedFirstForCustomGemPendant === "pendant") {
          setLabelOneStatus("pendant");
          setLabelTwoStatus("gem");
          setStepStatus(3);
        } else {
          setLabelOneStatus("gem");
          setLabelTwoStatus("pendant");
          setStepStatus(3);
        }
        break;
      default:
        return;
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
              {labelOneStatus === "pendant" ? (
                cookies._pendantSelectedForGemstone ? (
                  gemPendant ? (
                    <div className="product-image">
                      <div className="big-screen-content">
                        <section>
                          <p style={{ fontWeight: "bold" }}>$ 300</p>
                          <div>
                            <a href="/">View</a>
                            <hr
                              style={{
                                width: "1px",
                                height: "auto",
                                background: "rgb(232,232,232)",
                                margin: "0px 3px",
                              }}
                            />
                            <a href="/">Remove</a>
                          </div>
                        </section>
                      </div>
                      {/* <img src={`${ringItem.metals[metalId].imgURL}`} /> */}
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
                    <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/necklace.png" />
                  </div>
                )
              ) : cookies._gemstoneSelectedForPendant ? (
                gemItem ? (
                  <div className="product-image">
                    <div className="big-screen-content">
                      <section>
                        <p style={{ fontWeight: "bold" }}>$ 800</p>
                        <div>
                          <a href="/">View</a>
                          <hr
                            style={{
                              width: "1px",
                              height: "auto",
                              background: "rgb(232,232,232)",
                              margin: "0px 3px",
                            }}
                          />
                          <a href="/">Remove</a>
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
                    />
                  </div>
                )
              ) : (
                <div>
                  <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/gemstone.png" />
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
              {labelTwoStatus === "gemstone" ? (
                cookies._gemstoneSelectedForPendant ? (
                  gemItem ? (
                    <div className="product-image">
                      <div className="big-screen-content">
                        <section>
                          <p style={{ fontWeight: "bold" }}>$ 800</p>
                          <div>
                            <a href="/">View</a>
                            <hr
                              style={{
                                width: "1px",
                                height: "auto",
                                background: "rgb(232,232,232)",
                                margin: "0px 3px",
                              }}
                            />
                            <a href="/">Remove</a>
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
                      />
                    </div>
                  )
                ) : (
                  <div>
                    <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/gemstone.png" />
                  </div>
                )
              ) : cookies._pendantSelectedForGemstone ? (
                gemPendant ? (
                  <div className="product-image">
                    <section>
                      <p style={{ fontWeight: "bold" }}>$ 300</p>
                      <div>
                        <a href="/">View</a>
                        <hr
                          style={{
                            width: "1px",
                            height: "auto",
                            background: "rgb(232,232,232)",
                            margin: "0px 3px",
                          }}
                        />
                        <a href="/">Remove</a>
                      </div>
                    </section>
                    {/* <img src={`${ringItem.metals[metalId].imgURL}`} /> */}
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
                <img src="https://bnsec.bluenile.com/bnsecure/assets/chrome/icons/complete_dbdbdb_38x38.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </TopLabelBox>
  );
}
