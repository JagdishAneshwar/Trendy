const express = require("express");
const { privateKey } = require("../config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// Route : 1 : It creates the user using POST: http://localhost:5000/api/auth/createuser
router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("passwordConfirmation").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password confirmation does not match password");
      }

      // Indicates the success of this synchronous custom validator
      return true;
    }),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      let success = false;
      const { name, email, password } = req.body;
      // Giving all the errors from validation
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Checking whether user already exists or not
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json("User Already Exists");
      }

      // Crypting the password
      var salt = await bcrypt.genSaltSync(10);
      var secPassword = await bcrypt.hashSync(password, salt);

      // Saving the user data in database
      user = await User.create({
        name,
        email,
        password: secPassword,
      });

      // Using id to create token
      let data = {
        user: {
          id: user.id,
        },
      };
      var token = jwt.sign(data, privateKey);
      // Giving successful response
      success = true;
      res.json({ token, success });
    } catch (error) {
      return res
        .status(400)
        .json({ Error: error, Message: "Internal Server Error" });
    }
  }
);

// Route 2: Authenticate user using POST: "api/auth/login"

router.post(
  "/login",
  [body("email").isEmail(), body("password", "it can not be blank").exists()],
  async (req, res) => {
    // validation of email and paasword
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    // cheching for email exits or not
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: "Please try to login with correct credentials" });
      }

      // checking whether password matches or not
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ errors: "Please try to login with correct credentials" });
      }

      // JWT authentication
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, privateKey);
      res.json({ token });
    } catch (err) {
      console.error(err.message);
      res.json({ error: "internal Server Error", err: err.message });
    }
  }
);

module.exports = router;
