import React, { useState, useEffect } from "react";
import { Range } from "rc-slider";
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

export default function DiamondColorFilter({ filterStatus }) {
  const [colorLowerBound, setColorLowerBound] = useState(0);
  const [colorUpperBound, setColorUpperBound] = useState(10);
  const [colorRange, setColorRange] = useState([0, 10]);

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();

  const location = useLocation();

  const { search } = useLocation();

  const filter = queryString.parse(search);
  const {colorFrom, colorTo} = filter

  const onColorLowerBoundChange = (e) => {
    setColorLowerBound(e.target.value);
    onColorHandleApply();
  };

  const onColorUpperBoundChange = (e) => {
    setColorUpperBound(e.target.value);
    onColorHandleApply();
  };

  const onColorSliderChange = (colorRange) => {
    setColorRange(colorRange);
    setColorLowerBound(colorRange[0]);
    setColorUpperBound(colorRange[1]);
  };

  const onColorHandleApply = () => {
    setColorRange([colorLowerBound, colorUpperBound]);
  };

  const onHandleHoldAndUp = (lowerColor, upperColor) => {
    const parsed = queryString.parse(location.search);
    parsed.colorFrom = reverseGetEquivalent('color', lowerColor);
    parsed.colorTo = reverseGetEquivalent('color', upperColor);
    const stringified = queryString.stringify(parsed);
    location.search = stringified;
    history.push(`?${location.search}`);
    let filteredData = filterDiamondData(data.diamondReducer.unfilteredDiamondArray, {
      ...filter,
      colorFrom: reverseGetEquivalent('color', lowerColor),
      colorTo: reverseGetEquivalent('color', upperColor)
    });
    dispatch(addFilteredData(filteredData));
  };

  const marks = {
    1: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-4.8%",
        width: "10%",
      },
      label: "M",
    },
    2: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-4.8%",
        width: "10%",
      },
      label: "L",
    },
    3: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-4.8%",
        width: "10%",
      },
      label: "K",
    },
    4: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-4.8%",
        width: "10%",
      },
      label: "J",
    },
    5: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-4.8%",
        width: "10%",
      },
      label: "I",
    },
    6: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-4.8%",
        width: "10%",
      },
      label: "H",
    },
    7: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-4.8%",
        width: "10%",
      },
      label: "G",
    },
    8: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-4.8%",
        width: "10%",
      },
      label: "F",
    },
    9: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-4.8%",
        width: "10%",
      },
      label: "E",
    },
    10: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-4.8%",
        width: "10%",
      },
      label: "D",
    },
  };

  useEffect(() => {
    
    if (colorFrom && colorTo !== undefined){
      const colorFromValue = getEquivalent('color', colorFrom)
      const colorToValue = getEquivalent('color', colorTo)
      onColorSliderChange([colorFromValue, colorToValue])
    }

  },[])

  return (
    <FilterItemBox>
      <Range
        disabled={filterStatus}
        min={0}
        max={10}
        step={1}
        marks={marks}
        value={colorRange}
        allowCross={false}
        pushable={1}
        onChange={onColorSliderChange}
        onAfterChange={() =>
          onHandleHoldAndUp(colorLowerBound, colorUpperBound)
        }
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
