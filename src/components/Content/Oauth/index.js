import React, { useEffect, useState } from "react";
import OauthPageBox from "./style";
import { accountService } from "../../../services/accountService";

export default function OauthPage() {
  const [displayFlex, setDisplayFlex] = useState(true);

  useEffect(() => {
    if (window.location.pathname === "/checkout") {
      setDisplayFlex(false);
    }
  }, []);

  return (
    <OauthPageBox status={displayFlex}>
      <div className="login-button-container" onClick={accountService.fbLogin}>
        <img
          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/mailer/social-facebook.png"
          alt="facebook"
        />
        <p>Facebook</p>
      </div>

      <div
        className="login-button-container"
        onClick={accountService.googleLogin}
      >
        <img
          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/mailer/social-google.png"
          alt="google"
        />
        <p>Google</p>
      </div>
    </OauthPageBox>
  );
}
