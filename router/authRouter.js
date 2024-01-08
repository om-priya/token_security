const express = require("express");
const authRouter = express.Router();
const { authenticateUser } = require("../middleware/authenticate");
const { generateToken } = require("../libs/jwtToken");

authRouter.route("/login").post(authenticateUser, generateToken);

module.exports = { authRouter };
