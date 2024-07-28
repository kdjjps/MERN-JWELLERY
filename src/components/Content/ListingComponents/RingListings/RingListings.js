import React, { useEffect, useState, useRef } from "react";
import RingItem from "./RingItem";
import RingFilters from "./RingFilters";
import { ListingsBox } from "../style.js";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { getSearchQueryFilteredProducts } from "../../../../store/actions/jewelryActions";
import Loader from "../../Loader/Loader";

export default function RingListings({ isMasterAllSet, children }) {

  const data = useSelector((state) => state);

  const rings = data.jewelryReducer.unfilteredSolitaireRingsArray;

  const [cookies] = useCookies();

  const { search } = useLocation();
  const filter = queryString.parse(search);
  const history = useHistory();

  const loader = useRef(null);

  const filteredRings = getSearchQueryFilteredProducts("ring", rings, filter);

  const [shape, setShape] = useState("");
  const [parentMetalColor, setParentMetalColor] = useState("white-gold");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage= 12;
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
    if (cookies.whatGotSelectedFirstForCustomRing === 'diamond'){
      history.push(`/create-your-own-ring/rings?shape=${cookies._diamondShapeSelectedForCustomRing}`)
    }
  },[])

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
  }, [isMasterAllSet]);

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
  }, [shape, isMasterAllSet]);

  useEffect(() => {
    setCurrentPosts([
      ...currentPosts,
      ...filteredRings.slice(indexOfFirstPost, indexOfLastPost),
    ]);
  },[currentPage]);

  const products = filteredRings.map((item, index) => {
    return (
      <RingItem item={item} key={index} parentMetalColor={parentMetalColor} />
    );
  });

  return !isMasterAllSet ? (
    <Loader/>
  ) : (
    <ListingsBox>

        <RingFilters
        setParentMetalColor={setParentMetalColor}
        setShape={setShape}
      />

    <div className="listings-functions-container">
      <h2>{totalRings / 4} Rings found</h2>
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
 
  </ListingsBox>
  );
}
