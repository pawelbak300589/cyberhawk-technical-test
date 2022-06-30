const { DataTypes } = require('sequelize');

const sequelize = require('../utils/database');
const Turbine = require('./Turbine');

const Inspection = sequelize.define('inspections', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  turbine_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Turbine,
      key: 'id',
    }
  },
  inspection_at: {
    allowNull: false,
    type: DataTypes.DATE,
  }
});

module.exports = Inspection;