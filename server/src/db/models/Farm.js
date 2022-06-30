const { DataTypes } = require('sequelize');

const sequelize = require('../utils/database');

const Farm = sequelize.define('farm', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Farm;