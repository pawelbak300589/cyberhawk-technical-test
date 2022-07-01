const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    let components = [];
    let inspections = [];

    for (let turbineId = 1; turbineId <= 25; turbineId++) {
      for (let componentTypeId = 1; componentTypeId < 5; componentTypeId++) {
        const component = {
          component_type_id: componentTypeId,
          turbine_id: turbineId,
          created_at: new Date(),
          updated_at: new Date(),
        };
        components.push(component);
      }
      for (let inspectionNum = 1; inspectionNum <= 2; inspectionNum++) {
        const inspection = {
          turbine_id: turbineId,
          inspection_at: faker.date.recent(30),
          created_at: new Date(),
          updated_at: new Date(),
        };
        inspections.push(inspection);
      }
    }

    await queryInterface.bulkInsert('components', components, {});
    await queryInterface.bulkInsert('inspections', inspections, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('components', null, {});
    await queryInterface.bulkDelete('inspections', null, {});
  }
};
