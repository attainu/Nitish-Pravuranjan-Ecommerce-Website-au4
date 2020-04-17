const jwt = require('jsonwebtoken');
const secret = require('config').get('jwtSecret');

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
