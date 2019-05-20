const jwt = require("jsonwebtoken");

const secrets = require("../config/secrets.js");

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
    // ...otherData
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

function verifyToken(token) {
  return jwt.verify(token, secrets.jwtSecret);
}

module.exports = {
  generateToken,
  verifyToken
};
