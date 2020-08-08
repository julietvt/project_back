'use strict';
//const { Model } = require('sequelize');
const {NAME_PATTERN, SALT} = require('../constants');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: NAME_PATTERN,
      }
    },
    lastName: {
      type: Sequelize.STRING
      allowNull: false,
      validate: {
        is: NAME_PATTERN,
      }
    },
    password: {
      type: Sequelize.TEXT,
      field: 'passwordHash',
      allowNull: false,
      set(val) {
        this.setDataValue('password', bcrypt.hashSync(val, SALT));
      }
    },
    profilePicture: {
      type: Sequelize.STRING,
      allowNull: true,
    }
  }, {});
  User.associate = function (moidels) {
    User.hasMany(models.Task, {
      foreignKey: 'userId'
    });
  };
  return User;
};