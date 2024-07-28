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

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default function DiamondPolishFilter() {
  const [polishLowerBound, setPolishLowerBound] = useState(0);
  const [polishUpperBound, setPolishUpperBound] = useState(4);
  const [polishRange, setPolishRange] = useState([0, 4]);

  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  
  const location = useLocation();
  const history = useHistory();

  const { search } = useLocation();

  const filter = queryString.parse(search);
  const {polishFrom, polishTo} = filter

  // const onPolishLowerBoundChange = (e) => {
  //   setPolishLowerBound(e.target.value);
  //   onPolishHandleApply();
  // };

  // const onPolishUpperBoundChange = (e) => {
  //   setPolishUpperBound(e.target.value);
  //   onPolishHandleApply();
  // };

  const onPolishSliderChange = (polishRange) => {
    setPolishRange(polishRange);
    setPolishLowerBound(polishRange[0]);
    setPolishUpperBound(polishRange[1]);
  };

  const onPolishHandleApply = () => {
    setPolishRange([polishLowerBound, polishUpperBound]);
  };

  const onHandleHoldAndUp = (lowerPolish, upperPolish) => {
    const parsed = queryString.parse(location.search);
    parsed.polishFrom = reverseGetEquivalent('polish', lowerPolish);
    parsed.polishTo = reverseGetEquivalent('polish', upperPolish);
    const stringified = queryString.stringify(parsed);
    location.search = stringified;
    history.push(`?${location.search}`);
    let filteredData = filterDiamondData(data.diamondReducer.unfilteredDiamondArray, {
      ...filter,
      polishFrom: reverseGetEquivalent('polish', lowerPolish),
      polishTo: reverseGetEquivalent('polish', upperPolish),
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

    if (polishFrom && polishTo !== undefined){
      const polishFromValue = getEquivalent('polish', polishFrom)
      const polishToValue = getEquivalent('polish', polishTo)
      onPolishSliderChange([polishFromValue, polishToValue])
    }

  },[])

  return (
    <FilterItemBox>
      <Range
        min={0}
        max={4}
        step={1}
        marks={marks}
        value={polishRange}
        onChange={onPolishSliderChange}
        onAfterChange={() =>
          onHandleHoldAndUp(polishLowerBound, polishUpperBound)
        }
        // tipFormatter={value => `${labelArrayObject.find((item,index)=> item.polishEquivalent === value).label}`}
        trackStyle={[{ backgroundColor: "rgba(30,46,76)", height: "5px" }]}
        railStyle={{ backgroundColor: "rgba(30,46,76,0.5)", height: "5px" }}
        handleStyle={{ width: "25px", height: "25px", bottom: -5.5 }}
        dotStyle={{
          bottom: -5.5,
          backgroundPolish: "white",
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