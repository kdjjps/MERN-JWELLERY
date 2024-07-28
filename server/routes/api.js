require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");
const getEquivalentDecimal = require("../utility/getEquivalent");
const getEquivalentShape = require("../utility/getEquivalentShape");
const PurchasedLooseDiamond = require("../models/purchasedLooseDiamond");
const _ = require("lodash");
const { toBeEmpty } = require("@testing-library/jest-dom");

router.get("/development-white-diamond-stock", async (req, res) => {
  try {
    const requestParishi = await axios.get(
      `https://parishidiamond.com/aspxpages/StkDwnljason.aspx?uname=luxurygemsco&pwd=parishi999`
    );
    const requestRatnakalaTokenResponse = await axios.get(
      "http://ratnakala.prolanceit.in/api/user/token",
      { headers: { apiKey: "lsgcFUFISDdfgncir324895ycnjcvif==" } }
    );
    const requestRatnakala = await axios.get(
      "http://ratnakala.prolanceit.in/api/stones",
      { headers: { token: `${requestRatnakalaTokenResponse.data.Token}` } }
    );

    const combinedResponse = await axios.all([
      requestParishi,
      requestRatnakala,
    ]);

    const [res1, res2] = combinedResponse;

    let modifiedParishiData = res1.data.map((item, index) => {
      let isFancy = null;

      switch (item.FancyColor) {
        case null:
          isFancy = false;
          break;
        default:
          isFancy = true;
          break;
      }
      return {
        category: "diamond",
        vendor: "parishi",
        stockNumber: `LGC-PRH-${item.RefNo}`,
        lab: item.CertName,
        certificateLink: item.CertificatePath,
        reportNo: item.CertNo,
        shape: item.CutName,
        diamondShape: getEquivalentShape(item.CutName),
        carat: parseFloat(item.Weight),
        color: item.ColorCode,
        colorEquivalent: getEquivalentDecimal("color", item.ColorCode),
        isFancy: isFancy,
        cut: item.PropCode,
        cutEquivalent: getEquivalentDecimal("cut", item.PropCode),
        clarity: item.ClarityName,
        clarityEquivalent: getEquivalentDecimal("clarity", item.ClarityName),
        culet: item.Culet,
        symmetry: item.SymName,
        symmetryEquivalent: getEquivalentDecimal("symmetry", item.SymName),
        fluorescence: item.FLName,
        fluorescenceEquivalent: getEquivalentDecimal(
          "fluorescence",
          item.FLName
        ),
        measurement: item.Diameter,
        polish: item.PolishName,
        polishEquivalent: getEquivalentDecimal("polish", item.PolishName),
        ratio: "none",
        table: item.Table,
        totalPrice: parseInt(item.Rate) * 1.15,
        girdle: item.GirdleCondition,
        girdlePercentage: item.GirdlePer,
        depthPercentage: parseInt(item.TotDepth),
        tablePercentage: parseInt(item.Table),
        black: item.BlackInc,
        white: "none",
        milky: "none",
        eyeclean: "none",
        inscription: `${item.CertName + " " + item.CertNo}`,
        location: item.Location,
        imageUrl: item.ImagePath,
        videoUrl: item.VideoPath,
        searchTerm: `${item.Weight} Carat, ${item.ColorCode} Color, ${
          item.ClarityName
        } Clarity, ${item.PropCode} Cut, ${getEquivalentShape(
          item.CutName
        )} Shape`,
      };
    });

    let modifiedRatnakalaData = res2.data.map((item, index) => {
      let isFancy = null;

      if (item.Color === "-") {
        isFancy = true;
      } else {
        isFancy = false;
      }

      return {
        category: "diamond",
        vendor: "ratnakala",
        stockNumber: `LGC-PRH-${item.Stock}`,
        lab: item.Lab,
        certificateLink: "",
        reportNo: item.CertificateNumber,
        shape: item.Shape,
        diamondShape: getEquivalentShape(item.Shape),
        carat: parseFloat(item.Weight),
        color: item.Color,
        colorEquivalent: getEquivalentDecimal("color", item.Color),
        isFancy: isFancy,
        cut: item.CutGrade,
        cutEquivalent: getEquivalentDecimal("cut", item.CutGrade),
        clarity: item.Clarity,
        clarityEquivalent: getEquivalentDecimal("clarity", item.Clarity),
        culet: item.CuletSize,
        symmetry: item.Symmetry,
        symmetryEquivalent: getEquivalentDecimal("symmetry", item.Symmetry),
        fluorescence: item.FluorescenceIntensity,
        fluorescenceEquivalent: getEquivalentDecimal(
          "fluorescence",
          item.FluorescenceIntensity
        ),
        measurement: item.Measurements,
        polish: item.Polish,
        polishEquivalent: getEquivalentDecimal("polish", item.Polish),
        ratio: "none",
        table: item.TablePercent,
        totalPrice: parseFloat(item.CashPrice) * 1.15,
        girdle: item.GirdleCondition,
        girdlePercentage: item.GirdlePercent,
        depthPercentage: parseFloat(item.DepthPercent),
        tablePercentage: parseFloat(item.TablePercent),
        black: item.table_black,
        white: "none",
        milky: "none",
        eyeclean: "none",
        inscription: item.LaserInscription,
        location: item.City,
        imageUrl: item.DiamondImage,
        videoUrl: item.DiamondImage,
        searchTerm: `${item.Weight} Carat, ${item.Color} Color, ${
          item.Clarity
        } Clarity, ${item.Cut} Cut, ${getEquivalentShape(item.Cut)} Shape`,
      };
    });

    let diamonds = [...modifiedParishiData, ...modifiedRatnakalaData];

    let priceBySortedData = _.orderBy(diamonds, (o) => +o.totalPrice, ["asc"]);
    let caratBySortedData = _.orderBy(diamonds, (o) => +o.carat, ["asc"]);

    res.send({
      success: true,
      message: "Successfully Got Data",
      response: diamonds,
      totalDiamonds: [...modifiedParishiData, ...modifiedRatnakalaData].length,
      lowestPriceDiamond: priceBySortedData[0].totalPrice,
      highestPriceDiamond:
        priceBySortedData[priceBySortedData.length - 1].totalPrice,
      lowestCaratDiamond: caratBySortedData[0].carat,
      highestCaratDiamond:
        caratBySortedData[caratBySortedData.length - 1].carat,
    });
  } catch (error) {
    throw new Error(error);
  }

  // mongodb+srv://admin:durgesh999@lgc.o8p8j.mongodb.net/LGC?retryWrites=true&w=majority
});

router.get("/production-white-diamond-stock", async (req, res) => {
  try {
    const requestParishi = await axios.get(
      `https://parishidiamond.com/aspxpages/StkDwnljason.aspx?uname=luxurygemsco&pwd=parishi999`
    );
    const diamondsBought = await PurchasedLooseDiamond.findAll();

    let modifiedParishiData = requestParishi.data.map((item, index) => {
      let isFancy = null;

      switch (item.FancyColor) {
        case null:
          isFancy = false;
          break;
        default:
          isFancy = true;
          break;
      }

      return {
        category: "diamond",
        vendor: "parishi",
        stockNumber: `LGC-PRH-${item.RefNo}`,
        lab: item.CertName,
        certificateLink: item.CertificatePath,
        reportNo: item.CertNo,
        shape: item.CutName,
        diamondShape: getEquivalentShape(item.CutName),
        carat: parseFloat(item.Weight),
        color: item.ColorCode,
        colorEquivalent: getEquivalentDecimal("color", item.ColorCode),
        isFancy: isFancy,
        cut: item.PropCode,
        cutEquivalent: getEquivalentDecimal("cut", item.PropCode),
        clarity: item.ClarityName,
        clarityEquivalent: getEquivalentDecimal("clarity", item.ClarityName),
        culet: item.Culet,
        symmetry: item.SymName,
        symmetryEquivalent: getEquivalentDecimal("symmetry", item.SymName),
        fluorescence: item.FLName,
        fluorescenceEquivalent: getEquivalentDecimal(
          "fluorescence",
          item.FLName
        ),
        measurement: item.Diameter,
        polish: item.PolishName,
        polishEquivalent: getEquivalentDecimal("polish", item.PolishName),
        ratio: "none",
        table: item.Table,
        totalPrice: parseFloat(item.Rate) * parseFloat(item.Weight),
        girdle: item.GirdleCondition,
        girdlePercentage: item.GirdlePer,
        depthPercentage: parseInt(item.TotDepth),
        tablePercentage: parseInt(item.Table),
        black: item.BlackInc,
        white: "none",
        milky: "none",
        eyeclean: "none",
        inscription: `${item.CertName + " " + item.CertNo}`,
        location: item.Location,
        imageUrl: item.ImagePath,
        videoUrl: item.VideoPath,
        searchTerm: `${item.Weight} Carat, ${item.ColorCode} Color, ${
          item.ClarityName
        } Clarity, ${item.PropCode} Cut, ${getEquivalentShape(
          item.CutName
        )} Shape`,
      };
    });

    const filteredParishiData = modifiedParishiData.filter(
      (obj1) =>
        !diamondsBought.some(
          (obj2) => obj1.stockNumber === obj2.diamondStockNumber
        )
    );

    const priceBySortedData = _.orderBy(
      [...filteredParishiData],
      (o) => +o.totalPrice,
      ["asc"]
    );
    const caratBySortedData = _.orderBy(
      [...filteredParishiData],
      (o) => +o.carat,
      ["asc"]
    );

    res.send({
      success: true,
      message: "Successfully Got Data",
      response: [...modifiedParishiData],
      totalDiamonds: modifiedParishiData.length,
      lowestPriceDiamond: priceBySortedData[0].totalPrice,
      highestPriceDiamond:
        priceBySortedData[priceBySortedData.length - 1].totalPrice,
      lowestCaratDiamond: caratBySortedData[0].carat,
      highestCaratDiamond:
        caratBySortedData[caratBySortedData.length - 1].carat,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "NOOOOOOO!!!!" });
  }
});

router.get("/development-fancy-diamond-stock", async (req, res) => {
  // const requestKumar = await axios.get(`http://stock.kumarjewels.co/stock.asmx/FullStock?PartyId=16770&Token=8f7bad4f-fa89-472d-970d-f63f0b95a42f`)
  const requestParishi = await axios.get(
    `https://parishidiamond.com/aspxpages/StkDwnljason.aspx?uname=luxurygemsco&pwd=parishi999`
  );

  try {
    let modifiedParishiData = requestParishi.data.map((item, index) => {
      return {
        category: "diamond",
        vendor: "parishi",
        stockNumber: item.RefNo,
        lab: item.CertName,
        reportNo: item.CertNo,
        shape: item.CutName,
        carat: item.Weight,
        color: item.ColorCode,
        cut: item.PropCode,
        clarity: item.ClarityName,
        culet: item.Culet,
        symmetry: item.SymName,
        fluorescence: item.FLName,
        measurement: item.Diameter,
        polish: item.PolishName,
        ratio: "none",
        totalPrice: parseInt(item.Rate) * 1.15,
        girdle: item.GirdleCondition,
        girdlePercentage: item.GirdlePer,
        depthPercentage: parseInt(item.TotDepth),
        tablePercentage: parseInt(item.Table),
        black: item.BlackInc,
        white: "none",
        milky: "none",
        eyeclean: "none",
        inscription: `${item.CertName + " " + item.CertNo}`,
        location: item.Location,
        imageUrl: item.ImagePath,
        videoUrl: item.VideoPath,
      };
    });

    res.send({
      success: true,
      message: "Successfully Got Data",
      response: [...modifiedParishiData],
      totalDiamonds: modifiedParishiData.length,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/price-multiplier", async (req, res) => {
  try {
    let requestGoldPrice = await axios(
      "https://www.vaibhavjewellers.com/gold-rate"
    );
    let requestCurrencyTable = await axios(
      "https://www.x-rates.com/table/?from=USD&amount=1"
    );
    const combinedResponse = await axios.all([
      requestGoldPrice,
      requestCurrencyTable,
    ]);
    const goldPriceHTML = await combinedResponse[0].data;
    const currencyTableHTML = await combinedResponse[1].data;

    const $1 = cheerio.load(goldPriceHTML);
    const $2 = cheerio.load(currencyTableHTML);

    let priceString = $1(".table td:nth-child(3)").text();
    let priceArray = priceString.split(" INR");

    let currencyArray = [];

    for (i = 1; i <= 53; i++) {
      let priceString = $2(
        `.tablesorter tbody tr:nth-child(${i}) td:nth-child(2)`
      ).text();
      currencyArray.push(priceString);
    }

    let currencyTable = {
      USD: "1",
      AUD: currencyArray[1],
      EUR: currencyArray[13],
      GBP: currencyArray[50],
      NZD: currencyArray[30],
      SGD: currencyArray[40],
      INR: currencyArray[17],
      AED: currencyArray[39],
    };

    let goldPrices = {
      "24KT": parseInt(priceArray[0]) / parseInt(currencyArray[17]),
      "22KT": parseInt(priceArray[1]) / parseInt(currencyArray[17]),
      "18KT": parseInt(priceArray[2]) / parseInt(currencyArray[17]),
      Silver: parseInt(priceArray[3]) / parseInt(currencyArray[17]),
      Platinum: parseInt(priceArray[4]) / parseInt(currencyArray[17]),
    };

    res.send({
      success: true,
      goldPrices: { ...goldPrices },
      currencyTable: { ...currencyTable },
    });
  } catch (error) {
    console.log(error);
  }

  // res.send({
  //   success: true,
  //   goldPrices: {
  //     "24KT": 68,
  //     "22KT": 63,
  //     "18KT": 51,
  //     Silver: 0,
  //     Platinum: 49,
  //   },
  //   currencyTable: {
  //     USD: "1",
  //     AUD: "1.420712",
  //     EUR: "0.950849",
  //     GBP: "1.387032",
  //     NZD: "1.555368",
  //     SGD: "1.387032",
  //     INR: "76.476004",
  //     AED: "3.750000",
  //   },
  // });
});

router.get("/parishi", async (req, res) => {
  try {
    const requestParishi = await axios.get(
      `https://parishidiamond.com/aspxpages/StkDwnljason.aspx?uname=luxurygemsco&pwd=parishi999`
    );
    res.send({
      success: true,
      data: requestParishi.data,
    });
  } catch (e) {
    console.log(e);
  }
});

router.get("/kumar", async (req, res) => {
  try {
    const requestKumar = await axios.get(
      `http://stock.kumarjewels.co/stock.asmx/FullStock?PartyId=16770&Token=8f7bad4f-fa89-472d-970d-f63f0b95a42f`
    );
    res.send({
      success: true,
      data: requestKumar.data.TABLE.ROW,
    });
  } catch (e) {
    res.send({
      success: false,
      data: [],
    });
  }
});

router.get("/ratnakala", async (req, res) => {
  try {
    const requestRatnakalaTokenResponse = await axios.get(
      "http://ratnakala.prolanceit.in/api/user/token",
      { headers: { apiKey: "lsgcFUFISDdfgncir324895ycnjcvif==" } }
    );
    const requestRatnakala = await axios.get(
      "http://ratnakala.prolanceit.in/api/stones",
      { headers: { token: `${requestRatnakalaTokenResponse.data.Token}` } }
    );

    res.send({
      success: true,
      data: requestRatnakala.data,
    });
  } catch (e) {
    console.log(e);
  }
});

router.get("/get-jewelries", async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
