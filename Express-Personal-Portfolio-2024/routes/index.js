var express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator');
const sanitizeHtml = require('sanitize-html');

const nodemailer = require('nodemailer');
require('dotenv').config();
const path = require('path');



// Set up a transporter object with your email service provider's SMTP details.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_PASS
  },
  authMethod: 'login' // Specify the authentication method as 'login'
});

// Define the route to handle POST requests
router.post('/contact',
  [
    body('name').notEmpty().withMessage('Name is required').trim().escape(),
    body('email').isEmail().withMessage('Invalid email').normalizeEmail(),
    body('message').notEmpty().withMessage('Message is required').trim().escape()
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const clientName = sanitizeHtml(req.body.name);
    const clientEmail = sanitizeHtml(req.body.email);
    const clientMessage = sanitizeHtml(req.body.message);

    console.log(clientEmail, clientMessage);

    // Handle the email sending
    const mailOptions1 = {
      from: process.env.MY_EMAIL,
      to: clientEmail,
      subject: `Auto reply - I've got your message!`,
      text: `Hi ${clientName} Thanks so much for getting in touch.
I've been notified about your email and I'll get back in touch as soon as possible.
See Your message below:
${clientMessage}`
    };

    const mailOptions2 = {
      from: process.env.MY_EMAIL,
      to: 'developeramuk@gmail.com', // Specify the recipient for the second email
      subject: 'Portfolio Notification: New Message Received',
      text: `You've received a new message from ${clientEmail}.
You have already generated an auto response!
Message: 

${clientMessage}`
    };

    // Send the first email
    transporter.sendMail(mailOptions1, function (error1, info1) {
      if (error1) {
        console.log(error1);
        res.send('Error sending email');
      } else {
        console.log('First email sent: ' + info1.response);
        // Send the second email after the first one is sent
        transporter.sendMail(mailOptions2, function (error2, info2) {
          if (error2) {
            console.log(error2);
            res.send('Error sending email');
          } else {
            console.log('Second email sent: ' + info2.response);
            res.status(200).json({ msg: 'Email sent successfully' });
          }
        });
      }
    });
  });







/* DOWNLOAD CV */
router.post('/downloadcv', (req, res) => {
  const password = req.body.password;
  if (password === 'tst6677') {
    const filePath = path.join(__dirname, '..', 'files', 'testPDF.pdf');
    console.log(__dirname, '..', 'files', 'testPDF.pdf');
    res.sendFile(filePath, (err) => {
      if (err) {
        res.status(500).send('File not found');
      } else {
        return res.status(200); // Return success status after sending file
      }
    });
    return; // Stop further execution here
  } else if (password === 'gnrl6677') {
    const filePath = path.join(__dirname, '..', 'files', 'generalPDF.pdf');
    console.log(__dirname, '..', 'files', 'generalPDF.pdf');
    res.sendFile(filePath, (err) => {
      if (err) {
        res.status(500).send('File not found');
      } else {
        return res.status(200); // Return success status after sending file
      }
    });
    return; // Stop further execution here
  } else {
    res.status(400).json({ msg: 'password incorrect' });
  }
});





module.exports = router;
