const jwt = require("jsonwebtoken");

const generateToken = (req, res, next) => {
  let token = jwt.sign({ password: "password" }, process.env.SECRET_KEY, {
    algorithm: "HS256",
  });
  return res.send({ token: `${token}` });
};

module.exports = { generateToken };
