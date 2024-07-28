import React, { useState, useContext, useRef, useEffect } from "react";
import { CurrencyLookerBox } from "./style.js";
import { PriceContext } from "../../contexts/PriceContext";
import { useCookies } from "react-cookie";

export default function CurrencyLooker({ status }) {
  const currencySelectorRef = useRef();
  const {
    // userCurrency,
    onClickCurrencySetter,
    currencyArray,
    handleCurrencyArraySequence,
  } = useContext(PriceContext);
  const [expandListStatus, setExpandListStatus] = useState(false);
  const [cookies, setCookie] = useCookies();

  const handleChange = (currencyCode) => {
    onClickCurrencySetter(currencyCode);
    handleCurrencyArraySequence(currencyCode);
    setExpandListStatus(false);
  };

  const currencyList = currencyArray.map((item, index) => {
    return (
      <li onClick={() => handleChange(item.currencyCode)} key={index}>
        <img
          className="flag"
          width={"35px"}
          height={"21px"}
          src={`https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/maps/${item.imageText}.png`}
          alt={item.imageText}
        />
        <span>{item.currencyCode}</span>
      </li>
    );
  });

  useEffect(() => {
    if (cookies.currencyCode) {
      handleCurrencyArraySequence(cookies.currencyCode);
    } else {
      handleCurrencyArraySequence("USD");
    }
  }, []);

  return (
    <CurrencyLookerBox
      expandListStatus={expandListStatus}
      ref={currencySelectorRef}
    >
      <ul onClick={() => setExpandListStatus(!expandListStatus)}>
        {currencyList}
      </ul>
    </CurrencyLookerBox>
  );
}
