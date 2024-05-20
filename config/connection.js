const Sequelize = require('sequelize');
require('dotenv').config();

let PORT = 3306;

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: PORT,
  }
);

module.exports = sequelize;