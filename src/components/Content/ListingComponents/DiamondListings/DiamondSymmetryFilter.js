import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useLocation, useHistory } from "react-router-dom";
import { reverseGetEquivalent, getEquivalent } from "../../../../helper/getEquivalent";
import queryString from "query-string";
import { FilterItemBox } from "../style";
import { useSelector, useDispatch } from "react-redux";
import {
  filterDiamondData,
  addFilteredData,
} from "../../../../store/actions/diamondActions";

const Range = Slider.Range;

export default function DiamondSymmetryFilter() {
  const [symmetryLowerBound, setSymmetryLowerBound] = useState(0);
  const [symmetryUpperBound, setSymmetryUpperBound] = useState(4);
  const [symmetryRange, setSymmetryRange] = useState([0, 4]);

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();

  const location = useLocation();

  const { search } = useLocation();

  const filter = queryString.parse(search);
  const {symmetryFrom, symmetryTo} = filter

  const onSymmetryLowerBoundChange = (e) => {
    setSymmetryLowerBound(e.target.value);
    onSymmetryHandleApply();
  };

  const onSymmetryUpperBoundChange = (e) => {
    setSymmetryUpperBound(e.target.value);
    onSymmetryHandleApply();
  };

  const onSymmetrySliderChange = (symmetryRange) => {
    setSymmetryRange(symmetryRange);
    setSymmetryLowerBound(symmetryRange[0]);
    setSymmetryUpperBound(symmetryRange[1]);
  };

  const onSymmetryHandleApply = () => {
    setSymmetryRange([symmetryLowerBound, symmetryUpperBound]);
  };

  const onHandleHoldAndUp = (lowerSymmetry, upperSymmetry) => {
    const parsed = queryString.parse(location.search);
    parsed.symmetryFrom = reverseGetEquivalent('symmetry', lowerSymmetry);
    parsed.symmetryTo = reverseGetEquivalent('symmetry', upperSymmetry);
    const stringified = queryString.stringify(parsed);
    location.search = stringified;
    history.push(`?${location.search}`);
    let filteredData = filterDiamondData(data.diamondReducer.unfilteredDiamondArray, {
      ...filter,
      symmetryFrom: reverseGetEquivalent('symmetry', lowerSymmetry),
      symmetryTo: reverseGetEquivalent('symmetry', upperSymmetry),
    });
    dispatch(addFilteredData(filteredData));
  };

  const marks = {
    1: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-12.8%",
        width: "25%",
      },
      label: "Fair",
    },
    2: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-12.8%",
        width: "25%",
      },
      label: "Good",
    },
    3: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-12.8%",
        width: "25%",
      },
      label: "Very Good",
    },
    4: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-12.8%",
        width: "25%",
      },
      label: "Excellent",
    },
  };

  useEffect(() => {

    if (symmetryFrom && symmetryTo !== undefined){
      const symmetryFromValue = getEquivalent('symmetry', symmetryFrom)
      const symmetryToValue= getEquivalent('symmetry', symmetryTo)
      onSymmetrySliderChange([symmetryFromValue,symmetryToValue])
    }

  },[])

  return (
    <FilterItemBox>
      <Range
        min={0}
        max={4}
        step={1}
        marks={marks}
        value={symmetryRange}
        onChange={onSymmetrySliderChange}
        onAfterChange={() =>
          onHandleHoldAndUp(symmetryLowerBound, symmetryUpperBound)
        }
        trackStyle={[{ backgroundColor: "rgba(30,46,76)", height: "5px" }]}
        railStyle={{ backgroundColor: "rgba(30,46,76,0.5)", height: "5px" }}
        handleStyle={[
          { width: "25px", height: "25px", bottom: -5.5, cursor: "pointer" },
          { width: "25px", height: "25px", bottom: -5.5, cursor: "pointer" },
        ]}
        dotStyle={{
          bottom: -5.5,
          backgroundSymmetry: "white",
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
