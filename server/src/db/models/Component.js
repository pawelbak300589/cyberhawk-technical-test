const { DataTypes } = require('sequelize');

const sequelize = require('../../utils/database');
const Turbine = require('./Turbine');
const ComponentType = require('./ComponentType');

const Component = sequelize.define('components', {
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
  component_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ComponentType,
      key: 'id',
    }
  }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = Component;