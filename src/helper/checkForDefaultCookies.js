import axios from "axios";

export const checkForDefaultCookies = (cookies, setCookie) => {
  return new Promise((resolve, reject) => {
    if (cookies.currencyCode === undefined) {
      setCookie("currencyCode", "USD", { path: "/" });
    }

    if (cookies.exchangeRate || cookies.goldPrice === undefined) {
      var date = new Date();
      var tomorrow = date.setDate(date.getDate()) + 1;
      callPriceAPI()
        .then((response) => {
          const ratesObject = response.data;
          setCookie("exchangeRate", JSON.stringify(ratesObject.currencyTable), {
            path: "/",
            maxAge: tomorrow,
          });
          setCookie("goldPrice", JSON.stringify(ratesObject.goldPrices), {
            path: "/",
            maxAge: tomorrow,
          });
          resolve({ success: true });
        })
        .catch((e) => {
          console.log(e.message, "Problem with Currency Api");
          reject(new Error("Problem with currency api"));
        });
    }
  });
};

const callPriceAPI = () => {
  return axios.get("/api/price-multiplier");
};
