const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config/keys").development.jwtSecret;
const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      name: user.name,
    },
    process.env.JWT_SECRET || "someSecretString",
    {
      expiresIn: "10d",
    }
  );
};

module.exports = generateToken;
