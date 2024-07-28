import React, { useEffect, useState, useRef } from "react";
import { ListingsBox } from "../../style.js";
import { BannerBox } from "../../../common-style";
import PresetNecklaceItem from "./PresetNecklaceItem";
import PresetNecklaceFilters from "./PresetNecklaceFilters";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useSelector } from "react-redux";
import Loader from "../../../Loader/Loader";
import { getSearchQueryFilteredProducts } from "../../../../../store/actions/jewelryActions";

export default function PresetNecklaceListings({
  diamondCaratPresetData,
  makingCharges,
  getFromAmount,
  isAllSet,
  children,
}) {
  const data = useSelector((state) => state);

  const necklaces = data.jewelryReducer.unfilteredSolitaireNecklacesArray;

  const { search } = useLocation();
  const filter = queryString.parse(search);

  const filteredNecklaces = getSearchQueryFilteredProducts(
    "necklace",
    necklaces,
    filter
  );

  const loader = useRef(null);

  const [shape, setShape] = useState("");
  const [parentMetalColor, setParentMetalColor] = useState("white-gold");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [currentPosts, setCurrentPosts] = useState([]);

  const products = currentPosts.map((item, index) => {
    return (
      <PresetNecklaceItem
        item={item}
        key={index}
        parentMetalColor={parentMetalColor}
        diamondCaratPresetData={diamondCaratPresetData}
        makingCharges={makingCharges}
        getFromAmount={getFromAmount}
      />
    );
  });

  const bannerImage =
    "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/pendant-banner.png";

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    // initialize IntersectionObserver
    // and attaching to Load More div
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [isAllSet]);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    setCurrentPosts([
      ...filteredNecklaces.slice(indexOfFirstPost, indexOfLastPost),
    ]);
  }, [shape, isAllSet]);

  useEffect(() => {
    setCurrentPosts([
      ...currentPosts,
      ...filteredNecklaces.slice(indexOfFirstPost, indexOfLastPost),
    ]);
  }, [currentPage]);

  return isAllSet ? (
    <ListingsBox>
      <BannerBox image={bannerImage}>
        <div>
          <h2 className="banner-small-heading" style={{ color: "white" }}>
            Diamond Necklaces
          </h2>
        </div>
      </BannerBox>

      <PresetNecklaceFilters
        setParentMetalColor={setParentMetalColor}
        setShape={setShape}
      />
      <div className="listings-functions-container">
        <h2>{filteredNecklaces.length} Necklaces found</h2>
        <select>
          <option value="0">Sort By: </option>
          <option value="0">Price: Low to High </option>
          <option value="0">Price: High to Low </option>
        </select>
      </div>
      <section>
        <div className="result-container">
          {children}
          {products}
        </div>
      </section>
      {currentPage > Math.floor(filteredNecklaces.length / postsPerPage) ? (
        <div className="see-more-button" style={{ fontSize: "2.0rem" }}>
          --- End of Listing ---
        </div>
      ) : (
        <div
          className="see-more-button"
          style={{ marginTop: "150px" }}
          ref={loader}
        >
          Loading More.. {currentPage}{" "}
          {Math.floor(filteredNecklaces.length / postsPerPage)}
        </div>
      )}
    </ListingsBox>
  ) : (
    <Loader />
  );
}
