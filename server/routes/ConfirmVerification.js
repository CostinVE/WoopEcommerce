const express = require('express');
const router = express.Router();
const db = require("../models/");

// Define a route handler for GET requests to fetch a verification code by code
// Define a route handler for GET requests to fetch a verification code by code
router.get("/verification-codes", async (req, res) => {
    try {
        const { code } = req.query;

        // Find the verification code by code
        const verificationCode = await db.verificationcodes.findOne({
            where: { code: code }
        });

        // Check if a verification code is found
        if (!verificationCode) {
            return res.status(404).json({ error: "Verification code not found" });
        }

        // Send the JSON response with the verification code
        res.json(verificationCode);
    } catch (error) {
        console.error("Error fetching verification code:", error);
        res.status(500).json({ error: "Failed to fetch verification code" });
    }
});



module.exports = router;