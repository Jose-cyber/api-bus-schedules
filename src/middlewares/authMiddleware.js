const jwt = require('jsonwebtoken');
require('dotenv').config()

function verifyToken(req, res, next) {
  const [, token] = req.headers.authorization?.split(' ') || [' ', ' '];

  if (!token) return res.status(401).json({ error: 'Access denied' });
    
  try {
    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    req.userId = decoded.userId;
    next();
  } catch (error) {
      return res.status(401).json({ error: 'Invalid token' });
  }
 };

module.exports = verifyToken;