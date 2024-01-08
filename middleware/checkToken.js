const blackList = [];

const isTokenPresent = (req, res, next) => {
  if (req.headers["token"] == null)
    return res.send({ message: "Login First to logout" });
  next();
};

const isTokenBlacklist = (req, res, next) => {
  if (blackList.indexOf(req.headers["token"]) == -1) next();
  return res.send({ message: "Invalid Token" });
};

const blackListToken = (req, res, next) => {
  blackList.push(req.headers["token"]);
  next();
};

module.exports = { isTokenPresent, isTokenBlacklist, blackListToken };
