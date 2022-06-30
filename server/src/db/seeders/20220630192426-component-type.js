module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('component_types', [
      {
        name: 'Blade',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Rotor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hub',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Generator',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('component_types', null, {});
  }
};
