const mongoose = require("mongoose");
const mongoURI =
  require("../config/keys").development.mongoURI ||
  "mongodb+srv://tapish:0ulNNB49czEhW9S1@cluster0.zkn1laz.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async () => {
  // Create the database connection
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log("Failed to connect to DB");
      // format the error message
      console.log(`Error Code: ${err.code} and Error Message: ${err.message}`);
    });
};

module.exports = connectDB;
