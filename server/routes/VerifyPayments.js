const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const db = require('../models');


// Verify Payment Endpoint
router.post('/verifypayment', async (req, res) => {
  try {
    // Create a new payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount || 1000, // Example amount in cents
      currency: req.body.currency || 'usd',
      payment_method: req.body.payment_method || 'pm_card_visa',
    });

    // Return success response with client secret
    res.status(200).json({
      success: true,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    // Handle errors
    console.error('Error during payment verification:', error);
    res.status(500).json({
      success: false,
      message: 'Payment verification failed',
      error: error.message,
    });
  }
});



router.post('/payment/updatepaymentmethod', async (req, res) => {
  try {
    const { email, cardNumber, expDate, cvc } = req.body;

    // Create a new payment method record in the database
    const newPaymentMethod = await db.PaymentMethods.update({
      email: email,
      cardnumber: cardNumber,
      expirydate: expDate,
      CVC: cvc
    });

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Payment method updated successfully',
      paymentMethod: newPaymentMethod
    });
  } catch (error) {
    console.error('Error during payment method update:', error);

    // Log the error object for debugging
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Payment method update failed',
      error: error.message
    });
  }
});

module.exports = router;