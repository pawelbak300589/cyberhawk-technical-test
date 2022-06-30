const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    let inspections = [];
    let grades = [];

    for (let turbineId = 1; turbineId < 6; turbineId++) {
      for (let inspectionNum = 0; inspectionNum < 2; inspectionNum++) {
        const inspection = {
          turbine_id: turbineId,
          inspection_at: faker.date.recent(30),
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        inspections.push(inspection);
      }
      for (let componentId = 1; componentId < 5; componentId++) {
      }
    }

    let turb1inspectionId = 1;
    let turb2inspectionId = 3;
    let turb3inspectionId = 5;
    let turb4inspectionId = 7;
    let turb5inspectionId = 9;
    for (let inspection of inspections) {
      switch (inspection.turbine_id) {
        case 1:
          for (let componentId = 1; componentId < 5; componentId++) {
            grades.push({
              inspection_id: turb1inspectionId,
              component_id: componentId,
              grade_type_id: Math.floor(Math.random() * 5) + 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            });
          }
          turb1inspectionId++;
          break;
        case 2:
          for (let componentId = 5; componentId < 9; componentId++) {
            grades.push({
              inspection_id: turb2inspectionId,
              component_id: componentId,
              grade_type_id: Math.floor(Math.random() * 5) + 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            });
          }
          turb2inspectionId++;
          break;
        case 3:
          for (let componentId = 9; componentId < 13; componentId++) {
            grades.push({
              inspection_id: turb3inspectionId,
              component_id: componentId,
              grade_type_id: Math.floor(Math.random() * 5) + 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            });
          }
          turb3inspectionId++;
          break;
        case 4:
          for (let componentId = 13; componentId < 17; componentId++) {
            grades.push({
              inspection_id: turb4inspectionId,
              component_id: componentId,
              grade_type_id: Math.floor(Math.random() * 5) + 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            });
          }
          turb4inspectionId++;
          break;
        case 5:
          for (let componentId = 17; componentId < 21; componentId++) {
            grades.push({
              inspection_id: turb5inspectionId,
              component_id: componentId,
              grade_type_id: Math.floor(Math.random() * 5) + 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            });
          }
          turb5inspectionId++;
          break;
      }
    }

    await queryInterface.bulkInsert('inspections', inspections, {});
    await queryInterface.bulkInsert('grades', grades, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('inspections', null, {});
    await queryInterface.bulkDelete('grades', null, {});
  }
};
