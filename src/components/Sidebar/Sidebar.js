import React, { useState } from "react";
import SidebarBox from "./style.js";
import { Link } from "react-router-dom";
import CurrencyLooker from "../Header/CurrencyLooker";
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faTimes,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({
  slideStatus,
  onHamburgerClick,
  onAccountClick,
}) {
  const [engagementDropDownMenuStatus, setEngagementDropDownMenuStatus] =
    useState(false);
  const [diamondDropDownMenuStatus, setDiamondDropDownMenuStatus] =
    useState(false);
  const [gemstonesDropDownMenuStatus, setGemstonesDropDownMenuStatus] =
    useState(false);
  const [solitairesDropDownMenuStatus, setSolitairesDropDownMenuStatus] =
    useState(false);
  const [jewelryDropDownMenuStatus, setJewelryDropDownMenuStatus] =
    useState(false);
  const [educationDropDownMenuStatus, setEducationDropDownMenuStatus] =
    useState(false);

  const onShapeChangeFilter = () => {
    console.log("Shape clicked");
  };

  const [cookies] = useCookies();

  const onChangeDropdown = (e) => {
    let id = e.currentTarget.id;
    switch (id) {
      case "engagement":
        setEngagementDropDownMenuStatus(!engagementDropDownMenuStatus);
        setDiamondDropDownMenuStatus(false);
        setGemstonesDropDownMenuStatus(false);
        setSolitairesDropDownMenuStatus(false);
        setJewelryDropDownMenuStatus(false);
        setEducationDropDownMenuStatus(false);
        break;
      case "diamonds":
        setDiamondDropDownMenuStatus(!diamondDropDownMenuStatus);
        setGemstonesDropDownMenuStatus(false);
        setSolitairesDropDownMenuStatus(false);
        setJewelryDropDownMenuStatus(false);
        setEducationDropDownMenuStatus(false);
        setEngagementDropDownMenuStatus(false);
        break;
      case "gemstones":
        setGemstonesDropDownMenuStatus(!gemstonesDropDownMenuStatus);
        setDiamondDropDownMenuStatus(false);
        setSolitairesDropDownMenuStatus(false);
        setJewelryDropDownMenuStatus(false);
        setEducationDropDownMenuStatus(false);
        setEngagementDropDownMenuStatus(false);
        break;
      case "solitaires":
        setSolitairesDropDownMenuStatus(!solitairesDropDownMenuStatus);
        setGemstonesDropDownMenuStatus(false);
        setDiamondDropDownMenuStatus(false);
        setJewelryDropDownMenuStatus(false);
        setEducationDropDownMenuStatus(false);
        setEngagementDropDownMenuStatus(false);
        break;
      case "jewelry":
        setJewelryDropDownMenuStatus(!jewelryDropDownMenuStatus);
        setGemstonesDropDownMenuStatus(false);
        setDiamondDropDownMenuStatus(false);
        setSolitairesDropDownMenuStatus(false);
        setEducationDropDownMenuStatus(false);
        setEngagementDropDownMenuStatus(false);
        break;
      case "education":
        setEducationDropDownMenuStatus(!educationDropDownMenuStatus);
        setJewelryDropDownMenuStatus(false);
        setGemstonesDropDownMenuStatus(false);
        setDiamondDropDownMenuStatus(false);
        setSolitairesDropDownMenuStatus(false);
        setEngagementDropDownMenuStatus(false);
        break;
    }
  };

  return (
    <SidebarBox
      status={slideStatus}
      engagementDropDownMenuStatus={engagementDropDownMenuStatus}
      diamondDropDownMenuStatus={diamondDropDownMenuStatus}
      gemstonesDropDownMenuStatus={gemstonesDropDownMenuStatus}
      solitairesDropDownMenuStatus={solitairesDropDownMenuStatus}
      jewelryDropDownMenuStatus={jewelryDropDownMenuStatus}
      educationDropDownMenuStatus={educationDropDownMenuStatus}
    >
      <div className="sidebar-content">
        <div style={{ background: "rgb(30,46,76)" }}>
          <div className="sidebar-top">
            <section>
              {cookies.userNamee ? (
                <a href="/account/login">
                  <div>
                    Hi,{" "}
                    <span
                      style={{
                        textTransform: "capitalize",
                        fontWeight: "bold",
                        marginLeft: "5px",
                      }}
                    >
                      {cookies.userNamee}
                    </span>
                  </div>
                </a>
              ) : (
                <a href="/account/login">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ fontSize: "2rem", marginRight: "10px" }}
                  ></FontAwesomeIcon>
                  <p style={{ display: "inline-block" }}>Login / SignUp</p>
                </a>
              )}
              <div>
                <CurrencyLooker />
              </div>
            </section>
            <section>
              <div className="search-container">
                <form>
                  <input type="text" placeholder="Search.." name="search" />
                  <button type="submit">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                  </button>
                </form>
              </div>
            </section>
          </div>

          <div className="links-container">
            {/* <div
              className="drop-content-parent"
              id="engagement"
              onClick={onChangeDropdown}
            >
              <div className="label-container">
                <p>Engagement</p>
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  style={{ color: "white", fontSize: "2rem" }}
                ></FontAwesomeIcon>
              </div>
              <section className="drop-content">
                <div className="drop-content-title">Create Your Own</div>
                <section className="create-your-own">
                  <ul>
                    <li>
                      <a href="/create-your-own-ring/diamonds?name=all">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/white-diamond.png"
                          alt="diamond-shape-pear"
                          className="nav-diamond-images"
                        />
                        <p>Start With A Diamond</p>
                      </a>
                    </li>
                    <li>
                      <a href="/create-your-own-ring/fancy-diamonds">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/colored-diamond.png"
                          alt="diamond-shape-princess"
                          className="nav-diamond-images"
                        />
                        <p>Start With A Colored Diamond</p>
                      </a>
                    </li>
                    <li>
                      <a href="/create-your-own-ring/rings">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/ring.png"
                          alt="diamond-shape-round"
                          className="nav-diamond-images"
                        />
                        <p>Start With A Diamond Setting</p>
                      </a>
                    </li>
                  </ul>
                </section>
                <div className="drop-content-title">Shop By Shape</div>
                <ul id="loose-white-diamonds">
                  <li>
                    <a
                      className="half-width-link"
                      href="/diamonds?name=round"
                      onClick={() => onShapeChangeFilter(0)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_round.png"
                        alt="diamond-shape-round"
                        className="nav-diamond-images"
                      />
                      <p>Round</p>
                    </a>
                    <a
                      className="half-width-link"
                      href="/diamonds?name=emerald"
                      onClick={() => onShapeChangeFilter(1)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_emerald.png"
                        alt="diamond-shape-emerald"
                        className="nav-diamond-images"
                      />
                      <p>Emerald</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="half-width-link"
                      href="/diamonds?name=pear"
                      onClick={() => onShapeChangeFilter(7)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_pear.png"
                        alt="diamond-shape-pear"
                        className="nav-diamond-images"
                      />
                      <p>Pear</p>
                    </a>
                    <a
                      className="half-width-link"
                      href="/diamonds?name=marquise"
                      onClick={() => onShapeChangeFilter(3)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_marquise.png"
                        alt="diamond-shape-marquise"
                        className="nav-diamond-images"
                      />
                      <p>Marquise</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="half-width-link"
                      href="/diamonds?name=cushion"
                      onClick={() => onShapeChangeFilter(4)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_cushion.png"
                        alt="diamond-shape-cushion"
                        className="nav-diamond-images"
                      />
                      <p>Cushion</p>
                    </a>
                    <a
                      className="half-width-link"
                      href="/diamonds?name=square-emerald"
                      onClick={() => onShapeChangeFilter(2)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_asscher.png"
                        alt="diamond-shape-asscher"
                        className="nav-diamond-images"
                      />
                      <p>Asscher</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="half-width-link"
                      href="/diamonds?name=pear"
                      onClick={() => onShapeChangeFilter(7)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_oval.png"
                        alt="diamond-shape-pear"
                        className="nav-diamond-images"
                      />
                      <p>Oval</p>
                    </a>
                    <a
                      className="half-width-link"
                      href="/diamonds?name=radiant"
                      onClick={() => onShapeChangeFilter(9)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_radiant.png"
                        alt="diamond-shape-radiant"
                        className="nav-diamond-images"
                      />
                      <p>Radiant</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="half-width-link"
                      href="/diamonds?name=princess"
                      onClick={() => onShapeChangeFilter(8)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_princess.png"
                        alt="diamond-shape-princess"
                        className="nav-diamond-images"
                      />
                      <p>Princess</p>
                    </a>
                    <a
                      className="half-width-link"
                      href="/diamonds?name=heart"
                      onClick={() => onShapeChangeFilter(5)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_heart.png"
                        alt="diamond-shape-heart"
                        className="nav-diamond-images"
                      />
                      <p>Heart</p>
                    </a>
                  </li>
                </ul>
                <div className="drop-content-title">Shop By Metal</div>
                <ul>
                  <li>
                    <a
                      href="/diamonds/fancy"
                      onClick={() => onShapeChangeFilter(0)}
                    >
                      <div
                        style={{
                          backgroundColor: "#efefef",
                          width: "30px",
                          height: "20px",
                          marginRight: "5px",
                          borderRadius: "3px",
                        }}
                      ></div>
                      <p>White Gold</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/diamonds/fancy"
                      onClick={() => onShapeChangeFilter(7)}
                    >
                      <div
                        style={{
                          backgroundColor: "#e9d590",
                          width: "30px",
                          height: "20px",
                          marginRight: "5px",
                          borderRadius: "3px",
                        }}
                      ></div>
                      <p>Yellow Gold</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/diamonds/fancy"
                      onClick={() => onShapeChangeFilter(4)}
                    >
                      <div
                        style={{
                          backgroundColor: "#f5c8a9",
                          width: "30px",
                          height: "20px",
                          marginRight: "5px",
                          borderRadius: "3px",
                        }}
                      ></div>
                      <p>Rose Gold</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/diamonds/fancy"
                      onClick={() => onShapeChangeFilter(7)}
                    >
                      <div
                        style={{
                          backgroundColor: "#d7d8d8",
                          width: "30px",
                          height: "20px",
                          marginRight: "5px",
                          borderRadius: "3px",
                        }}
                      ></div>
                      <p>Platinum</p>
                    </a>
                  </li>
                </ul>
                <div className="drop-content-title">Featured Collections</div>
                <section className="create-your-own">
                  <ul>
                    <li>
                      <a href="/mens-rings">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/mens-ring.png"
                          alt="diamond-marquise-image"
                          className="nav-diamond-images"
                        />
                        <p>Men's Rings</p>
                      </a>
                    </li>
                    <li>
                      <a href="/engagement-rings">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/fashion-ring.png"
                          alt="diamond-marquise-image"
                          className="nav-diamond-images"
                        />
                        <p>Fashion Rings</p>
                      </a>
                    </li>
                    <li>
                      <a href="/preset-jewelry/rings">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/ring.png"
                          alt="diamond-marquise-image"
                          className="nav-diamond-images"
                        />
                        <p>Solitaire Rings</p>
                      </a>
                    </li>
                    <li>
                      <a href="/bespoke">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/ring.png"
                          alt="diamond-marquise-image"
                          className="nav-diamond-images"
                        />
                        <p>Custom Rings</p>
                      </a>
                    </li>
                  </ul>
                </section>
              </section>
            </div> */}
            <hr
              style={{
                width: "100%",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            />
            <div
              className="drop-content-parent"
              id="diamonds"
              onClick={onChangeDropdown}
            >
              <div className="label-container">
                <p>Diamonds</p>
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  style={{ color: "white", fontSize: "2rem" }}
                ></FontAwesomeIcon>
              </div>
              <section className="drop-content">
                <div className="drop-content-title">Loose Diamonds</div>
                <ul id="loose-white-diamonds">
                  <li>
                    <a
                      className="half-width-link"
                      href="/diamonds?name=round"
                      onClick={() => onShapeChangeFilter(0)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_round.png"
                        alt="diamond-shape-round"
                        className="nav-diamond-images"
                      />
                      <p>Round</p>
                    </a>
                    <a
                      className="half-width-link"
                      href="/diamonds?name=emerald"
                      onClick={() => onShapeChangeFilter(1)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_emerald.png"
                        alt="diamond-shape-emerald"
                        className="nav-diamond-images"
                      />
                      <p>Emerald</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="half-width-link"
                      href="/diamonds?name=pear"
                      onClick={() => onShapeChangeFilter(7)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_pear.png"
                        alt="diamond-shape-pear"
                        className="nav-diamond-images"
                      />
                      <p>Pear</p>
                    </a>
                    <a
                      className="half-width-link"
                      href="/diamonds?name=marquise"
                      onClick={() => onShapeChangeFilter(3)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_marquise.png"
                        alt="diamond-shape-marquise"
                        className="nav-diamond-images"
                      />
                      <p>Marquise</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="half-width-link"
                      href="/diamonds?name=cushion"
                      onClick={() => onShapeChangeFilter(4)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_cushion.png"
                        alt="diamond-shape-cushion"
                        className="nav-diamond-images"
                      />
                      <p>Cushion</p>
                    </a>
                    <a
                      className="half-width-link"
                      href="/diamonds?name=square-emerald"
                      onClick={() => onShapeChangeFilter(2)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_asscher.png"
                        alt="diamond-shape-asscher"
                        className="nav-diamond-images"
                      />
                      <p>Asscher</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="half-width-link"
                      href="/diamonds?name=pear"
                      onClick={() => onShapeChangeFilter(7)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_oval.png"
                        alt="diamond-shape-pear"
                        className="nav-diamond-images"
                      />
                      <p>Oval</p>
                    </a>
                    <a
                      className="half-width-link"
                      href="/diamonds?name=radiant"
                      onClick={() => onShapeChangeFilter(9)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_radiant.png"
                        alt="diamond-shape-radiant"
                        className="nav-diamond-images"
                      />
                      <p>Radiant</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="half-width-link"
                      href="/diamonds?name=princess"
                      onClick={() => onShapeChangeFilter(8)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_princess.png"
                        alt="diamond-shape-princess"
                        className="nav-diamond-images"
                      />
                      <p>Princess</p>
                    </a>
                    <a
                      className="half-width-link"
                      href="/diamonds?name=heart"
                      onClick={() => onShapeChangeFilter(5)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_heart.png"
                        alt="diamond-shape-heart"
                        className="nav-diamond-images"
                      />
                      <p>Heart</p>
                    </a>
                  </li>
                </ul>
                <div className="drop-content-title">Fancy Colored Diamonds</div>
                <ul>
                  <li>
                    <a
                      href="/diamonds/fancy?name=all"
                      onClick={() => onShapeChangeFilter(0)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/fancy-yellow.png"
                        alt="fancy-diamond-yellow"
                        className="nav-fancy-diamond-images"
                      />
                      <p>Yellow</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/diamonds/fancy?name=all"
                      onClick={() => onShapeChangeFilter(7)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/fancy-blue.png"
                        alt="fancy-diamond-blue"
                        className="nav-fancy-diamond-images"
                      />
                      <p>Blue</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/diamonds/fancy?name=all"
                      onClick={() => onShapeChangeFilter(4)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/fancy-red.png"
                        alt="fancy-diamond-red"
                        className="nav-fancy-diamond-images"
                      />
                      <p>Red</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/diamonds/fancy?name=all"
                      onClick={() => onShapeChangeFilter(7)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/fancy-pink.png"
                        alt="fancy-diamond-pink"
                        className="nav-fancy-diamond-images"
                      />
                      <p>Pink</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/diamonds/fancy?name=all"
                      onClick={() => onShapeChangeFilter(7)}
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/fancy-orange.png"
                        alt="fancy-diamond-orange"
                        className="nav-fancy-diamond-images"
                      />
                      <p>Orange</p>
                    </a>
                  </li>
                </ul>
                <div className="drop-content-title">Learning Center</div>
              </section>
            </div>
            <hr
              style={{
                width: "100%",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            />
            <div
              className="drop-content-parent"
              id="gemstones"
              onClick={onChangeDropdown}
            >
              <div className="label-container">
                <p>Gemstones</p>
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  style={{ color: "white", fontSize: "2rem" }}
                ></FontAwesomeIcon>
              </div>
              <section className="drop-content">
                <div className="drop-content-title">Gemstones</div>
                <ul>
                  <li>
                    <a
                      className="half-width-link"
                      href="/gemstones/blue-sapphire"
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/blue-sapphire.jpg"
                        alt="gemstone-blue-sapphire"
                        className="nav-gemstone-image"
                      />
                      <div>
                        <p>Blue&nbsp;Sapphire</p>
                        <p>(नीलम)</p>
                      </div>
                    </a>
                    <a
                      className="half-width-link"
                      href="/gemstones/yellow-sapphire"
                    >
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/yellow-sapphire.jpg"
                        alt="gemstone-yellow-sapphire"
                        className="nav-gemstone-image"
                      />
                      <div>
                        <p>Yellow&nbsp;Sapphire</p>
                        <p>(पुखराज)</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="half-width-link" href="/gemstones/emerald">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/emerald.jpg"
                        alt="gemstone-emerald"
                        className="nav-gemstone-image"
                      />
                      <div>
                        <p>Emerald</p>
                        <p>(पन्ना)</p>
                      </div>
                    </a>
                    <a className="half-width-link" href="/gemstones/ruby">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/ruby.jpg"
                        alt="gemstone-ruby"
                        className="nav-gemstone-image"
                      />
                      <div>
                        <p>Ruby</p>
                        <p>(माणिक)</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="half-width-link" href="/gemstones/hessonite">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/hessonite.jpg"
                        alt="gemstone-hessonite"
                        className="nav-gemstone-image"
                      />
                      <div>
                        <p>Hessonite</p>
                        <p>(गोमेध)</p>
                      </div>
                    </a>
                    <a className="half-width-link" href="/gemstones/opal">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/opal.png"
                        alt="gemstone-opal"
                        className="nav-gemstone-image"
                      />
                      <div>
                        <p>Opal</p>
                        <p>(दूधिया पत्थर)</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="half-width-link" href="/gemstones/pearl">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/pearl.jpg"
                        alt="gemstone-pearl"
                        className="nav-gemstone-image"
                      />
                      <div>
                        <p>Pearl</p>
                        <p>(मोती)</p>
                      </div>
                    </a>
                    <a className="half-width-link" href="/gemstones/cats-eye">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/cats-eye.jpg"
                        alt="gemstone-cats-eye"
                        className="nav-gemstone-image"
                      />
                      <div>
                        <p>Cat's&nbsp;Eye</p>
                        <p>(लहसुनिया)</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="half-width-link" href="/gemstones/red-coral">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/red-coral.jpg"
                        alt="gemstone-red-coral"
                        className="nav-gemstone-image"
                      />
                      <div>
                        <p>Red&nbsp;Coral</p>
                        <p>(मूंगा)</p>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="drop-content-title">Learning Center</div>
              </section>
            </div>
            {/* <hr
              style={{
                width: "100%",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            /> */}
            {/* <div
              className="drop-content-parent"
              id="solitaires"
              onClick={onChangeDropdown}
            >
              <div className="label-container">
                <p>Solitaires</p>
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  style={{ color: "white", fontSize: "2rem" }}
                ></FontAwesomeIcon>
              </div>
              <section className="drop-content">
                <div className="drop-content-title">Solitaire Rings</div>
                <div className="jewelry-builder-drop-content">
                  <section className="solitaire-section">
                    <div>
                      <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/create-jewelry-section/solitaire-ring.jpg" />
                    </div>
                    <div>
                      <a href="/create-your-own-ring/rings">
                        Create Your Own Ring
                      </a>
                      <p>OR</p>
                      <a href="/preset-jewelry/rings">
                        View All Preset Designs
                      </a>
                    </div>
                  </section>
                </div>
                <div className="drop-content-title">Solitaire Necklaces</div>
                <div className="jewelry-builder-drop-content">
                  <section className="solitaire-section">
                    <div>
                      <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/create-jewelry-section/solitaire-pendant.jpg" />
                    </div>
                    <div>
                      <a href="/create-your-own-necklace/necklaces">
                        Create Your Own Necklace
                      </a>
                      <p>OR</p>
                      <a href="/preset-jewelry/necklaces">
                        View All Preset Designs
                      </a>
                    </div>
                  </section>
                </div>
                <div className="drop-content-title">Solitaire Studs</div>
                <div className="jewelry-builder-drop-content">
                  <section className="solitaire-section">
                    <div>
                      <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/create-jewelry-section/solitaire-studs.jpg" />
                    </div>
                    <div>
                      <a href="/create-your-own-stud/studs">
                        Create Your Own Studs
                      </a>
                      <p>OR</p>
                      <a href="/preset-jewelry/studs">
                        View All Preset Designs
                      </a>
                    </div>
                  </section>
                </div>
              </section>
            </div> */}
            {/* <hr
              style={{
                width: "100%",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            /> */}
            <div
              className="drop-content-parent"
              id="jewelry"
              onClick={onChangeDropdown}
            >
              <div className="label-container">
                <p>Fine Jewelry</p>
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  style={{ color: "white", fontSize: "2rem" }}
                ></FontAwesomeIcon>
              </div>
              <section className="drop-content">
                <div className="jewelry-row">
                  <div className="links-col">
                    <div className="drop-content-title">Women</div>
                    <section className="jewelry-section-links">
                      <div>
                        <a>
                          <img
                            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/ring.png"
                            alt="women-rings"
                          />
                          <p>Rings</p>
                        </a>
                        <div>
                          <a href="/preset-jewelry/rings">- Solitaire</a>
                          <a href="/engagement-rings">- Fashion</a>
                        </div>
                      </div>
                      <div>
                        <a>
                          <img
                            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/studs.png"
                            alt="women-studs"
                          />
                          <p>Earrings</p>
                        </a>
                        <div>
                          <a href="/preset-jewelry/studs">- Studs</a>
                          <a href="/new-earrings">- Earrings</a>
                        </div>
                      </div>
                      <div>
                        <a>
                          <img
                            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/pendant.png"
                            alt="women-pendants"
                          />
                          <p>Necklaces</p>
                        </a>
                        <div>
                          <a href="/new-pendants">- Pendants</a>
                          <a href="/preset-jewelry/necklaces">- Necklaces</a>
                          <a href="/ganesh-pendants">- Alphabet</a>
                        </div>
                      </div>
                      <div>
                        <a>
                          <img
                            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/nose-pin.png"
                            alt="women-nose-pins"
                          />
                          <p>Nose Pins</p>
                        </a>
                        <div>
                          <a href="/nose-pins?pin=screw">- Screw</a>
                          <a href="/nose-pins?pin=wire">- Wire</a>
                          <a href="/nose-pins?pin=ring">- Ring</a>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="links-col">
                    <div className="drop-content-title">Men</div>
                    <section className="jewelry-section-links">
                      <div>
                        <a href="/mens-rings">
                          <img
                            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/ring.png"
                            alt="mens-rings"
                          />
                          <p>Rings</p>
                        </a>
                      </div>
                      <div>
                        <a href="/preset-jewelry/mens/studs">
                          <img
                            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/studs.png"
                            alt="men-studs"
                          />
                          <p>Studs</p>
                        </a>
                      </div>
                      <div>
                        <a href="/chains">
                          <img
                            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/mens-chain.png"
                            alt="men-chain"
                          />
                          <p>Chains</p>
                        </a>
                      </div>
                      <div>
                        <a href="/mens-kada">
                          <img
                            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/kada.png"
                            alt="men-chain"
                          />
                          <p>Kada</p>
                        </a>
                      </div>
                      <div>
                        <a href="/mens-bracelet">
                          <img
                            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/bracelet.png"
                            alt="men-bracelet"
                          />
                          <p>Bracelet</p>
                        </a>
                      </div>
                    </section>
                  </div>
                </div>
              </section>
            </div>

            {/* <hr
              style={{
                width: "100%",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            /> */}
            {/* <div
              className="drop-content-parent"
              id="education"
              onClick={onChangeDropdown}
            >
              <div className="label-container">
                <p>Education</p>
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  style={{ color: "white", fontSize: "2rem" }}
                ></FontAwesomeIcon>
              </div>

              <section className="drop-content">
                <div className="drop-content-title">Education</div>
                <ul>
                  <li>
                    <a href="/education/diamonds">
                      <p>Diamond Guide</p>
                    </a>
                  </li>
                  <li>
                    <a href="/education/gemstones">
                      <p>Gemstone Guide</p>
                    </a>
                  </li>
                  <li>
                    <a href="/education/jewelry">
                      <p>Jewelry Guide</p>
                    </a>
                  </li>
                </ul>
              </section>
            </div> */}

            <hr
              style={{
                width: "100%",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            />
            <div className="drop-content-parent" id="sale">
              <div className="label-container">
                <Link to={"/bespoke"} onClick={onHamburgerClick}>
                  Bespoke
                </Link>
                <div></div>
              </div>
            </div>
            <hr
              style={{
                width: "100%",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            />

            <div className="drop-content-parent" id="gems-recommendation">
              <div className="label-container">
                <Link to={"/indian-astro-company"} onClick={onHamburgerClick}>
                  Bharat Astro Co.
                </Link>
                <div></div>
              </div>
            </div>
            <hr
              style={{
                width: "100%",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            />
          </div>
        </div>

        <div className="sidebar-footer">
          <p>&copy; 2021 Luxury Gems Company. All Rights Reserved.</p>
        </div>
      </div>

      <div id="empty-space" onClick={onHamburgerClick}>
        <div
          style={{
            width: "100%",
            height: "45px",
            background: "rgba(255,255,255)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
        </div>
      </div>
    </SidebarBox>
  );
}
