import React, { useState, useEffect } from "react";
import FancyDiamondFilters from "./FancyDiamondFilters";
import DiamondGridItem from "./DiamondGridItem";
import DiamondListItem from "./DiamondListItem";
import Pagination from "../Pagination";
import { ListingsBox } from "../style.js";
import getImage from "../../../../helper/getImage";
import { useLocation, useRouteMatch } from "react-router-dom";
import queryString from "query-string";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import Loader from "../../Loader/Loader";

export default function FancyDiamondListings({
  handleViewHandModal,
  sortDiamondLisitings,
  nfObject,
  children,
  isAllSet,
}) {
  const { search } = useLocation();
  const { url } = useRouteMatch();
  const [cookies] = useCookies();
  const filter = queryString.parse(search);
  const { name } = filter;
  const rings = [];
  const pendants = [];
  const earrings = [];

  const data = useSelector((state) => state);

  const filteredDiamonds = data.diamondReducer.filteredDiamondArray.filter(
    (item) => item.isFancy === true
  );

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredDiamonds.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const [searchShape, setSearchShape] = useState(null);
  const [dImage, setDImage] = useState("");
  const [dShape, setDShape] = useState("round");
  const [dCarat, setDCarat] = useState("");
  const [dColor, setDColor] = useState("");
  const [dClarity, setDClarity] = useState("");
  const [dPrice, setDPrice] = useState("");
  // const [dPacketId, setDPacketId] = useState('')
  const [miniDisplayStatus, setMiniDisplayStatus] = useState(false);
  const [diamondListingsView, setDiamondListingsView] = useState("grid");

  const [settingSelectedStatus, setSettingSelectedStatus] = useState(null);
  const [ifSettingHasDiamondShape, setIfSettingHasDiamondShape] =
    useState(null);
  const [settingURL, setSettingURL] = useState(null);

  const [filterMenuStatus, setFilterMenuStatus] = useState(false);

  const onChangeMenuStatus = () => {
    setFilterMenuStatus(!filterMenuStatus);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // const changePostsPerPage = (n) => {
  //     setPostsPerPage(n)
  // }

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onHandleDiamondListingsView = (viewType) => {
    setDiamondListingsView(viewType);
  };

  const findRingName = (number) => {
    switch (number) {
      case "1":
        return "london";
      case "2":
        return "sydney";
      case "3":
        return "amsterdam";
      case "4":
        return "zurich";
      case "5":
        return "auckland";
      case "6":
        return "ujjain";
      case "7":
        return "munich";
      default:
        return "london";
    }
  };

  const findPendantName = (number) => {
    switch (number) {
      case "1":
        return "iris";

      case "2":
        return "luna";

      case "3":
        return "fantasia";

      case "4":
        return "reverie";

      case "5":
        return "insignia";

      case "6":
        return "infinity";
      default:
        return "iris";
    }
  };

  const findEarringName = (number) => {
    switch (number) {
      case "1":
        return "lumina";

      case "2":
        return "eliza";

      case "3":
        return "luna";
      default:
        return "lumina";
    }
  };

  const onHandleListHover = (e) => {
    setMiniDisplayStatus(true);
    setDImage(e.currentTarget.getAttribute("data-imageurl"));
    setDShape(e.currentTarget.getAttribute("data-shape"));
    setDCarat(e.currentTarget.getAttribute("data-carat"));
    setDColor(e.currentTarget.getAttribute("data-color"));
    setDClarity(e.currentTarget.getAttribute("data-clarity"));
    setDPrice(e.currentTarget.getAttribute("data-price"));
    // setDPacketId(e.currentTarget.getAttribute('data-packetid'))
  };

  const checkIfSettingSelected = () => {
    switch (url) {
      case "/create-your-own-ring/diamonds":
        if (cookies._ringSelected === undefined) {
          setSettingSelectedStatus(true);
          setSettingURL("/create-your-own-ring/rings");
        } else {
          let ringName = findRingName(cookies._ringSelected[9]);
          let selectedRingArray = rings.filter(
            (item) => item.ringName === ringName
          );
          let diamondsArray = selectedRingArray.map(
            (item) => item.diamondShape
          );
          setIfSettingHasDiamondShape(!diamondsArray.includes(name));
        }
        break;
      case "/create-your-own-pendant/diamonds":
        if (cookies._pendantSelected === undefined) {
          setSettingSelectedStatus(true);
          setSettingURL("/create-your-own-pendant/pendants");
        } else {
          let pendantName = findPendantName(cookies._pendantSelected[8]);
          let selectedPendantArray = pendants.filter(
            (item) => item.pendantName === pendantName
          );
          let diamondsArray = selectedPendantArray.map(
            (item) => item.diamondShape
          );
          setIfSettingHasDiamondShape(!diamondsArray.includes(name));
        }
        break;
      case "/create-your-own-earring/diamonds":
        if (cookies._earringSelected === undefined) {
          setSettingSelectedStatus(true);
          setSettingURL("/create-your-own-earring/earrings");
        } else {
          let studName = findEarringName(cookies._earringSelected[8]);
          let selectedEarringArray = earrings.filter(
            (item) => item.studName === studName
          );
          let diamondsArray = selectedEarringArray.map(
            (item) => item.diamondShape
          );
          setIfSettingHasDiamondShape(!diamondsArray.includes(name));
        }
        break;
      default:
        if (cookies._ringSelected === undefined) {
          setSettingSelectedStatus(true);
          setSettingURL("/create-your-own-ring/rings");
        } else {
          let ringName = findRingName(cookies._ringSelected[9]);
          let selectedRingArray = rings.filter(
            (item) => item.ringName === ringName
          );
          let diamondsArray = selectedRingArray.map(
            (item) => item.diamondShape
          );
          setIfSettingHasDiamondShape(!diamondsArray.includes(name));
        }
        break;
    }
  };

  const handleShapeChange = (shape) => {
    setSearchShape(shape);
  };

  const gridItems = currentPosts.map((item, index) => {
    return (
      <DiamondGridItem
        item={item}
        key={index}
        id={item.stockNumber}
        handleViewHandModal={handleViewHandModal}
        nfObject={nfObject}
      />
    );
  });

  const listItems = currentPosts.map((item, index) => {
    return (
      <DiamondListItem
        item={item}
        key={index}
        id={item.stockNumber}
        onHandleListHover={onHandleListHover}
      />
    );
  });

  useEffect(() => {
    checkIfSettingSelected();
  }, [searchShape]);

  return isAllSet ? (
    <ListingsBox
      viewStatus={diamondListingsView}
      miniDisplayStatus={miniDisplayStatus}
    >
      <div>
        <div className="listings-top-heading">
          <p>Search For {name} Fancy Diamonds</p>
          <p>
            Discover our extensive collection of conflict-free, certified &
            colorful fancy diamonds
          </p>
        </div>

        <FancyDiamondFilters
          diamondQuantity={filteredDiamonds.length}
          onChangeMenuStatus={onChangeMenuStatus}
          status={filterMenuStatus}
          handleShapeChange={handleShapeChange}
        />
        {ifSettingHasDiamondShape ? (
          <div id="no-diamonds-available">
            <h2>No diamonds available for the setting selected</h2>
            <p>Choose different setting or select different diamond</p>
          </div>
        ) : (
          <div>
            <div className="mobile-component">
              <Pagination
                nextPage={nextPage}
                prevPage={prevPage}
                currentPage={currentPage}
                length={filteredDiamonds.length}
                postsPerPage={postsPerPage}
              />
              <button onClick={onChangeMenuStatus}>Filters</button>
            </div>
            <div className="listings-functions-container">
              <h2 style={{ color: "rgb(30,46,76)" }}>
                {filteredDiamonds.length} diamonds found
              </h2>
              <Pagination
                nextPage={nextPage}
                prevPage={prevPage}
                currentPage={currentPage}
                length={filteredDiamonds.length}
                postsPerPage={postsPerPage}
              />
              <div>
                <div onClick={() => onHandleDiamondListingsView("list")}>
                  <i
                    className="fas fa-list"
                    style={{
                      color: "rgba(30,46,76)",
                      marginRight: "5px",
                      fontSize: "20px",
                    }}
                  ></i>
                </div>
                <div onClick={() => onHandleDiamondListingsView("grid")}>
                  <i
                    className="fas fa-th-large"
                    style={{
                      color: "rgba(30,46,76)",
                      marginRight: "5px",
                      fontSize: "20px",
                    }}
                  ></i>
                </div>
                <select onChange={(e) => sortDiamondLisitings(e.target.value)}>
                  <option value="0">Sort By: </option>
                  <option value="asc">Price: Low to High </option>
                  <option value="desc">Price: High to Low </option>
                </select>
              </div>
            </div>
            {filteredDiamonds.length === 0 ? (
              <div className="reset-filter-message">
                No fancy diamonds available right now!
              </div>
            ) : (
              <div>
                <section id="diamond-result-container-grid-view">
                  {children}
                  {gridItems}
                </section>
                <section id="diamond-result-container-list-view">
                  <div id="mini-details-displayer">
                    <section id="after-hover">
                      <button>View Diamond</button>
                      <img
                        src={
                          dImage.length > 5 ? dImage : getImage(dShape).imgURL
                        }
                        alt="diamond"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = getImage(dShape).imgURL;
                        }}
                      />{" "}
                      <div>
                        <p style={{ fontWeight: "bold", fontSize: "1.7rem" }}>
                          {dCarat} Carat {dShape} Diamond
                        </p>
                        <p>
                          {dColor} Color . {dClarity} Clarity
                        </p>
                        <h2>
                          {cookies.currencyCode} {parseInt(dPrice)}
                        </h2>
                      </div>
                      <button>View Diamond</button>
                    </section>
                    <section id="pre-hover">
                      <img
                        src="https://script.brilliantearth.com/static/img/icon/svg/icon-diamond.svg"
                        alt="diamond-icon"
                      />
                      <p>Hover over a diamond to see further details.</p>
                    </section>
                  </div>
                  <table>
                    <tbody>
                      <tr>
                        <th>Image</th>
                        <th>Shape</th>
                        <th>Carat</th>
                        <th>Color</th>
                        <th>Clarity</th>
                        <th>Cut</th>
                        <th>Depth %</th>
                        <th>Table %</th>
                        <th>Price</th>
                        <th>Details</th>
                      </tr>
                      {children}
                      {listItems}
                    </tbody>
                  </table>
                </section>
                <div className="mobile-component">
                  <Pagination
                    nextPage={nextPage}
                    prevPage={prevPage}
                    currentPage={currentPage}
                    length={filteredDiamonds.length}
                    postsPerPage={postsPerPage}
                  />
                  <div></div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </ListingsBox>
  ) : (
    <Loader />
  );
}
