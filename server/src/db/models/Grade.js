const { DataTypes } = require('sequelize');

const sequelize = require('../utils/database');
const Inspection = require('./Inspection');
const Component = require('./Component');
const GradeType = require('./GradeType');

const Grade = sequelize.define('grades', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  inspection_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Inspection,
      key: 'id',
    }
  },
  component_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Component,
      key: 'id',
    }
  },
  grade_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: GradeType,
      key: 'id',
    }
  }
});

module.exports = Grade;