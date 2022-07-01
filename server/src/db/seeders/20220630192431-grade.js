const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    let grades = [];

    const components = await queryInterface.sequelize.query(
      `SELECT ins.id AS inspection_id, ins.turbine_id, com.id AS component_id
      FROM inspections ins
      LEFT JOIN components AS com ON ins.turbine_id = com.turbine_id`
    );

    for (let component of components[0]) {
      const grade = {
        inspection_id: component.inspection_id,
        component_id: component.component_id,
        grade_type_id: Math.floor(Math.random() * 5) + 1,
        created_at: new Date(),
        updated_at: new Date(),
      };
      grades.push(grade);
    }

    await queryInterface.bulkInsert('grades', grades, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('grades', null, {});
  }
};
