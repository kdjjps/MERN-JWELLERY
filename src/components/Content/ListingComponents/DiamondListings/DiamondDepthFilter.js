import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FilterItemBox } from "../style";
import { useSelector, useDispatch } from "react-redux";
import {
  filterDiamondData,
  addFilteredData,
} from "../../../../store/actions/diamondActions";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default function DiamondDepthFilter() {
  const [depthLowerBound, setDepthLowerBound] = useState(46);
  const [depthUpperBound, setDepthUpperBound] = useState(78);
  const [depthRange, setDepthRange] = useState([46, 78]);

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();

  const location = useLocation();

  const { search } = useLocation();

  const filter = queryString.parse(search);
  const {depthFrom, depthTo} = filter

  const onDepthLowerBoundChange = (e) => {
    setDepthLowerBound(e.target.value);
    onDepthHandleApply();
  };

  const onDepthUpperBoundChange = (e) => {
    setDepthUpperBound(e.target.value);
    onDepthHandleApply();
  };

  const onDepthSliderChange = (depthRange) => {
    setDepthRange(depthRange);
    setDepthLowerBound(depthRange[0]);
    setDepthUpperBound(depthRange[1]);
  };

  const onDepthHandleApply = () => {
    setDepthRange([depthLowerBound, depthUpperBound]);
  };

  const handleDepthPerChange = (lowerDepthPer, upperDepthPer) => {
    const parsed = queryString.parse(location.search);
    parsed.depthFrom = lowerDepthPer;
    parsed.depthTo = upperDepthPer;
    const stringified = queryString.stringify(parsed);
    location.search = stringified;
    history.push(`?${location.search}`);
    let filteredData = filterDiamondData(data.diamondReducer.unfilteredDiamondArray, {
      ...filter,
      depthFrom: lowerDepthPer,
      depthTo: upperDepthPer,
    });
    dispatch(addFilteredData(filteredData));
  };

  useEffect(() => {
    if (depthFrom && depthTo !== undefined){
      onDepthSliderChange([depthFrom, depthTo])
    }
  },[])

  return (
    <FilterItemBox>
      <Range
        min={46}
        max={78}
        step={1}
        value={depthRange}
        onChange={onDepthSliderChange}
        onAfterChange={() =>
          handleDepthPerChange(depthLowerBound, depthUpperBound)
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
          <input type="number" value={depthLowerBound} />
          <span style={{ marginLeft: "5px", fontSize: "1.2rem" }}>
            %
          </span>
        </div>
        <div className="input-container-box">
          <input type="number" value={depthUpperBound} />
          <span style={{ marginLeft: "5px", fontSize: "1.2rem" }}>
            %
          </span>
        </div>
      </div>
    </FilterItemBox>
  );
}
