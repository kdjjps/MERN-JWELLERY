const express = require("express");
const router = express.Router();
const axios = require("axios");
const User = require("../models/user");
const JWT = require("../middlewares/jwt");
const bcrypt = require("bcryptjs");
const saltRounds = bcrypt.genSaltSync(10);

router.use(JWT.authenticateJWT);

router.post("/authenticate-facebook-access-token", async (req, res) => {
  const { accessToken } = req.body;

  const fbTokenVerficationResponse = await axios.get(
    `https://graph.facebook.com/v8.0/me?fields=id,name,email,birthday&access_token=${accessToken}`
  );
  const { data } = fbTokenVerficationResponse;

  let userDetails = {
    userId: data.id,
    fname: data.name.split(" ")[0],
    email: data.email,
  };

  let password = 'password';

  const jwtToken = JWT.signJWT(userDetails);

  res.setHeader("authorization", jwtToken);

  if (data.error) return data.error.message;

  const user = await User.findOne({
    where: {
      email: data.email,
    },
  });

  let userNameArray = data.name.split(" ");

  if (!user) {
    bcrypt.hash(password, saltRounds).then((hash) => {
        return User.create({
            fname: userNameArray[0],
            lname: userNameArray[1],
            email: data.email,
            password: hash,
            role: "customer",
            signupMethod: "social",
          })
            .then((result) => {
              res.json({
                success: true,
                message: "Login successful!",
                responseData: {
                  fname: userNameArray[0],
                  email: data.email,
                },
              });
            })
            .catch((err) => {
              res.json({
                success: false,
                message: `Error: ${err}`,
              });
            });
    })
    
  } else {
    res.json({
      success: true,
      message: "Login successful!",
      responseData: {
        fname: userNameArray[0],
        email: data.email,
      },
    });
  }
});

module.exports = router;
