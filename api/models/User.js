const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
        len: [5, 24]
    }
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        isAlpha: true,
    }
  },
  lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
    }
  },
  email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
          isEmail: true
      }
  },
  password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
          len: [4, 255]
      }
  }
}, {
  sequelize: db,
  modelName: 'users'
});

User.beforeCreate((user, options) => {

    return bcrypt.hash(user.password, saltRounds)
        .then(hash => {
            user.password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
});

module.exports = User;