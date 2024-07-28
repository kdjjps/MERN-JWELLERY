import React from "react";
import { GemstoneTopicEducationBox } from "../style";

export default function BlueSapphire() {
  return (
    <GemstoneTopicEducationBox>
      <h2>Blue Sapphire</h2>
      <p>{/* A collection perfect for any occasion */}</p>
      <section id="jewelry-category-box">
        <div className="category-row">
          <div
            className="background-holder"
            style={{
              backgroundImage:
                "url(https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-womens-ring.png)",
            }}
          ></div>
          <div className="row-box">
            <div className="category-description-box">
              <h3>Solitaire Ring</h3>
              {/* <p >Beautiful jewellery that complements your everyday style, and completes your look. They're so stunning, and so are you!</p> */}
              <a href="preset-jewelry/rings">Shop Now</a>
            </div>
          </div>
        </div>

        <div className="category-row">
          <div className="row-box">
            <div className="category-description-box">
              <h3>Solitaire Pendant</h3>
              {/* <p >Beautiful jewellery that complements your everyday style, and completes your look. They're so stunning, and so are you!</p> */}
              <a href="/preset-jewelry/pendants">Shop Now</a>
            </div>
          </div>
          <div
            className="background-holder"
            style={{
              backgroundImage:
                "url(https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-pendants.png)",
            }}
          ></div>
        </div>

        <div className="category-row">
          <div
            className="background-holder"
            style={{
              backgroundImage:
                "url(https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-studs.png)",
            }}
          ></div>
          <div className="row-box">
            <div className="category-description-box">
              <h3>Solitaire Stud</h3>
              {/* <p >Beautiful jewellery that complements your everyday style, and completes your look. They're so stunning, and so are you!</p> */}
              <a href="/preset-jewelry/studs">Shop Now</a>
            </div>
          </div>
        </div>
      </section>
    </GemstoneTopicEducationBox>
  );
}
