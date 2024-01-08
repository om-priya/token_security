require("dotenv").config();
const express = require("express");
const { authRouter } = require("./router/authRouter");
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.use(authRouter);
try {
  app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
  });
} catch (error) {
  console.log(error);
}
