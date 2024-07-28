import React from "react";
import { HomepageBannerBox } from "./style";

export default function HomepageBanner() {
  return (
    <HomepageBannerBox>
      {/* <video autoPlay loop muted="muted" id="bannerVideo-mobile">
        <source
          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/videos/mobile-banner-video.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>

      <video autoPlay loop muted="muted" id="bannerVideo-desktop">
        <source
          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/videos/desktop-banner-video.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video> */}
      <div className="image-container">
        <img
          src={require("../../../assets/diamondBg.jpeg")}
          alt="Diamond Background"
          className="responsive-image"
        />
      </div>

      <div className="content">
        <a href="/diamonds?name=all" className="myBtn">
          Shop Diamonds
        </a>
        <a href="/gemstones?name=blue-sapphire" className="myBtn">
          Shop Gemstones
        </a>
        <a href="/preset-jewelry/rings" className="myBtn">
          Shop Rings
        </a>
      </div>
    </HomepageBannerBox>
  );
}
