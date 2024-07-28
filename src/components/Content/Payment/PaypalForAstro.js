import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default function PaypalForAstro({ handleSubmit, propsData }) {
  console.log("Rendering PaypalForAstro");
  console.log("propsData:", propsData);

  const PayPalButton = window?.paypal?.Buttons.driver("react", {
    React,
    ReactDOM,
  });
  if (!PayPalButton) {
    return <div>Error: PayPal SDK not available.</div>;
  }

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: parseFloat(propsData.amount),
          },
        },
      ],
      application_context: {
        shipping_preference: "NO_SHIPPING",
      },
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(async (details) => {
      if (details.status === "COMPLETED") {
        const data = new FormData();

        data.append("fname", propsData.fname);
        data.append("gender", propsData.gender);
        data.append("dob", propsData.dob);
        data.append("birthCountry", propsData.birthCountry);
        data.append("birthProvince", propsData.birthProvince);
        data.append("birthPlace", propsData.birthPlace);
        data.append("residenceCountry", propsData.residenceCountry);
        data.append("residenceProvince", propsData.residenceProvince);
        data.append("residencePlace", propsData.residencePlace);
        data.append("mobile", propsData.mobile);
        data.append("email", propsData.email);
        data.append("query", propsData.query);

        for (let i = 0; i < propsData.rightHandImages.length; i++) {
          data.append("rightHandFile", propsData.rightHandImages[i]);
        }

        for (let i = 0; i < propsData.leftHandImages.length; i++) {
          data.append("leftHandFile", propsData.leftHandImages[i]);
        }

        axios
          .post("/astro/mail-to-site-owner", data)
          .then((response) => {
            console.log("Done!");
          })
          .catch((e) => {
            console.log("Upload Error");
          });
        window.location = "/thankyou";
      }
    });
  };

  return (
    <div>
      <PayPalButton
        createOrder={(data, actions) =>
          handleSubmit() && createOrder(data, actions)
        }
        onApprove={(data, actions) =>
          handleSubmit() && onApprove(data, actions)
        }
      />
    </div>
  );
}
