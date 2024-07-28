// Include Sequelize module
const { Sequelize } = require("sequelize");
const config = require("../config");

const express = require("express");
const app = express();

// Increase payload limit to handle larger requests
app.use(express.json({ limit: "1mb" }));

// Creating new Object of Sequelize
const sequelize = new Sequelize(
  `${config.dbSchema}`,
  `${config.dbUser}`,
  `${config.dbPassword}`,
  {
    // Explicitly specifying
    // mysql database
    dialect: "mysql",

    // By default host is 'localhost'
    host: "mern-db.cxmgscqok5d0.ap-south-1.rds.amazonaws.com",
  }
);

// Exporting the sequelize object.
// We can use it in another file
// for creating models
module.exports = sequelize;
