const {  DataTypes } = require('sequelize');


const sequelize = require('./sequelize')


// Define the 'groups' table
const Group = sequelize.define('group', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = Group