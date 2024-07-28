import React from "react";
import { EducationPageBox } from "../style";
import { BannerBox } from "../../common-style";
import { useRouteMatch } from "react-router-dom";

export default function GemstoneEducationHomepage() {
  let { url } = useRouteMatch();
  const banner =
    "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/gemstone-banner.png";

  return (
    <EducationPageBox>
      <BannerBox image={banner}>
        <div>
          <h2 style={{ color: "white" }}>Gemstone Education</h2>
        </div>
      </BannerBox>
      <section className="grid-content-gemstone">
        <div className="grid-box">
          <img
            className="gemstone"
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/blue-sapphire.png"
          />
          <div className="gemstone-grid-text">
            <h2 className="gemstone-heading">Blue Sapphire</h2>
            <div className="link-forwarder">
              <a href={`${url}/blue-sapphire`}>Learn More</a>
              <i class="fi-etsrxl-equilateral-triangle"></i>
            </div>
          </div>
        </div>
        <div className="grid-box">
          <img
            className="gemstone"
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/cats-eye.png"
          />
          <div className="gemstone-grid-text">
            <h2 className="gemstone-heading">Cat's Eye</h2>
            <div className="link-forwarder">
              <a href={`${url}/cats-eye`}>Learn More</a>
              <i class="fi-etsrxl-equilateral-triangle"></i>
            </div>
          </div>
        </div>
        <div className="grid-box">
          <img
            className="gemstone"
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/emerald.png"
          />
          <div className="gemstone-grid-text">
            <h2 className="gemstone-heading">Emerald</h2>
            <div className="link-forwarder">
              <a href={`${url}/emerald`}>Learn More</a>
              <i class="fi-etsrxl-equilateral-triangle"></i>
            </div>
          </div>
        </div>
        <div className="grid-box">
          <img
            className="gemstone"
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/hesonite.png"
          />
          <div className="gemstone-grid-text">
            <h2 className="gemstone-heading">Hessonite</h2>
            <div className="link-forwarder">
              <a href={`${url}/hessonite`}>Learn More</a>
              <i class="fi-etsrxl-equilateral-triangle"></i>
            </div>
          </div>
        </div>
        <div className="grid-box">
          <img
            className="gemstone"
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/opal.png"
          />
          <div className="gemstone-grid-text">
            <h2 className="gemstone-heading">Opal</h2>
            <div className="link-forwarder">
              <a href={`${url}/opal`}>Learn More</a>
              <i class="fi-etsrxl-equilateral-triangle"></i>
            </div>
          </div>
        </div>
        <div className="grid-box">
          <img
            className="gemstone"
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/pearl.png"
          />
          <div className="gemstone-grid-text">
            <h2 className="gemstone-heading">Pearl</h2>
            <div className="link-forwarder">
              <a href={`${url}/pearl`}>Learn More</a>
              <i class="fi-etsrxl-equilateral-triangle"></i>
            </div>
          </div>
        </div>
        <div className="grid-box">
          <img
            className="gemstone"
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/red-coral.png"
          />
          <div className="gemstone-grid-text">
            <h2 className="gemstone-heading">Red Coral</h2>
            <div className="link-forwarder">
              <a href={`${url}/red-coral`}>Learn More</a>
              <i class="fi-etsrxl-equilateral-triangle"></i>
            </div>
          </div>
        </div>
        <div className="grid-box">
          <img
            className="gemstone"
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/ruby.png"
          />
          <div className="gemstone-grid-text">
            <h2 className="gemstone-heading">Ruby</h2>
            <div className="link-forwarder">
              <a href={`${url}/ruby`}>Learn More</a>
              <i class="fi-etsrxl-equilateral-triangle"></i>
            </div>
          </div>
        </div>
        <div className="grid-box">
          <img
            className="gemstone"
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/yellow-sapphire.png"
          />
          <div className="gemstone-grid-text">
            <h2 className="gemstone-heading">Yellow Sapphire</h2>
            <div className="link-forwarder">
              <a href={`${url}/yellow-sapphire`}>Learn More</a>
              <i class="fi-etsrxl-equilateral-triangle"></i>
            </div>
          </div>
        </div>
      </section>
    </EducationPageBox>
  );
}
