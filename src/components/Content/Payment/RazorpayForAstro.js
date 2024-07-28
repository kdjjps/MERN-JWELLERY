import React from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function RazorpayForAstro({ handleSubmit, data }) {
  const [cookies, setCookie] = useCookies();

  const currencyCode = cookies.currencyCode;

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post("/astro-payment/orders", {
      astroBillAmount: data.amount,
      currencyCode,
      receipt: "receipt_order_743914",
    });

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    console.log("qwertyuytrewertytrertytrertytrertytr", result);

    const { amount, id, currency } = result.data;

    const options = {
      // key: "rzp_test_fWZVJwq4dgKntN",
      key: "rzp_live_YfeTKHwyfIZ5w1",
      amount: amount,
      currency: currency,
      name: "Luxury Gems Company",
      description: "Diamond & Jewelry Shopping",
      order_id: id,
      handler: function (response) {
        const formData = new FormData();

        formData.append("fname", data.fname);
        formData.append("gender", data.gender);
        formData.append("dob", data.dob);
        formData.append("birthCountry", data.birthCountry);
        formData.append("birthProvince", data.birthProvince);
        formData.append("birthPlace", data.birthPlace);
        formData.append("residenceCountry", data.residenceCountry);
        formData.append("residenceProvince", data.residenceProvince);
        formData.append("residencePlace", data.residencePlace);
        formData.append("mobile", data.mobile);
        formData.append("email", data.email);
        formData.append("query", data.query);

        for (let i = 0; i < data.rightHandImages.length; i++) {
          formData.append("rightHandFile", data.rightHandImages[i]);
        }

        for (let i = 0; i < data.leftHandImages.length; i++) {
          formData.append("leftHandFile", data.leftHandImages[i]);
        }

        console.log("formmmm", JSON.stringify(formData));

        axios
          .post("/astro/mail-to-site-owner", formData)
          .then((response) => {
            console.log("Done!", JSON.stringify(response));
          })
          .catch((e) => {
            console.log("Upload Error", JSON.stringify(e));
          });
        window.location = "/thankyou";
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);

    paymentObject.open();
  };

  return (
    <button
      style={{ width: "50%", marginBottom: "20px" }}
      onClick={() => {
        if (handleSubmit()) {
          displayRazorpay();
        }
      }}
    >
      Pay Now
    </button>
  );
}
