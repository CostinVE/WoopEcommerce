const express = require('express');
const router = express.Router();
const db = require("../models/");

router.post('/privacy', async (req, res) => {
    try {
        const {
            email,
            strict,
            performance,
            experiences,
            advertising
        } = req.body;

        
         await db.privacy.create({ // Note the lowercase 'privacy' here
            email: email,
            strict: strict,
            performance: performance,
            experiences: experiences,
            advertising: advertising
        });

        // Return success response with the inserted data
        res.status(200).json({
            success: true,
            message: 'New cookies added successfully',
            
        });
    } catch (error) {
        console.error('Error during delivery address update:', error);
        res.status(500).json({
            success: false,
            message: 'Update failed',
            error: error.message
        });
    }
});

router.get('/:email', async (req, res) => {
    try {
        const email = req.params.email;

        // Find privacy settings for the provided email
        const privacySettings = await db.privacy.findOne({
            where: { email: email }
        });

        if (!privacySettings) {
            return res.status(404).json({ success: false, message: 'Privacy settings not found for the provided email' });
        }

        res.status(200).json({ success: true, privacySettings: privacySettings });
    } catch (error) {
        console.error('Error fetching privacy settings:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch privacy settings', error: error.message });
    }
});

module.exports = router;


