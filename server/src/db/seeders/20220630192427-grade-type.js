module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('grade_types', [
      {
        name: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('grade_types', null, {});
  }
};
