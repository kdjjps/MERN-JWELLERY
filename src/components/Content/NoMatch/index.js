import React from "react";
import NoMatchBox from "./style";

export default function NoMatch() {
  return (
    <NoMatchBox>
      <div className="error-display">
        <span>4</span>
        <img
          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/misc/error-ring.jpg"
          alt="error-404-ring"
        />
        <span>4</span>
      </div>
      <div className="error-message">
        <h1>Whoops, our bad...</h1>
        <p style={{ fontWeight: "bold" }}>
          The page you requested was not food
        </p>
        <a href="/">Home</a>
      </div>
    </NoMatchBox>
  );
}
