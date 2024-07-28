import React, { useEffect, useState, useRef } from "react";
import { ListingsBox } from "../../style.js";
import { BannerBox } from "../../../common-style";
import PresetRingFilters from "./PresetRingFilters";
import PresetRingItem from "./PresetRingItem";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import Loader from "../../../Loader/Loader";
import { getSearchQueryFilteredProducts } from "../../../../../store/actions/jewelryActions";

export default function PresetRingListings({
  diamondCaratPresetData,
  makingCharges,
  getFromAmount,
  isAllSet,
  children,
}) {
  const data = useSelector((state) => state);

  const rings = data.jewelryReducer.unfilteredSolitaireRingsArray;

  const [cookies, setCookie] = useCookies();

  const { search } = useLocation();
  const filter = queryString.parse(search);

  const loader = useRef(null);

  const filteredRings = getSearchQueryFilteredProducts("ring", rings, filter);

  const [shape, setShape] = useState("");
  const [parentMetalColor, setParentMetalColor] = useState("white-gold");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [currentPosts, setCurrentPosts] = useState([]);

  var totalRings = 0;

  const calTotalRings = () => {
    for (let i = 0; i < filteredRings.length; i++) {
      totalRings = totalRings + filteredRings[i].metals.length;
    }
  };

  calTotalRings();

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
      ...filteredRings.slice(indexOfFirstPost, indexOfLastPost),
    ]);
  }, [shape, isAllSet]);

  useEffect(() => {
    setCurrentPosts([
      ...currentPosts,
      ...filteredRings.slice(indexOfFirstPost, indexOfLastPost),
    ]);
  }, [currentPage]);

  const products = currentPosts.map((item, index) => {
    return (
      <PresetRingItem
        parentMetalColor={parentMetalColor}
        item={item}
        key={index}
        id={item.id}
        getFromAmount={getFromAmount}
        diamondCaratPresetData={diamondCaratPresetData}
        makingCharges={makingCharges}
      />
    );
  });
  const bannerImage1 =
    "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/engagement-ring-banner.png";

  return isAllSet ? (
    <ListingsBox>
      <BannerBox image={bannerImage1}>
        <div>
          <h2 className="banner-small-heading" style={{ color: "#FFFFFF" }}>
            Engagement Rings
          </h2>
        </div>
      </BannerBox>

      <PresetRingFilters
        setParentMetalColor={setParentMetalColor}
        setShape={setShape}
      />
      <div className="listings-functions-container">
        <p>Results - {totalRings / 4} items</p>
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
      {currentPage > Math.floor(filteredRings.length / postsPerPage) ? (
        <div className="see-more-button" style={{ fontSize: "2.0rem" }}>
          --- End of Listing ---
        </div>
      ) : (
        <div
          className="loading-more-button"
          style={{ marginTop: "150px" }}
          ref={loader}
        >
          Loading More.. {currentPage}{" "}
          {Math.floor(filteredRings.length / postsPerPage)}
        </div>
      )}
    </ListingsBox>
  ) : (
    <Loader />
  );
}
