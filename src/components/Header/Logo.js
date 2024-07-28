import React from "react";
import { LogoBox } from "./style";
import { Link } from "react-router-dom";

export default function Logo({ scrolledPixels }) {
  return (
    <LogoBox pixels={scrolledPixels}>
      <Link id="logo-2" to="/">
        <img
          src={
            "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/logo-main.png"
          }
          alt="company-logo"
        ></img>
      </Link>
    </LogoBox>
  );
}
