const dotenv = require("dotenv");

// config() will read .env file, parse the contents, assign it to process.env.
dotenv.config();

module.exports = {
  dbUrl: "mern-db.cxmgscqok5d0.ap-south-1.rds.amazonaws.com",
  dbUser: process.env.DBUSER || "admin",
  dbPassword: process.env.DBPASSWORD || "wyS0mBm0F2XAdgvgMpH9",
  dbSchema: process.env.DBSCHEMA || "MERN-APP",
  dbPort: process.env.DBPORT || "3306",
  port: process.env.PORT || "8000",

  // mongoURI:
  //   process.env.MONGODB_URI ||
  //   "mongodb+srv://admin:durgesh999@lgc.o8p8j.mongodb.net/",

  mongoDBKey:
    process.env.MONGODB_KEY ||
    "OdWxsepw3XZ1XquTQmgwGZ6HNFumizlMpuRyNMVa2DUlJObDaDNNHzljBYNqXRkI",
  env: process.env.NODE_ENV || "development",
  logDir: process.env.LOGDIR || "logs",
  viewEngine: process.env.VIEW_ENGINE || "html",
  kumarToken: process.env.KUMAR_TOKEN || "defaultToken",
  kumarPartyId: process.env.KUMAR_PARTYID || "defaultPartyId",
};
