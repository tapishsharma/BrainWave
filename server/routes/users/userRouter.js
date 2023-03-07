const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const generateToken = require("../../middlewares/jwtVerify");
const isAuth = require("../../middlewares/isAuth");
const expressAsyncHandler = require("express-async-handler");
const userSignUpValidator = require("./controller/userSignUpValidator");
const userLoginValidator = require("./controller/userLoginValidator");
const User = require("../../models/user");
const JWT_SECRET = require("../../config/keys").development.jwtSecret;

const userRouter = express.Router();

//route for signup requests
userRouter.post(
  "/signup",
  userSignUpValidator,
  expressAsyncHandler(async (req, res) => {
    const password = await bcrypt.hash(req.body.password, 10);
    try {
      var createdDoctor = await User.create({
        name: req.body.name,
        mobileNumber: req.body.mobileNumber,
        email: req.body.email,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city,
        password: password,
        gender: req.body.gender,
        
      });
      const authToken = generateToken(createdDoctor);
      res.status(201).json({
        status: "success",
        data: authToken,
        name: createdDoctor.name,
        _id: createdDoctor._id,
        email: createdDoctor.email,
      });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({
          message: "User already exists",
        });
      }
      return res.status(500).json({
        message: error,
      });
    }
  })
);

// route for login requests
userRouter.post(
  "/login",
  userLoginValidator,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
      });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }
    const authToken = generateToken(user);
    res.status(200).json({
      status: "success",
      data: authToken,
      name: user.name,
      _id: user._id,
      email: user.email,
      isDoctor: user.isDoctor,
    });
  })
);

// get userDetails by id
userRouter.get(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: user,
    });
  })
);

module.exports = userRouter;
