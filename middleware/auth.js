const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");

module.exports = (req, res, next) => {
  // 1. get token from header
  const { authorization } = req.headers;

  // 2. check token exists and starts with "Bearer "
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).send({ message: "Authorization required" });
  }

  // 3. extract token (remove "Bearer ")
  const token = authorization.replace("Bearer ", "");

  // 4. verify token
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload; // 5. save user data to request
    next(); // 6. continue to next middleware
  } catch (err) {
    return res.status(401).send({ message: "Authorization required" });
  }
};
