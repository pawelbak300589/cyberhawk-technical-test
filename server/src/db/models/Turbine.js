const { DataTypes } = require('sequelize');

const sequelize = require('../utils/database');
const Farm = require('./Farm');

const Turbine = sequelize.define('turbines', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lat: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  lng: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  farm_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Farm,
      key: 'id',
    }
  }
});

module.exports = Turbine;