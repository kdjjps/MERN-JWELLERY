const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const multer = require("multer");
const bodyParser = require("body-parser");
const cors = require("cors");

router.use(cors());
router.use(express.static("images"));
// for parsing application/json
router.use(bodyParser.json());

// for parsing application/xwww-
router.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage }).fields([
  {
    name: "rightHandFile",
    maxCount: 1,
  },
  {
    name: "leftHandFile",
    maxCount: 1,
  },
]);

router.post("/mail-to-payer", async (req, res) => {
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

  // send mail with defined transport object
  transporter.sendMail({
    from: "Luxury Gems Company <info@luxurygemsco.com>", // sender address
    to: `${email}`, // list of receivers
    subject: "Receipt for palmistry", // Subject line
    text: "Reciept for palmistry", // plain text body
    html: "<p>Thank you for reaching out to us for palmistry. This is your formal reciept. Save it for future reference.</p>", // html body
  });

  res.json({
    success: true,
    message: "Email successfully sent!",
  });
});

router.post("/mail-to-site-owner", async (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.end("Something went wrong!");
    } else {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "info@luxurygemsco.com",
          pass: "Saarvi0503",
          // user: "ujjwalsden@gmail.com",
          // pass: "perfect_sense",
        },
      });

      // send mail with defined transport object
      transporter.sendMail({
        from: "Luxury Gems Company <info@luxurygemsco.com>", // sender address
        to: `${req.body.email}`, // list of receivers
        subject: "New Palmistry Request", // Subject line
        text: "Reciept for palmistry", // plain text
        html: "<p>You have got new request for palmistry. Details of client are as follows: </p>", // html body
        attachments: [
          {
            filename: req.files.rightHandFile[0].filename,
            path: req.files.rightHandFile[0].path,
          },
          {
            filename: req.files.leftHandFile[0].filename,
            path: req.files.leftHandFile[0].path,
          },
        ],
      });

      console.log(req.files);

      res.json({
        success: true,
        message: "Email successfully sent!",
      });
    }
  });
});

module.exports = router;
