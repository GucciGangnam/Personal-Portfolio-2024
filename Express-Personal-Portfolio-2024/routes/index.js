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


/**
 * Checks if an IP address is a private (reserved) IP address.
 * Private IP ranges:
 * 10.0.0.0 - 10.255.255.255 (10/8 prefix)
 * 172.16.0.0 - 172.31.255.255 (172.16/12 prefix)
 * 192.168.0.0 - 192.168.255.255 (192.168/16 prefix)
 * 127.0.0.0 - 127.255.255.255 (Loopback)
 * 169.254.0.0 - 169.254.255.255 (Link-local)
 * @param {string} ip The IP address to check.
 * @returns {boolean} True if the IP is private, false otherwise.
 */
function isPrivateIp(ip) {
  const parts = ip.split('.').map(Number);
  if (parts.length !== 4) {
    return false; // Not a valid IPv4 format
  }

  // Loopback
  if (parts[0] === 127) {
    return true;
  }

  // Private ranges
  if (parts[0] === 10) {
    return true;
  }
  if (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) {
    return true;
  }
  if (parts[0] === 192 && parts[1] === 168) {
    return true;
  }

  // Link-local (APIPA)
  if (parts[0] === 169 && parts[1] === 254) {
    return true;
  }

  return false;
}

router.post('/harvester', async (req, res) => {
  const harvestedData = req.body;

  const event = harvestedData.event;
  const device = harvestedData.device;
  const currentPage = harvestedData.currentPage;
  const currentTime = harvestedData.currentTime;

  // --- Change 'const' to 'let' here ---
  const userIp = req.ip; // Initialize with req.ip as a fallback

  // You can also consider using app.set('trust proxy', true) if using Express.
  // This will make req.ip itself resolve to the correct forwarded IP.
  // If you use this, you might not even need the 'x-forwarded-for' logic here.

  // Harvest additional information from request headers
  const userAgent = req.headers['user-agent'] || 'N/A';
  const referrer = req.headers['referer'] || req.headers['referrer'] || 'N/A';
  const acceptLanguage = req.headers['accept-language'] || 'N/A';

  let locationData = {};
  // Check if the IP is private before attempting geolocation
  // Make sure your isPrivateIp function also handles IPv6 loopback '::1'
  if (isPrivateIp(userIp) || userIp === '::1') { // Added check for '::1' specifically
    locationData = {
      country: 'N/A (Private IP)',
      regionName: 'N/A (Private IP)',
      city: 'N/A (Private IP)',
      zip: 'N/A (Private IP)',
      lat: 'N/A',
      lon: 'N/A',
      isp: 'N/A (Private IP)',
      error: 'IP address is a private or reserved range, cannot be geolocated publicly.'
    };
    console.log(`Skipping geolocation for private IP: ${userIp}`);
  } else {
    try {
      const response = await fetch(`http://ip-api.com/json/${userIp}`);
      const data = await response.json();

      if (data.status === 'success') {
        locationData = {
          country: data.country,
          regionName: data.regionName,
          city: data.city,
          zip: data.zip,
          lat: data.lat,
          lon: data.lon,
          isp: data.isp
        };
      } else {
        console.error('IP Geolocation API error:', data.message);
        locationData = { error: `Failed to get location: ${data.message}` };
      }
    } catch (error) {
      console.error('Error fetching IP geolocation:', error);
      locationData = { error: `Error during location lookup: ${error.message}` };
    }
  }

  const mailOptions1 = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Somebody viewed your ${currentPage} page!`,
    text: `User profile session ended.

Event: ${event}
currentPage: ${currentPage}
Device: ${device}
TimeStamp: ${currentTime}
User IP Address: ${userIp}
Rough Location:
  Country: ${locationData.country || 'N/A'}
  Region: ${locationData.regionName || 'N/A'}
  City: ${locationData.city || 'N/A'}
  ISP: ${locationData.isp || 'N/A'}
  Latitude: ${locationData.lat || 'N/A'}
  Longitude: ${locationData.lon || 'N/A'}
  ${locationData.error ? `(Error: ${locationData.error})` : ''}

Additional Request Info:
  User-Agent: ${userAgent}
  Referrer: ${referrer}
  Accept-Language: ${acceptLanguage}`
  };

  console.log('sending email with ip', userIp);

  transporter.sendMail(mailOptions1, function (error1, info1) {
    if (error1) {
      console.log(error1);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info1.response);
      res.status(200).send('Email sent successfully');
    }
  });
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
    const filePath = path.join(__dirname, '..', 'files', 'Alexander_Micklewright_CV.pdf');
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
