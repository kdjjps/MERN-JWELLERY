import React from "react";
import { DiamondTopicEducationBox } from "../style";

export default function DiamondCut() {
  return (
    <DiamondTopicEducationBox>
      <h1>Diamond Cut</h1>

      <div className="para">
        <h2>What is the cut of a diamond?</h2>
        <p>
          The cut of a diamond refers not to its shape, but to the balance of
          proportion, symmetry and polish achieved by the diamond cutter. The
          extent of how well the diamond is cut is directly correlated to the
          diamond’s overall beauty. The better a diamond has been cut, the
          greater the diamond’s ability to reflect and refract light. Modern
          diamond cutters understand the way that light moves through diamonds
          and have established a set of specific proportions and angles to best
          optimize the diamond’s internal brilliance and show it in its best
          light.
        </p>
      </div>

      <div className="para">
        <h2>Characteristics Of A Well-Cut Diamond</h2>
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
        <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/education-images/diamond-education/topic-wise/diamond-cut.jpg" />
      </div>

      <div className="info-table">
        <h2>Diamond Cut Chart</h2>
        <table>
          <tr>
            <th>Cut</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Excellent</td>
            <td>
              Exquisite quality cut to create the optimal combination of
              brilliance and fire. Reflects nearly all light that enters the
              diamond. Top 3% of diamond quality based on cut.
            </td>
          </tr>
          <tr>
            <td>Very Good</td>
            <td>
              Superior quality cut that reflects nearly as much light as the
              excellent cut while at a substantially lower cost.
            </td>
          </tr>
          <tr>
            <td>Good</td>
            <td>
              Premium quality cut to optimize the size without sacrificing
              quality or beauty. Reflects most light that enters.
            </td>
          </tr>
          <tr>
            <td>Fair</td>
            <td>
              Adequate quality cut that reflects some light while maximizing
              weight. While not as brilliant as a good cut, still a quality
              diamond.
            </td>
          </tr>
          <tr>
            <td>Poor</td>
            <td>
              Diamonds with poor cut grades often appear glassy or dull, or just
              plain small.
            </td>
          </tr>
        </table>
      </div>
    </DiamondTopicEducationBox>
  );
}
