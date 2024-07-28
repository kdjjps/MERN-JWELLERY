import React, { useState, useEffect } from "react";
import { FilterBox } from "../style.js";
import { useRouteMatch } from "react-router-dom";
import DiamondShapeFilter from "./DiamondShapeFilter";
import DiamondPriceFilter from "./DiamondPriceFilter";
import DiamondCaratFilter from "./DiamondCaratFilter";
import DiamondClarityFilter from "./DiamondClarityFilter";
import DiamondCutFilter from "./DiamondCutFilter";
import DiamondColorFilter from "./DiamondColorFilter";
import DiamondCertFilter from "./DiamondCertFilter";
import DiamondTableFilter from "./DiamondTableFilter";
import DiamondDepthFilter from "./DiamondDepthFilter";
import DiamondPolishFilter from "./DiamondPolishFilter";
import DiamondSymmetryFilter from "./DiamondSymmetryFilter";
import DiamondFluorescenceFilter from "./DiamondFluorescenceFilter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function DiamondFilters({
  filter,
  priceFilter,
  shapeFilter,
  onChangeMenuStatus,
  status,
  handleShapeChange,
  lowestCarat,
  highestCarat,
  lowestPrice,
  highestPrice,
  filteredDiamonds,
  caratBySortedData,
  setFilterAppliedCount,
  filterAppliedCount,
  setShape,
}) {
  const { path, url } = useRouteMatch();
  const [advanceFilter, setAdvanceFilter] = useState(false);
  const [filterStatus, setFilterStatus] = useState(false);
  const [infoModalStatus, setInfoModalStatus] = useState(null);

  useEffect(() => {
    if (path === "/create-your-own-earring/diamonds/second") {
      setFilterStatus(true);
    }
  }, [filterStatus]);

  return (
    <FilterBox
      status={status}
      advanceFilter={advanceFilter}
      infoStatus={infoModalStatus}
    >
      <div className="desktop-filters">
        <section className="basic-filters">
          <div className="filter-container">
            <div className="filter-label">
              Shape
              <div className="filter-info">
                <img
                  onClick={(e) => setInfoModalStatus(e.target.id)}
                  id="shape-info"
                  src="https://css.brilliantearth.com/static/img/icon/q-mark-v2.png"
                  style={{ width: "15px", height: "auto" }}
                />
                <div className="info" id="info-1">
                  <div className="triangle-left"></div>
                  <p>
                    Diamond shape is the outline and form of a diamond after it
                    has been cut & polished.
                    <span style={{ color: "blue" }}>
                      {" "}
                      Learn more{" "}
                      <i
                        className="fi-xwsrxl-caret-solid"
                        style={{ color: "blue" }}
                      ></i>
                      .
                    </span>
                  </p>
                  <div
                    className="close-button"
                    onClick={() => setInfoModalStatus(null)}
                  >
                    <i
                      className="fas fa-times"
                      style={{ fontSize: "1.2rem", color: "rgb(30,46,76)" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <DiamondShapeFilter
              filterStatus={filterStatus}
              filter={filter}
              handleShapeChange={handleShapeChange}
              setShape={setShape}
              setFilterAppliedCount={setFilterAppliedCount}
              filterAppliedCount={filterAppliedCount}
            />
          </div>
          <div className="filter-container">
            <div className="filter-label">
              Cut
              <div className="filter-info">
                <img
                  onClick={(e) => setInfoModalStatus(e.target.id)}
                  id="cut-info"
                  src="https://css.brilliantearth.com/static/img/icon/q-mark-v2.png"
                  style={{ width: "15px", height: "auto" }}
                />
                <div className="triangle-left"></div>
                <div className="info" id="info-2">
                  <div className="triangle-left"></div>
                  <p>
                    Diamond Cut is one of the most defining characteristics of a
                    diamond, achieving high levels of brilliance, sparkle, and
                    durability.
                    <span style={{ color: "blue" }}>
                      {" "}
                      Learn more{" "}
                      <i
                        className="fi-xwsrxl-caret-solid"
                        style={{ color: "blue" }}
                      ></i>
                      .
                    </span>
                  </p>
                  <div
                    className="close-button"
                    onClick={() => setInfoModalStatus(null)}
                  >
                    <i
                      className="fas fa-times"
                      style={{ fontSize: "1.2rem", color: "rgb(30,46,76)" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <DiamondCutFilter filterStatus={filterStatus} />
          </div>
          <div className="filter-container">
            <div className="filter-label">
              Color
              <div className="filter-info">
                <img
                  onClick={(e) => setInfoModalStatus(e.target.id)}
                  id="color-info"
                  src="https://css.brilliantearth.com/static/img/icon/q-mark-v2.png"
                  style={{ width: "15px", height: "auto" }}
                />
                <div className="triangle-left"></div>
                <div className="info" id="info-3">
                  <div className="triangle-left"></div>
                  <p>
                    A diamond's color has a significant impact on its
                    appearance. The most valuable diamonds have little to no
                    detectable color.
                    <span style={{ color: "blue" }}>
                      {" "}
                      Learn more{" "}
                      <i
                        className="fi-xwsrxl-caret-solid"
                        style={{ color: "blue" }}
                      ></i>
                      .
                    </span>
                  </p>
                  <div
                    className="close-button"
                    onClick={() => setInfoModalStatus(null)}
                  >
                    <i
                      className="fas fa-times"
                      style={{ fontSize: "1.2rem", color: "rgb(30,46,76)" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <DiamondColorFilter filterStatus={filterStatus} />
          </div>
          <div className="filter-container">
            <div className="filter-label">
              Carat
              <div className="filter-info">
                <img
                  onClick={(e) => setInfoModalStatus(e.target.id)}
                  id="carat-info"
                  src="https://css.brilliantearth.com/static/img/icon/q-mark-v2.png"
                  style={{ width: "15px", height: "auto" }}
                />
                <div className="triangle-left"></div>
                <div className="info" id="info-4">
                  <div className="triangle-left"></div>
                  <p>
                    The carat is the standard unit of measurement used to
                    indicate the weight of diamonds and precious gemstones.
                    <span style={{ color: "blue" }}>
                      {" "}
                      Learn more{" "}
                      <i
                        className="fi-xwsrxl-caret-solid"
                        style={{ color: "blue" }}
                      ></i>
                      .
                    </span>
                  </p>
                  <div
                    className="close-button"
                    onClick={() => setInfoModalStatus(null)}
                  >
                    <i
                      className="fas fa-times"
                      style={{ fontSize: "1.2rem", color: "rgb(30,46,76)" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <DiamondCaratFilter
              filterStatus={filterStatus}
              lowestCarat={lowestCarat}
              highestCarat={highestCarat}
            />
          </div>
          <div className="filter-container">
            <div className="filter-label">
              Clarity
              <div className="filter-info">
                <img
                  onClick={(e) => setInfoModalStatus(e.target.id)}
                  id="clarity-info"
                  src="https://css.brilliantearth.com/static/img/icon/q-mark-v2.png"
                  style={{ width: "15px", height: "auto" }}
                />
                <div className="triangle-left"></div>
                <div className="info" id="info-5">
                  <div className="triangle-left"></div>
                  <p>
                    When grading a diamond, the amount of inclusions and
                    blemishes has a direct impact on its clarity and value.
                    <span style={{ color: "blue" }}>
                      {" "}
                      Learn more{" "}
                      <i
                        className="fi-xwsrxl-caret-solid"
                        style={{ color: "blue" }}
                      ></i>
                      .
                    </span>
                  </p>
                  <div
                    className="close-button"
                    onClick={() => setInfoModalStatus(null)}
                  >
                    <i
                      className="fas fa-times"
                      style={{ fontSize: "1.2rem", color: "rgb(30,46,76)" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <DiamondClarityFilter filteredDiamonds={filteredDiamonds} />
          </div>
          <div className="filter-container">
            <div className="filter-label">
              Price
              <div className="filter-info">
                <img
                  onClick={(e) => setInfoModalStatus(e.target.id)}
                  id="price-info"
                  src="https://css.brilliantearth.com/static/img/icon/q-mark-v2.png"
                  style={{ width: "15px", height: "auto" }}
                />
                <div className="triangle-left"></div>
                <div className="info" id="info-6">
                  <div className="triangle-left"></div>
                  <p>
                    Diamonds are priced per carat AND the price per carat
                    increases as the weight goes up.
                    <span style={{ color: "blue" }}>
                      {" "}
                      Learn more{" "}
                      <i
                        className="fi-xwsrxl-caret-solid"
                        style={{ color: "blue" }}
                      ></i>
                      .
                    </span>
                  </p>
                  <div
                    className="close-button"
                    onClick={() => setInfoModalStatus(null)}
                  >
                    <i
                      className="fas fa-times"
                      style={{ fontSize: "1.2rem", color: "rgb(30,46,76)" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <DiamondPriceFilter
              filteredDiamonds={filteredDiamonds}
              filter={priceFilter}
              lowestPrice={lowestPrice}
              highestPrice={highestPrice}
            />
          </div>
        </section>

        <section className="advance-filters">
          <div className="filter-container">
            <div className="filter-label">
              Cert.
              <div className="filter-info">
                <img
                  onClick={(e) => setInfoModalStatus(e.target.id)}
                  id="cert-info"
                  src="https://css.brilliantearth.com/static/img/icon/q-mark-v2.png"
                  style={{ width: "15px", height: "auto" }}
                />
                <div className="triangle-left"></div>
                <div className="info" id="info-7">
                  <div className="triangle-left"></div>
                  <p>
                    A diamond certificate is an easily understood document
                    prepared by an expert gemologist that describes the key
                    characteristics of a diamond.
                    <span style={{ color: "blue" }}>
                      {" "}
                      Learn more{" "}
                      <i
                        className="fi-xwsrxl-caret-solid"
                        style={{ color: "blue" }}
                      ></i>
                      .
                    </span>
                  </p>
                  <div
                    className="close-button"
                    onClick={() => setInfoModalStatus(null)}
                  >
                    <i
                      className="fas fa-times"
                      style={{ fontSize: "1.2rem", color: "rgb(30,46,76)" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <DiamondCertFilter
              filter={shapeFilter}
              handleShapeChange={handleShapeChange}
            />
          </div>
          <div className="filter-container">
            <div className="filter-label">
              Symmetry
              <div className="filter-info">
                <img
                  onClick={(e) => setInfoModalStatus(e.target.id)}
                  id="symmetry-info"
                  src="https://css.brilliantearth.com/static/img/icon/q-mark-v2.png"
                  style={{ width: "15px", height: "auto" }}
                />
                <div className="triangle-left"></div>
                <div className="info" id="info-8">
                  <div className="triangle-left"></div>
                  <p>
                    Diamond symmetry refers to the arrangement and conformity of
                    facets in a finished diamond.
                    <span style={{ color: "blue" }}>
                      {" "}
                      Learn more{" "}
                      <i
                        className="fi-xwsrxl-caret-solid"
                        style={{ color: "blue" }}
                      ></i>
                      .
                    </span>
                  </p>
                  <div
                    className="close-button"
                    onClick={() => setInfoModalStatus(null)}
                  >
                    <i
                      className="fas fa-times"
                      style={{ fontSize: "1.2rem", color: "rgb(30,46,76)" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <DiamondSymmetryFilter />
          </div>
          <div className="filter-container">
            <div className="filter-label">
              Polish
              <div className="filter-info">
                <img
                  onClick={(e) => setInfoModalStatus(e.target.id)}
                  id="polish-info"
                  src="https://css.brilliantearth.com/static/img/icon/q-mark-v2.png"
                  style={{ width: "15px", height: "auto" }}
                />
                <div className="triangle-left"></div>
                <div className="info" id="info-9">
                  <div className="triangle-left"></div>
                  <p>
                    After a diamond is cut, the cutter will finish the stone to
                    achieve a smooth, glass-like surface. The quality of this
                    work is known as diamond polish.
                    <span style={{ color: "blue" }}>
                      {" "}
                      Learn more{" "}
                      <i
                        className="fi-xwsrxl-caret-solid"
                        style={{ color: "blue" }}
                      ></i>
                      .
                    </span>
                  </p>
                  <div
                    className="close-button"
                    onClick={() => setInfoModalStatus(null)}
                  >
                    <i
                      className="fas fa-times"
                      style={{ fontSize: "1.2rem", color: "rgb(30,46,76)" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <DiamondPolishFilter />
          </div>
          <div className="filter-container">
            <div className="filter-label">
              Table
              <div className="filter-info">
                <img
                  onClick={(e) => setInfoModalStatus(e.target.id)}
                  id="table-info"
                  src="https://css.brilliantearth.com/static/img/icon/q-mark-v2.png"
                  style={{ width: "15px", height: "auto" }}
                />
                <div className="triangle-left"></div>
                <div className="info" id="info-10">
                  <div className="triangle-left"></div>
                  <p>
                    The flat, square-shaped facet on the top of a diamond is
                    called the table, and it plays a critical role in a
                    diamond’s appearance.
                    <span style={{ color: "blue" }}>
                      {" "}
                      Learn more{" "}
                      <i
                        className="fi-xwsrxl-caret-solid"
                        style={{ color: "blue" }}
                      ></i>
                      .
                    </span>
                  </p>
                  <div
                    className="close-button"
                    onClick={() => setInfoModalStatus(null)}
                  >
                    <i
                      className="fas fa-times"
                      style={{ fontSize: "1.2rem", color: "rgb(30,46,76)" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <DiamondTableFilter />
          </div>
          <div className="filter-container">
            <div className="filter-label">
              Fluor.
              <div className="filter-info">
                <img
                  onClick={(e) => setInfoModalStatus(e.target.id)}
                  id="fluorescence-info"
                  src="https://css.brilliantearth.com/static/img/icon/q-mark-v2.png"
                  style={{ width: "15px", height: "auto" }}
                />
                <div className="triangle-left"></div>
                <div className="info" id="info-11">
                  <div className="triangle-left"></div>
                  <p>
                    Fluorescence is the tendency of a diamond to emit a (soft)
                    glow when exposed to ultraviolet light (UV light).
                    <span style={{ color: "blue" }}>
                      {" "}
                      Learn more{" "}
                      <i
                        className="fi-xwsrxl-caret-solid"
                        style={{ color: "blue" }}
                      ></i>
                      .
                    </span>
                  </p>
                  <div
                    className="close-button"
                    onClick={() => setInfoModalStatus(null)}
                  >
                    <i
                      className="fas fa-times"
                      style={{ fontSize: "1.2rem", color: "rgb(30,46,76)" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <DiamondFluorescenceFilter />
          </div>
          <div className="filter-container">
            <div className="filter-label">
              Depth
              <div className="filter-info">
                <img
                  onClick={(e) => setInfoModalStatus(e.target.id)}
                  id="depth-info"
                  src="https://css.brilliantearth.com/static/img/icon/q-mark-v2.png"
                  style={{ width: "15px", height: "auto" }}
                />
                <div className="triangle-left"></div>
                <div className="info" id="info-12">
                  <div className="triangle-left"></div>
                  <p>
                    The depth of a diamond might also be called the “height”: it
                    is the distance from the table to the culet (the pointed
                    tip) of the diamond.
                    <span style={{ color: "blue" }}>
                      {" "}
                      Learn more{" "}
                      <i
                        className="fi-xwsrxl-caret-solid"
                        style={{ color: "blue" }}
                      ></i>
                      .
                    </span>
                  </p>
                  <div
                    className="close-button"
                    onClick={() => setInfoModalStatus(null)}
                  >
                    <i
                      className="fas fa-times"
                      style={{ fontSize: "1.2rem", color: "rgb(30,46,76)" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <DiamondDepthFilter />
          </div>
        </section>

        <div className="filter-footer">
          <a
            href={`${url}`}
            style={{
              padding: "8px 5px",
              color: "rgb(30,46,76)",
              textDecoration: "none",
              fontSize: "1.6rem",
            }}
          >
            &#x21bb; Reset Filters
          </a>
          <div>
            <button
              id="advance-filters-button"
              onClick={() => setAdvanceFilter(!advanceFilter)}
            >
              Advance Filters - &gt;
            </button>
            <button
              id="basic-filters-button"
              onClick={() => setAdvanceFilter(!advanceFilter)}
            >
              &lt; - Basic Filters
            </button>
          </div>
        </div>
      </div>

      <div className="mobile-filters">
        <div className="button-container">
          <button onClick={onChangeMenuStatus}>View</button>
          {/* <button>Reset all</button> */}
          <FontAwesomeIcon icon={faTimes} style={{fontSize: '2.5rem', padding: '12px'}} onClick={onChangeMenuStatus} />
        </div>
        <div className="filter-container">
          <p>Shape</p>
          <DiamondShapeFilter filter={shapeFilter} />
        </div>
        <div className="filter-container">
          <p>Certificate</p>
          <DiamondCertFilter
            filter={shapeFilter}
            handleShapeChange={handleShapeChange}
          />
        </div>
        <div className="filter-container">
          <p>Carat</p>
          <DiamondCaratFilter
            filterStatus={filterStatus}
            lowestCarat={lowestCarat}
            highestCarat={highestCarat} />
        </div>
        <div className="filter-container">
          <p>Color</p>
          <DiamondColorFilter />
        </div>
        <div className="filter-container">
          <p>Clarity</p>
          <DiamondClarityFilter />
        </div>
        <div className="filter-container">
          <p>Cut</p>
          <DiamondCutFilter />
        </div>
        <div className="filter-container">
          <p>Price</p>
          <DiamondPriceFilter 
            filteredDiamonds={filteredDiamonds}
            filter={priceFilter}
            lowestPrice={lowestPrice}
            highestPrice={highestPrice} />
        </div>
        <div className="filter-container">
          <p>Fluor.</p>
          <DiamondFluorescenceFilter />
        </div>
        <div className="filter-container">
          <p>Polish</p>
          <DiamondPolishFilter />
        </div>
        <div className="filter-container">
          <p>Symmetry</p>
          <DiamondSymmetryFilter />
        </div>
        <div className="filter-container">
          <p>Table</p>
          <DiamondTableFilter />
        </div>
        <div className="filter-container">
          <p>Depth</p>
          <DiamondDepthFilter />
        </div>
      </div>
    </FilterBox>
  );
}
