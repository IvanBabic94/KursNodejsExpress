const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '999555aa', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
