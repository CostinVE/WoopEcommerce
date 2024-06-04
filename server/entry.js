// Import necessary modules
require('dotenv').config(); // Add this line to load environment variables
const express = require("express");
const app = express();
const cors = require("cors");
const db = require('./models');

// Middleware
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests only from http://localhost:3000
    credentials: true // Allow cookies to be sent with the request
  }));

// Import routers
const usersRouter = require('./routes/Users');
const emailRouter = require('./routes/VerificationCode');
const verificationCodesRouter = require('./routes/ConfirmVerification')
const verifyTokenRouter = require('./routes/VerifyToken')
const verifyPaymentRouter = require('./routes/VerifyPayments')
const deliveryAddressRouter = require('./routes/DeliveryRoute')
const privacyCookiesRouter = require('./routes/PrivacyRoute')
const storesMenuRouter = require('./routes/MenuRoute')


app.use("/auth", usersRouter);
app.use("/", emailRouter);
app.use("/", verifyPaymentRouter)
app.use("/", verifyTokenRouter)
app.use("/", storesMenuRouter)
app.use("/api", verificationCodesRouter);

app.use("/address", deliveryAddressRouter)
app.use("/cookies", privacyCookiesRouter)


db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server is running /Port 3001")
})
});
