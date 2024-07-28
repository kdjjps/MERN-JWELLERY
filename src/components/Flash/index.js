import React from "react";
import { FlashBox } from "./style";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Flash() {
  const data = useSelector((state) => state);
  const flashState = data.flashReducer;

  return (
    <FlashBox status={flashState.status}>
      <h2>Success!</h2>
      <p>{flashState.message}</p>
      <FontAwesomeIcon icon={faCheck} style={{ fontSize: "40px" }} />
    </FlashBox>
  );
}
