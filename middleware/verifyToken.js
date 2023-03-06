const jwt = require('jsonwebtoken')
const service = require('../service/users')

const verifyToken = async (req, res, next) => {
    try {
      // get the token from the Authorization header
      const token = req.headers.authorization.split(' ')[1];
      console.log(token)
  
      // verify the token using the JWT_SECRET
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  
      // get the user from the database
      const user = await service.getUserById(decodedToken.userId)
  
      // check if the user exists
      if (!user) {
        throw new Error('Invalid token.');
      }
  
      // set the user object on the request object
      req.user = user;
  
      next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid token.' });
    }
  };

module.exports = verifyToken