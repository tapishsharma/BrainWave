const User = require("../../../models/user");
const userSignUpValidator = (req, res, next) => {
  const { name, email, password, mobileNumber, gender } = req.body;
  //  check if email is string and valid
  if (!email || typeof email !== "string") {
    return res.status(401).json({ status: "error", message: "Invalid emails" });
  }
  // check if name is string and valid
  if (!name || typeof name !== "string") {
    return res.status(401).json({ status: "error", message: "Invalid name" });
  }

  // check if gender is string and valid
  if (!gender || typeof gender !== "string") {
    return res.status(401).json({ status: "error", message: "Invalid Gender" });
  }
  // check if password is string and valid
  if (!password || typeof password !== "string") {
    return res
      .status(401)
      .json({ status: "error", message: "Invalid password" });
  }
  // check password length
  if (password.length < 6) {
    return res.status(401).json({
      status: "error",
      message: "Password must be at least 6 characters",
    });
  }

  // check if email and phoneNumber are unique
  User.findOne({ email: email }).then((user) => {
    if (user) {
      return res
        .status(401)
        .json({ status: "error", message: "Email already exists" });
    }
    User.findOne({ mobileNumber: mobileNumber }).then((user) => {
      if (user) {
        return res
          .status(401)
          .json({ status: "error", message: "phoneNumber already exists" });
      }
      next();
    });
  });
};
module.exports = userSignUpValidator;
