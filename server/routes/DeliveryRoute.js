const express = require('express');
const router = express.Router();
const db = require("../models/");

router.post('/delivery', async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            street,
            "APP/BUILDING/SUITE": appBuildingSuite,
            POSTCODE,
            TOWN,
            COUNTRY,
            PHONE
        } = req.body;

        // Create a new delivery record in the database
        const newDelivery = await db.delivery.create({
            first_name: first_name,
            last_name: last_name,
            street: street,
            "APP/BUILDING/SUITE": appBuildingSuite,
            POSTCODE: POSTCODE,
            TOWN: TOWN,
            COUNTRY: COUNTRY,
            PHONE: PHONE
        });

        // Return success response with the inserted data
        res.status(200).json({
            success: true,
            message: 'Address updated successfully',
            delivery: newDelivery
        });
    } catch (error) {
        console.error('Error during delivery address update:', error);
        res.status(500).json({
            success: false,
            message: 'Address update failed',
            error: error.message
        });
    }
});

module.exports = router;
