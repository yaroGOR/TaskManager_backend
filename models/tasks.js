const { DataTypes } = require('sequelize');


const sequelize = require('./sequelize')

// Define the 'tasks' table
const Task = sequelize.define('task', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });


module.exports = Task