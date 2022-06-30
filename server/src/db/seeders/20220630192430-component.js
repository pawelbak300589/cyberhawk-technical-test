module.exports = {
  async up(queryInterface, Sequelize) {
    let components = [];

    for (let turbineId = 1; turbineId < 6; turbineId++) {
      for (let componentTypeId = 1; componentTypeId < 5; componentTypeId++) {
        const component = {
          component_type_id: componentTypeId,
          turbine_id: turbineId,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        components.push(component);
      }
    }

    await queryInterface.bulkInsert('components', components, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('components', null, {});
  }
};
