const express = require("express");
const router = express.Router();
const User = require("../models/user");
const nodemailer = require("nodemailer");
const axios = require("axios");
const JWT = require("../middlewares/jwt");
const bcrypt = require("bcryptjs");
const saltRounds = bcrypt.genSaltSync(10);
const validator = require("validator")

router.use(JWT.authenticateJWT);

router.post("/signup", async (req, res) => {
  const { fname, lname, email, password } = req.body;

  if (validator.isStrongPassword(password, {
    minLength: 8, minLowercase: 1,
    minUppercase: 1, minNumbers: 1, minSymbols: 1
  })){

    // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      // user: 'info@luxurygemsco.com',
      // pass: 'Saarvi0503'
      user: "ujjwalsden@gmail.com",
      pass: "perfect_sense",
    },
  });

  const user = await User.findOne({
    where: {
      email: email,
    },
  });

  if (!user) {
    bcrypt
      .hash(password, saltRounds)
      .then((hash) => {
        // Store hash in your password DB.

        return User.create({
          fname: fname,
          lname: lname,
          email: email,
          password: hash,
          role: "customer",
          signupMethod: "reg",
        });
      })
      .then(() => {
        // send mail with defined transport object
        transporter.sendMail({
          from: "Luxury Gems Company <info@luxurygemsco.com>", // sender address
          to: `${email}`, // list of receivers
          subject: "Welcome From Luxury Gems", // Subject line
          text: "Hello world?", // plain text body
          html: { path: __dirname + "/../view/mailer.html" }, // html body
        });

        let userDetails = { fname, email };

        const accessToken = JWT.signJWT(userDetails);

        res.setHeader("authorization", accessToken);

        res.json({
          success: true,
          message: "Successfully Signed Up",
          responseData: {
            fname,
            email,
          },
        });
      })
      .catch((err) => {
        res.json({
          success: false,
          message: `Error: ${err}`,
        });
      });
  } else {
    res.json({
      success: false,
      message: "Email Already Exists",
    });
  }
  }
  else{
    res.json({
      success: false,
      message: "Password not strong",
    });
  }
});

router.post("/login", async (req, res) => {
  // Read email and password from request body
  const CAPTCHA_SECRET_KEY = "6Lcj_rYaAAAAAGlmSfnL5x9HLprXsQKzEAM57Wz0";

  // Filter user from the users array by email and password
  const captchaSuccess = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${CAPTCHA_SECRET_KEY}&response=${req.body.token}`
  );

  if (captchaSuccess.data.success) {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (user) {

      const validPassword = await bcrypt.compareSync(
        req.body.password,
        user.password
      );
      
      if (validPassword) {
        // Generate a JWT token

        let userDetails = {
          fname: user.dataValues.fname,
          email: user.dataValues.email,
        };

        const accessToken = JWT.signJWT(userDetails);

        res.setHeader("authorization", accessToken);

        res.json({
          success: true,
          message: "Login successful!",
          responseData: {
            fname: user.dataValues.fname,
            email: user.dataValues.email,
          },
        });
      } else {
        res.status(400).json({ success: false, error: "Invalid Password" });
      }
    } 
    else {
      res.json({
        success: false,
        message: "User not found!",
      });
    }
  } else {
    res.json({
      success: false,
      message: "Cannot find captcha response!",
    });
  }
});

router.get("/verify-user", JWT.authenticateJWT, async (req, res) => {
  if (req.verifiedData) {
    res.json({
      success: true,
      user: req.verifiedData.user,
    });
  } else {
    res.json({
      success: false,
      message: "Please login with correct credentials!",
    });
  }
});

module.exports = router;
