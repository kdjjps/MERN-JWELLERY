import React, { useState } from "react";
import FooterBox from "./style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEnvelope,
  faSquarePhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const [aboutUsDDStatus, setAboutUsDDStatus] = useState(false);
  const [policiesDDStatus, setPoliciesDDStatus] = useState(false);
  const [jewelryGuideDDStatus, setJewelryGuideDDStatus] = useState(false);
  const [shopWithConfidenceDDStatus, setShopWithConfidenceDDStatus] =
    useState(false);
  const [customerDelightDDStatus, setCustomerDelightDDStatus] = useState(false);

  const onChangeDropdown = (e) => {
    let id = e.currentTarget.id;
    switch (id) {
      case "about-us":
        setAboutUsDDStatus(!aboutUsDDStatus);
        setPoliciesDDStatus(false);
        setJewelryGuideDDStatus(false);
        setShopWithConfidenceDDStatus(false);
        setCustomerDelightDDStatus(false);
        break;
      case "policies":
        setAboutUsDDStatus(false);
        setPoliciesDDStatus(!policiesDDStatus);
        setJewelryGuideDDStatus(false);
        setShopWithConfidenceDDStatus(false);
        setCustomerDelightDDStatus(false);
        break;
      case "jewelry-guide":
        setAboutUsDDStatus(false);
        setPoliciesDDStatus(false);
        setJewelryGuideDDStatus(!jewelryGuideDDStatus);
        setShopWithConfidenceDDStatus(false);
        setCustomerDelightDDStatus(false);
        break;
      case "shop-with-confidence":
        setAboutUsDDStatus(false);
        setPoliciesDDStatus(false);
        setJewelryGuideDDStatus(false);
        setShopWithConfidenceDDStatus(!shopWithConfidenceDDStatus);
        setCustomerDelightDDStatus(false);
        break;
      case "customer-delight":
        setAboutUsDDStatus(false);
        setPoliciesDDStatus(false);
        setJewelryGuideDDStatus(false);
        setShopWithConfidenceDDStatus(false);
        setCustomerDelightDDStatus(!customerDelightDDStatus);
        break;
    }
  };

  return (
    <FooterBox
      aboutUsDDStatus={aboutUsDDStatus}
      policiesDDStatus={policiesDDStatus}
      jewelryGuideDDStatus={jewelryGuideDDStatus}
      shopWithConfidenceDDStatus={shopWithConfidenceDDStatus}
      customerDelightDDStatus={customerDelightDDStatus}
    >
      <section id="desktop-footer">
        <div id="footer-top">
          <div className="links-container-row">
            <div className="column">
              <h2>About Us</h2>
              <div>
                <a href="/about-us">Our Story</a>
                <a href="/about-us/ethical-sourcing">Ethical Sourcing</a>
                <a href="/faq/delivery-and-shipment">FAQ</a>
                <a href="/login">Register / Sign In</a>
              </div>
            </div>
            <div className="column">
              <h2>Policies</h2>
              <div>
                <a href="/policy/privacy-policy">Privacy Policy</a>
                <a href="/policy/return-policy">Return Policy</a>
                <a href="/policy/shipping-policy">Shipping Policy</a>
                <a href="/policy/terms-and-conditions">Terms & Conditions</a>
              </div>
            </div>
            <div className="column">
              <h2>Education</h2>
              <div>
                <a href="/education/diamonds">Diamond Guide</a>
                <a href="/education/gemstones">Gemstone Guide</a>
                <a href="/education/jewelry/metals">Metal</a>
                <a href="/education/jewelry/ring-size">Ring Guide</a>
              </div>
            </div>
            <div className="column">
              <h2>Shop Online</h2>
              <div>
                <a href="/diamonds?name=all">Diamonds</a>
                <a href="/gemstones">Gemstones</a>
                <a href="/jewelry">Jewelry</a>
                <a href="/indian-astro-company">Bharat Astro Co.</a>
                <a href="/bespoke">Bespoke</a>
              </div>
            </div>
            <div className="column">
              <h2>Contact Us</h2>
              <div>
                <p>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#ffffff", marginRight: "5px" }}
                  ></FontAwesomeIcon>
                  <span
                    style={{
                      textTransform: "lowercase",
                      verticalAlign: "middle",
                    }}
                  >
                    info@luxurygemsco.com
                  </span>
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faSquarePhone}
                    style={{ color: "#ffffff", marginRight: "5px" }}
                  ></FontAwesomeIcon>
                  +919326226145
                </p>
                <div className="social-icons-container">
                  <p>Follow Us:</p>
                  <div
                    style={{ display: "inline-block", verticalAlign: "middle" }}
                  >
                    <div className="social">
                      <a
                        href="https://m.facebook.com/luxurygemsco"
                        target="_blank"
                      >
                        <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/mailer/social-facebook.png" />
                      </a>
                      <a
                        href="https://www.instagram.com/luxurygemscompany/"
                        target="_blank"
                      >
                        <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/mailer/social-instagram.png" />
                      </a>
                      <a
                        href="https://www.instagram.com/luxurygemscompany/"
                        target="_blank"
                      >
                        <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/mailer/social-twitter.png" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/mailer/payment.png"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mobile-footer">
        <div
          className="drop-content-parent"
          id="about-us"
          onClick={onChangeDropdown}
        >
          <div className="label-container">
            <h2>About Us</h2>
            <FontAwesomeIcon
              icon={faAngleLeft}
              style={{ color: "white", fontSize: "2rem" }}
            ></FontAwesomeIcon>
          </div>
          <section className="drop-content">
            <div className="drop-content-link-row">
              <div className="link-container">
                <a href="/about-us">Our Story</a>
              </div>
              <div className="link-container">
                <a href="/about-us/ethical-sourcing">Ethical Sourcing</a>
              </div>
              <div className="link-container">
                <a href="/faq/delivery-and-shipment">FAQs</a>
              </div>
              <div className="link-container">
                <a href="/account/login">Register / Sign In</a>
              </div>
            </div>
          </section>
        </div>
        <div
          className="drop-content-parent"
          id="policies"
          onClick={onChangeDropdown}
        >
          <div className="label-container">
            <h2>Policies</h2>
            <FontAwesomeIcon
              icon={faAngleLeft}
              style={{ color: "white", fontSize: "2rem" }}
            ></FontAwesomeIcon>
          </div>
          <section className="drop-content">
            <div className="drop-content-link-row">
              <div className="link-container">
                <a href="/policy/privacy-policy">Privacy Policy</a>
              </div>
              <div className="link-container">
                <a href="/policy/return-policy">Return Policy</a>
              </div>
              <div className="link-container">
                <a href="/policy/shipping-policy">Shipping Policy</a>
              </div>
              <div className="link-container">
                <a href="/policy/terms-and-condition">Terms & Conditions</a>
              </div>
            </div>
          </section>
        </div>
        <div
          className="drop-content-parent"
          id="jewelry-guide"
          onClick={onChangeDropdown}
        >
          <div className="label-container">
            <h2>Education</h2>
            <FontAwesomeIcon
              icon={faAngleLeft}
              style={{ color: "white", fontSize: "2rem" }}
            ></FontAwesomeIcon>
          </div>
          <section className="drop-content">
            <div className="drop-content-link-row">
              <div className="link-container">
                <a href="/education/diamonds">Diamond Guide</a>
              </div>
              <div className="link-container">
                <a href="/education/gemstones">Gemstones Guide</a>
              </div>
              <div className="link-container">
                <a href="/education/jewelry">Jewelry Guide</a>
              </div>
            </div>
          </section>
        </div>
        <div
          className="drop-content-parent"
          id="shop-with-confidence"
          onClick={onChangeDropdown}
        >
          <div className="label-container">
            <h2>Shop Online</h2>
            <FontAwesomeIcon
              icon={faAngleLeft}
              style={{ color: "white", fontSize: "2rem" }}
            ></FontAwesomeIcon>
          </div>
          <section className="drop-content">
            <div className="drop-content-link-row">
              <div className="link-container">
                <a href="diamonds?name=all">Diamonds</a>
              </div>
              <div className="link-container">
                <a href="/gemstones">Gemstones</a>
              </div>
              <div className="link-container">
                <a href="/jewelry">Jewelry</a>
              </div>
              <div className="link-container">
                <a href="/astro-advice">Astro Advice</a>
              </div>
            </div>
          </section>
        </div>
        <div
          className="drop-content-parent"
          id="customer-delight"
          onClick={onChangeDropdown}
        >
          <div className="label-container">
            <h2>Contact Us</h2>
            <FontAwesomeIcon
              icon={faAngleLeft}
              style={{ color: "white", fontSize: "2rem" }}
            ></FontAwesomeIcon>
          </div>
          <section className="drop-content">
            <div className="drop-content-link-row">
              <div className="link-container">
                <p>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#ffffff", marginRight: "5px" }}
                  ></FontAwesomeIcon>
                  <span
                    style={{
                      textTransform: "lowercase",
                      verticalAlign: "middle",
                    }}
                  >
                    info@luxurygemsco.com
                  </span>
                </p>
              </div>
              <div className="link-container">
                <p>
                  <FontAwesomeIcon
                    icon={faSquarePhone}
                    style={{ color: "#ffffff", marginRight: "5px" }}
                  ></FontAwesomeIcon>
                  +919326226145
                </p>
              </div>
              <div className="link-container">
                <div className="social-icons-container">
                  <p>Follow Us:</p>
                  <div
                    style={{ display: "inline-block", verticalAlign: "middle" }}
                  >
                    <div className="social">
                      <a
                        href="https://www.facebook.com/luxurygemsco"
                        target="_blank"
                      >
                        <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/mailer/social-facebook.png" />
                      </a>
                      <a
                        href="https://www.instagram.com/luxurygemscompany/"
                        target="_blank"
                      >
                        <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/mailer/social-instagram.png" />
                      </a>
                      <a
                        href="https://twitter.com/luxurygemsco"
                        target="_blank"
                      >
                        <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/mailer/social-twitter.png" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="link-container">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/mailer/payment.png"
                  style={{ width: "300px" }}
                />
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="footer-bottom">
        <div className="column">
          &copy; 2021 Luxury Gems Company. All Rights Reserved.
        </div>
        <div className="column">Made With &#129505; By Ujjwal</div>
      </section>
    </FooterBox>
  );
}
