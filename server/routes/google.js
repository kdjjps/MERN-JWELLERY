const express = require("express");
const router = express.Router();
const User = require("../models/user");
const JWT = require("../middlewares/jwt");
const bcrypt = require("bcryptjs");
const saltRounds = bcrypt.genSaltSync(10);
const CLIENT_ID =
  "1030736647713-od5hmftgh92g5rd549j3v36ecsagqpnk.apps.googleusercontent.com";

const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(CLIENT_ID);

router.use(JWT.authenticateJWT);

router.post("/authenticate-google-access-token", async (req, res) => {
  const { id_token } = req.body;

  const ticket = await client.verifyIdToken({
    idToken: id_token,
    audience: CLIENT_ID,
  });

  const payload = ticket.getPayload();

  if (payload.email) {
    let userDetails = {
      fname: payload.given_name,
      email: payload.email,
    };

    let password = "password";

    const jwtToken = JWT.signJWT(userDetails);

    res.setHeader("authorization", jwtToken);

    const user = await User.findOne({
      where: {
        email: payload.email,
      },
    });

    if (!user) {
      bcrypt.hash(password, saltRounds).then((hash) => {
        return User.create({
          fname: payload.given_name,
          lname: payload.family_name,
          email: payload.email,
          password: hash,
          role: "customer",
          signupMethod: "social",
        })
          .then((result) => {
            res.json({
              success: true,
              message: "Login successful!",
              responseData: {
                fname: payload.name,
                email: payload.email,
              },
            });
          })
          .catch((err) => {
            res.json({
              success: false,
              message: `Error: ${err}`,
            });
          });
      });
    } else {
      res.json({
        success: true,
        message: "Login successful!",
        responseData: {
          fname: payload.name,
          email: payload.email,
        },
      });
    }
  }
});

module.exports = router;
