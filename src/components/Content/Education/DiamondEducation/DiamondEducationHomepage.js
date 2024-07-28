import React from "react";
import { EducationPageBox } from "../style";
import { BannerBox } from "../../common-style";
import { useRouteMatch } from "react-router-dom";

export default function DiamondEducationHomepage() {
  const { url } = useRouteMatch();

  const banner =
    "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/diamond-education-banner.png";

  return (
    <EducationPageBox>
      <BannerBox image={banner}>
        <div>
          <h2>Diamond Education</h2>
        </div>
      </BannerBox>
      <section className="grid-content">
        <div className="grid-box">
          <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/education-images/diamond-education/diamond-cut.png" />
          <div className="grid-text">
            <h2>Cut</h2>
            <p>Cut refers to the overall sparkle and beauty of a diamond.</p>
            <div className="link-forwarder">
              <a href={`${url}/cut`}>Learn More</a>
              <i class="fi-etsrxl-equilateral-triangle"></i>
            </div>
          </div>
        </div>

        <div className="grid-box">
          <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/education-images/diamond-education/diamond-color.png" />
          <div className="grid-text">
            <h2>Color</h2>
            <p>Color refers to the presence or lack of tint in a diamond.</p>
            <div className="link-forwarder">
              <a href={`${url}/color`}>Learn More</a>
              <i class="fi-etsrxl-equilateral-triangle"></i>
            </div>
          </div>
        </div>

        <div className="grid-box">
          <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/education-images/diamond-education/diamond-carat.png" />
          <div className="grid-text">
            <h2>Carat</h2>
            <p>It is the unit of weight by which a diamond is measured.</p>
            <div className="link-forwarder">
              <a href={`${url}/carat`}>Learn More</a>
              <i class="fi-etsrxl-equilateral-triangle"></i>
            </div>
          </div>
        </div>

        <div className="grid-box">
          <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/education-images/diamond-education/diamond-clarity.png" />

          <div className="grid-text">
            <h2>Clarity</h2>
            <p>Clarity is the measure of imperfections within a diamond.</p>
            <div className="link-forwarder">
              <a href={`${url}/clarity`}>Learn More</a>
              <i class="fi-etsrxl-equilateral-triangle"></i>
            </div>
          </div>
        </div>

        <div className="grid-box">
          <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/education-images/diamond-education/diamond-anatomy.png" />
          <div className="grid-text">
            <h2>Anatomy</h2>
            <p>
              A diamond's five main parts that define its shape and radiance.
            </p>
            <div className="link-forwarder">
              <a href={`${url}/anatomy`}>Learn More</a>
              <i class="fi-etsrxl-equilateral-triangle"></i>
            </div>
          </div>
        </div>

        <div className="grid-box">
          <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/education-images/diamond-education/diamond-certificate.png" />
          <div className="grid-text">
            <h2>Certification</h2>
            <p>
              Certification is how we can be sure of the quality of a diamond.
            </p>
            <div className="link-forwarder">
              <a href={`${url}/certification`}>Learn More</a>
              <i class="fi-etsrxl-equilateral-triangle"></i>
            </div>
          </div>
        </div>

        <div className="grid-box">
          <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/education-images/diamond-education/diamond-fluorescence.png" />
          <div className="grid-text">
            <h2>Fluorescence</h2>
            <p>Fluorescence is the glow when a diamond emits visible light.</p>
            <div className="link-forwarder">
              <a href={`${url}/fluorescence`}>Learn More</a>
              <i class="fi-etsrxl-equilateral-triangle"></i>
            </div>
          </div>
        </div>

        <div className="grid-box">
          <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/education-images/diamond-education/diamond-shapes.png" />
          <div className="grid-text">
            <h2>Shapes</h2>
            <p>
              From round to heart, explore all shapes that diamonds come in.
            </p>
            <div className="link-forwarder">
              <a href={`${url}/shapes`}>Learn More</a>
              <i class="fi-etsrxl-equilateral-triangle"></i>
            </div>
          </div>
        </div>
      </section>
    </EducationPageBox>
  );
}
