const jwt = require("jsonwebtoken");
const { encrypt_token, decrypt_token } = require("../utils/encrypt");

const generateToken = (req, res, next) => {
  let token = jwt.sign(
    { exp: Math.floor(Date.now() / 1000) + 60 * 60, password: "password" },
    process.env.SECRET_KEY,
    {
      algorithm: "HS256",
    }
  );
  token = encrypt_token(token);
  return res.send({ token: `${token}` });
};

const authenticateToken = (req, res, next) => {
  const authHeaders = req.headers["token"];

  if (authHeaders == null) return res.send({ message: "unauth access" });

  const decrypted_token = decrypt_token(authHeaders);

  jwt.verify(decrypted_token, process.env.SECRET_KEY, (err) => {
    if (err) return res.send({ message:"Invalid Token"});
    next();
  });
};
module.exports = { generateToken, authenticateToken };
