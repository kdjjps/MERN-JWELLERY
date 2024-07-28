const express = require("express");
const cors = require("cors");
const path = require("path");
const session = require("express-session");

module.exports = async (app) => {
  app.use(cors());
  app.use(express.json()); //Used to parse JSON bodies
  app.use(express.urlencoded()); //Parse URL-encoded bodies
  app.use(session({ secret: "thebatman" }));
  app.use(express.static(path.join(__dirname, "/../../build")));

  app.use("/address", require("../routes/address.js"));

  app.use("/bespoke", require("../routes/bespoke.js"));

  app.use("/order", require("../routes/order.js"));

  app.use("/payment", require("../routes/payment.js"));

  app.use("/astro", require("../routes/astro.js"));

  app.use("/astro-payment", require("../routes/astroPayment.js"));

  app.use("/api", require("../routes/api.js"));

  app.use("/jewelry", require("../routes/jewelry"));

  app.use("/user", require("../routes/user.js"));

  app.use("/query", require("../routes/query.js"));

  app.use("/help", require("../routes/help.js"));

  app.use("/paypal", require("../routes/paypal.js"));

  app.use("/country", require("../routes/country.js"));

  app.use("/user-specific", require("../routes/wishlist.js"));

  app.use("/facebook", require("../routes/facebook.js"));

  app.use("/google", require("../routes/google.js"));

  app.use("/product", require("../routes/product.js"));

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  });

  app.get("*", function (req, res) {
    res.sendFile(
      path.join(__dirname, "/../../build/index.html"),
      function (err) {
        if (err) {
          res.status(500).send(err);
        }
      }
    );
  });

  // Return the express app
  return app;
};
