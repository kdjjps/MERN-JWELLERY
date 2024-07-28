import React, {useState, useEffect} from "react";
import {FilterBox} from "../style.js";
import {useRouteMatch} from "react-router-dom";
import DiamondShapeFilter from "./DiamondShapeFilter";
import DiamondPriceFilter from "./DiamondPriceFilter";
import DiamondCaratFilter from "./DiamondCaratFilter";
import DiamondIntensityFilter from "./DiamondIntensityFilter.js";
import DiamondFancyColorFilter from "./DiamondFancyColorFilter.js";

export default function FancyDiamondFilters({
  priceFilter,
  shapeFilter,
  onChangeMenuStatus,
  status,
  handleShapeChange,
  lowestPrice,
  highestPrice,
  filteredDiamonds,
  caratBySortedData,
}) {
  
  const { path, url } = useRouteMatch();
  const [advanceFilter, setAdvanceFilter] = useState(false)
  const [filterStatus, setFilterStatus] = useState(false)
  const [infoModalStatus, setInfoModalStatus] = useState(null)

  useEffect(() => {
    if (path === "/create-your-own-earring/diamonds/second") {
      setFilterStatus(true);
    }
  }, [filterStatus]);

  return (
    <FilterBox status={status} advanceFilter={advanceFilter} infoStatus={infoModalStatus}>
      <div className="desktop-filters">
        <div>
            <DiamondFancyColorFilter />
        </div>
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
                      Learn more about diamond shape.
                    </span>
                  </p>
                  <div className="close-button" onClick={() => setInfoModalStatus(null)}>
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
              filter={shapeFilter}
              handleShapeChange={handleShapeChange}
            />
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
                      Learn more about carat weight.
                    </span>
                  </p>
                  <div className="close-button" onClick={() => setInfoModalStatus(null)}>
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
              caratBySortedData={caratBySortedData}
            />
          </div>

          <div className="filter-container">
            <div className="filter-label">
              Intensity
              <div className="filter-info">
                <img
                  onClick={(e) => setInfoModalStatus(e.target.id)}
                  id="intensity-info"
                  src="https://css.brilliantearth.com/static/img/icon/q-mark-v2.png"
                  style={{ width: "15px", height: "auto" }}
                />
                <div className="triangle-left"></div>
                <div className="info" id="info-13">
                  <div className="triangle-left"></div>
                  <p>
                    The intensity of the color is described as how strong the color is shown in the diamond.
                    <span style={{ color: "blue" }}>
                      {" "}
                      Learn more about diamond price here.
                    </span>
                  </p>
                  <div className="close-button" onClick={() => setInfoModalStatus(null)}>
                    <i
                      className="fas fa-times"
                      style={{ fontSize: "1.2rem", color: "rgb(30,46,76)" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <DiamondIntensityFilter
              filteredDiamonds={filteredDiamonds}
              filter={priceFilter}
              lowestPrice={lowestPrice}
              highestPrice={highestPrice}
            />
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
                      Learn more about diamond price here.
                    </span>
                  </p>
                  <div className="close-button" onClick={() => setInfoModalStatus(null)}>
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

        {/* <section className="advance-filters">
          <div className="filter-container">
            <p>
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
                      Learn more about diamond certifications.
                    </span>
                  </p>
                  <div className="close-button" onClick={() => setInfoModalStatus(null)}>
                    <i
                      className="fas fa-times"
                      style={{ fontSize: "1.2rem", color: "rgb(30,46,76)" }}
                    ></i>
                  </div>
                </div>
              </div>
            </p>
            <DiamondCertFilter
              filter={shapeFilter}
              handleShapeChange={handleShapeChange}
            />
          </div>
          <div className="filter-container">
            <p>
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
                      Learn More about Diamond Symmetry.
                    </span>
                  </p>
                  <div className="close-button" onClick={() => setInfoModalStatus(null)}>
                    <i
                      className="fas fa-times"
                      style={{ fontSize: "1.2rem", color: "rgb(30,46,76)" }}
                    ></i>
                  </div>
                </div>
              </div>
            </p>
            <DiamondSymmetryFilter />
          </div>
          <div className="filter-container">
            <p>
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
                      Learn More about Diamond Polish.
                    </span>
                  </p>
                  <div className="close-button" onClick={() => setInfoModalStatus(null)}>
                    <i
                      className="fas fa-times"
                      style={{ fontSize: "1.2rem", color: "rgb(30,46,76)" }}
                    ></i>
                  </div>
                </div>
              </div>
            </p>
            <DiamondPolishFilter />
          </div>
          <div className="filter-container">
            <p>
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
                      Learn More about Diamond Tables.
                    </span>
                  </p>
                  <div className="close-button" onClick={() => setInfoModalStatus(null)}>
                    <i
                      className="fas fa-times"
                      style={{ fontSize: "1.2rem", color: "rgb(30,46,76)" }}
                    ></i>
                  </div>
                </div>
              </div>
            </p>
            <DiamondTableFilter />
          </div>
          <div className="filter-container">
            <p>
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
                      Learn More about Fluorescence.
                    </span>
                  </p>
                  <div className="close-button" onClick={() => setInfoModalStatus(null)}>
                    <i
                      className="fas fa-times"
                      style={{ fontSize: "1.2rem", color: "rgb(30,46,76)" }}
                    ></i>
                  </div>
                </div>
              </div>
            </p>
            <DiamondFluorescenceFilter />
          </div>
          <div className="filter-container">
            <p>
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
                      Learn More about Diamond Depth.
                    </span>
                  </p>
                  <div className="close-button" onClick={() => setInfoModalStatus(null)}>
                    <i
                      className="fas fa-times"
                      style={{ fontSize: "1.2rem", color: "rgb(30,46,76)" }}
                    ></i>
                  </div>
                </div>
              </div>
            </p>
            <DiamondDepthFilter />
          </div>
        </section> */}

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
          {/* <div>
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
          </div> */}
          <div>

          </div>
        </div>
      </div>

      <div className="mobile-filters">
        <div className="button-container">
          <button onClick={onChangeMenuStatus}>View Result</button>
          <button>Reset all</button>
        </div>
        <div>
            <DiamondFancyColorFilter />
        </div>
        <div className="filter-container">
          <p>Shape</p>
          <DiamondShapeFilter filter={shapeFilter} />
        </div>
        <div className="filter-container">
          <p>Price</p>
          <DiamondPriceFilter filter={priceFilter} />
        </div>
        <div className="filter-container">
          <p>Carat</p>
          <DiamondCaratFilter />
        </div>
        {/* <div className="filter-container">
          <p>Certificate</p>
          <DiamondCertFilter
            filter={shapeFilter}
            handleShapeChange={handleShapeChange}
          />
        </div>
        <div className="filter-container">
          <p>Table</p>
          <DiamondTableFilter />
        </div>
        <div className="filter-container">
          <p>Symmetry</p>
          <DiamondSymmetryFilter />
        </div>
        <div className="filter-container">
          <p>Polish</p>
          <DiamondPolishFilter />
        </div>
        <div className="filter-container">
          <p>Depth</p>
          <DiamondDepthFilter />
        </div>
        <div className="filter-container">
          <p>Fluor.</p>
          <DiamondFluorescenceFilter />
        </div> */}
      </div>
    </FilterBox>
  );
}
