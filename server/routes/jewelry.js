const express = require("express");
const router = express.Router();
const axios = require("axios");
const setMongoAPI = require("../middlewares/mongo");

router.use(setMongoAPI);

router.post("/", async (req, res) => {
  try {
    let response = await axios(req.mongoConfig);
    console.log("URLLLLL", response.data.documents);
    res.send(JSON.stringify(response.data.documents));
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: e,
    });
  }
});

module.exports = router;
