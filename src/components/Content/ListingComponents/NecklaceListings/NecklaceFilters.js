import React from "react";
import { FilterBox } from "../style.js";
import NecklacesPriceFilter from "./NecklacePriceFilter";
import NecklacesMetalFilter from "./NecklaceMetalFilter";
import queryString from "query-string";
import { useLocation, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

export default function NecklacesFilters({ setParentMetalColor, setShape }) {
  const location = useLocation();
  const history = useHistory();
  const [cookies] = useCookies();

  const onShapeChange = (e) => {
    const parsed = queryString.parse(location.search);
    setShape(e.target.value);
    parsed.shape = e.target.value;
    const stringified = queryString.stringify(parsed);
    location.search = stringified;
    history.push(`?${location.search}`);
  };

  const changeMetal = (e) => {
    setParentMetalColor(e.target.value);
  };

  return (
    <FilterBox>
      <div className="solitaire-desktop-filters">
        <ul>
          <li>
            <div>
              <p>Metal</p>
              <FontAwesomeIcon
                icon={faSortDown}
                style={{
                  color: "rgba(30,46,76)",
                  fontSize: "1.8rem",
                  marginTop: "-7px",
                }}
              />{" "}
            </div>
            <section className="dropdown-content" onChange={changeMetal}>
              <div className="metal-option-container">
                <div className="label-container">
                  <input
                    type="radio"
                    id="white-gold"
                    name="shape"
                    value="white-gold"
                  />
                  <label for="white-gold">White Gold</label>
                </div>
                <div
                  className="color-box"
                  style={{ background: "#e7eaeb" }}
                ></div>
              </div>
              <div className="metal-option-container">
                <div className="label-container">
                  <input
                    type="radio"
                    id="yellow-gold"
                    name="shape"
                    value="yellow-gold"
                  />
                  <label for="yellow-gold">Yellow Gold</label>
                </div>
                <div
                  className="color-box"
                  style={{ background: "#efd9a7" }}
                ></div>
              </div>
              <div className="metal-option-container">
                <div className="label-container">
                  <input
                    type="radio"
                    id="rose-gold"
                    name="shape"
                    value="rose-gold"
                  />
                  <label for="rose-gold">Rose Gold</label>
                </div>
                <div
                  className="color-box"
                  style={{ background: "#f7ccb3" }}
                ></div>
              </div>
              <div className="metal-option-container">
                <div className="label-container">
                  <input
                    type="radio"
                    id="platinum"
                    name="shape"
                    value="platinum"
                  />
                  <label for="platinum">Platinum</label>
                </div>
                <div
                  className="color-box"
                  style={{ background: "#e7eaeb" }}
                ></div>
              </div>
            </section>
          </li>
          {cookies.whatGotSelectedFirstForCustomNecklace === "diamond" ? (
            <li></li>
          ) : (
            <li>
              <div>
                <p>Shape</p>
                <FontAwesomeIcon
                  icon={faSortDown}
                  style={{
                    color: "rgba(30,46,76)",
                    fontSize: "1.8rem",
                    marginTop: "-7px",
                  }}
                />
              </div>
              <section className="dropdown-content">
                <div className="row">
                  <div className="shape-option-container">
                    <div className="label-container">
                      <input
                        type="radio"
                        id="round"
                        name="shape"
                        value="round"
                        onChange={onShapeChange}
                      />
                      <label for="round">Round</label>
                    </div>
                    <div className="image-box">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_round.png"
                        alt="diamond-shape-round"
                      />
                    </div>
                  </div>
                  <div className="shape-option-container">
                    <div className="label-container">
                      <input
                        type="radio"
                        id="princess"
                        name="shape"
                        value="princess"
                        onChange={onShapeChange}
                      />
                      <label for="princess">Princess</label>
                    </div>
                    <div className="image-box">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_princess.png"
                        alt="diamond-shape-princess"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="shape-option-container">
                    <div className="label-container">
                      <input
                        type="radio"
                        id="cushion"
                        name="shape"
                        value="cushion"
                        onChange={onShapeChange}
                      />
                      <label for="cushion">Cushion</label>
                    </div>
                    <div className="image-box">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_cushion.png"
                        alt="diamond-shape-cushion"
                      />
                    </div>
                  </div>
                  <div className="shape-option-container">
                    <div className="label-container">
                      <input
                        type="radio"
                        id="oval"
                        name="shape"
                        value="oval"
                        onChange={onShapeChange}
                      />
                      <label for="oval">Oval</label>
                    </div>
                    <div className="image-box">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_oval.png"
                        alt="diamond-shape-oval"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="shape-option-container">
                    <div className="label-container">
                      <input
                        type="radio"
                        id="pear"
                        name="shape"
                        value="pear"
                        onChange={onShapeChange}
                      />
                      <label for="pear">Pear</label>
                    </div>
                    <div className="image-box">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_pear.png"
                        alt="diamond-shape-pear"
                      />
                    </div>
                  </div>
                  <div className="shape-option-container">
                    <div className="label-container">
                      <input
                        type="radio"
                        id="emerald"
                        name="shape"
                        value="emerald"
                        onChange={onShapeChange}
                      />
                      <label for="emerald">Emerald</label>
                    </div>
                    <div className="image-box">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_emerald.png"
                        alt="diamond-shape-emerald"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="shape-option-container">
                    <div className="label-container">
                      <input
                        type="radio"
                        id="heart"
                        name="shape"
                        value="heart"
                        onChange={onShapeChange}
                      />
                      <label for="heart">Heart</label>
                    </div>
                    <div className="image-box">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_heart.png"
                        alt="diamond-shape-heart"
                      />
                    </div>
                  </div>
                  <div className="shape-option-container">
                    <div className="label-container">
                      <input
                        type="radio"
                        id="radiant"
                        name="shape"
                        value="radiant"
                        onChange={onShapeChange}
                      />
                      <label for="radiant">Radiant</label>
                    </div>
                    <div className="image-box">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_radiant.png"
                        alt="diamond-shape-radiant"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="shape-option-container">
                    <div className="label-container">
                      <input
                        type="radio"
                        id="asscher"
                        name="shape"
                        value="asscher"
                        onChange={onShapeChange}
                      />
                      <label for="asscher">Asscher</label>
                    </div>
                    <div className="image-box">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_asscher.png"
                        alt="diamond-shape-asscher"
                      />
                    </div>
                  </div>
                  <div className="shape-option-container">
                    <div className="label-container">
                      <input
                        type="radio"
                        id="marquise"
                        name="shape"
                        value="marquise"
                        onChange={onShapeChange}
                      />
                      <label for="marquise">Marquise</label>
                    </div>
                    <div className="image-box">
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_marquise.png"
                        alt="diamond-shape-marquise"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </li>
          )}
        </ul>
      </div>
      <div className="mobile-filters">
        <div>
          <h3>Mobile Filter Necklacess</h3>
          <button>Reset all</button>
        </div>
        <div className="filter-row">
          <div className="filter-container">
            <h3>Metal</h3>
            <NecklacesMetalFilter />
          </div>
          <div className="filter-container">
            <h3>Price</h3>
            <NecklacesPriceFilter />
          </div>
        </div>
      </div>
    </FilterBox>
  );
}
