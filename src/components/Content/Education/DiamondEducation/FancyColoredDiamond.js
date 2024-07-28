import React from "react";
import { DiamondTopicEducationBox } from "../style";

export default function FancyColoredDiamond() {
  return (
    <DiamondTopicEducationBox>
      <h1>Fancy Diamond</h1>

      <div className="para">
        <h2>Brief</h2>
        <p>The planet’s most valued gems are fancy color diamonds.</p>
      </div>

      <div className="para">
        <h2>What Are Fancy-Colored Diamonds?</h2>
        <p>
          Diamonds that exhibit a color other than light yellow or brown, as
          well as diamonds that possess a more intense yellow or brown than the
          'Z' color rating, are considered fancy color diamonds. With only one
          out of ten thousand diamonds possessing a natural color, these types
          of stones are extremely rare.
          <br />
          <br />
          Depending on the coloration, intensity, and hue of a diamond, color
          can either detract or enhance its value. Naturally occurring diamond
          colors include gray, white, blue, yellow, orange, red, green, olive,
          pink, purple, brown, and black. Red stones are the most rare of the
          fancy colored diamonds.
        </p>
      </div>

      <div className="para">
        <h2>Classifications for fancy colour diamonds</h2>
        <p>
          <span style={{ fontWeight: "bold" }}>Brilliance</span> relates to the
          reflection of white light <br />
          <span style={{ fontWeight: "bold" }}>Fire</span> is the dispersion of
          light into the colors of the rainbow <br />
          <span style={{ fontWeight: "bold" }}>Scintillation</span> is the play
          of contrast between dark and light areas—it’s the sparkle <br />
        </p>
      </div>

      <div className="image-container">
        <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/education-images/diamond-education/topic-wise/fancy-color-diamond.jpg" />
      </div>
    </DiamondTopicEducationBox>
  );
}
