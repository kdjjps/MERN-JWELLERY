import React, { useState, useRef, useEffect } from "react";
import { ListingPageBox } from "../style";
import DiamondListings from "./DiamondListings";
import FancyDiamondListings from "./FancyDiamondListings";
import DiamondDetailsPage from "./DiamondDetailsPage";
import ViewOnHand from "../../ViewOnHand/ViewOnHand";
import queryString from "query-string";
import { Route, Switch, useRouteMatch, useLocation } from "react-router-dom";
import {
  fetchDiamondData
} from "../../../../store/actions/diamondActions";
import { useDispatch, useSelector } from "react-redux";
import { checkForDefaultCookies } from "../../../../helper/checkForDefaultCookies";
import { useCookies } from "react-cookie";
import { loadingCompleted } from "../../../../store/actions/loadingActions";

export default function DiamondPage({isMasterAllSet}) {

  const { path } = useRouteMatch();
  const slider = useRef(null);
  const caratSlider = useRef(null);
  const nfObject = new Intl.NumberFormat("en-US");
  const [cookies, setCookie] = useCookies()
  const { search } = useLocation();
  const filter = queryString.parse(search);
  const { name } = filter;

  const [shape, setShape] = useState("");
  const [ifSettingHasDiamondShape, setIfSettingHasDiamondShape] =
    useState(null);
  const [isAllSet, setIsAllSet] = useState(false)
  const [isError, setIsError] = useState(false)
  const [viewOnHandStatus, setViewOnHandStatus] = useState(false);
  const [stoneNumber, setStoneNumber] = useState(0);
  const [caratNumber, setCaratNumber] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const data = useSelector(state => state)
  const dispatch = useDispatch();

  const handleViewHandModal = (stoneName, slider, caratSlider, carat) => {
    if (viewOnHandStatus === false) {
      let availableCaratArray = [
        0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.5, 3.0,
      ];
      let upperExtreme, lowerExtreme, caratNumber;

      for (var i = 0; i < availableCaratArray.length; i++) {
        if (availableCaratArray[i] >= carat) {
          upperExtreme = i;
          lowerExtreme = i - 1;
          break;
        }
      }

      let upperExtremeDiff = availableCaratArray[upperExtreme] - carat;
      let lowerExtremeDiff = -(availableCaratArray[lowerExtreme] - carat);

      if (upperExtremeDiff <= 0.1) {
        setCaratNumber(upperExtreme);
        caratNumber = upperExtreme;
      } else {
        setCaratNumber(lowerExtreme);
        caratNumber = lowerExtreme;
      }

      switch (stoneName) {
        case "round":
          setStoneNumber(0);
          slider.current.slickGoTo(0);
          caratSlider.current.slickGoTo(caratNumber);
          break;
        case "emerald":
          setStoneNumber(7);
          slider.current.slickGoTo(7);
          caratSlider.current.slickGoTo(caratNumber);
          break;
        case "pear":
          setStoneNumber(3);
          slider.current.slickGoTo(3);
          caratSlider.current.slickGoTo(caratNumber);
          break;
        case "cushion":
          setStoneNumber(8);
          slider.current.slickGoTo(8);
          caratSlider.current.slickGoTo(caratNumber);
          break;
        case "marquise":
          setStoneNumber(5);
          slider.current.slickGoTo(5);
          caratSlider.current.slickGoTo(caratNumber);
          break;
        case "heart":
          setStoneNumber(6);
          slider.current.slickGoTo(6);
          caratSlider.current.slickGoTo(caratNumber);
          break;
        case "asscher":
          setStoneNumber(9);
          slider.current.slickGoTo(9);
          caratSlider.current.slickGoTo(caratNumber);
          break;
        case "radiant":
          setStoneNumber(1);
          slider.current.slickGoTo(1);
          caratSlider.current.slickGoTo(caratNumber);
          break;
        case "princess":
          setStoneNumber(2);
          slider.current.slickGoTo(2);
          caratSlider.current.slickGoTo(caratNumber);
          break;
        case "oval":
          setStoneNumber(4);
          slider.current.slickGoTo(4);
          caratSlider.current.slickGoTo(caratNumber);
          break;
        default:
          setStoneNumber(0);
          caratSlider.current.slickGoTo(0);
          break;
      }

      setViewOnHandStatus(true);
      setScrollY(window.scrollY);
      document.body.setAttribute(
        "style",
        `position: fixed; top: ${window.scrollY}; left: 0; background: rgba(0,0,0,0.5) `
      );
    } else {
      setViewOnHandStatus(false);
      document.body.setAttribute("style", ``);
      window.scrollTo(0, scrollY);
    }
  };

  const findRingCategory = (number) => {
    switch (number) {
      case "1":
        return "delicacy";
      case "2":
        return "luna";
      case "3":
        return "1477 classic";
      case "4":
        return "hanover";
      case "5":
        return "ballerina";
      case "6":
        return "iris";
      case "7":
        return "ascot";
    }
  };

  const findNecklaceCategory = (number) => {
    switch (number) {
      case "1":
        return "necklace-one";
      case "2":
        return "necklace-two";
      case "3":
        return "necklace-three";
      case "4":
        return "necklace-four";
      case "5":
        return "necklace-five";
      case "6":
        return "necklace-six";
    }
  };

  const findStudCategory = (number) => {
    switch (number) {
      case "1":
        return "stud-one";
      case "2":
        return "stud-two";
      case "3":
        return "stud-three";
    }
  };

  useEffect(() => {
    if (path === '/diamonds'){
      checkForDefaultCookies(cookies, setCookie)
      .then(()=>{
        return dispatch(fetchDiamondData(filter))
      })
      .then((apiResponse) => {
        setIsAllSet(true)
        dispatch(loadingCompleted())
      })
      .catch(err => {
        console.log('Error in diamond api')
        console.log(err)
        setIsAllSet(true)
        setIsError(true)
      })
    }
  },[]);

  return (
    <ListingPageBox>
        <Switch>
          <Route
            exact
            path={`${path}`}
            render={(props) => (
              <DiamondListings
                {...props}
                nfObject={nfObject}
                handleViewHandModal={handleViewHandModal}
                slider={slider}
                caratSlider={caratSlider}
                isAllSet={isAllSet}
                isMasterAllSet={isMasterAllSet}
                isError={isError}
              />
            )}
          />
          <Route
            exact
            path={`${path}/fancy`}
            render={(props) => (
              <FancyDiamondListings
                {...props}
                nfObject={nfObject}
                handleViewHandModal={handleViewHandModal}
                slider={slider}
                caratSlider={caratSlider}
                isAllSet={isAllSet}
                isMasterAllSet={isMasterAllSet}
                isError={isError}
              />
            )}
          />
          <Route
            exact
            path={`${path}/:diamondId`}
            render={(props) => (
              <DiamondDetailsPage
                {...props}
                nfObject={nfObject}
                handleViewHandModal={handleViewHandModal}
                slider={slider}
                caratSlider={caratSlider}
              />
            )}
          />
          <Route
            exact
            path={`${path}/fancy/:diamondId`}
            render={(props) => (
              <DiamondDetailsPage
                {...props}
                nfObject={nfObject}
              />
            )}
          />
        </Switch>
        <ViewOnHand
          handleViewHandModal={handleViewHandModal}
          status={viewOnHandStatus}
          stoneNumber={stoneNumber}
          setStoneNumber={setStoneNumber}
          slider={slider}
          caratSlider={caratSlider}
          caratNumber={caratNumber}
        />
    </ListingPageBox>
  )
}
