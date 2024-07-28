import React from "react";
import { FilterItemBox } from "../style";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { useSelector, useDispatch } from "react-redux";
// import {
//   filterDiamondData,
//   addFilteredData,
// } from "../../../../store/actions/diamondActions";

export default function DiamondShapeFilter({ filterStatus, setShape }) {
  // const data = useSelector((state) => state);
  // const dispatch = useDispatch();

  const { search } = useLocation();
  const filter = queryString.parse(search);
  const { name } = filter;

  // const history = useHistory();

  const changeShape = (e) => {
    // setShape(e.currentTarget.id)
    // history.push(`?name=${e.currentTarget.id}`);
    window.location = `?name=${e.currentTarget.id}`;

    // let filteredData = filterDiamondData(data.diamondReducer.unfilteredDiamondArray, {
    //   ...filter,
    //   name: e.currentTarget.id,
    // });
    // dispatch(addFilteredData(filteredData));
  };

  return (
    <FilterItemBox shape={name}>
      <div className="diamond-shape-row">
        <div
          disabled={true}
          onClick={changeShape}
          className="tooltip"
          id="round"
        >
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_round.png"
            alt="diamond-shape-1"
          />
          <div className="tooltip-text">
            <p>Round</p>
            <div className="triangle-down"></div>
          </div>
        </div>
        <div
          disabled={filterStatus}
          onClick={changeShape}
          className="tooltip"
          id="emerald"
        >
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_emerald.png"
            alt="diamond-shape-3"
          />
          <div className="tooltip-text">
            <p>Emerald</p>
            <div className="triangle-down"></div>
          </div>
        </div>
        <div
          disabled={filterStatus}
          onClick={changeShape}
          className="tooltip"
          id="marquise"
        >
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_marquise.png"
            alt="diamond-shape-5"
          />
          <div className="tooltip-text">
            <p>Marquise</p>
            <div className="triangle-down"></div>
          </div>
        </div>
        <div
          disabled={filterStatus}
          onClick={changeShape}
          className="tooltip"
          id="cushion"
        >
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_cushion.png"
            alt="diamond-shape-2"
          />
          <div className="tooltip-text">
            <p>Cushion</p>
            <div className="triangle-down"></div>
          </div>
        </div>
        <div
          disabled={filterStatus}
          onClick={changeShape}
          className="tooltip"
          id="heart"
        >
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_heart.png"
            alt="diamond-shape-4"
          />
          <div className="tooltip-text">
            <p>Heart</p>
            <div className="triangle-down"></div>
          </div>
        </div>
        <div
          disabled={filterStatus}
          onClick={changeShape}
          className="tooltip"
          id="oval"
        >
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_oval.png"
            alt="diamond-shape-6"
          />
          <div className="tooltip-text">
            <p>Oval</p>
            <div className="triangle-down"></div>
          </div>
        </div>
        <div
          disabled={filterStatus}
          onClick={changeShape}
          className="tooltip"
          id="pear"
        >
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_pear.png"
            alt="diamond-shape-7"
          />
          <div className="tooltip-text">
            <p>Pear</p>
            <div className="triangle-down"></div>
          </div>
        </div>
        <div
          disabled={filterStatus}
          onClick={changeShape}
          className="tooltip"
          id="princess"
        >
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_princess.png"
            alt="diamond-shape-8"
          />
          <div className="tooltip-text">
            <p>Princess</p>
            <div className="triangle-down"></div>
          </div>
        </div>
        <div
          disabled={filterStatus}
          onClick={changeShape}
          className="tooltip"
          id="asscher"
        >
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_asscher.png"
            alt="diamond-shape-9"
          />
          <div className="tooltip-text">
            <p>Asscher</p>
            <div className="triangle-down"></div>
          </div>
        </div>
        <div
          disabled={filterStatus}
          onClick={changeShape}
          className="tooltip"
          id="radiant"
        >
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_radiant.png"
            alt="diamond-shape-9"
          />
          <div className="tooltip-text">
            <p>Radiant</p>
            <div className="triangle-down"></div>
          </div>
        </div>
      </div>
    </FilterItemBox>
  );
}
