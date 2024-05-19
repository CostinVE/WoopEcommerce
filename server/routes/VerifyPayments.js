const express = require('express');
const router = express.Router();


// Initialize Stripe with your secret key
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/verifypayment', async (req, res) => {
  const { paymentMethodId } = req.body;

  try {
    // Retrieve the payment method to verify its existence
    const paymentMethod = await stripe.paymentMethods.retrieve(paymentMethodId);

    // Return success response if payment method is retrieved successfully
    res.status(200).json({
      success: true,
      message: 'Payment method verified successfully',
      paymentMethod: paymentMethod
    });
  } catch (error) {
    // Handle error if the payment method is not valid or any other error occurs
    res.status(500).json({
      success: false,
      message: 'Payment method verification failed',
      error: error.message
    });
  }
});

module.exports = router;

