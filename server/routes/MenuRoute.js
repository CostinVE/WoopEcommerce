const express = require('express');
const router = express.Router();
const db = require("../models/");

router.get('/stores', async (req, res) => {
    try {
      await db.storeslist.findAll()
       .then(storeslist => {
          console.log('Storeslist records:', storeslist);
          res.status(200).json(storeslist);
        });
    } catch (error) {
      console.error('Error during storeslist retrieval:', error);
      res.status(500).json({
        success: false,
        message: 'Storeslist retrieval failed',
        error: error.message
      });
    }
  });

  
  module.exports = router;