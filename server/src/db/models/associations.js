const Farm = require('./Farm');
const Turbine = require('./Turbine');
const ComponentType = require('./ComponentType');
const Component = require('./Component');
const GradeType = require('./GradeType');
const Grade = require('./Grade');
const Inspection = require('./Inspection');

const setAssociations = () => {
  Farm.hasMany(Turbine, { foreignKey: 'farm_id' });
  Turbine.belongsTo(Farm, { foreignKey: 'id' });
  Turbine.hasMany(Component, { foreignKey: 'turbine_id' });
  Turbine.hasMany(Inspection, { foreignKey: 'turbine_id' });
  Component.belongsTo(Turbine, { foreignKey: 'id' });
  Component.hasOne(ComponentType, { foreignKey: 'component_type_id' });
  Component.hasMany(Grade, { foreignKey: 'component_id' });
  Inspection.belongsTo(Turbine, { foreignKey: 'id' });
  Inspection.hasMany(Grade, { foreignKey: 'inspection_id' });
  Grade.belongsTo(Inspection, { foreignKey: 'id' });
  Grade.belongsTo(Component, { foreignKey: 'id' });
  Grade.hasOne(GradeType, { foreignKey: 'grade_type_id' });
};
module.exports = setAssociations;