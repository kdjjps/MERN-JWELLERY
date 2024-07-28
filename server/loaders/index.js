const expressLoader = require("./express");
const sequelize = require("./mysql");
const User = require("../models/user");
const Wishlist = require("../models/wishlist");
const Order = require("../models/order");
const ShippingAddress = require("../models/shippingAddress");
const BillingAddress = require("../models/billingAddress");
const PurchasedLooseDiamond = require("../models/purchasedLooseDiamond");
const PurchasedLooseGemstone = require("../models/purchasedLooseGemstone");
const PurchasedCustomJewelry = require("../models/purchasedCustomJewelry");
const PurchasedPresetJewelry = require("../models/purchasedPresetJewelry");
const PurchasedGemstoneJewelry = require("../models/purchasedGemstoneJewelry");
const PurchasedFashionJewelry = require("../models/purchasedFashionJewelry");
const PurchasedMensJewelry = require("../models/purchasedMensJewelry");
const QueryForm = require('../models/queryForm');

module.exports = {
  init: async (expressApp) => {
    console.log("MySQL Intialized");

    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }

    await User.sync();
    await Wishlist.sync();
    await Order.sync();
    await ShippingAddress.sync();
    await BillingAddress.sync();
    await PurchasedLooseDiamond.sync();
    await PurchasedLooseGemstone.sync();
    await PurchasedCustomJewelry.sync();
    await PurchasedPresetJewelry.sync();
    await PurchasedGemstoneJewelry.sync();
    await PurchasedFashionJewelry.sync();
    await PurchasedMensJewelry.sync();
    await QueryForm.sync();
    console.log(
      "The table for the User, Wishlist, Order, Address & Product Purchased models were just created!"
    );

    await expressLoader(expressApp);
    console.log("Express Intialized");
  },
};
