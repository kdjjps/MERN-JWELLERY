import React from "react";
import { FilterBox } from "../style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useRouteMatch, useHistory } from "react-router-dom";

export default function GemstoneRingFilters({ setParentMetalColor, setGem }) {
  const location = useLocation();
  const history = useHistory();
  const { url } = useRouteMatch();

  const onGemChange = (e) => {
    setGem(e.target.value);
    history.push(`?gem=${e.target.value}`);
  };

  const changeMetal = (e) => {
    setParentMetalColor(e.target.value);
  };

  return (
    <FilterBox>
      <div className="gemstone-desktop-filters">
        <ul>
          <li>
            <div>
              <p>Gemstone</p>
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
                <div className="gem-option-container">
                  <div className="label-container">
                    <input
                      type="radio"
                      id="round"
                      name="gem"
                      value="blue-sapphire"
                      onChange={onGemChange}
                    />
                    <label for="round">Blue Sapphire</label>
                  </div>
                  <div className="image-box">
                    <img
                      src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/blue-sapphire.jpg"
                      alt="blue-sapphire"
                    />
                  </div>
                </div>
                <div className="gem-option-container">
                  <div className="label-container">
                    <input
                      type="radio"
                      id="princess"
                      name="gem"
                      value="ruby"
                      onChange={onGemChange}
                    />
                    <label for="princess">Ruby</label>
                  </div>
                  <div className="image-box">
                    <img
                      src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/ruby.jpg"
                      alt="ruby"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="gem-option-container">
                  <div className="label-container">
                    <input
                      type="radio"
                      id="oval"
                      name="gem"
                      value="yellow-sapphire"
                      onChange={onGemChange}
                    />
                    <label for="oval">Yellow Sapphire</label>
                  </div>
                  <div className="image-box">
                    <img
                      src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/yellow-sapphire.jpg"
                      alt="yellow-sapphire"
                    />
                  </div>
                </div>
                <div className="gem-option-container">
                  <div className="label-container">
                    <input
                      type="radio"
                      id="cushion"
                      name="gem"
                      value="pearl"
                      onChange={onGemChange}
                    />
                    <label for="cushion">Pearl</label>
                  </div>
                  <div className="image-box">
                    <img
                      src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/pearl.jpg"
                      alt="pearl"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="gem-option-container">
                  <div className="label-container">
                    <input
                      type="radio"
                      id="asscher"
                      name="gem"
                      value="red-coral"
                      onChange={onGemChange}
                    />
                    <label for="asscher">Red Coral</label>
                  </div>
                  <div className="image-box">
                    <img
                      src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/red-coral.jpg"
                      alt="red-coral"
                    />
                  </div>
                </div>
                <div className="gem-option-container">
                  <div className="label-container">
                    <input
                      type="radio"
                      id="emerald"
                      name="gem"
                      value="cats-eye"
                      onChange={onGemChange}
                    />
                    <label for="emerald">Cat's Eye</label>
                  </div>
                  <div className="image-box">
                    <img
                      src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/cats-eye.jpg"
                      alt="cats-eye"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="gem-option-container">
                  <div className="label-container">
                    <input
                      type="radio"
                      id="heart"
                      name="gem"
                      value="emerald"
                      onChange={onGemChange}
                    />
                    <label for="heart">Emerald</label>
                  </div>
                  <div className="image-box">
                    <img
                      src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/emerald.jpg"
                      alt="emerald"
                    />
                  </div>
                </div>
                <div className="gem-option-container">
                  <div className="label-container">
                    <input
                      type="radio"
                      id="radiant"
                      name="gem"
                      value="opal"
                      onChange={onGemChange}
                    />
                    <label for="radiant">Opal</label>
                  </div>
                  <div className="image-box">
                    <img
                      src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/opal.png"
                      alt="opal"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="gem-option-container">
                  <div className="label-container">
                    <input
                      type="radio"
                      id="pear"
                      name="gem"
                      value="hessonite"
                      onChange={onGemChange}
                    />
                    <label for="pear">Hessonite</label>
                  </div>
                  <div className="image-box">
                    <img
                      src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/hessonite.jpg"
                      alt="hessonite"
                    />
                  </div>
                </div>
                <div className="gem-option-container"></div>
              </div>
            </section>
          </li>
          {/* <li>
                        <div>
                            <p>Price</p>
                            <i className="fas fa-angle-down" style={{color:'rgba(30,46,76)', fontSize:'1.8rem'}}></i>
                        </div>
                        <section className='dropdown-content'>
                            Price Filter
                        </section>
                    </li> */}
        </ul>
      </div>
    </FilterBox>
  );
}
