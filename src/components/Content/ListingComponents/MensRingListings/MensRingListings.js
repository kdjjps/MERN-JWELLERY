import React, { useState, useEffect, useRef } from "react";
import MensRingFilters from "./MensRingFilters";
import MensRingItem from "./MensRingItem";
import { ListingsBox } from "../style.js";
import { BannerBox } from "../../common-style";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useSelector } from "react-redux";
import Loader from "../../Loader/Loader";
import { getSearchQueryFilteredProducts } from "../../../../store/actions/jewelryActions";

export default function MensRingListings(props) {
  const loader = useRef(null);

  const data = useSelector((state) => state);

  const rings = data.jewelryReducer.unfilteredMensRingsArray;

  const { search } = useLocation();
  const filter = queryString.parse(search);

  const filteredMensRings = getSearchQueryFilteredProducts(
    "mens-ring",
    rings,
    filter
  );

  const [shape, setShape] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [currentPosts, setCurrentPosts] = useState([]);

  const products = currentPosts.map((item, index) => {
    return (
      <MensRingItem
        item={item}
        key={index}
        id={item.PACKETID}
        getTotalRingPrice={props.getTotalRingPrice}
      />
    );
  });

  const bannerImage =
    "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/mens-ring-banner3.png";

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    // initialize IntersectionObserver
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [props.isAllSet]);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    setCurrentPosts([
      ...filteredMensRings.slice(indexOfFirstPost, indexOfLastPost),
    ]);
  }, [shape, props.isAllSet]);

  useEffect(() => {
    setCurrentPosts([
      ...currentPosts,
      ...filteredMensRings.slice(indexOfFirstPost, indexOfLastPost),
    ]);
  }, [currentPage]);

  return props.isAllSet ? (
    <ListingsBox>
      <BannerBox image={bannerImage}>
        <div>
          <h2 className="banner-small-heading" style={{ color: "#FFFFFF" }}>
            Men's Diamond Ring
          </h2>
        </div>
      </BannerBox>

      <MensRingFilters setShape={setShape} />
      <div className="listings-functions-container">
        <h2>{filteredMensRings.length} Mens Rings found</h2>
        <select>
          <option value="0">Sort By: </option>
          <option value="0">Price: Low to High </option>
          <option value="0">Price: High to Low </option>
        </select>
      </div>
      <section>
        <div className="result-container">
          {props.children}
          {products}
        </div>
      </section>
      {currentPage > Math.floor(filteredMensRings.length / postsPerPage) ? (
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
          {Math.floor(filteredMensRings.length / postsPerPage)}
        </div>
      )}
    </ListingsBox>
  ) : (
    <Loader />
  );
}
