import React from "react";
import { DiamondTopicEducationBox } from "../style";

export default function DiamondFluorescence() {
  return (
    <DiamondTopicEducationBox>
      <h1>Diamond Fluorescence</h1>

      <div className="para">
        <h2>What is diamond fluorescence?</h2>
        <p>
          Fluorescence is the tendency of a diamond to emit a (soft) glow when
          exposed to ultraviolet light (UV light). This can cause them to emit a
          bluish light or more rarely, a yellow or orangy light.
          The fluorescence effect is present in over 30% of diamonds and is an
          important consideration when buying a loose diamond.
        </p>
      </div>

      <div className="image-container">
        <img
          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/education-images/diamond-education/topic-wise/diamond-fluorescence.jpg"
          alt="diamond-fluroscence"
        />
      </div>

      <div className="info-table">
        <h2>Diamond Fluorescence Chart</h2>
        <table>
          <tr>
            <th>Fluorescence</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>None</td>
            <td>No fluorescence, no influence on color.</td>
          </tr>
          <tr>
            <td>Faint</td>
            <td>
              Weak fluorescence, not a significant influence on color (barely
              perceptible).
            </td>
          </tr>
          <tr>
            <td>Medium</td>
            <td>Average fluorescence, small influence.</td>
          </tr>
          <tr>
            <td>Strong, Extremly Strong</td>
            <td>Strong fluorescence, substantial color influence.</td>
          </tr>
        </table>
      </div>
    </DiamondTopicEducationBox>
  );
}
