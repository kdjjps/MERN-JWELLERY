import React, { useState, useEffect } from "react";
import ShippingPageBox from "./style";
import USPBanner from "./../ListingComponents/USPBanner";
import Razorpay from "../Payment/Razorpay";
import Paypal from "../Payment/Paypal";
import CartItem from "../Cart/CartItem";
import findCartTotalPrice from "../../../helper/findCartTotalPrice";
import { useCookies } from "react-cookie";
import CountryService from "../../../services/countryService";
import checkDeliverDoableOrNot from "../../../helper/checkDeliveryDoableOrNot";
import { removeItem } from "../../../store/actions/cartActions";
import { Link } from "react-router-dom";
import OauthPage from "../Oauth";
import axios from "axios";
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
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import getTotalPrice from "../../../helper/getTotalPrice";
import getNewArrivalsTotalPrice from "../../../helper/getNewArrivalsTotalPrice";

export default function Shipping() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const { search } = useLocation();
  const filter = queryString.parse(search);

  const [isAllSet, setIsAllSet] = useState(false);
  const [cartArray, setCartArray] = useState([]);

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

  const [cartItemsPriceArray, setCartItemsPriceArray] = useState([]);
  const [shippingCharges, setShippingCharges] = useState(null);
  const [isBillingAddressDifferent, setIsBillingAddressDifferent] =
    useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cookies, setCookie] = useCookies();

  const cartTotal = isAllSet
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

  // Shipping Address Object
  const [shipperState, setShipperState] = useState({
    recepientEmail: "",
    recepientFname: "",
    recepientLname: "",
    recepientPhoneNumber: "",
    recepientAddressLine1: "",
    recepientAddressLine2: "",
    recepientPostCode: "",
    recepientCountryCode: "",
    recepientState: "",
    recepientCity: "",
  });

  // Billing Address Object
  const [billerState, setBillerState] = useState({
    billerEmail: "",
    billerFname: "",
    billerLname: "",
    billerPhoneNumber: "",
    billerAddressLine1: "",
    billerAddressLine2: "",
    billerCountryCode: "",
    billerPostCode: "",
    billerState: "",
    billerCity: "",
  });

  const [recepientErrorState, setRecepientErrorState] = useState({
    emailError: "",
    fnameError: "",
    lnameError: "",
    phoneNumberError: "",
    addressLine1Error: "",
    addressLine2Error: "",
    postCodeError: "",
    countryCodeError: "",
    stateError: "",
    cityError: "",
  });

  const [states, setStates] = useState([]);
  const [countries, setCountries] = useState([]);
  const [okToDeliver, setOkToDeliver] = useState(false);
  const nfObject = new Intl.NumberFormat("en-US");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onEmailChangeHandle = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChangeHandle = (e) => {
    setPassword(e.target.value);
  };

  const login = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Fields cannot be empty!");
    } else {
      const formData = new FormData(document.getElementById("login-form"));

      const email = formData.get("userEmail");
      const password = formData.get("userPassword");
      const token = formData.get("g-recaptcha-response");

      if (token.length == 0 || token == undefined) {
        setErrorMessage("Please finish captcha!");
      } else {
        try {
          const loginResponse = await axios.post("/user/login", {
            email,
            password,
            token,
          });
          if (loginResponse.data.success) {
            localStorage.setItem(
              "userToken",
              JSON.stringify(loginResponse.headers["authorization"])
            );
            setCookie("userName", loginResponse.data.responseData.fname, {
              path: "/",
            });
            setCookie("isSignedIn", true, { path: "/" });
            window.location = "/checkout";
          } else {
            setErrorMessage(loginResponse.data.messsage);
          }
        } catch (err) {
          console.error(err);
        }
      }
    }
  };

  const handleCountryChannge = (e) => {
    let recepientCountryCode = e.target.value;

    if (recepientCountryCode != "IN") {
      setShippingCharges(150);
    } else {
      setShippingCharges(0);
    }

    CountryService.getStates(e.target.value)
      .then((response) => {
        setShipperState({ ...shipperState, recepientCountryCode });
        setStates(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const countriesListArray = countries.map((item, index) => {
    return (
      <option value={item.iso2} key={index}>
        {item.name}
      </option>
    );
  });

  const statesListArray = states.map((item, index) => {
    return (
      <option value={item.iso2} key={index}>
        {item.name}
      </option>
    );
  });

  const onChangeShippingFormInput = (e) => {
    const value = e.target.value;
    setShipperState({
      ...shipperState,
      [e.target.id]: value,
    });
  };

  const onChangeBillingFormInput = (e) => {
    const value = e.target.value;
    setBillerState({
      ...billerState,
      [e.target.id]: value,
    });
  };

  const checkErrors = () => {
    let isError = false;

    let errors = {
      emailError: "",
      fnameError: "",
      lnameError: "",
      phoneNumberError: "",
      addressLine1Error: "",
      addressLine2Error: "",
      postCodeError: "",
      countryCodeError: "",
      stateError: "",
      cityError: "",
    };

    if (shipperState.recepientEmail.length === 0) {
      isError = true;
      errors.emailError = "Email cannot be empty";
    }

    if (shipperState.recepientFname.length === 0) {
      isError = true;
      errors.fnameError = "First name cannot be empty";
    }

    if (shipperState.recepientLname.length === 0) {
      isError = true;
      errors.lnameError = "Last Name cannot be empty";
    }

    if (shipperState.recepientPhoneNumber.length === 0) {
      isError = true;
      errors.phoneNumberError = "Phone number cannot be empty";
    }

    if (shipperState.recepientAddressLine1.length === 0) {
      isError = true;
      errors.addressLine1Error = "Address cannot be empty";
    }

    if (shipperState.recepientAddressLine2.length === 0) {
      isError = true;
      errors.addressLine2Error = "Address cannot be empty";
    }

    if (shipperState.recepientPostCode.length === 0) {
      isError = true;
      errors.postCodeError = "Post code cannot be empty";
    }

    if (shipperState.recepientCountryCode.length === 0) {
      isError = true;
      errors.countryCodeError = "Country cannot be empty";
    }

    if (shipperState.recepientCity.length === 0) {
      isError = true;
      errors.cityError = "City cannot be empty";
    }

    if (shipperState.recepientState.length === 0) {
      isError = true;
      errors.stateError = "State cannot be empty";
    }

    if (isError) {
      setRecepientErrorState({ ...recepientErrorState, ...errors });
    }

    return isError;
  };

  const onHandleProceed = () => {
    let errorStatus = checkErrors();

    if (errorStatus) {
      alert("Input Fields Cannot Be Empty");
    } else {
      let deliverableStatus = checkDeliverDoableOrNot(
        shipperState.recepientCountryCode,
        shipperState.recepientPostCode
      );

      if (deliverableStatus) {
        setOkToDeliver(true);
      } else {
        alert("Sorry, as of now, we dont deliver to your location!");
      }
    }
  };

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
    setCartArray([...cartItems]);
  }, [cartItems]);

  useEffect(() => {
    checkForDefaultCookies(cookies, setCookie)
      .then(() => {
        return dispatchAll();
      })
      .then(() => {
        setIsAllSet(true);
      });
  }, []);

  useEffect(() => {
    async function getCartPriceArray() {
      let cartItemPrice = 0;
      let dummyArray = [];

      for (var i = 0; i < cartItems.length; i++) {
        switch (cartItems[i].itemType) {
          case "loose-diamond":
            let diamondObject = await findDiamond(
              unfilteredDiamondArray,
              cartItems[i].diamondId
            );
            cartItemPrice = getTotalPrice(
              "loose-diamond",
              diamondObject,
              cookies
            );
            break;
          case "loose-gemstone":
            let gemstoneObject = await findJewelry(
              unfilteredGemstonesArray,
              cartItems[i].gemstoneId
            );
            cartItemPrice = getTotalPrice(
              "loose-gemstone",
              gemstoneObject,
              cookies,
              null,
              null,
              cartItems[i].weightIndex,
              null,
              cartItems[i].certificateIndex
            );
            break;
          case "gem-ring":
            let gemstoneRingObject = await findJewelry(
              unfilteredGemstonesRingsArray,
              cartItems[i].ringId
            );
            let gemstoneObjectForRing = await findJewelry(
              unfilteredGemstonesArray,
              cartItems[i].gemstoneId
            );
            cartItemPrice =
              getTotalPrice(
                "gem-ring",
                null,
                cookies,
                null,
                null,
                cartItems[i].ringMetal
              ) +
              getTotalPrice(
                "loose-gemstone",
                gemstoneObjectForRing,
                cookies,
                null,
                null,
                cartItems[i].gemstoneWeight,
                null,
                cartItems[i].gemstoneCertification
              );
            break;
          case "gem-pendant":
            let gemstonePendantObject = await findJewelry(
              unfilteredGemstonesPendantsArray,
              cartItems[i].pendantId
            );
            let gemstoneObjectForPendant = await findJewelry(
              unfilteredGemstonesArray,
              cartItems[i].gemstoneId
            );
            cartItemPrice =
              getTotalPrice(
                "gem-pendant",
                null,
                cookies,
                null,
                null,
                cartItems[i].pendantMetal
              ) +
              getTotalPrice(
                "loose-gemstone",
                gemstoneObjectForPendant,
                cookies,
                null,
                null,
                cartItems[i].gemstoneWeight,
                null,
                cartItems[i].gemstoneCertification
              );
            break;
          case "nose-pin":
            let nosePinObject = await findJewelry(
              unfilteredNosePinsArray,
              cartItems[i].pinId
            );
            cartItemPrice = getNewArrivalsTotalPrice(
              "nose-pin",
              nosePinObject.metalWeight,
              cookies,
              cartItems[i].smallDiamondPrice
            );
            break;
          case "fashion-ring":
            let fashionRingObject = await findJewelry(
              unfilteredFashionRingsArray,
              cartItems[i].ringId
            );
            cartItemPrice = getNewArrivalsTotalPrice(
              "fashion-ring",
              fashionRingObject.ringSizeWeightArray[cartItems[i].weightIndex],
              cookies,
              cartItems[i].smallDiamondPrice,
              cartItems[i].solitaireDiamondPrice,
              fashionRingObject
            );
            break;
          case "alphabet-pendant":
            let pendantObject = await findJewelry(
              unfilteredAlphabetPendantsArray,
              cartItems[i].pendantId
            );
            cartItemPrice = getNewArrivalsTotalPrice(
              "alphabet-pendant",
              pendantObject.metalWeight,
              cookies,
              cartItems[i].smallDiamondPrice
            );
            break;
          case "diamond-pendant":
            let diamondPendantObject = await findJewelry(
              unfilteredDiamondPendantsArray,
              cartItems[i].pendantId
            );
            cartItemPrice = getNewArrivalsTotalPrice(
              "diamond-pendant",
              diamondPendantObject.metalWeight,
              cookies,
              cartItems[i].smallDiamondPrice,
              cartItems[i].solitaireDiamondPrice
            );
            break;
          case "diamond-earring":
            let diamondEarringObject = await findJewelry(
              unfilteredDiamondEarringsArray,
              cartItems[i].earringId
            );
            cartItemPrice = getNewArrivalsTotalPrice(
              "diamond-earring",
              diamondEarringObject.metalWeight,
              cookies,
              cartItems[i].smallDiamondPrice,
              cartItems[i].solitaireDiamondPrice
            );
            break;
          case "mens-bracelet":
            let braceletObject = await findJewelry(
              unfilteredMensBraceletsArray,
              cartItems[i].braceletId
            );
            cartItemPrice = getTotalPrice(
              "mens-bracelet",
              braceletObject,
              cookies,
              null,
              null,
              cartItems[i].weightIndex
            );
            break;
          case "gold-chain":
            let chainObject = await findJewelry(
              unfilteredMensChainsArray,
              cartItems[i].chainId
            );
            cartItemPrice = getTotalPrice(
              "gold-chain",
              chainObject,
              cookies,
              null,
              null,
              cartItems[i].weightIndex
            );
            break;
          case "mens-kada":
            let kadaObject = await findJewelry(
              unfilteredMensKadasArray,
              cartItems[i].kadaId
            );
            cartItemPrice = getTotalPrice(
              "mens-kada",
              kadaObject,
              cookies,
              null,
              null,
              cartItems[i].weightIndex
            );
            break;
          case "mens-ring":
            let mensRingObject = await findJewelry(
              unfilteredMensRingsArray,
              cartItems[i].ringId
            );
            cartItemPrice = getTotalPrice(
              "mens-ring",
              mensRingObject,
              cookies,
              cartItems[i].presetDiamondCarat,
              cartItems[i].presetDiamondQuality,
              cartItems[i].weightIndex
            );
            break;
          case "mens-stud":
            let mensStudObject = await findJewelry(
              unfilteredSolitaireStudsArray,
              cartItems[i].studId
            );
            cartItemPrice = getTotalPrice(
              "preset-stud",
              mensStudObject,
              cookies,
              cartItems[i].presetDiamondCarat,
              cartItems[i].presetDiamondQuality,
              null,
              cartItems[i].studQuantity
            );
          case "preset-stud":
            let presetStudObject = await findJewelry(
              unfilteredSolitaireStudsArray,
              cartItems[i].studId
            );
            cartItemPrice = getTotalPrice(
              "preset-stud",
              presetStudObject,
              cookies,
              cartItems[i].presetDiamondCarat,
              cartItems[i].presetDiamondQuality,
              null,
              cartItems[i].studQuantity
            );
            break;
          case "custom-stud":
            let customStudObject = await findJewelry(
              unfilteredSolitaireStudsArray,
              cartItems[i].studId
            );
            let firstDiamondObject = await findDiamond(
              unfilteredDiamondArray,
              cartItems[i].firstDiamondId
            );
            let secondDiamondObject = await findDiamond(
              unfilteredDiamondArray,
              cartItems[i].secondDiamondId
            );
            cartItemPrice =
              getTotalPrice(
                "custom-stud",
                customStudObject,
                cookies,
                cartItems[i].presetDiamondCarat,
                cartItems[i].presetDiamondQuality,
                null,
                cartItems[i].studQuantity
              ) +
              getTotalPrice("loose-diamond", firstDiamondObject, cookies) +
              getTotalPrice("loose-diamond", secondDiamondObject, cookies);
            break;
          case "preset-necklace":
            let presetNecklaceObject = await findJewelry(
              unfilteredSolitaireNecklacesArray,
              cartItems[i].necklaceId
            );
            cartItemPrice = getTotalPrice(
              "preset-necklace",
              presetNecklaceObject,
              cookies,
              cartItems[i].presetDiamondCarat,
              cartItems[i].presetDiamondQuality
            );
            break;
          case "custom-necklace":
            let customNecklaceObject = await findJewelry(
              unfilteredSolitaireNecklacesArray,
              cartItems[i].necklaceId
            );
            let diamondForNecklace = await findDiamond(
              unfilteredDiamondArray,
              cartItems[i].diamondId
            );
            cartItemPrice = cartItemPrice =
              getTotalPrice(
                "custom-necklace",
                customNecklaceObject,
                cookies,
                cartItems[i].presetDiamondCarat,
                cartItems[i].presetDiamondQuality
              ) + getTotalPrice("loose-diamond", diamondForNecklace, cookies);
            break;
          case "preset-ring":
            let presetRingObject = await findJewelry(
              unfilteredSolitaireRingsArray,
              cartItems[i].ringId
            );
            cartItemPrice = getTotalPrice(
              "preset-ring",
              presetRingObject,
              cookies,
              cartItems[i].presetDiamondCarat,
              cartItems[i].presetDiamondQuality
            );
            break;
          case "custom-ring":
            let customRingObject = await findJewelry(
              unfilteredSolitaireRingsArray,
              cartItems[i].ringId
            );
            let diamondForRing = await findDiamond(
              unfilteredDiamondArray,
              cartItems[i].diamondId
            );
            cartItemPrice =
              getTotalPrice(
                "custom-ring",
                customRingObject,
                cookies,
                cartItems[i].presetDiamondCarat,
                cartItems[i].presetDiamondQuality
              ) + getTotalPrice("loose-diamond", diamondForRing, cookies);
            break;
        }

        dummyArray.push(cartItemPrice);
      }
      setCartItemsPriceArray([...dummyArray]);
    }
    if (isAllSet) {
      getCartPriceArray();
    }
  }, [isAllSet, cartItems]);

  useEffect(() => {
    if (!isBillingAddressDifferent) {
      let newBillerState = {
        billerEmail: shipperState.recepientEmail,
        billerFname: shipperState.recepientFname,
        billerLname: shipperState.recepientLname,
        billerPhoneNumber: shipperState.recepientPhoneNumber,
        billerAddressLine1: shipperState.recepientAddressLine1,
        billerAddressLine2: shipperState.recepientAddressLine2,
        billerCountryCode: shipperState.recepientCountryCode,
        billerPostCode: shipperState.recepientPostCode,
        billerState: shipperState.recepientState,
        billerCity: shipperState.recepientCity,
      };
      setBillerState({ ...newBillerState });
    }
  }, [isBillingAddressDifferent, shipperState]);

  useEffect(() => {
    CountryService.getCountries()
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return isAllSet ? (
    <ShippingPageBox
      addressDifferent={isBillingAddressDifferent}
      ok={okToDeliver}
    >
      {cookies.isSignedIn === "true" ? (
        <div
          style={{
            background: "rgb(248, 250, 255)",
            marginBottom: "20px",
            padding: "20px",
            textAlign: "center",
            color: "rgb(30,46,76)",
          }}
        >
          <p style={{ fontSize: "2rem" }}>
            Signed in as
            <span style={{ fontWeight: "bold", marginLeft: "5px" }}>
              {cookies.userName}
            </span>
          </p>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            background: "rgb(248, 250, 255)",
            marginBottom: "20px",
            padding: "20px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>
            Sign In To Proceed With The Checkout
          </h2>
          <hr style={{ margin: "10px 0px" }} />
          <section className="login-form-container">
            <form id="login-form">
              <p style={{ textAlign: "center" }}>
                Already have an account? Sign in here
              </p>
              <div className="input-container">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="userEmail"
                  onChange={onEmailChangeHandle}
                  value={email}
                />
              </div>
              <div className="input-container">
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="userPassword"
                  onChange={onPasswordChangeHandle}
                  value={password}
                />
              </div>
              <div className="input-container">
                <div
                  id="lgc-captcha"
                  className="g-recaptcha"
                  data-sitekey="6Lcj_rYaAAAAAJCeEjhXuitliARFg9iCgGTIkJbh"
                ></div>
                <button onClick={login} style={{ marginTop: "20px" }}>
                  Sign In
                </button>
              </div>
              <div className="bottom-row">
                <Link
                  to="/forgot-password"
                  style={{ fontSize: "1.4rem", textDecoration: "none" }}
                >
                  Forgot Password?
                </Link>
                <Link
                  to="/account/sign-up"
                  style={{ fontSize: "1.4rem", textDecoration: "none" }}
                >
                  Create A New Account
                </Link>
              </div>
            </form>
            <div className="seperator">
              <div className="seperator-text">or</div>
            </div>
            <div className="oauth-login-container">
              <p style={{ marginBottom: "30px" }}>Sign in easily using</p>
              <OauthPage />
            </div>
          </section>
        </div>
      )}
      <section className="shipping-form-box">
        <div className="content-column">
          <section>
            <h2>Shipping Address</h2>

            <hr style={{ margin: "10px 0px" }} />

            <div className="input-row">
              <div className="shipping-input-container full-width">
                <p className="error-message">
                  {recepientErrorState.emailError}
                </p>
                <label className="input-label">Email</label>
                <input
                  disabled={cookies.isSignedIn === "true" ? false : true}
                  type="email"
                  id="recepientEmail"
                  value={shipperState.recepientEmail}
                  onChange={onChangeShippingFormInput}
                ></input>
              </div>
            </div>

            <div className="input-row">
              <div className="shipping-input-container half-width">
                <p className="error-message">
                  {recepientErrorState.fnameError}
                </p>
                <label className="input-label">First Name</label>
                <input
                  disabled={cookies.isSignedIn === "true" ? false : true}
                  type="text"
                  id="recepientFname"
                  value={shipperState.recepientFname}
                  onChange={onChangeShippingFormInput}
                ></input>
              </div>
              <div className="shipping-input-container half-width">
                <p className="error-message">
                  {recepientErrorState.lnameError}
                </p>
                <label className="input-label">Last Name</label>
                <input
                  disabled={cookies.isSignedIn === "true" ? false : true}
                  type="text"
                  id="recepientLname"
                  value={shipperState.recepientLname}
                  onChange={onChangeShippingFormInput}
                ></input>
              </div>
            </div>

            <div className="input-row">
              <div className="shipping-input-container full-width">
                <p className="error-message">
                  {recepientErrorState.addressLine1Error}
                </p>
                <label className="input-label">
                  Flat, House no., Building, Company, Apartment
                </label>
                <input
                  disabled={cookies.isSignedIn === "true" ? false : true}
                  type="text"
                  id="recepientAddressLine1"
                  value={shipperState.recepientAddressLine1}
                  onChange={onChangeShippingFormInput}
                ></input>
              </div>
            </div>

            <div className="input-row">
              <div className="shipping-input-container full-width">
                <p className="error-message">
                  {recepientErrorState.addressLine2Error}
                </p>
                <label className="input-label">
                  Area, Colony, Street, Sector, Village
                </label>
                <input
                  disabled={cookies.isSignedIn === "true" ? false : true}
                  type="text"
                  id="recepientAddressLine2"
                  value={shipperState.recepientAddressLine2}
                  onChange={onChangeShippingFormInput}
                ></input>
              </div>
            </div>

            <div className="input-row">
              <div className="shipping-input-container half-width">
                <p className="error-message">
                  {recepientErrorState.postCodeError}
                </p>
                <label className="input-label">Zip / Postal Code</label>
                <input
                  disabled={cookies.isSignedIn === "true" ? false : true}
                  type="text"
                  id="recepientPostCode"
                  value={shipperState.recepientPostCode}
                  onChange={onChangeShippingFormInput}
                ></input>
              </div>
              <div className="shipping-input-container half-width">
                <p className="error-message">{recepientErrorState.cityError}</p>
                <label className="input-label">City</label>
                <input
                  disabled={cookies.isSignedIn === "true" ? false : true}
                  type="text"
                  id="recepientCity"
                  value={shipperState.recepientCity}
                  onChange={onChangeShippingFormInput}
                ></input>
              </div>
            </div>

            <div className="input-row">
              <div className="shipping-input-container half-width">
                <p className="error-message">
                  {recepientErrorState.countryCodeError}
                </p>
                <label className="input-label">Country</label>
                <select
                  disabled={cookies.isSignedIn === "true" ? false : true}
                  id="recepientCountryCode"
                  onChange={handleCountryChannge}
                >
                  <option disabled defaultValue>
                    {" "}
                    -- select your country --{" "}
                  </option>
                  {countriesListArray}
                </select>
              </div>
              <div className="shipping-input-container half-width">
                <p className="error-message">
                  {recepientErrorState.stateError}
                </p>
                <label className="input-label">State / Province</label>
                <select
                  disabled={cookies.isSignedIn === "true" ? false : true}
                  id="recepientState"
                  onChange={onChangeShippingFormInput}
                >
                  <option disabled selected value>
                    {" "}
                    -- select your state / province --{" "}
                  </option>
                  {statesListArray}
                </select>
              </div>
            </div>

            <div className="input-row">
              <div className="shipping-input-container full-width">
                <p className="error-message">
                  {recepientErrorState.phoneNumberError}
                </p>
                <label className="input-label">Phone Number</label>
                <input
                  disabled={cookies.isSignedIn === "true" ? false : true}
                  type="tel"
                  id="recepientPhoneNumber"
                  value={shipperState.recepientPhoneNumber}
                  onChange={onChangeShippingFormInput}
                ></input>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "20px 0px",
              }}
            >
              <input
                disabled={cookies.isSignedIn === "true" ? false : true}
                type="checkbox"
                style={{ width: "18px", height: "18px" }}
                onChange={() =>
                  setIsBillingAddressDifferent(!isBillingAddressDifferent)
                }
              />
              <p style={{ marginLeft: "10px", fontSize: "1.4rem" }}>
                Is billing address different?
              </p>
            </div>

            <div id="shipping-buttons-container">
              <button
                disabled={cookies.isSignedIn === "true" ? false : true}
                onClick={onHandleProceed}
              >
                Proceed
              </button>
              <button disabled={cookies.isSignedIn === "true" ? false : true}>
                Clear
              </button>
            </div>
          </section>

          <section id="billing-address-form">
            <h2>Billing Address</h2>

            <hr style={{ margin: "10px 0px" }} />

            <div className="input-row">
              <div className="shipping-input-container full-width">
                <p className="error-message">
                  {recepientErrorState.emailError}
                </p>
                <label className="input-label">Email</label>
                <input
                  disabled={cookies.isSignedIn === "true" ? false : true}
                  type="email"
                  id="billerEmail"
                  value={billerState.billerEmail}
                  onChange={onChangeBillingFormInput}
                ></input>
              </div>
            </div>

            <div className="input-row">
              <div className="shipping-input-container half-width">
                <label className="input-label">First Name</label>
                <input
                  type="text"
                  id="billerFname"
                  value={billerState.billerFname}
                  onChange={onChangeBillingFormInput}
                ></input>
              </div>
              <div className="shipping-input-container half-width">
                <label className="input-label">Last Name</label>
                <input
                  type="text"
                  id="billerLname"
                  value={billerState.billerLname}
                  onChange={onChangeBillingFormInput}
                ></input>
              </div>
            </div>

            <div className="input-row">
              <div className="shipping-input-container full-width">
                <label className="input-label">
                  {" "}
                  Flat, House no., Building, Company, Apartment
                </label>
                <input
                  type="text"
                  id="billerAddressLine1"
                  value={billerState.billerAddressLine1}
                  onChange={onChangeBillingFormInput}
                ></input>
              </div>
            </div>

            <div className="input-row">
              <div className="shipping-input-container full-width">
                <label className="input-label">
                  Area, Colony, Street, Sector, Village
                </label>
                <input
                  type="text"
                  id="billerAddressLine2"
                  value={billerState.billerAddressLine2}
                  onChange={onChangeBillingFormInput}
                ></input>
              </div>
            </div>

            <div className="input-row">
              <div className="shipping-input-container half-width">
                <label className="input-label">Zip / Postal Code</label>
                <input
                  type="text"
                  id="billerPostCode"
                  value={billerState.billerPostCode}
                  onChange={onChangeBillingFormInput}
                ></input>
              </div>
              <div className="shipping-input-container half-width">
                <label className="input-label">City</label>
                <input
                  type="text"
                  id="billerCity"
                  value={billerState.billerCity}
                  onChange={onChangeBillingFormInput}
                ></input>
              </div>
            </div>

            <div className="input-row">
              <div className="shipping-input-container half-width">
                <label className="input-label">Country</label>
                <select id="billerCountry" onChange={handleCountryChannge}>
                  <option disabled selected value>
                    {" "}
                    -- select country --{" "}
                  </option>
                  {countriesListArray}
                </select>
              </div>
              <div className="shipping-input-container half-width">
                <label className="input-label">State / Province</label>
                <select id="billerState">
                  <option disabled selected value>
                    {" "}
                    -- select state / province --{" "}
                  </option>
                  {statesListArray}
                </select>
              </div>
            </div>

            <div className="input-row">
              <div className="shipping-input-container full-width">
                <label className="input-label"> Phone Number</label>
                <input
                  type="tel"
                  id="billerPhoneNumber"
                  value={billerState.billerPhoneNumber}
                  onChange={onChangeBillingFormInput}
                ></input>
              </div>
            </div>

            <div id="billing-buttons-container">
              <button onClick={() => setOkToDeliver(true)}>Proceed</button>
              <button>Clear</button>
            </div>
          </section>
          <section>
            <div id="payment-section">
              <h2>Payment Method</h2>

              <hr style={{ margin: "10px 0px" }} />

              {okToDeliver ? (
                <div>
                  <div className="payment-input-container">
                    <input
                      type="radio"
                      disabled={okToDeliver ? "" : "disabled"}
                      name="payment-method"
                      id="razorpay-method"
                      value="razorpay"
                      onChange={() => setPaymentMethod("razorpay")}
                    />
                    <label for="razorpay-method" className="input-label">
                      Credit or Debit Card / Net Banking / UPI
                    </label>
                  </div>

                  <div className="payment-input-container">
                    <input
                      type="radio"
                      disabled={okToDeliver ? "" : "disabled"}
                      name="payment-method"
                      id="paypal-method"
                      value="paypal"
                      onChange={() => setPaymentMethod("paypal")}
                    />
                    <label for="paypal-method" className="input-label">
                      Paypal
                    </label>
                  </div>
                </div>
              ) : (
                <p
                  id="payment-step-message-displayer"
                  style={{
                    fontSize: "1.4rem",
                    fontStyle: "italic",
                    marginBottom: "25px",
                  }}
                >
                  (Click "PROCEED" in Shipping section to start the payment
                  step!)
                </p>
              )}
            </div>
          </section>
        </div>

        <div className="content-column">
          <section
            style={{ background: "rgb(248, 250, 255)", padding: "20px" }}
          >
            <h2>Order Summary</h2>

            <hr style={{ margin: "10px 0px" }} />

            <div className="items-displayer">
              <div className="heading">
                <p style={{ color: "rgb(30,46,76)", fontSize: "1.5rem" }}>
                  Items in Cart
                </p>
                <i
                  className="fas fa-angle-down"
                  style={{ color: "rgba(30,46,76,0.5)", fontSize: "2rem" }}
                ></i>
              </div>
              {cartArray.length > 0 ? (
                <div className="items-container">
                  {cartArray.map((product, index) => (
                    <CartItem
                      key={index}
                      cartItems={cartItems}
                      product={product}
                      unfilteredDiamondArray={unfilteredDiamondArray}
                      findDiamond={findDiamond}
                      unfilteredSolitaireRingsArray={
                        unfilteredSolitaireRingsArray
                      }
                      unfilteredSolitaireNecklacesArray={
                        unfilteredSolitaireNecklacesArray
                      }
                      unfilteredSolitaireStudsArray={
                        unfilteredSolitaireStudsArray
                      }
                      unfilteredFashionRingsArray={unfilteredFashionRingsArray}
                      unfilteredDiamondPendantsArray={
                        unfilteredDiamondPendantsArray
                      }
                      unfilteredDiamondEarringsArray={
                        unfilteredDiamondEarringsArray
                      }
                      unfilteredAlphabetPendantsArray={
                        unfilteredAlphabetPendantsArray
                      }
                      unfilteredGemstonesArray={unfilteredGemstonesArray}
                      unfilteredGemstonesRingsArray={
                        unfilteredGemstonesRingsArray
                      }
                      unfilteredGemstonesPendantsArray={
                        unfilteredGemstonesPendantsArray
                      }
                      unfilteredMensBraceletsArray={
                        unfilteredMensBraceletsArray
                      }
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
              ) : (
                <div className="empty-display">
                  <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/misc/no-cart-product.png" />
                  <h2>No item in your cart</h2>
                </div>
              )}
            </div>

            <hr style={{ margin: "10px 0px" }} />

            <div>
              <h2 style={{ marginBottom: "8px", textTransform: "none" }}>
                Promo Code
              </h2>
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "20px",
                  }}
                />
                <button style={{ height: "35px", marginLeft: "5px" }}>
                  Apply
                </button>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Subtotal</p>
              <p style={{ fontWeight: "bold", fontSize: "1.6rem" }}>
                {cookies.currencyCode} {cartTotal}
              </p>
            </div>

            <hr style={{ margin: "10px 0px" }} />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Shipping</p>
              <p style={{ fontWeight: "bold", fontSize: "1.6rem" }}>
                {shippingCharges
                  ? `${cookies.currencyCode} ${parseInt(
                      shippingCharges *
                        cookies.exchangeRate[cookies.currencyCode]
                    )}`
                  : ""}
              </p>
            </div>

            <hr style={{ margin: "10px 0px" }} />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2 style={{ color: "rgb(30,46,76)" }}>Total</h2>
              <p style={{ fontWeight: "bold", fontSize: "2rem" }}>
                {shippingCharges
                  ? `${cookies.currencyCode} ${parseInt(
                      shippingCharges *
                        cookies.exchangeRate[cookies.currencyCode] +
                        cartTotal
                    )}`
                  : `${cookies.currencyCode} ${cartTotal} `}
              </p>
            </div>

            <hr style={{ margin: "10px 0px" }} />

            <div className="payment-input-container">
              <input type="checkbox" name="gift-message" />
              <label className="input-label">Add a gift message</label>
            </div>

            <div className="payment-input-container">
              <input type="checkbox" name="newsletter" />
              <label className="input-label">Sign Up for Our Newsletter</label>
            </div>
            <div></div>
          </section>

          {paymentMethod === "razorpay" ? (
            <Razorpay cartTotal={cartTotal} shipperState={shipperState} />
          ) : paymentMethod === "paypal" ? (
            <Paypal
              cartItems={cartItems}
              cartItemsPriceArray={cartItemsPriceArray}
              cartTotal={cartTotal}
              shipperState={shipperState}
              billerState={billerState}
            />
          ) : (
            <div></div>
          )}
        </div>
      </section>

      {/* <USPBanner /> */}
    </ShippingPageBox>
  ) : (
    <Loader />
  );
}
