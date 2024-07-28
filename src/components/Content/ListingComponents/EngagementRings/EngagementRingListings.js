import React, { useState, useEffect, useRef } from "react";
import EngagementRingItem from "./EngagementRingItem";
import { ListingsBox } from "../style.js";
import { BannerBox } from "../../common-style";
import { useSelector } from "react-redux";
import Loader from "../../Loader/Loader";

export default function EngagementRingListings(props) {
  const loader = useRef(null);

  const data = useSelector((state) => state);
  const fashionRings = data.jewelryReducer.unfilteredFashionRingsArray;

  const [shape, setShape] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [currentPosts, setCurrentPosts] = useState([]);
  // const currentPosts = fashionRings.slice(indexOfFirstPost, indexOfLastPost)

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const changePostsPerPage = (n) => {
    setPostsPerPage(n);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const products = currentPosts.map((item, index) => {
    return <EngagementRingItem item={item} key={index} />;
  });

  const bannerImage2 =
    "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/fashion-ring-banner.png";

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
    setCurrentPosts([...fashionRings.slice(indexOfFirstPost, indexOfLastPost)]);
  }, [shape, props.isAllSet]);

  useEffect(() => {
    setCurrentPosts([
      ...currentPosts,
      ...fashionRings.slice(indexOfFirstPost, indexOfLastPost),
    ]);
  }, [currentPage]);

  return props.isAllSet ? (
    <ListingsBox>
      <BannerBox image={bannerImage2}>
        <div>
          <h2 className="banner-small-heading" style={{ color: "#FFFFFF" }}>
            Fashion Rings
          </h2>
        </div>
      </BannerBox>

      <div className="listings-functions-container">
        <h2>{fashionRings.length} Fashion Rings found</h2>
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
      {currentPage > Math.floor(fashionRings.length / postsPerPage) ? (
        <div className="see-more-button" style={{ fontSize: "2.0rem" }}>
          --- End of Listing ---
        </div>
      ) : (
        <div className="loading-more-button" ref={loader}>
          Loading More..
        </div>
      )}
    </ListingsBox>
  ) : (
    <Loader />
  );
}
