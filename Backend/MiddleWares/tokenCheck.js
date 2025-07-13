// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  let token;
  console.log('hii');
  if (req.query.token) {
    token = req.query.token;
  } else if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // You can fetch user info from DB here
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token failed' });
  }
};

module.exports = protect;
