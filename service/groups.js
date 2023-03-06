const sequelize = require('../models/sequelize')
const Group = require('../models/groups')

const getGroups = async () => {
  try {
    const groups = await Group.findAll();
    return groups;
  } catch (error) {
    throw error;
  }
};

const getGroupById = async (id) => {
  try {
    const group = await Group.findByPk(id);
    return group;
  } catch (error) {
    throw error;
  }
};

const createGroup = async (name) => {
  console.log('create Group service')
  try {
    const group = await Group.create({ name });
    return group;
  } catch (error) {
    throw error;
  }
};

const updateGroup = async (name, id) => {
  try {
    const group = await Group.findByPk(id);
    if (!group) {
      throw new Error(`Group with id ${id} not found.`);
    }
    if (name !== undefined) {
      group.name = name;
    }    
    await group.save();
  } catch (error) {
    throw error;
  }
};

const deleteGroup = async (id) => {
  try {
    const group = await Group.findByPk(id);
    if (!group) {
      throw new Error(`Group with id ${id} not found.`);
    }
    await group.destroy();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getGroups,
  getGroupById,
  createGroup,
  updateGroup,
  deleteGroup,
};
