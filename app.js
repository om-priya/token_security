require("dotenv").config();
const express = require("express");
const { authRouter } = require("./router/authRouter");
const { authenticateToken } = require("./libs/jwtToken");
const { isTokenBlacklist } = require("./middleware/checkToken");
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  return res.send("Home Page");
});
app.use(authRouter);

app.get("/private", authenticateToken, isTokenBlacklist, (req, res) => {
  return res.send("Private INFO");
});

try {
  app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
  });
} catch (error) {
  console.log(error);
}
