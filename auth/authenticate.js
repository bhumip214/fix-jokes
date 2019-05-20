const tokenService = require("./token-service");

// quickly see what this file exports
module.exports = {
  authenticate
};

// implementation details
async function authenticate(req, res, next) {
  const token = req.get("Authorization");

  if (token) {
    const decoded = await tokenService.verifyToken(token);
    req.decoded = decoded;
    next();
  } else {
    return res.status(401).json({
      error: "No token provided, must be set on the Authorization Header"
    });
  }
}
