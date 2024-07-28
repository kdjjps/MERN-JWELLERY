import React, {useState, useEffect} from "react";
import { FilterItemBox } from "../style";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useSelector, useDispatch } from "react-redux";
import {
  filterDiamondData,
  addFilteredData,
} from "../../../../store/actions/diamondActions";

export default function DiamondCertFilter() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();

  const location = useLocation();

  const { search } = useLocation();

  const filter = queryString.parse(search);
  const {lab} = filter
  
  const handleCertChange = (lab) => {
    const parsed = queryString.parse(location.search);
    parsed.lab = lab;
    const stringified = queryString.stringify(parsed);
    location.search = stringified;
    history.push(`?${location.search}`);
    let filteredData = filterDiamondData(data.diamondReducer.unfilteredDiamondArray, {
      ...filter,
      lab: lab,
    });
    dispatch(addFilteredData(filteredData));
  };


  return (
    <FilterItemBox lab={lab}>
      <section className="certificate-row">
        <div
          className="certificate-box"
          onClick={() => handleCertChange("GIA")}
        >
          GIA
        </div>
        <div
          className="certificate-box"
          onClick={() => handleCertChange("AGS")}
        >
          AGS
        </div>
        <div
          className="certificate-box"
          onClick={() => handleCertChange("EGL")}
        >
          EGL
        </div>
        <div
          className="certificate-box"
          onClick={() => handleCertChange("IGI")}
        >
          IGI
        </div>
        <div
          className="certificate-box"
          onClick={() => handleCertChange("HRD")}
        >
          HRD
        </div>
      </section>
    </FilterItemBox>
  );
}
