const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.sendStatus(401).json({ msg: 'No token, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded.user;

    next();
  } catch (error) {
    res.sendStatus(401).json({ msg: 'token invalid' });
  }
};
