const { Sequelize, Model, DataTypes } = require('sequelize');


const sequelize = require('./sequelize')

const User = sequelize.define('user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});



module.exports = User