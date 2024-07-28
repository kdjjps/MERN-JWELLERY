import React, { useState, useContext } from "react";
import { RightSideIconsBox } from "./style.js";
import CurrencyLooker from "./CurrencyLooker";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { UserContext } from "../../contexts/UserContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

export default function RightSideIcons({ onAccountClick, status }) {
  const data = useSelector((state) => state);
  const itemCount = data.cartReducer.itemCount;
  const [cookies, setCookie, removeCookie] = useCookies();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputStatus] = useState(true);
  const { isUserAuthorized, user } = useContext(UserContext);

  const logOut = () => {
    setCookie("userName", null, { path: "/" });
    setCookie("userEmail", null, { path: "/" });
    removeCookie("isSignedIn", { path: "/" });
    window.localStorage.removeItem("userToken");
    window.location = "/";
  };

  return (
    <RightSideIconsBox status={inputStatus}>
      <div className="icon" id="user-account-icon">
        <a id="user-account-icon" href="/account/login">
          {isUserAuthorized && user ? (
            <div>
              Hi,{" "}
              <span style={{ textTransform: "capitalize", fontWeight: "bold" }}>
                {user.fname}
              </span>
            </div>
          ) : (
            <div></div>
          )}
          <FontAwesomeIcon
            icon={faUser}
            style={{ fontSize: "2.5rem" }}
            onClick={onAccountClick}
          ></FontAwesomeIcon>
        </a>
        {isUserAuthorized && user ? (
          <div id="account-dropdown-content">
            <section className="logged-in-drop-content">
              <a href={`/user/${user.fname.toLowerCase()}`}>My Account</a>
              <a href={`/user/${user.fname.toLowerCase()}/wishlist`}>
                Wishlist
              </a>
              <a href={`/user/${user.fname.toLowerCase()}/orders`}>Orders</a>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(30,46,76,0.4)",
                  margin: "8px 0px",
                }}
              ></div>
              <p onClick={logOut}>Logout</p>
            </section>
          </div>
        ) : (
          <div id="account-dropdown-content-before-login">
            <div className="new-element">
              <h1>Your Account</h1>
              <p>Access account & manage your orders.</p>
              <div>
                <a href="/account/sign-up">Sign Up</a>
                <a href="/account/login">Login</a>
              </div>
            </div>
          </div>
        )}
      </div>
      <div id="wishlist-icon" className="icon">
        <a href="/wishlist">
          <FontAwesomeIcon icon={faHeart} style={{ fontSize: "2.5rem" }}></FontAwesomeIcon>
          <div className="number-displayer">
            {JSON.parse(window.localStorage.getItem("wishlist")).length}
          </div>
        </a>
      </div>
      <div className="icon">
        <a id="shopping-bag-icon" href="/cart">
          <FontAwesomeIcon icon={faShoppingBag} style={{ fontSize: "2.5rem" }}></FontAwesomeIcon>
          <div className="number-displayer">{itemCount}</div>
        </a>
      </div>
      <div className="currency-handler">
        <CurrencyLooker status={status} />
      </div>
    </RightSideIconsBox>
  );
}
