const { DataTypes } = require('sequelize');

const sequelize = require('../../utils/database');

const ComponentType = sequelize.define('component_types', {
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
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = ComponentType;