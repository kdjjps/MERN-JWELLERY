import React, { useState } from "react";
import DiamondFilters from "./DiamondFilters";
import DiamondGridItem from "./DiamondGridItem";
import DiamondListItem from "./DiamondListItem";
import Pagination from "../Pagination";
import { ListingsBox } from "../style.js";
import getImage from "../../../../helper/getImage";
import { useLocation, useHistory, useRouteMatch } from "react-router-dom";
import queryString from "query-string";
import { useCookies } from "react-cookie";
import _ from "lodash";
import getTotalPrice from "../../../../helper/getTotalPrice";
import { useSelector } from "react-redux";
import Loader from "../../Loader/Loader";

export default function DiamondListings({
  handleViewHandModal,
  nfObject,
  slider,
  caratSlider,
  children,
  isAllSet,
  isMasterAllSet,
}) {
  const location = useLocation();
  const history = useHistory();
  const { url } = useRouteMatch();
  const [cookies, setCookie] = useCookies();

  const { search } = useLocation();
  const filter = queryString.parse(search);
  const { name } = filter;

  const data = useSelector((state) => state);

  const listingArray = data.diamondReducer.filteredDiamondArray.filter(
    (item) => item.isFancy === false
  );

  const caratBySortedData = _.orderBy(
    data.diamondReducer.unfilteredDiamondArray,
    (o) => +o.carat,
    ["asc"]
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = listingArray.slice(indexOfFirstPost, indexOfLastPost);

  const [shape, setShape] = useState("");
  const [dImage, setDImage] = useState("");
  const [dShape, setDShape] = useState("round");
  const [dCarat, setDCarat] = useState("");
  const [dColor, setDColor] = useState("");
  const [dClarity, setDClarity] = useState("");
  const [dPrice, setDPrice] = useState("");
  const [dPacketId, setDPacketId] = useState("");
  const [miniDisplayStatus, setMiniDisplayStatus] = useState(false);
  const [diamondListingsView, setDiamondListingsView] = useState("grid");

  const [filterMenuStatus, setFilterMenuStatus] = useState(false);

  const onChangeMenuStatus = () => {
    setFilterMenuStatus(!filterMenuStatus);
  };

  const nextPage = () => {
    let totalPages = Math.floor(listingArray.length / postsPerPage) + 1;

    if (currentPage === totalPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onHandleDiamondListingsView = (viewType) => {
    setDiamondListingsView(viewType);
  };

  const onHandleListHover = (e) => {
    setMiniDisplayStatus(true);
    setDImage(e.currentTarget.getAttribute("data-imageurl"));
    setDShape(e.currentTarget.getAttribute("data-shape"));
    setDCarat(e.currentTarget.getAttribute("data-carat"));
    setDColor(e.currentTarget.getAttribute("data-color"));
    setDClarity(e.currentTarget.getAttribute("data-clarity"));
    setDPrice(e.currentTarget.getAttribute("data-price"));
    setDPacketId(e.currentTarget.getAttribute("data-packetid"));
  };

  const sortDiamonds = (sortType) => {
    const parsed = queryString.parse(location.search);
    parsed.sortBy = sortType;
    const stringified = queryString.stringify(parsed);
    location.search = stringified;
    history.push(`?${location.search}`);
  };

  const gridItems = currentPosts.map((item, index) => {
    return (
      <DiamondGridItem
        slider={slider}
        caratSlider={caratSlider}
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

  return (
    <div>
      {isAllSet ? (
        <ListingsBox
          viewStatus={diamondListingsView}
          miniDisplayStatus={miniDisplayStatus}
        >
          <DiamondFilters
            whiteDiamonds={data.diamondReducer.unfilteredDiamondArray}
            diamondQuantity={listingArray.length}
            onChangeMenuStatus={onChangeMenuStatus}
            status={filterMenuStatus}
            caratBySortedData={caratBySortedData}
            lowestCarat={data.diamondReducer.lowestCarat}
            highestCarat={data.diamondReducer.highestCarat}
            lowestPrice={data.diamondReducer.lowestPrice}
            highestPrice={data.diamondReducer.highestPrice}
            setShape={setShape}
          />
          <div>
            <div className="mobile-component">
              <Pagination
                nextPage={nextPage}
                prevPage={prevPage}
                currentPage={currentPage}
                length={listingArray.length}
                postsPerPage={postsPerPage}
              />
              <button onClick={onChangeMenuStatus}>Filters</button>
            </div>

            <div className="listings-functions-container">
              <h2 style={{ color: "rgb(30,46,76)" }}>
                {listingArray.length} diamonds found
              </h2>
              <Pagination
                nextPage={nextPage}
                prevPage={prevPage}
                currentPage={currentPage}
                length={listingArray.length}
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
                <select onChange={(e) => sortDiamonds(e.target.value)}>
                  <option value="0">Sort By: </option>
                  <option value="asc">Price: Low to High </option>
                  <option value="desc">Price: High to Low </option>
                </select>
              </div>
            </div>

            {listingArray.length === 0 ? (
              <div className="reset-filter-message">
                We found no diamonds that match your search criteria. <br />{" "}
                Please expand your search or{" "}
                <a href={`${url}`}>reset your filters</a>
              </div>
            ) : (
              <div>
                <section id="diamond-result-container-grid-view">
                  {children}
                  {gridItems}
                </section>
                <div className="listings-functions-container">
                  <h2 style={{ color: "rgb(30,46,76)" }}></h2>
                  <Pagination
                    nextPage={nextPage}
                    prevPage={prevPage}
                    currentPage={currentPage}
                    length={listingArray.length}
                    postsPerPage={postsPerPage}
                  />
                  <div></div>
                </div>
              </div>
            )}

            <section id="diamond-result-container-list-view">
              <div id="mini-details-displayer">
                <section id="after-hover">
                  <button>View Diamond</button>
                  <img
                    src={dImage.length > 5 ? dImage : getImage(dShape).imgURL}
                    alt="diamond"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getImage(dShape).imgURL;
                    }}
                  />
                  <div>
                    <p style={{ fontWeight: "bold", fontSize: "1.7rem" }}>
                      {dCarat} Carat {dShape} Diamond
                    </p>
                    <p>
                      {dColor} Color . {dClarity} Clarity
                    </p>
                    <h2>
                      {cookies.currencyCode}{" "}
                      {getTotalPrice(
                        "loose-diamond",
                        { totalPrice: dPrice },
                        cookies
                      )}
                    </h2>
                  </div>
                  <button>View Diamond</button>
                </section>
                <section id="pre-hover">
                  <img src="https://script.brilliantearth.com/static/img/icon/svg/icon-diamond.svg" />
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
            <div className="mobile-component" style={{ marginTop: "10px" }}>
              <Pagination
                nextPage={nextPage}
                prevPage={prevPage}
                currentPage={currentPage}
                length={listingArray.length}
                postsPerPage={postsPerPage}
              />
              <div></div>
            </div>
          </div>
        </ListingsBox>
      ) : (
        <Loader />
      )}
    </div>
  );
}
