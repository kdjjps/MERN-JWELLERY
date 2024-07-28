import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { FilterItemBox } from "../style";
import { useSelector, useDispatch } from "react-redux";
import {
  filterDiamondData,
  addFilteredData,
} from "../../../../store/actions/diamondActions";
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default function DiamondCaratFilter({
  lowestCarat,
  highestCarat,
  filterStatus,
}) {
  const [caratLowerBound, setCaratLowerBound] = useState(0);
  const [caratUpperBound, setCaratUpperBound] = useState(1);
  const [caratRange, setCaratRange] = useState([0, 1]);

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();

  const location = useLocation();

  const { search } = useLocation();

  const filter = queryString.parse(search);
  const {caratFrom, caratTo} = filter;

  const onCaratLowerBoundChange = (e) => {
    const parsed = queryString.parse(location.search);
    parsed.caratFrom = e.target.value;
    const stringified = queryString.stringify(parsed);
    location.search = stringified;
    history.push(`?${location.search}`);
    setCaratLowerBound(e.target.value);
    onCaratHandleApply();
  };

  const onCaratUpperBoundChange = (e) => {
    const parsed = queryString.parse(location.search);
    parsed.caratTo = e.target.value;
    const stringified = queryString.stringify(parsed);
    location.search = stringified;
    history.push(`?${location.search}`);
    setCaratUpperBound(e.target.value);
    onCaratHandleApply();
  };

  const onCaratSliderChange = (caratRange) => {
    setCaratRange(caratRange);
    setCaratLowerBound(caratRange[0]);
    setCaratUpperBound(caratRange[1]);
  };

  const onCaratHandleApply = () => {
    setCaratRange([caratLowerBound, caratUpperBound]);
  };

  const onHandleHoldAndUp = (lowerCarat, upperCarat) => {
    const parsed = queryString.parse(location.search);
    parsed.caratFrom = lowerCarat;
    parsed.caratTo = upperCarat;
    const stringified = queryString.stringify(parsed);
    location.search = stringified;
    history.push(`?${location.search}`);
    let filteredData = filterDiamondData(data.diamondReducer.unfilteredDiamondArray, {
      ...filter,
      caratFrom: lowerCarat,
      caratTo: upperCarat,
    });
    dispatch(addFilteredData(filteredData));
  };

  useEffect(() => {
    setCaratLowerBound(lowestCarat);
    setCaratUpperBound(highestCarat);

    if (caratFrom || caratTo !== undefined){
      onCaratSliderChange([caratFrom, caratTo]);
    }
    else{
      onCaratSliderChange([lowestCarat, highestCarat]);
    }

  }, [lowestCarat, highestCarat]);

  return (
    <FilterItemBox>
      <Range
        disabled={filterStatus}
        allowCross={false}
        max={highestCarat}
        min={lowestCarat}
        step={0.01}
        value={caratRange}
        onChange={onCaratSliderChange}
        onAfterChange={() =>
          onHandleHoldAndUp(caratLowerBound, caratUpperBound)
        }
        trackStyle={[{ backgroundColor: "rgba(30,46,76)", height: "5px" }]}
        railStyle={{ backgroundColor: "rgba(30,46,76,0.5)", height: "5px" }}
        handleStyle={{ width: "25px", height: "25px", bottom: -5.5 }}
        dotStyle={{
          bottom: -5.5,
          backgroundColor: "white",
          width: "4px",
          height: "15px",
          borderRadius: 0,
          verticalAlign: "middle",
          border: "1px solid white",
          marginLeft: "-2px",
        }}
      />
      <div className="filter-bound-container">
        <div className="input-container-box">
          <input
            className="carat-input"
            type="number"
            value={caratLowerBound}
            onChange={onCaratLowerBoundChange}
          />
        </div>
        <div className="input-container-box">
          <input
            className="carat-input"
            type="number"
            value={caratUpperBound}
            onChange={onCaratUpperBoundChange}
          />
        </div>
      </div>
    </FilterItemBox>
  );
}
