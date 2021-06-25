const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://localhost:5432/omdb_api')

module.exports = sequelize