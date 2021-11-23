const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const data = require("../data.js");
const User = require("../models/userModel.js");
const generateToken = require("../utils.js");
const { registerUser, authUser } = require("../controller/userControllers.js");

const userRouter = express.Router();

// API
userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

userRouter.route("/").post(registerUser);
// userRouter.route("/signin").post(authUser);
userRouter.post("/signin", authUser);

module.exports = userRouter;
