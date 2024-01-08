const authenticateUser = (req, res, next) => {
  if (true) {
    next();
  } else {
    return res.send({ message: "Wrong Credentials" });
  }
};

module.exports = { authenticateUser };
