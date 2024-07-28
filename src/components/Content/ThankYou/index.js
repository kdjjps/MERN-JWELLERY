import React from "react";
import ThankYouPageBox from "./style";

export default function ThankYouPage() {
  return (
    <ThankYouPageBox>
      <h1>Thank You!</h1>
      <h2>Your order was completed successfully</h2>
      <section>
        <img
          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/email.png"
          alt="email-icon"
        />
        <p>
          A receipt including the details about your order has been sent to the
          email address provided. Please keep it for your reference.
        </p>
      </section>
      <section>
        <img
          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/user-account.png"
          alt="user-icon"
        />
        <p>
          You can visit the My Account page at any time to check the status of
          your order. To visit now, click here.
        </p>
      </section>
    </ThankYouPageBox>
  );
}
