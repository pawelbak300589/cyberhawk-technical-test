module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('grade_types', [
      {
        name: '1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: '2',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: '3',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: '4',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: '5',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('grade_types', null, {});
  }
};
