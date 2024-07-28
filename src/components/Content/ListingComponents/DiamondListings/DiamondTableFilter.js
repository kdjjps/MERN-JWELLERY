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

export default function DiamondTableFilter() {
  const [tableLowerBound, setTableLowerBound] = useState(50);
  const [tableUpperBound, setTableUpperBound] = useState(80);
  const [tableRange, setTableRange] = useState([50, 80]);

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();

  const location = useLocation();

  const { search } = useLocation();

  const filter = queryString.parse(search);
  const {tableFrom, tableTo}= filter

  const onTableLowerBoundChange = (e) => {
    setTableLowerBound(e.target.value);
    onTableHandleApply();
  };

  const onTableUpperBoundChange = (e) => {
    setTableUpperBound(e.target.value);
    onTableHandleApply();
  };

  const onTableSliderChange = (tableRange) => {
    setTableRange(tableRange);
    setTableLowerBound(tableRange[0]);
    setTableUpperBound(tableRange[1]);
  };

  const onTableHandleApply = () => {
    setTableRange([tableLowerBound, tableUpperBound]);
  };

  const handleTablePerChange = (lowerTablePer, upperTablePer) => {
    const parsed = queryString.parse(location.search);
    parsed.tableFrom = lowerTablePer;
    parsed.tableTo = upperTablePer;
    const stringified = queryString.stringify(parsed);
    location.search = stringified;
    history.push(`?${location.search}`);
    let filteredData = filterDiamondData(data.diamondReducer.unfilteredDiamondArray, {
      ...filter,
      tableFrom: lowerTablePer,
      tableTo: upperTablePer,
    });
    dispatch(addFilteredData(filteredData));
  };

  useEffect(() => {
    if (tableFrom && tableTo !== undefined){
      onTableSliderChange([tableFrom, tableTo])
    }
  }, [])
  
  return (
    <FilterItemBox>
      <Range
        min={50}
        max={80}
        step={1}
        value={tableRange}
        onChange={onTableSliderChange}
        onAfterChange={() =>
          handleTablePerChange(tableLowerBound, tableUpperBound)
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
          <input type="number" value={tableLowerBound} />
          <span style={{ marginLeft: "5px", fontSize: "1.2rem" }}>
            %
          </span>
        </div>
        <div className="input-container-box">
          <input type="number" value={tableUpperBound} />
          <span style={{ marginLeft: "5px", fontSize: "1.2rem" }}>
            %
          </span>
        </div>
      </div>
    </FilterItemBox>
  );
}
