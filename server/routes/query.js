const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const QueryForm = require("../models/queryForm");

router.post("/ask-query", async (req, res) => {
  const { fname, email, phone, country, query } = req.body;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
    //   user: "info@luxurygemsco.com",
    //   pass: "Saarvi0503",
      user: 'ujjwalsden@gmail.com',
      pass: 'perfect_sense'
    },
  });

  let mailOptions = {
    from: "info@luxurygemsco.com",
    to: "uvshrivas@gmail.com",
    subject: `Query from ${fname}`,
    text: `Fullname: ${fname}
    Email: ${email}
    Phone: ${phone}
    Country: ${country}
    Query: ${query}`
  };
  try {
    await QueryForm.create({name: fname, email:email, phone, country, query});
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.json({
          success: false,
          message: "Something went wrong mail!",
        });
      } else {
        res.json({
          success: true,
          message: "Good job!",
        });
      }
    });    
  } catch (error) {
    console.log('error: ', error);
    res.json({
      success: false,
      message: "Something went wrong!"
    });
  }


});

module.exports = router;
