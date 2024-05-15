const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser'); // Import cookie-parser
const { Users } = require("../models");
const { sign } = require("jsonwebtoken");

const axios = require('axios');


const db = require("../models");

// Enable cookie parsing middleware
router.use(cookieParser());

function randomGenerator() {
    let secretCode = '';
    let characters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890{}:<>?[];',.";
    let length = 12;
    for (let i = 0; i < length; i++) {
        const randomString =  Math.floor(Math.random() * characters.length);
        secretCode += characters[randomString];
    }
    return secretCode;
}

router.post("/", async (req, res) => {
    const { first_name, last_name, email, gender, datejoined, birthday, password, emailcode } = req.body;

    try {       
        const hash = await bcrypt.hash(password, 10);
        const user = await db.Users.create({
            first_name: first_name,
            last_name: last_name,
            password: hash,
            email: email,
            gender: gender,
            datejoined: datejoined,
            birthday: birthday
        });
        console.log("User created:", user);
        res.json("USER CREATED");
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Failed to create user" });
    }
});

// router.put("/update", async (req, res) => {
//     console.log("PUT request received to update access token");
//     const { accessToken, email } = req.body;
//     console.log("Received access token:", accessToken);
//     console.log("Received email:", email);
  
//     try {
//       const userUpdate = await Users.findOne({ where: { email: email } });
//       console.log("User found:", userUpdate);
//       // Update the user's access token here
//     } catch (error) {
//       console.error('Error updating access token:', error);
//       res.status(500).json({ error: "Internal server error" });
//     }
//   });
  
  

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email: email } });
       
    if (!user) {
        return res.json({ error: "User doesn't exist" });
    }

    bcrypt.compare(password, user.password).then(async (match) => {
        if (!match) {
            return res.json({ error: "The password is incorrect" });
        }

        const thirtyMinutesInMs = 1800000
        const expirationDate = new Date(Date.now() + thirtyMinutesInMs);

        const accessToken = sign({ id: user.id, email: user.email, first_name: user.first_name, last_name: user.last_name }, '/Phc{m=MG$nv)UNb&j8k?djaRD)-FQ/3QK,aYT}9a/):FmSk2H');

        res.cookie('accessToken', accessToken, { 
            domain: 'localhost', // Set domain to localhost
            expires: expirationDate
          });

          res.cookie('email', email, { 
            domain: 'localhost', // Set domain to localhost
            expires: expirationDate
          });
          

        
        return res.json(accessToken);
    });
});

router.get("/data", async (req, res) => {
    try {
      const { email } = req.query; // Retrieve email from query parameters
      const user = await Users.findOne({ where: { email: email } });
  
      if (!user) {
        return res.json({ error: "User data could not be found" });
      }
  
      const userData = {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        gender: user.gender,
        datejoined: user.datejoined,
        birthday: user.birthday
      };
    res.json(userData);
    
    } catch (error) {
      console.error("Error retrieving user data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

module.exports = router;




