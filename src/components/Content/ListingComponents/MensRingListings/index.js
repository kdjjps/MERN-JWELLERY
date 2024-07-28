import React, { useEffect, useState } from "react";
import { ListingPageBox } from "../style";
import MensRingListings from "./MensRingListings";
import MensRingDetails from "./MensRingDetails";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { fetchJewelryData } from "../../../../store/actions/jewelryActions";
import { checkForDefaultCookies } from "../../../../helper/checkForDefaultCookies";

export default function MensRingPage() {
  const { path } = useRouteMatch();
  const [cookies, setCookie] = useCookies();

  const [isAllSet, setIsAllSet] = useState(false);

  const getTotalRingPrice = (weight, makingCharge, diamondPrice) => {
    return parseInt(
      cookies.exchangeRate[cookies.currencyCode] *
        (weight * makingCharge +
          weight * cookies.goldPrice["18KT"] +
          parseInt(diamondPrice / 74))
    );
  };

  const dispatch = useDispatch();

  useEffect(() => {
    checkForDefaultCookies(cookies, setCookie)
      .then(() => {
        return dispatch(fetchJewelryData("mensRings"));
      })
      .then((response) => {
        setIsAllSet(true);
      });
    return () => {};
  }, []);

  return (
    <ListingPageBox>
      <Switch>
        <Route
          exact
          path={`${path}/`}
          render={(props) => (
            <MensRingListings
              {...props}
              getTotalRingPrice={getTotalRingPrice}
              isAllSet={isAllSet}
            />
          )}
        />
        <Route
          exact
          path={`${path}/:mensRingId`}
          render={(props) => (
            <MensRingDetails
              {...props}
              getTotalRingPrice={getTotalRingPrice}
              isAllSet={isAllSet}
            />
          )}
        />
      </Switch>
    </ListingPageBox>
  );
}
