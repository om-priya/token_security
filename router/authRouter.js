const express = require("express");
const authRouter = express.Router();
const { authenticateUser } = require("../middleware/authenticate");
const { isTokenPresent, blackListToken } = require("../middleware/checkToken");
const { generateToken } = require("../libs/jwtToken");

authRouter.route("/login").post(authenticateUser, generateToken);
authRouter.route("/logout").get(isTokenPresent, blackListToken, (req, res) => {
  return res.send({ message: "Logged Out" });
});

module.exports = { authRouter };
