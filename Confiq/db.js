const Sequelize = require('sequelize');

const db = new Sequelize('zamato_db', 'root', 'Elina725@', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

 

module.exports = db;