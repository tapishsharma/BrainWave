const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    mongoURI: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    razorpayClientId: process.env.RAZORPAY_CLIENT_ID,
  },
  production: {
    mongoURI: process.env.MONGO_PROD_URI,
    jwtSecret: process.env.JWT_PROD_SECRET,
    razorpayClientId: process.env.RAZORPAY_PROD_CLIENT_ID,
  },
};
