import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import queryString from "query-string";
import { useLocation, useHistory } from "react-router-dom";
import { reverseGetEquivalent, getEquivalent } from "../../../../helper/getEquivalent";
import { FilterItemBox } from "../style";
import { useSelector, useDispatch } from "react-redux";
import {
  filterDiamondData,
  addFilteredData,
} from "../../../../store/actions/diamondActions";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default function DiamondClarityFilter({ filterStatus }) {
  const [clarityLowerBound, setCaratLowerBound] = useState(0);
  const [clarityUpperBound, setCaratUpperBound] = useState(10);
  const [clarityRange, setCaratRange] = useState([0, 10]);

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const location = useLocation();

  const history = useHistory();

  const { search } = useLocation();

  const filter = queryString.parse(search);
  const {clarityFrom, clarityTo} = filter

  const onCaratLowerBoundChange = (e) => {
    setCaratLowerBound(e.target.value);
    onCaratHandleApply();
  };

  const onCaratUpperBoundChange = (e) => {
    setCaratUpperBound(e.target.value);
    onCaratHandleApply();
  };

  const onCaratSliderChange = (clarityRange) => {
    setCaratRange(clarityRange);
    setCaratLowerBound(clarityRange[0]);
    setCaratUpperBound(clarityRange[1]);
  };

  const onCaratHandleApply = () => {
    setCaratRange([clarityLowerBound, clarityUpperBound]);
  };

  const onHandleHoldAndUp = (lowerClarity, upperClarity) => {
    const parsed = queryString.parse(location.search);
    parsed.clarityFrom = reverseGetEquivalent("clarity", lowerClarity);
    parsed.clarityTo = reverseGetEquivalent("clarity", upperClarity);
    const stringified = queryString.stringify(parsed);
    location.search = stringified;
    history.push(`?${location.search}`);
    let filteredData = filterDiamondData(data.diamondReducer.unfilteredDiamondArray, {
      ...filter,
      clarityFrom: reverseGetEquivalent("clarity", lowerClarity),
      clarityTo: reverseGetEquivalent("clarity", upperClarity),
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
      label: "I1",
    },
    2: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-4.8%",
        width: "10%",
      },
      label: "SI3",
    },
    3: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-4.8%",
        width: "10%",
      },
      label: "SI2",
    },
    4: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-4.8%",
        width: "10%",
      },
      label: "SI1",
    },
    5: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-4.8%",
        width: "10%",
      },
      label: "VS2",
    },
    6: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-4.8%",
        width: "10%",
      },
      label: "VS1",
    },
    7: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-4.8%",
        width: "10%",
      },
      label: "VVS2",
    },
    8: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-4.8%",
        width: "10%",
      },
      label: "VVS1",
    },
    9: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-4.8%",
        width: "10%",
      },
      label: "IF",
    },
    10: {
      style: {
        top: "5px",
        fontSize: "1.3rem",
        marginLeft: "-4.8%",
        width: "10%",
      },
      label: "FL",
    },
  };

  useEffect(() => {
    
    if (clarityFrom && clarityTo !== undefined){
      const clarityFromValue = getEquivalent('clarity', clarityFrom)
      const clarityToValue = getEquivalent('clarity', clarityTo)
      onCaratSliderChange([clarityFromValue, clarityToValue])
    }

  },[])

  return (
    <FilterItemBox>
      <Range
        disabled={filterStatus}
        step={1}
        min={0}
        max={10}
        marks={marks}
        allowCross={false}
        pushable={1}
        value={clarityRange}
        onChange={onCaratSliderChange}
        onAfterChange={() =>
          onHandleHoldAndUp(clarityLowerBound, clarityUpperBound)
        }
        // tipFormatter={value => `${labelArrayObject.find((item, index)=> item.labelValue === value).label}`}
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
    </FilterItemBox>
  );
}
