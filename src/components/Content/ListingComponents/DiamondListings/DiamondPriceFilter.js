import React, { useState, useContext, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { useCookies } from "react-cookie";
import { FilterItemBox } from "../style";
import { useSelector, useDispatch } from "react-redux";
import {
  filterDiamondData,
  addFilteredData,
} from "../../../../store/actions/diamondActions";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default function DiamondPriceFilter({ lowestPrice, highestPrice}) {
  
  const [priceLowerBound, setPriceLowerBound] = useState(0);
  const [priceUpperBound, setPriceUpperBound] = useState(0);
  const [minNumberDisplayStatus, setMinNumberDisplayStatus] = useState(false);
  const [maxNumberDisplayStatus, setMaxNumberDisplayStatus] = useState(false);
  const [enteredNumber, setEnteredNumber] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [cookies] = useCookies();

  const currencyMultiplier = cookies.exchangeRate[cookies.currencyCode]

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const location = useLocation();

  const history = useHistory();
  const { search } = useLocation();

  const filter = queryString.parse(search);
  const {priceFrom, priceTo} = filter

  const nfObject = new Intl.NumberFormat("en-US");

  const onPriceLowerBoundChange = (e) => {
    setPriceLowerBound(e.target.value);
    onPriceHandleApply();
  };

  const onPriceUpperBoundChange = (e) => {
    setPriceUpperBound(e.target.value);
    onPriceHandleApply();
  };

  const onPriceSliderChange = (priceRange) => {
    setPriceRange(priceRange);
    setPriceLowerBound(priceRange[0]);
    setPriceUpperBound(priceRange[1]);
  };

  const onPriceHandleApply = () => {
    setPriceRange([priceLowerBound, priceUpperBound]);
  };

  const onHandleHoldAndUp = (lowerPrice, upperPrice) => {
    const parsed = queryString.parse(location.search);
    parsed.priceFrom = lowerPrice;
    parsed.priceTo = upperPrice;
    const stringified = queryString.stringify(parsed);
    location.search = stringified;
    history.push(`?${location.search}`);
    let filteredData = filterDiamondData(data.diamondReducer.unfilteredDiamondArray, {
      ...filter,
      priceFrom: lowerPrice,
      priceTo: upperPrice,
    });
    dispatch(addFilteredData(filteredData));
  };

  const handleInputVisibility = (e) => {
    let selectedInput = e.target.className;
    switch (selectedInput) {
      case "text-input-min-value":
        setMinNumberDisplayStatus(true);
        setMaxNumberDisplayStatus(false);
        break;
      case "text-input-max-value":
        setMaxNumberDisplayStatus(true);
        setMinNumberDisplayStatus(true);
        break;
    }
  };

  const getCurrencySymbol = (currencyCode) => {
    switch (currencyCode) {
      case "USD":
        return "$";
      case "AUD":
        return "A$";
      case "INR":
        return "₹";
      case "EUR":
        return "€";
      case "NZD":
        return "N$";
      case "AED":
        return "AED";
      case "SGD":
        return "S$";
      case "GBP":
        return "£";
      default:
        return "$";
    }
  };

  useEffect(() => {
    setPriceLowerBound(lowestPrice);
    setPriceUpperBound(highestPrice);

    if (priceFrom || priceTo !== undefined){
      onPriceSliderChange([priceFrom, priceTo]);
    }
    else{
      onPriceSliderChange([lowestPrice, highestPrice]);
    }

  }, [lowestPrice, highestPrice]);

  return (
    <FilterItemBox
      minNumberDisplayStatus={minNumberDisplayStatus}
      maxNumberDisplayStatus={maxNumberDisplayStatus}
    >
      <Range
        min={lowestPrice}
        max={highestPrice}
        step={1}
        value={priceRange}
        onChange={onPriceSliderChange}
        onAfterChange={() =>
          onHandleHoldAndUp(priceLowerBound, priceUpperBound)
        }
        trackStyle={[{ backgroundColor: "rgba(30,46,76)", height: "5px" }]}
        railStyle={{ backgroundColor: "rgba(30,46,76,0.5)", height: "5px" }}
        handleStyle={{ width: "25px", height: "25px", bottom: -5.5 }}
        dotStyle={{
          bottom: -5.5,
          backgroundColor: "white",
          width: "2px",
          height: "15px",
          borderRadius: 0,
          verticalAlign: "middle",
          border: "1px solid white",
          marginLeft: "-2px",
        }}
      />
      <div className="filter-bound-container">
        <div className="input-container-box">
          <span style={{ marginRight: "5px", fontSize: "1.2rem" }}>
            {getCurrencySymbol(cookies.currencyCode)}
          </span>
          <input
            autoFocus={true}
            className="number-input-min-value"
            type="number"
            value={parseInt(priceLowerBound * currencyMultiplier)}
            onChange={(e) => setEnteredNumber(e.target.value)}
          />
        </div>

        <div className="input-container-box">
          <span style={{ marginRight: "5px", fontSize: "1.2rem" }}>
            {getCurrencySymbol(cookies.currencyCode)}
          </span>
          <input
            autoFocus={true}
            className="number-input-max-value"
            type="number"
            value={parseInt(priceUpperBound * currencyMultiplier)}
            onChange={(e) => setEnteredNumber(e.target.value)}
          />
        </div>
      </div>
    </FilterItemBox>
  );
}
