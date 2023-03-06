// queries.js

const User = require('./users')
const Task = require('./tasks')
const Group = require('./groups')

const createUser = async (name, email, password) => {
  try {
    const user = await User.create({ name, email, password });
    return user;
  } catch (error) {
    console.log(error);
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
  createUser,
  getTasksAndGroupsByUserId,
};
