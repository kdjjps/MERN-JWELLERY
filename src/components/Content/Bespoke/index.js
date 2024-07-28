import React, { useState } from "react";
import BespokeModal from "./BespokeModal";
import { BespokeHomepageBox } from "./style";
import { BannerBox } from "../common-style";

export default function Bespoke() {
  const [bespokeModalStatus, setBespokeModalStatus] = useState(false);

  const changeModalStatus = () => {
    if (bespokeModalStatus === false) {
      setBespokeModalStatus(true);
      document
        .getElementById("root")
        .setAttribute(
          "style",
          `position: fixed; top: ${window.scrollY}; left: 0; right: 0;`
        );
    } else {
      setBespokeModalStatus(false);
      document.getElementById("root").setAttribute("style", "");
      window.scrollTo(0, window.scrollY);
    }
  };

  const bannerImage =
    "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/bespoke/bespoke-1.png";

  return (
    <div>
      <BannerBox image={bannerImage}>
        <div>
          <h2
            className="banner-small-heading"
            style={{ color: "rgb(30,46,76)" }}
          >
            Bespoke Jewellery
          </h2>
          <p className="banner-tagline" style={{ color: "rgb(30,46,76)" }}>
            Craft your vision into reality <br /> through our creative process
            of fine jewellery design.
          </p>
        </div>
      </BannerBox>

      <BespokeHomepageBox>
        <section id="jewelry-category-box">
          <div className="category-row">
            <div className="image-holder">
              <img
                alt="step-1"
                src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/bespoke/STEP-1.png"
              />
            </div>
            <div className="row-box">
              <div className="category-description-box">
                <p className="step">Step 1.</p>
                <p className="step-title">Share Your Ideas</p>
                <div className="deco-line"></div>
                <p className="step-description">
                  The first stage of any collaboration is sharing. We want you
                  to talk us through your idea, so we can understand the best
                  way for it to come to life. It doesn’t matter if you have
                  detailed plans or vague ideas, we’re here to help you realise
                  your vision.
                </p>
              </div>
            </div>
          </div>

          <div className="category-row">
            <div className="row-box">
              <div className="category-description-box">
                <p className="step">Step 2.</p>
                <p className="step-title">DESIGN & APPROVAL</p>
                <div className="deco-line"></div>
                <p className="step-description">
                  Once we have absorbed as much as your idea as possible, we
                  will create a CAD design. A CAD design is created on a
                  computer so you can see your imagination fleshed out into a 3D
                  digital image. Each design is organically created from the
                  notes and sketches we have from the initial discussion
                  process.
                </p>
              </div>
            </div>
            <div className="image-holder">
              <img
                alt="step-2"
                src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/bespoke/STEP-2.png"
              />
            </div>
          </div>

          <div className="category-row">
            <div className="image-holder">
              <img
                alt="step-3"
                src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/bespoke/STEP-3.png"
              />
            </div>
            <div className="row-box">
              <div className="category-description-box">
                <p className="step">Step 3.</p>
                <p className="step-title">CREATION OF YOUR PIECE</p>
                <div className="deco-line"></div>
                <p className="step-description">
                  Our master craftsmen will take each design feature and create
                  the perfect finished piece of jewellery, using many modern and
                  also traditional methods to ensure the fine and exquisite
                  details are included and hand finished to perfection.
                </p>
              </div>
            </div>
          </div>

          <div className="category-row">
            <div className="row-box">
              <div className="category-description-box">
                <p className="step">Step 4.</p>
                <p className="step-title">IT’S READY</p>
                <div className="deco-line"></div>
                <p className="step-description">
                  Once your piece of jewellery has been cleaned and finished to
                  the highest quality we will provide you with a presentation
                  box and complementary valuation for insurance purposes and
                  then it is yours to collect. Hoorah!
                </p>
              </div>
            </div>
            <div className="image-holder">
              <img
                alt="step-4"
                src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/bespoke/STEP-4.png"
              />
            </div>
          </div>

          <div className="button-container">
            <button onClick={changeModalStatus}>Start Now</button>
          </div>
        </section>
      </BespokeHomepageBox>
      <BespokeModal
        status={bespokeModalStatus}
        changeModalStatus={changeModalStatus}
      />
    </div>
  );
}
