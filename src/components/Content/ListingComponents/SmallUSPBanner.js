import React from "react";
import { USPBannerBox } from "./style";

export default function SmallUSPBanner() {
  return (
    <USPBannerBox>
      <div className="banner-title">
        <p>LGC Certified</p>
      </div>
      <section className="small-usp">
        <div className="small-usp-icon-box">
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/bis-logo.png"
            alt="bis-logo"
          />
          <p>
            BIS <br />
            Hallmarked <br />
            Jewelry
          </p>
        </div>
        <div className="small-usp-icon-box">
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/gia-logo.png"
            alt="gia-logo"
          />
          <p>
            GIA <br />
            Certified <br />
            Diamonds
          </p>
        </div>
        <div className="small-usp-icon-box">
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/igi-logo.png"
            alt="igi-logo"
          />
          <p>
            IGI <br />
            Certified <br />
            Diamonds
          </p>
        </div>
      </section>
    </USPBannerBox>
  );
}
