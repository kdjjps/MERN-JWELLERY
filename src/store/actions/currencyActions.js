import axios from "axios";

// section of plain action objects
export const loading = () => {
  return {
    types: "LOADING",
  };
};

export const addFetchedExchangeRate = (data) => {
  return {
    types: "ADD_FETCHED_EXCHANGE_RATE",
    data,
  };
};

export const addFetchedGoldPrice = (data) => {
  return {
    types: "ADD_FETCHED_GOLD_PRICE",
    data,
  };
};

export const handleCurrencyArraySequence = (data) => {
  return {
    types: "HANDLE_CURRENCY_ARRAY_SEQUENCE",
    data,
  };
};

// section of action creators

export const fetchCurrencyConversionData = async () => {
  return new Promise((resolve, reject) => {
    callPriceAPI().then((apiResponse) => {
      setCookie(
        "exchangeRate",
        JSON.stringify(apiResponse.data.currencyTable),
        { path: "/", maxAge: tomorrow }
      );
      setCookie("goldPrice", JSON.stringify(apiResponse.data.goldPrices), {
        path: "/",
        maxAge: tomorrow,
      });
    });
  });
};

const callPriceAPI = () => {
  return axios.get("/api/price-multiplier");
};
