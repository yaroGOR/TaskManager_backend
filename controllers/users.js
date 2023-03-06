const { request, response } = require('express');
const services = require('../service/users')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await services.createUser(username, email, hashedPassword)
    console.log(user)

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

    res.status(201).json({ user, token });
  } catch (error) {
    throw error ;
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email)
    const user = await services.getUserByEmail(email)
    console.log(user)

    if (!user) {
      throw new Error('Invalid email or password.');
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      throw new Error('Invalid email or password.');
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

    res.status(200).json({ user, token });
  } catch (error) {
    throw error;
  }
};


// update the JWT token for an existing user
const updateToken = async (req, res) => {
  try {
    // generate a new JWT token using the user ID from the request
    const token = jwt.sign({ userId: req.userId }, process.env.JWT_SECRET);

    res.json({ token });
  } catch (error) {
    error;
  }
};


const getUsers = async (request, response) => {
    try {
      const users = await services.getUsers();
      response.status(200).send({ users });
    } catch (error) {
      throw error;
    }
  };
  
  // get simple user with req.params.id: id
  const getUserById = async (request, response) => {
    try {
      const id = parseInt(request.params.id);
      const user = await services.getUserById(id)
      response.status(200).json(user);
      } catch (error) {
      throw error;
      }
      
  };
  
  const createUser = async (request, response) => {
    try {
      console.log('create user')
      const { username, email, password } = request.body;
      await services.createUser(username, email, password)
      response.status(201).json({msg:"user created"});
    } catch (error) {
      throw error;
    }
  };
  
  
  const updateUser = async (request, response) => {
    try {
      const id = parseInt(request.params.id);
      const { username, email, password } = request.body;
      await services.updateUser(username, email, password, id)
      response.status(200).send(`user modified with ID: ${id}`);
    } catch (error) {
      throw error;
    }
  };
  
  
  const deleteUser = async (request, response) => {
    try {
      const id = parseInt(request.params.id);
      await services.deleteUser(id)
      response.status(200).send(`User deleted with ID: ${id}`);
    } catch (error) {
      throw error;
    }
  };

const getTasksForUser = async (request, response) => {
  try {
    const id = parseInt(request.params.id);
   const data =  await services.getTasksAndGroupsByUserId(id)
   response.status(200).json(data)
  } catch(error) {
    throw error
  }
}
  

  module.exports = {
    register,
    login,
    updateToken,
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getTasksForUser
}