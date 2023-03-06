const sequelize = require('../models/sequelize')
const User = require('../models/users')
const Task = require('../models/tasks')
const Group = require('../models/groups')


const getUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    throw error;
  }
};
const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
    return user;
  } catch (error) {
    throw error;
  }

}


const getUserByUsername = async (username) => {
  try {
    const user = await User.findOne({ where: { username } });
    return user;
  } catch (error) {
    throw error;
  }

}

const createUser = async (username, email, password) => {
  try {
    const user = await User.create({ username, email, password });
    await user.save()
    return user;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (username,email, password, id) => {
  try {
    console.log(username, email, password)
    const user = await User.findByPk(id);
    if (username !== undefined) {
      user.username = username;
    }

    if (email !== undefined) {
      user.email = email;
    }

    if (password !== undefined) {
      user.password = password;
    }
    console.log(user)
    if (!user) {
      throw new Error(`User with id ${id} not found.`);
    }
    user.username = username;
    await user.save();
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error(`User with id ${id} not found.`);
    }
    await user.destroy();
  } catch (error) {
    throw error;
  }
};

const getTasksAndGroupsByUserId = async (userId) => {
  try {
    console.log('getTasks')
    const user = await User.findByPk(userId, {
      include: [{ model: Task }, { model: Group }],
    });
    console.log(user.dataValues)
    return user.dataValues;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getTasksAndGroupsByUserId,
  getUserByEmail,
  getUserByUsername
};
