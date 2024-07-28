import React, { useEffect, useState, useRef } from "react";
import PresetStudItem from "./PresetStudItem";
import PresetStudFilters from "./PresetStudFilters";
import { ListingsBox } from "../../style.js";
import { BannerBox } from "../../../common-style";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import Loader from "../../../Loader/Loader";
import { getSearchQueryFilteredProducts } from "../../../../../store/actions/jewelryActions";

export default function StudListings({ getFromAmount, isAllSet, children }) {
  const data = useSelector((state) => state);
  const studs = data.jewelryReducer.unfilteredSolitaireStudsArray;

  const [cookies, setCookie] = useCookies();

  const { search } = useLocation();
  const filter = queryString.parse(search);

  const loader = useRef(null);

  const filteredStuds = getSearchQueryFilteredProducts("stud", studs, filter);

  const [shape, setShape] = useState("");
  const [parentMetalColor, setParentMetalColor] = useState("white-gold");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [currentPosts, setCurrentPosts] = useState([]);

  const products = currentPosts.map((item, index) => {
    return (
      <PresetStudItem
        item={item}
        key={index}
        parentMetalColor={parentMetalColor}
        getFromAmount={getFromAmount}
      />
    );
  });

  const bannerImage =
    "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/stud-banner.png";

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
      ...filteredStuds.slice(indexOfFirstPost, indexOfLastPost),
    ]);
  }, [shape, isAllSet]);

  useEffect(() => {
    setCurrentPosts([
      ...currentPosts,
      ...filteredStuds.slice(indexOfFirstPost, indexOfLastPost),
    ]);
  }, [currentPage]);

  return isAllSet ? (
    <ListingsBox>
      <BannerBox image={bannerImage}>
        <div>
          <h2 className="banner-small-heading" style={{ color: "#FFFFFF" }}>
            Diamond Studs
          </h2>
        </div>
      </BannerBox>

      <PresetStudFilters
        setParentMetalColor={setParentMetalColor}
        setShape={setShape}
      />
      <div className="listings-functions-container">
        <h2>{filteredStuds.length} Studs found</h2>
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
      {currentPage > Math.floor(filteredStuds.length / postsPerPage) ? (
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
          {Math.floor(filteredStuds.length / postsPerPage)}
        </div>
      )}
    </ListingsBox>
  ) : (
    <Loader />
  );
}
