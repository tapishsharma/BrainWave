const jwt = require("jsonwebtoken");
// get jwt secret from development environment
const JWT_SECRET = "someSecretString";
const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({
          message: "Invalid token",
        });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.status(401).json({
      message: "No token provided",
    });
  }
};

module.exports = isAuth;
