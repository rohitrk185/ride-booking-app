const blacklistTokenModel = require("../models/blacklistToken.model");
const userModel = require("../models/user.model");
const { createUser } = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  const hashedPassword = await userModel.hashPassword(password);

  const user = await createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();

  console.log("User created successfully");
  return res.status(201).json({ token, user });
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({ message: "Invalid Email/Password" });
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid Email/Password" });
  }

  const token = await user.generateAuthToken();

  res.cookie("token", token);

  return res.status(200).json({ token, user });
};

module.exports.getUserProfile = async (req, res, next) => {
  return res.status(200).json(req.user);
};

module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie("token");

  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  await blacklistTokenModel.create({ token });
  res.clearCookie("token");

  return res.status(200).json({ message: "User Logged-out" });
};
