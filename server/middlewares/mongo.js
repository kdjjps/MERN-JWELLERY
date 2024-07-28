require("dotenv").config();
const { mongoDBKey } = require("../config");

const setMongoAPI = (req, res, next) => {
  let data = JSON.stringify({
    collection: req.body.collection,
    database: "products",
    dataSource: "LGC",
  });

  let mongoConfig = {
    method: "post",
    url: "https://data.mongodb-api.com/app/data-glodu/endpoint/data/beta/action/find",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": mongoDBKey,
    },
    data: data,
  };

  req.mongoConfig = mongoConfig;
  next();
};

module.exports = setMongoAPI;