const jwt = require('jsonwebtoken')
const service = require('../service/users')

const verifyToken = async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      console.log(token)
  
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  
      const user = await service.getUserById(decodedToken.userId)
  
      if (!user) {
        throw new Error('Invalid token.');
      }
  
      req.user = user;
  
      next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid token.' });
    }
  };

module.exports = verifyToken