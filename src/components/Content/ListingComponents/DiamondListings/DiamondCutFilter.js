import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import queryString from "query-string";
import { useLocation, useHistory } from "react-router-dom";
import { FilterItemBox } from "../style";
import { useSelector, useDispatch } from "react-redux";
import {
  filterDiamondData,
  addFilteredData,
} from "../../../../store/actions/diamondActions";

const Range = Slider.Range;

export default function DiamondCutFilter({ filterStatus }) {
  const [cutLowerBound, setCutLowerBound] = useState(0);
  const [cutUpperBound, setCutUpperBound] = useState(4);
  const [cutRange, setCutRange] = useState([0, 4]);

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const location = useLocation();

  const history = useHistory();

  const { search } = useLocation();

  const filter = queryString.parse(search);

  const onCutLowerBoundChange = (e) => {
    setCutLowerBound(e.target.value);
    onCutHandleApply();
  };

  const onCutUpperBoundChange = (e) => {
    setCutUpperBound(e.target.value);
    onCutHandleApply();
  };

  const onCutSliderChange = (cutRange) => {
    setCutRange(cutRange);
    setCutLowerBound(cutRange[0]);
    setCutUpperBound(cutRange[1]);
  };

  const onCutHandleApply = () => {
    setCutRange([cutLowerBound, cutUpperBound]);
  };

  const onHandleHoldAndUp = (lowerCut, upperCut) => {
    const parsed = queryString.parse(location.search);
    parsed.cutFrom = lowerCut;
    parsed.cutTo = upperCut;
    const stringified = queryString.stringify(parsed);
    location.search = stringified;
    history.push(`?${location.search}`);
    let filteredData = filterDiamondData(data.diamondReducer.unfilteredDiamondArray, {
      ...filter,
      cutFrom: lowerCut,
      cutTo: upperCut,
    });
    dispatch(addFilteredData(filteredData));
  };

  const marks = {
    1: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-12.8%",
        width: "33%",
      },
      label: "Good",
    },
    2: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-12.8%",
        width: "33%",
      },
      label: "Very Good",
    },
    3: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-12.8%",
        width: "33%",
      },
      label: "Ideal",
    }
  };
  return (
    <FilterItemBox>
      <Range
        disabled={filterStatus}
        step={1}
        min={0}
        max={3}
        marks={marks}
        value={cutRange}
        allowCross={false}
        pushable={1}
        onChange={onCutSliderChange}
        onAfterChange={() => onHandleHoldAndUp(cutLowerBound, cutUpperBound)}
        trackStyle={[{ backgroundColor: "rgba(30,46,76)", height: "5px" }]}
        railStyle={{ backgroundColor: "rgba(30,46,76,0.5)", height: "5px" }}
        handleStyle={[
          { width: "25px", height: "25px", bottom: -5.5, cursor: "pointer" },
          { width: "25px", height: "25px", bottom: -5.5, cursor: "pointer" },
        ]}
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
    </FilterItemBox>
  );
}
