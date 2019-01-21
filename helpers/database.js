
const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complete', 'root', 'unlock1root', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  port: '3303',
  
  logging: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
module.exports = sequelize;