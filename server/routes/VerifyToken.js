// Import necessary modules
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Secret key used to sign the tokens
const secretKey = '/Phc{m=MG$nv)UNb&j8k?djaRD)-FQ/3QK,aYT}9a/):FmSk2H';

// Verify token function
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded; // Token is valid
  } catch (error) {
    return null; // Token is invalid
  }
}

// Route for token verification
router.post('/verifyToken', (req, res) => {
  const { accessToken } = req.body;
  if (!accessToken) {
    return res.status(400).json({ error: 'Access token is required' });
  }
  const decodedToken = verifyToken(accessToken);
  if (decodedToken) {
    // Token is valid, send success response
    return res.json({ isValid: true });
  } else {
    // Token is invalid, send error response
    return res.json({ isValid: false });
  }
});

// Export the router
module.exports = router;
