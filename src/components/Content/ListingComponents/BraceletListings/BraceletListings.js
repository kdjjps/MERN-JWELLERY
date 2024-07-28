import React, { useState, useEffect, useRef } from "react";
import BraceletItem from "./BraceletItem";
import { ListingsBox } from "../style.js";
import { BannerBox } from "../../common-style";
import { useSelector } from "react-redux";
import Loader from "../../Loader/Loader";

export default function BraceletListings(props) {
  const loader = useRef(null);

  const data = useSelector((state) => state);

  const bracelets = data.jewelryReducer.unfilteredMensBraceletsArray;

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = bracelets.slice(indexOfFirstPost, indexOfLastPost)
  const [currentPosts, setCurrentPosts] = useState([]);

  const products = currentPosts.map((item, index) => {
    return (
      <BraceletItem item={item} key={index} id={item.PACKETID} {...props} />
    );
  });

  const bannerImage =
    "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/mens-bracelet-banner.png";

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
    setCurrentPosts([...bracelets.slice(indexOfFirstPost, indexOfLastPost)]);
  }, [props.isAllSet]);

  useEffect(() => {
    setCurrentPosts([
      ...currentPosts,
      ...bracelets.slice(indexOfFirstPost, indexOfLastPost),
    ]);
  }, [currentPage]);

  return props.isAllSet ? (
    <ListingsBox>
      <BannerBox image={bannerImage}>
        <div>
          <h2 className="banner-small-heading" style={{ color: "white" }}>
            Men's Gold Bracelets
          </h2>
        </div>
      </BannerBox>

      {/* <BraceletFilters /> */}
      <div className="listings-functions-container">
        <h2>{bracelets.length} Bracelets found</h2>
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
      {currentPage > Math.floor(bracelets.length / postsPerPage) ? (
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
          {Math.floor(bracelets.length / postsPerPage)}
        </div>
      )}
    </ListingsBox>
  ) : (
    <Loader />
  );
}
