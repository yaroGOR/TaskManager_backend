// index.js

const  sequelize  = require('./sequelize');
const User = require('./users')
const Task = require('./tasks')
 const Group = require('./groups')
const logger = require('../logs/winston')

Group.belongsToMany(User, { through: 'user_group' });
Group.hasMany(Task, { foreignKey: 'group_id' });
User.belongsToMany(Group, { through: 'user_group' });
User.hasMany(Task, { foreignKey: 'user_id' });

Task.belongsTo(User, { foreignKey: 'user_id' });
Task.belongsTo(Group, { foreignKey: 'group_id' });

const connectToDB = async () => {
  try {
    // await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${sequelize.config.database}`);
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log('Connected to DB')

  } catch (error) {
    logger.error(error.message);

    console.error('Unable to connect to the database:', error);
  }}


module.exports = connectToDB