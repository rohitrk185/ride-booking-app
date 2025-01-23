const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { registerUser } = require("../controllers/user.controller");

router.post(
  "/register",
  (req, res, next) => {
    console.log("req.body: ", req.body);
    next();
  },
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First Name must be atleast 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 characters long"),
  ],
  registerUser
);

module.exports = router;
