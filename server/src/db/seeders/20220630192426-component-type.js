module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('component_types', [
      {
        name: 'Blade',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Rotor',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Hub',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Generator',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('component_types', null, {});
  }
};
