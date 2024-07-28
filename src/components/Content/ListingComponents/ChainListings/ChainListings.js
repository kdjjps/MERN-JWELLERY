import React, { useState, useEffect, useRef } from "react";
import ChainItem from "./ChainItem";
import { ListingsBox } from "../style.js";
import { BannerBox } from "../../common-style";
import { useSelector } from "react-redux";
import Loader from "../../Loader/Loader";

export default function ChainListings(props) {
  const loader = useRef(null);

  const data = useSelector((state) => state);

  const chains = data.jewelryReducer.unfilteredMensChainsArray;

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = chains.slice(indexOfFirstPost, indexOfLastPost)
  const [currentPosts, setCurrentPosts] = useState([]);

  const products = currentPosts.map((item, index) => {
    return <ChainItem item={item} key={index} id={item.PACKETID} {...props} />;
  });

  const bannerImage =
    "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/mens-chain-banner.png";

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
  }, [props.isAllSet]);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    setCurrentPosts([...chains.slice(indexOfFirstPost, indexOfLastPost)]);
  }, [props.isAllSet]);

  useEffect(() => {
    setCurrentPosts([
      ...currentPosts,
      ...chains.slice(indexOfFirstPost, indexOfLastPost),
    ]);
  }, [currentPage]);

  return props.isAllSet ? (
    <ListingsBox>
      <BannerBox image={bannerImage}>
        <div>
          <h2 className="banner-small-heading" style={{ color: "white" }}>
            Men's Gold Chains
          </h2>
        </div>
      </BannerBox>

      {/* <ChainFilters /> */}
      <div className="listings-functions-container">
        <h2>{chains.length} Chains found</h2>
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
      {currentPage > Math.floor(chains.length / postsPerPage) ? (
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
          {Math.floor(chains.length / postsPerPage)}
        </div>
      )}
    </ListingsBox>
  ) : (
    <Loader />
  );
}
