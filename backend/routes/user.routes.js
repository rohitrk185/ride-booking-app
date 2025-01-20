const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

router.post("/register", [
  body("email").isEmail().withMessage("Invalid Email"),
  body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("First Name must be atleast 3 characters long"),
]);

module.exports = router;
