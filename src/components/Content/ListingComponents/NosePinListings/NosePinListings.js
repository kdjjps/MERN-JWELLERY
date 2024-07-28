import React, { useState, useEffect, useRef } from "react";
import NosePinItem from "./NosePinItem";
import { ListingsBox } from "../style.js";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { BannerBox } from "../../common-style";
import { useSelector } from "react-redux";
import Loader from "../../Loader/Loader";
import { getSearchQueryFilteredProducts } from "../../../../store/actions/jewelryActions";

export default function NosePinListings(props) {
  const loader = useRef(null);

  const data = useSelector((state) => state);

  const pins = data.jewelryReducer.unfilteredNosePinsArray;

  const { search } = useLocation();
  const filter = queryString.parse(search);
  const history = useHistory();

  const filteredPins = getSearchQueryFilteredProducts("nose-pin", pins, filter);

  const [shape, setShape] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = filteredPins.slice(indexOfFirstPost, indexOfLastPost)
  const [currentPosts, setCurrentPosts] = useState([]);

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
    return <NosePinItem item={item} key={index} {...props} />;
  });

  const bannerImage =
    "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/diamond-nose-pin-banner.png";

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
    setCurrentPosts([...filteredPins.slice(indexOfFirstPost, indexOfLastPost)]);
  }, [shape, props.isAllSet]);

  useEffect(() => {
    setCurrentPosts([
      ...currentPosts,
      ...filteredPins.slice(indexOfFirstPost, indexOfLastPost),
    ]);
  }, [currentPage]);

  return props.isAllSet ? (
    <ListingsBox>
      <BannerBox image={bannerImage}>
        <div>
          <h2 className="banner-small-heading" style={{ color: "#FFFFFF" }}>
            Nose Pins
          </h2>
        </div>
      </BannerBox>

      <div className="listings-functions-container">
        <h2>{filteredPins.length} Nose Pins found</h2>
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
      {currentPage > Math.floor(filteredPins.length / postsPerPage) ? (
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
          {Math.floor(filteredPins.length / postsPerPage)}
        </div>
      )}
    </ListingsBox>
  ) : (
    <Loader />
  );
}
