import axios from "axios";
import _ from "lodash";
import { getEquivalent } from "../../helper/getEquivalent";

// Section of plain action objects:
export const loading = () => {
  return {
    type: "LOADING",
  };
};

export const loadingCompleted = () => {
  return {
    type: "LOADING_COMPLETED",
  };
};

export const addFetchedData = (data) => {
  return {
    type: "ADD_FETCHED_DATA",
    data,
  };
};

export const onError = (error) => {
  return {
    type: "ON_ERROR",
    error,
  };
};

export const addExtremes = (data) => {
  return {
    type: "ADD_EXTREMES",
    data,
  };
};

export const addFilteredData = (data) => {
  return {
    type: "ADD_FILTERED_DATA",
    data,
  };
};

export const addFoundDiamond = (data) => {
  return {
    type: "ADD_FOUND_DIAMOND",
    data,
  };
};

// Section of helper functions:
export const findExtremes = (diamondArray) => {
  if (diamondArray.length != 0) {
    let caratBySortedData = _.orderBy(diamondArray, (o) => +o.carat, ["asc"]);
    let priceBySortedData = _.orderBy(diamondArray, (o) => +o.totalPrice, [
      "asc",
    ]);
    return {
      lowestCarat: caratBySortedData[0].carat,
      highestCarat: caratBySortedData[caratBySortedData.length - 1].carat,
      lowestPrice: priceBySortedData[0].totalPrice,
      highestPrice: priceBySortedData[priceBySortedData.length - 1].totalPrice,
    };
  }
};

export const filterDiamondData = (unfilteredData, filter) => {
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
    symmetryFrom,
    symmetryTo,
    polishFrom,
    polishTo,
    lab,
    sortBy,
  } = filter;

  let result = unfilteredData;

  if (name === undefined || name === "all") {
    result = result;
  } else {
    result = result.filter((item) => item.diamondShape === name);
  }

  if (priceFrom && priceTo) {
    result = result.filter(
      (item) =>
        parseFloat(item.totalPrice - 1) >= priceFrom &&
        parseFloat(item.totalPrice + 1) <= priceTo
    );
  }

  if (caratFrom && caratTo) {
    result = result.filter(
      (item) =>
        parseFloat(item.carat) >= caratFrom && parseFloat(item.carat) <= caratTo
    );
  }

  if (colorFrom && colorTo) {
    let colorFromValue = getEquivalent("color", colorFrom);
    let colorToValue = getEquivalent("color", colorTo);

    result = result.filter(
      (item) =>
        item.colorEquivalent > colorFromValue &&
        item.colorEquivalent <= colorToValue
    );
  }

  if (tableFrom && tableTo) {
    result = result.filter(
      (item) =>
        item.tablePercentage >= tableFrom && item.tablePercentage <= tableTo
    );
  }

  if (depthFrom && depthTo) {
    result = result.filter(
      (item) =>
        item.depthPercentage >= depthFrom && item.depthPercentage <= depthTo
    );
  }

  if (symmetryFrom && symmetryTo) {
    let symmetryFromValue = getEquivalent("symmetry", symmetryFrom);
    let symmetryToValue = getEquivalent("symmetry", symmetryTo);

    result = result.filter(
      (item) =>
        item.symmetryEquivalent > symmetryFromValue &&
        item.symmetryEquivalent <= symmetryToValue
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
    }
  }

  if (clarityFrom && clarityTo) {
    let clarityFromValue = getEquivalent("clarity", clarityFrom);
    let clarityToValue = getEquivalent("clarity", clarityTo);

    result = result.filter(
      (item) =>
        item.clarityEquivalent > clarityFromValue &&
        item.clarityEquivalent <= clarityToValue
    );
  }

  if (polishFrom && polishTo) {
    let polishFromValue = getEquivalent("polish", polishFrom);
    let polishToValue = getEquivalent("polish", polishTo);

    result = result.filter(
      (item) =>
        item.polishEquivalent > polishFromValue &&
        item.polishEquivalent <= polishToValue
    );
  }

  if (cutFrom && cutTo) {
    result = result.filter(
      (item) => item.cutEquivalent > cutFrom && item.cutEquivalent <= cutTo
    );
  }

  return result;
};

// Section of action creators:
export const fetchDiamondData = (filter) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(loading());
    callDiamondAPI()
      .then((response) => {
        let unfilteredData = response?.data?.response;
        dispatch(addFetchedData(unfilteredData));

        let filteredData = filterDiamondData(unfilteredData, filter);
        dispatch(addFilteredData(filteredData));

        const sortedResponse = findExtremes(response?.data?.response);
        dispatch(addExtremes(sortedResponse));

        dispatch(loadingCompleted());
        resolve({ success: true });
      })
      .catch((err) => {
        console.log("========err", err);
        dispatch(loadingCompleted());
        dispatch(onError(err));
        reject("Sorry there is an error");
      });
  });
};

const callDiamondAPI = () => {
  return axios.get("/api/production-white-diamond-stock");
};

export const findDiamond = (unfilteredData, stockId) => {
  return unfilteredData.find((item) => item.stockNumber === stockId);
};
