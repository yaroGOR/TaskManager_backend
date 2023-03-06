const sequelize = require('../models/sequelize')
const Task = require('../models/tasks')

const getTasks = async () => {
  try {
    const tasks = await Task.findAll();
    return tasks;
  } catch (error) {
    throw error;
  }
};

const getTaskById = async (id) => {
  try {
    const task = await Task.findByPk(id);
    return task;
  } catch (error) {
    throw error;
  }
};

const createTask = async (title, description) => {
  console.log('create task service')
  try {
    const task = await Task.create({ title, description});
    return task;
  } catch (error) {
    throw error;
  }
};

const updateTask = async (title, description,userId, groupId, id) => {
  try {
    
    const task = await Task.findByPk(id);
    console.log(task)
    console.log("title", title, description, userId, groupId)
    if (!task) {
      throw new Error(`Task with id ${id} not found.`);
    }
    if (title !== undefined) {
      task.title = title;
    }

    if (description !== undefined) {
      task.description = description;
    }

    if (userId !== undefined) {
      task.user_id = userId;
    }

    if (groupId !== undefined) {
      task.group_id = groupId;
    }
    
    await task.save();
  } catch (error) {
    throw error;
  }
};

const deleteTask = async (id) => {
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      throw new Error(`Task with id ${id} not found.`);
    }
    await task.destroy();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
