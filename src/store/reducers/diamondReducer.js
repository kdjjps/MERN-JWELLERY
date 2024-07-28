const initialState = {
  unfilteredDiamondArray: [],
  filteredDiamondArray: [],
  lowestCarat: null,
  highestCarat: null,
  lowestPrice: null,
  highestPrice: null,
  loadingDone: false,
  error: null,
  foundDiamond: null,
};

const diamondReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loadingDone: false };
     
    case "LOADING_COMPLETED":
      return { ...state, loadingDone: true };
     
    case "ADD_FETCHED_DATA":
      return { ...state, unfilteredDiamondArray: action.data };
     
    case "ON_ERROR":
      return { ...state, error: true };
     
    case "ADD_EXTREMES":
      return {
        ...state,
        lowestCarat: action.data.lowestCarat,
        highestCarat: action.data.highestCarat,
        lowestPrice: action.data.lowestPrice,
        highestPrice: action.data.highestPrice,
      };
     
    case "ADD_FILTERED_DATA":
      return {
        ...state,
        filteredDiamondArray: action.data,
      };
     
    case "ADD_FOUND_DIAMOND":
      return {
        ...state,
        foundDiamond: action.data,
      };
     
    default:
      return state;
  }
};

export default diamondReducer;