const jwt         = require("jsonwebtoken");

const secret      = process.env.JWT_SECRET;

function verifyJWT(token){
  if (!token) return;
  try {
    return jwt.verify(token, secret)
  }
  catch (e){
    return []
    //throw { httpCode: 401, message: e }
  }
}

function signJWT(payload){
  return jwt.sign(payload, secret, { expiresIn: "12hr" });
}

module.exports = {
  verifyJWT,
  signJWT
}
