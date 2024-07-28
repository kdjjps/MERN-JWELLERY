import React from "react";
import { DiamondTopicEducationBox } from "../style";

export default function DiamondCut() {
  return (
    <DiamondTopicEducationBox>
      <h1>Diamond Carat</h1>

      <div className="para">
        <h2>What is Diamond Carat?</h2>
        <p>
          The Carat is a measurement of how much a diamond weighs. Each Carat is
          divided into 100 “points”. For example a half-Carat stone is
          considered a “50 point diamond”. All else being equal, diamond price
          increases with Carat weight because larger diamonds are more rare, and
          thus harder to source. When looking for a diamond, Carat should be
          used as a guideline but not the determining factor in your selection.
          Carat is not necessarily the best indication of how large a stone will
          appear, rather the measurements of the diamond are a more important
          reflection of “size”.
        </p>
      </div>

      <div className="image-container">
        <img
          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/education-images/diamond-education/topic-wise/diamond-carat.png"
          alt="diamond-carat"
        />
      </div>

      <div className="info-table">
        <p>
          Our Diamond Size Chart demonstrates how diamonds of various carat
          weights appear when viewed from the top down. Since carat is a unit of
          weight, not all diamonds of equal carat weight will appear to be the
          same size due to their differing measurements. In order to view this
          guide, you will need to use Adobe Acrobat Reader.
        </p>
        <button>Download Chart</button>
      </div>
    </DiamondTopicEducationBox>
  );
}
