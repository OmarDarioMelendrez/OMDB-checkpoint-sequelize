const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db');


class Favorite extends Model {}

Favorite.init({
  imdbID: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Poster: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'favorites'
});



module.exports = Favorite;