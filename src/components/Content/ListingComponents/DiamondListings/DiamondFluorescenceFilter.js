import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { FilterItemBox } from "../style";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default function DiamondFluorescenceFilter() {
  const [fluorescenceLowerBound, setFluorescenceLowerBound] = useState(0);
  const [fluorescenceUpperBound, setFluorescenceUpperBound] = useState(4);
  const [fluorescenceRange, setFluorescenceRange] = useState([0, 4]);
  const location = useLocation();
  const history = useHistory();

  // const onFluorescenceLowerBoundChange = (e) => {
  //   setFluorescenceLowerBound(e.target.value);
  //   onFluorescenceHandleApply();
  // };

  // const onFluorescenceUpperBoundChange = (e) => {
  //   setFluorescenceUpperBound(e.target.value);
  //   onFluorescenceHandleApply();
  // };

  const onFluorescenceSliderChange = (fluorescenceRange) => {
    setFluorescenceRange(fluorescenceRange);
    setFluorescenceLowerBound(fluorescenceRange[0]);
    setFluorescenceUpperBound(fluorescenceRange[1]);
  };

  // const onFluorescenceHandleApply = () => {
  //   setFluorescenceRange([fluorescenceLowerBound, fluorescenceUpperBound]);
  // };

  const onHandleHoldAndUp = (lowerFluorescence, upperFluorescence) => {
    const parsed = queryString.parse(location.search);
    parsed.fluorescenceFrom = lowerFluorescence;
    parsed.fluorescenceTo = upperFluorescence;
    const stringified = queryString.stringify(parsed);
    location.search = stringified;
    history.push(`?${location.search}`);
  };

  const marks = {
    1: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-12.8%",
        width: "25%",
      },
      label: "None",
    },
    2: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-12.8%",
        width: "25%",
      },
      label: "Faint",
    },
    3: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-12.8%",
        width: "25%",
      },
      label: "Medium",
    },
    4: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-12.8%",
        width: "25%",
      },
      label: "Strong",
    },
  };

  // const labelArrayObject = [
  //   {
  //     fluorescenceEquivalent: 1,
  //     label: "Fair",
  //   },
  //   {
  //     fluorescenceEquivalent: 2,
  //     label: "Good",
  //   },
  //   {
  //     fluorescenceEquivalent: 3,
  //     label: "Very Good",
  //   },
  //   {
  //     fluorescenceEquivalent: 4,
  //     label: "Excellent",
  //   },
  // ];

  return (
    <FilterItemBox>
      <Range
        min={0}
        max={4}
        step={1}
        marks={marks}
        value={fluorescenceRange}
        onChange={onFluorescenceSliderChange}
        onAfterChange={() =>
          onHandleHoldAndUp(fluorescenceLowerBound, fluorescenceUpperBound)
        }
        // tipFormatter={value => `${labelArrayObject.find((item,index)=> item.fluorescenceEquivalent === value).label}`}
        trackStyle={[{ backgroundColor: "rgba(30,46,76)", height: "5px" }]}
        railStyle={{ backgroundColor: "rgba(30,46,76,0.5)", height: "5px" }}
        handleStyle={{ width: "25px", height: "25px", bottom: -5.5 }}
        dotStyle={{
          bottom: -5.5,
          backgroundFluorescence: "white",
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
