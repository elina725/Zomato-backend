const Sequelize = require("sequelize");

const databaseUrl = process.env.MYSQL_URL || process.env.MySQL_URL;

const db = new Sequelize(databaseUrl, {
  dialect: "mysql",
  logging: false,
});

module.exports = db;
