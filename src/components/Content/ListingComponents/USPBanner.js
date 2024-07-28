import React from "react";
import { USPBannerBox } from "./style";

export default function USPBanner() {
  return (
    <USPBannerBox>
      <div className="banner-title">
        <p>LGC Promise</p>
      </div>
      <section className="big-usp">
        <div className="large-usp-icon-box">
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/secure-delivery.png"
            alt="international-shipping"
          />
          <b>Secure</b>
          <p>Delivery</p>
        </div>
        <div className="large-usp-icon-box">
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/badge.png"
            alt="secured-shopping"
          />
          <b>Trusted</b>
          <p>Brand</p>
        </div>
        <div className="large-usp-icon-box">
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/cert.png"
            alt="lowest-price"
          />
          <b>Guaranteed</b>
          <p>Purity</p>
        </div>
        <div className="large-usp-icon-box">
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/diamond.png"
            alt="lifetime-warranty"
          />
          <b>Conflict-Free</b>
          <p>Diamonds</p>
        </div>
        <div className="large-usp-icon-box">
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/int-shipping.png"
            alt="secured-shopping"
          />
          <b>Global</b>
          <p>Shipping</p>
        </div>
        <div className="large-usp-icon-box">
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/cert.png"
            alt="secured-shopping"
          />
          <b>Certified</b>
          <p>Stones</p>
        </div>
      </section>
    </USPBannerBox>
  );
}
