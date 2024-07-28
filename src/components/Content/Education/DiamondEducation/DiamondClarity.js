import React from "react";
import { DiamondTopicEducationBox } from "../style";

export default function DiamondClarity() {
  return (
    <DiamondTopicEducationBox>
      <h1>Diamond Clarity</h1>

      <div className="para">
        <h2>What is diamond clarity?</h2>
        <p>
          Diamond clarity is a grade on a scale from Flawless to Included, which
          measures the amount and locations of inclusions in a diamond.
          An inclusion is an internal or external characteristic or flaw which
          occurs during the Earth’s natural process of diamond formation. The
          majority of diamonds contains inclusions that are undetectable to the
          unaided eye.
        </p>
      </div>

      <div className="image-container">
        <img
          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/education-images/diamond-education/topic-wise/diamond-clarity.jpg"
          alt="diamond-clarity"
        />
      </div>

      <div className="info-table">
        <h2>Diamond Clarity Chart</h2>
        <table>
          <tr>
            <th>Clarity</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>FL</td>
            <td>
              Flawless (FL) is the best clarity of a diamond as it does not
              contain any inclusions or blemishes, under the scrutiny of 10x
              magnification.
            </td>
          </tr>
          <tr>
            <td>IF</td>
            <td>
              Internally Flawless (IF) diamonds may contain external
              characteristics (also known as blemishes) that are extremely
              difficult to view at 10x magnification on the stone's surface.
            </td>
          </tr>
          <tr>
            <td>
              VVS1
              <br />
              VVS2
            </td>
            <td>
              Very Very Slightly Included (VVS1, VVS2) diamonds earn this
              grading because, unlike their Flawless or Internally Flawless
              bretherin, they do contain inclusions that are so minute that
              they're extremely difficult to locate under 10x magnification used
              by expert gemologist to determine a stones clarity.
            </td>
          </tr>
          <tr>
            <td>
              VS1
              <br />
              VS2
            </td>
            <td>
              Very Slightly Included (VS1, VS2) diamonds also contain minute
              inclusions, such as clouds, crystals, or feathers, but, unlike
              Very Very Slightly Included diamonds, Very Slightly
              Inlcuded stones' inclusions, though miniscule are only just
              difficult to locate with 10x magnification, rather than being
              extreamly difficult.
            </td>
          </tr>
          <tr>
            <td>
              S1
              <br />
              S2
            </td>
            <td>
              Slightly Included diamonds (SI1, SI2, SI3) contain inclusions that
              are noticiable to the human eye such as clouds, knots, crystals,
              cavities, and feathers. However pronounced and numerous there are
              without magnification, thought, is what determines a diamond is
              either Slightly Included or fully Included.{" "}
            </td>
          </tr>
          <tr>
            <td>
              I1
              <br />
              I2
              <br />
              I3
            </td>
            <td>
              Diamonds that are graded as Included (I1, I2, I3) contain very
              obvious inclusions that can usually be seen with the naked eye,
              and even more underneath 10x magnification.  Included diamonds
              sometimes display poor transparency and lack of brilliance due to
              excessive clouds, feathers, knots, cavities and crystals large and
              deep enough to be confused for smudges or cracks. Inspite of these
              blemishes, Included diamonds are still able to sell well enough,
              inspite of being considered undesirable as compared to a higher
              clarity graded stone.
            </td>
          </tr>
        </table>
      </div>
    </DiamondTopicEducationBox>
  );
}
