import React, { useState } from "react";
import HelpBox from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Help({ setHelpFormStatus, helpFormStatus }) {
  const [status, setStatus] = useState(false);

  const changeStatus = () => {
    setStatus(!status);
  };

  return (
    <HelpBox status={status}>
      <div>
        <a href="tel:+919326226145">
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/phone-icon.png"
            width={"36px"}
            height={"36px"}
            alt="help-phone-icon"
          />
        </a>
      </div>
      <div onClick={() => setHelpFormStatus(!helpFormStatus)}>
        <img
          src="https://images.vexels.com/media/users/3/199829/isolated/lists/5fbbd48566c0929680fb8cf0f60226da-chat-bubbles-icon-chat-bubbles-icon.png"
          width={"36px"}
          height={"36px"}
          alt="help-chat-icon"
        />
      </div>
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=+919326226145&text=Thank you for reaching out to Luxury Gems Company! How can we help you?"
          target="_blank"
        >
          <img
            src="https://i.pinimg.com/originals/79/dc/31/79dc31280371b8ffbe56ec656418e122.png"
            width={"36px"}
            height={"36px"}
            alt="help-whatsapp-icon"
          />
        </a>
      </div>
      <div onClick={changeStatus}>
        <p id="help">Help?</p>
        <FontAwesomeIcon
          id="cross-icon"
          icon={faTimes}
          style={{ color: "#FFD700", fontSize: "1.7rem" }}
        />
      </div>
    </HelpBox>
  );
}
