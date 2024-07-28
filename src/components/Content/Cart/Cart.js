import React, { useEffect, useState } from "react";
import { CartBox } from "./style";
import CartItem from "./CartItem";
import { useCookies } from "react-cookie";
import findCartTotalPrice from "../../../helper/findCartTotalPrice";
import { useSelector, useDispatch } from "react-redux";
import { checkForDefaultCookies } from "../../../helper/checkForDefaultCookies";
import {
  fetchDiamondData,
  findDiamond,
} from "../../../store/actions/diamondActions";
import {
  fetchJewelryData,
  findJewelry,
} from "../../../store/actions/jewelryActions";
import { removeItem } from "../../../store/actions/cartActions";
import Loader from "../Loader/Loader";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { loadingCompleted } from "../../../store/actions/loadingActions";

export default function CartProducts(props) {
  const [cookies, setCookie] = useCookies();
  const nfObject = new Intl.NumberFormat("en-US");
  const { search } = useLocation();
  const filter = queryString.parse(search);

  const [cartArray, setCartArray] = useState([]);
  const [isAllSet, setIsAllSet] = useState(false);

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const { cartItems, itemCount } = data.cartReducer;

  const { unfilteredDiamondArray } = data.diamondReducer;
  const {
    unfilteredSolitaireRingsArray,
    unfilteredSolitaireNecklacesArray,
    unfilteredSolitaireStudsArray,
    unfilteredFashionRingsArray,
    unfilteredDiamondPendantsArray,
    unfilteredAlphabetPendantsArray,
    unfilteredDiamondEarringsArray,
    unfilteredNosePinsArray,
    unfilteredMensChainsArray,
    unfilteredMensKadasArray,
    unfilteredMensBraceletsArray,
    unfilteredMensStudsArray,
    unfilteredMensRingsArray,
    unfilteredGemstonesArray,
    unfilteredGemstonesRingsArray,
    unfilteredGemstonesPendantsArray,
  } = data.jewelryReducer;

  const total = isAllSet
    ? findCartTotalPrice(
        cartItems,
        unfilteredDiamondArray,
        unfilteredSolitaireRingsArray,
        unfilteredSolitaireNecklacesArray,
        unfilteredSolitaireStudsArray,
        unfilteredMensRingsArray,
        unfilteredMensStudsArray,
        unfilteredMensKadasArray,
        unfilteredMensChainsArray,
        unfilteredMensBraceletsArray,
        unfilteredDiamondEarringsArray,
        unfilteredDiamondPendantsArray,
        unfilteredAlphabetPendantsArray,
        unfilteredFashionRingsArray,
        unfilteredNosePinsArray,
        unfilteredGemstonesArray,
        unfilteredGemstonesRingsArray,
        unfilteredGemstonesPendantsArray,
        findDiamond,
        findJewelry,
        cookies
      )
    : 0;

  useEffect(() => {
    setCartArray([...cartItems]);
  }, [itemCount]);

  const dispatchAll = () => {
    return Promise.all([
      dispatch(fetchDiamondData(filter)),
      dispatch(fetchJewelryData("solitaireRings")),
      dispatch(fetchJewelryData("solitaireNecklaces")),
      dispatch(fetchJewelryData("solitaireStuds")),
      dispatch(fetchJewelryData("fashionRings")),
      dispatch(fetchJewelryData("diamondPendants")),
      dispatch(fetchJewelryData("alphabetPendants")),
      dispatch(fetchJewelryData("diamondEarrings")),
      dispatch(fetchJewelryData("nosePins")),
      dispatch(fetchJewelryData("mensRings")),
      dispatch(fetchJewelryData("mensChains")),
      dispatch(fetchJewelryData("mensBracelets")),
      dispatch(fetchJewelryData("mensKadas")),
      dispatch(fetchJewelryData("gemstones")),
      dispatch(fetchJewelryData("gemRings")),
      dispatch(fetchJewelryData("gemPendants")),
    ]);
  };

  useEffect(() => {
    checkForDefaultCookies(cookies, setCookie)
      .then(() => {
        return dispatchAll();
      })
      .then((response) => {
        setIsAllSet(true);
        dispatch(loadingCompleted());
      });
  }, []);

  return isAllSet ? (
    cartArray.length > 0 ? (
      <CartBox>
        <div className="cart-items-holder">
          {cartArray.map((product, index) => (
            <CartItem
              key={index}
              cartItems={cartItems}
              itemCount={itemCount}
              product={product}
              unfilteredDiamondArray={unfilteredDiamondArray}
              findDiamond={findDiamond}
              unfilteredSolitaireRingsArray={unfilteredSolitaireRingsArray}
              unfilteredSolitaireNecklacesArray={
                unfilteredSolitaireNecklacesArray
              }
              unfilteredSolitaireStudsArray={unfilteredSolitaireStudsArray}
              unfilteredFashionRingsArray={unfilteredFashionRingsArray}
              unfilteredDiamondPendantsArray={unfilteredDiamondPendantsArray}
              unfilteredDiamondEarringsArray={unfilteredDiamondEarringsArray}
              unfilteredAlphabetPendantsArray={unfilteredAlphabetPendantsArray}
              unfilteredGemstonesArray={unfilteredGemstonesArray}
              unfilteredGemstonesRingsArray={unfilteredGemstonesRingsArray}
              unfilteredGemstonesPendantsArray={
                unfilteredGemstonesPendantsArray
              }
              unfilteredMensBraceletsArray={unfilteredMensBraceletsArray}
              unfilteredMensStudsArray={unfilteredMensStudsArray}
              unfilteredMensChainsArray={unfilteredMensChainsArray}
              unfilteredMensKadasArray={unfilteredMensKadasArray}
              unfilteredMensRingsArray={unfilteredMensRingsArray}
              unfilteredNosePinsArray={unfilteredNosePinsArray}
              findJewelry={findJewelry}
              removeItem={removeItem}
              nfObject={nfObject}
              isAllSet={isAllSet}
            />
          ))}
        </div>
        <div id="checkout-box">
          <h2 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>
            Order Summary
          </h2>
          <div className="row">
            <h2>Total Items</h2>
            <p>{itemCount}</p>
          </div>

          <div className="row">
            <h2>Subtotal</h2>
            <p>
              {cookies.currencyCode} {nfObject.format(total)}
            </p>
          </div>
          <div className="checkout-button">
            <a href="/checkout">Checkout</a>
          </div>
          <div className="payment-graphic">
            <p>We Accept</p>
            <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/mailer/payment.png" />
          </div>
        </div>
      </CartBox>
    ) : (
      <div className="empty-display">
        <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/misc/no-cart-product.png" />
        <h2>No item in your cart</h2>
      </div>
    )
  ) : (
    <Loader />
  );
}
