const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const db = require("../models/");

function generateRandomCode() {
    let code = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 6;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
    return code;
  }

// Define your email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'costinve@gmail.com', // Your Gmail email address
    pass: 'omyx pesj wjos gtmf', // Your Gmail password or app password
  },
});

// Define the route to handle sending emails
router.post('/send-email', async (req, res) => {
  const { email } = req.body;

  try {
    const randomCode = generateRandomCode();

    // Define email options
    const mailOptions = {
      from: 'costinve@gmail.com', // Sender address
      to: email, // Receiver address
      subject: 'Welcome to Woop!', // Subject line
      text: `Thank you for joining Woop! Your verification code is: ${randomCode}`, // Email body with random code
    };

    await db.verificationcodes.create({
        email: email,
        code: randomCode,
        created_at: new Date()
      });

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

module.exports = router;