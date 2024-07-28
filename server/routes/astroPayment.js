require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const router = express.Router();

router.post("/orders", async (req, res, next) => {
  try {
    let amount = parseFloat(req.body.astroBillAmount);
    let currency = req.body.currencyCode;
    let receipt = req.body.receipt;

    const options = {
      amount: amount * 100, // amount in smallest currency unit
      currency: currency,
      receipt,
      payment_capture: 1,
    };

    // const instance = new Razorpay({
    //   key_id: "rzp_test_fWZVJwq4dgKntN",
    //   key_secret: "U8R0o1RdkLD9jrZIrko8fQot",
    // });

    const instance = new Razorpay({
      key_id: "rzp_live_YfeTKHwyfIZ5w1",
      key_secret: "hQOCcDxxiGqKUZmQDO311mlj",
    });

    const order = await instance.orders.create(options);

    if (!order) {
      return res.status(500).json({ error: "Failed to create order" });
    }

    res.json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    // Send an appropriate HTTP status code based on the error
    if (error.statusCode) {
      res.status(error.statusCode).json({ error: error.error });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

router.post("/success", async (req, res) => {
  try {
    // getting the details back from our font-end
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    } = req.body;

    // Creating our own digest
    // The format should be like this:
    // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
    const shasum = crypto.createHmac("sha256", "w2lBtgmeuDUfnJVp43UpcaiT");

    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

    const digest = shasum.digest("hex");

    // comaparing our digest with the actual signature
    if (digest !== razorpaySignature)
      return res.status(400).json({ msg: "Transaction not legit!" });

    // THE PAYMENT IS LEGIT & VERIFIED
    // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

    res.json({
      msg: "success",
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
