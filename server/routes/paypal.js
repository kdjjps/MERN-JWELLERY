require("dotenv").config();
const express = require("express");
const axios = require("axios");
const router = express.Router();
const paypalClientId =
  "AWcvEBIvBYDaui81uS1zO9bpfmNAA_jlrCcyipKtq0n_YBbtXsrwU_FF9Fmno7uYXRt0Qm5qN1OaWVgm";
const paypalSecret =
  "cqWm8aKfZpfX1crjLmRS_ExXJeSDd2eBbEp8kAeYLKnpdIpnQ13Agn-ntHFxZxfdO";
const paypalAPI = "https://api-m.sandbox.paypal.com";

// paypal.configure({
//     'mode': 'sandbox', //sandbox or live
//     'client_id': paypalClientId,
//     'client_secret': paypalSecret
//   });

// var create_payment_json = {
//     "intent": "sale",
//     "payer": {
//         "payment_method": "paypal"
//     },
//     "redirect_urls": {
//         "return_url": "http://127.0.0.1:3000/thankyou",
//         "cancel_url": "http://127.0.0.1:3000/mens-rings"
//     },
//     "transactions": [{
//         "item_list": {
//             "items": [{
//                 "name": "item",
//                 "sku": "item",
//                 "price": "1.00",
//                 "currency": "USD",
//                 "quantity": 1
//             }]
//         },
//         "amount": {
//             "currency": "USD",
//             "total": "1.00"
//         },
//         "description": "This is the payment description."
//     }]
// };

// router.post('/create-payment',(req,res)=>{
//     paypal.payment.create(create_payment_json, function (error, payment) {
//         if (error) {
//             throw error;
//         } else {
//             console.log("Create Payment Response");
//             console.log(payment);
//         }
//     });
//     res.json({
//         status: 2000
//     })
// })

router.post("/create-order", async (req, res) => {
  try {
    const oauthResponse = await axios({
      url: "https://api.paypal.com/v1/oauth2/token",
      method: "post",
      headers: {
        Accept: "application/json",
        "Accept-Language": "en_US",
        "content-type": "application/x-www-form-urlencoded",
      },
      auth: {
        username: paypalClientId,
        password: paypalSecret,
      },
      params: {
        grant_type: "client_credentials",
      },
    });

    res.json({
      data: oauthResponse.data,
    });
    alert(JSON.stringify(oauthResponse));
  } catch (error) {
    console.log(error);
  }
});

router.post("/execute-order", (req, res) => {
  let paymentID = req.body.paymentID;
  let payerID = req.body.payerID;

  const accessToken = req.body.accessToken;

  axios.post(
    paypalAPI + "/v1/payments/payment/" + paymentID + "/execute",
    {
      auth: {
        user: paypalClientId,
        pass: paypalSecret,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: {
        payer_id: payerID,
        transactions: [
          {
            amount: {
              total: "10.99",
              currency: "USD",
            },
          },
        ],
      },
      json: true,
    },
    function (err, response) {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
      res.json({
        status: "success",
      });
    }
  );
});

module.exports = router;
