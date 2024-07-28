import React from "react";
import { DiamondTopicEducationBox } from "../style";

export default function DiamondColor() {
  return (
    <DiamondTopicEducationBox>
      <h1>Diamond Color</h1>

      <div className="para">
        <h2>What is diamond color?</h2>
        <p>
          Colour of a diamond refers to the natural tint characteristic in white
          diamonds. In nature, most white diamonds have a slight tint of yellow.
          The closer to being “colourless” a diamond is, the rarer it is, thus
          more costly. The industry standard for grading colour is to assess
          each diamond against a master set and assign a letter grade from “D”
          (colourless) to “Z” (light yellow).
        </p>
      </div>

      <div className="image-container">
        <img
          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/education-images/diamond-education/topic-wise/diamond-color.jpg"
          alt="diamond-color"
        />
      </div>

      <div className="info-table">
        <h2>Diamond Color Chart</h2>
        <table>
          <tr>
            <th>D E F</th>
            <th>G H I J</th>
            <th>K L M</th>
            <th>N O P Q R</th>
            <th>S T U V W X Y Z</th>
          </tr>
          <tr>
            <td>Colorless</td>
            <td>Near Colorless</td>
            <td>Faint Yellow</td>
            <td>Very Light Yellow</td>
            <td>Light Yellow</td>
          </tr>
        </table>
      </div>

      <div className="para">
        <h2>What Are Fancy-Colored Diamonds?</h2>
        <p>
          Diamonds that exhibit a color other than light yellow or brown, as
          well as diamonds that possess a more intense yellow or brown than the
          'Z' color rating, are considered fancy color diamonds. With only one
          out of ten thousand diamonds possessing a natural color, these types
          of stones are extremely rare. Depending on the coloration, intensity,
          and hue of a diamond, color can either detract or enhance its value.
          Naturally occurring diamond colors include gray, white, blue, yellow,
          orange, red, green, olive, pink, purple, brown, and black. Red stones
          are the most rare of the fancy colored diamonds.
        </p>
      </div>
    </DiamondTopicEducationBox>
  );
}
