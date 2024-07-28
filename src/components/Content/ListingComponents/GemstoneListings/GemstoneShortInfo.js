import React from "react";
import { useParams } from "react-router-dom";
import { GemstoneShortInfoBox } from "./style";
import aboutGemstone from "../../../../fakedata/aboutGemstone";

export default function GemstoneShortInfo() {
  const { gemstone } = useParams();

  const gemItem = aboutGemstone.find((item, index) => {
    return item.gemstone === gemstone;
  });

  return (
    <GemstoneShortInfoBox>
      <div>
        <h2>
          {gemItem.gemstone} ({gemItem.hindiName})
        </h2>
        <img
          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/misc/aboutgemstoneline.png"
          alt="about-gemstone"
        />
        <p>{gemItem.summary}</p>
      </div>
      <img src={gemItem.imgURL} />
    </GemstoneShortInfoBox>
  );
}
