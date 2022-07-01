const { DataTypes } = require('sequelize');

const sequelize = require('../../utils/database');

const GradeType = sequelize.define('grade_types', {
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

module.exports = GradeType;