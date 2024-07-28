import React, { createContext, useState, useEffect, useReducer } from "react";
import queryString from "query-string";
import axios from "axios";
import { useLocation } from "react-router-dom";
import _ from "lodash";
import fetchShapeDiamonds from "../helper/fetchShapeDiamonds";

export const DiamondsContext = createContext();

export const DiamondsContextProvider = ({ children }) => {
  const { search } = useLocation();
  const filter = queryString.parse(search);
  const { name } = filter;
  const diamondDataFetchUrl = `/api/production-white-diamond-stock`;
  // const diamondDataFetchUrl = "/api/development-white-diamond-stock";

  const [loadingStatus, setLoadingStatus] = useState(true);
  const [allDiamonds, setAllDiamonds] = useState([]);
  const [coloredDiamonds, setColoredDiamonds] = useState([]);
  const [whiteDiamonds, setWhiteDiamonds] = useState([]);
  const [lowestPrice, setLowestPrice] = useState(0);
  const [highestPrice, setHighestPrice] = useState(0);
  const [lowestCarat, setLowestCarat] = useState(0);
  const [highestCarat, setHighestCarat] = useState(0);

  const sortAndSetPriceExtremes = (diamondArray) => {
    if (diamondArray.length != 0) {
      let priceBySortedData = _.orderBy(diamondArray, (o) => +o.totalPrice, [
        "asc",
      ]);
      setLowestPrice(priceBySortedData[0].totalPrice);
      setHighestPrice(
        priceBySortedData[priceBySortedData.length - 1].totalPrice
      );
    }
  };

  const sortAndSetCaratExtremes = (diamondArray) => {
    if (diamondArray.length != 0) {
      let caratBySortedData = _.orderBy(diamondArray, (o) => +o.carat, ["asc"]);
      setLowestCarat(caratBySortedData[0].carat);
      setHighestCarat(caratBySortedData[caratBySortedData.length - 1].carat);
    }
  };

  const getSearchQueryFilteredDiamonds = (listings, filter) => {
    let {
      name,
      priceFrom,
      priceTo,
      caratFrom,
      caratTo,
      cutFrom,
      cutTo,
      clarityFrom,
      clarityTo,
      colorFrom,
      colorTo,
      tableFrom,
      tableTo,
      depthFrom,
      depthTo,
      lab,
      sortBy,
    } = filter;

    let result = listings;

    if (name === "all" || name === undefined || name === null) {
      result = result;
    } else {
      result = result.filter((item, index) => item.diamondShape === name);
    }

    if (priceFrom && priceTo) {
      result = result.filter(
        (item, index) =>
          parseFloat(item.totalPrice - 1) >= priceFrom &&
          parseFloat(item.totalPrice + 1) <= priceTo
      );
    }

    if (caratFrom && caratTo) {
      result = result.filter(
        (item, index) =>
          parseFloat(item.carat) >= caratFrom &&
          parseFloat(item.carat) <= caratTo
      );
    }

    if (colorFrom && colorTo) {
      result = result.filter(
        (item, index) =>
          item.colorEquivalent > colorFrom && item.colorEquivalent <= colorTo
      );
    }

    if (tableFrom && tableTo) {
      result = result.filter(
        (item, index) =>
          item.tablePercentage >= tableFrom && item.tablePercentage <= tableTo
      );
    }

    if (depthFrom && depthTo) {
      result = result.filter(
        (item, index) =>
          item.depthPercentage >= depthFrom && item.depthPercentage <= depthTo
      );
    }

    if (lab) {
      result = result.filter((item, index) => item.lab === lab);
    }

    if (sortBy) {
      switch (sortBy) {
        case "asc":
          result = _.orderBy(result, (o) => +o.totalPrice, ["asc"]);
          break;
        case "desc":
          result = _.orderBy(result, (o) => +o.totalPrice, ["desc"]);
          break;
        default:
          return result;
          break;
      }
    }

    if (clarityFrom && clarityTo) {
      result = result.filter(
        (item, index) =>
          item.clarityEquivalent > clarityFrom &&
          item.clarityEquivalent <= clarityTo
      );
    }

    if (cutFrom && cutTo) {
      result = result.filter(
        (item, index) =>
          item.cutEquivalent > cutFrom && item.cutEquivalent <= cutTo
      );
    }

    return result;
  };

  const fetchDiamondData = async () => {
    try {
      const apiResponse = await axios(diamondDataFetchUrl);
      const diamondData = await apiResponse.data.response;
      const whiteDiamonds = diamondData.filter(
        (item) => item.isFancy === false
      );
      const coloredDiamonds = diamondData.filter(
        (item) => item.isFancy === true
      );
      setAllDiamonds([...diamondData]);
      setColoredDiamonds([...coloredDiamonds]);
      setWhiteDiamonds([...whiteDiamonds]);
      sortAndSetCaratExtremes(fetchShapeDiamonds(diamondData, name));
      sortAndSetPriceExtremes(fetchShapeDiamonds(diamondData, name));
      setLoadingStatus(false);
    } catch (e) {
      console.log(e.message, "Try updating the API key in App.js");
    }
  };

  const findDiamond = (allDiamonds, diamondId) => {
    if (diamondId) {
      return allDiamonds.find((item) => item.stockNumber === diamondId);
    } else {
      return null;
    }
  };

  const sortDiamondLisitingsByPrice = (diamonds, sortType, diamondType) => {
    const sortedDiamondData = _.orderBy(diamonds, (o) => +o.totalPrice, [
      sortType,
    ]);

    if (diamondType === "white") {
      setAllDiamonds([...sortedDiamondData]);
    } else {
      setColoredDiamonds([...sortedDiamondData]);
    }
  };

  useEffect(() => {
    fetchDiamondData();
  }, []);

  return (
    <DiamondsContext.Provider
      value={{
        allDiamonds,
        coloredDiamonds,
        whiteDiamonds,
        lowestCarat,
        highestCarat,
        lowestPrice,
        highestPrice,
        loadingStatus,
        findDiamond,
        sortDiamondLisitingsByPrice,
        getSearchQueryFilteredDiamonds,
      }}
    >
      {children}
    </DiamondsContext.Provider>
  );
};
