const userLoginValidator = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || typeof email !== "string") {
    return res.status(401).json({
      status: "error",
      message: "Invalid Email",
    });
  }
  if (!password || typeof password !== "string") {
    return res.status(401).json({
      status: "error",
      message: "Invalid Password",
    });
  }
  next();
};
module.exports = userLoginValidator;
