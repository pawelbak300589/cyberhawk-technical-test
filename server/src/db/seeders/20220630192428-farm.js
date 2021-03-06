const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    let farms = [];

    for (let i = 0; i < 5; i++) {
      const farm = {
        name: `Wind Farm in ${faker.address.city()}`,
        created_at: new Date(),
        updated_at: new Date(),
      };
      farms.push(farm);
    }

    await queryInterface.bulkInsert('farms', farms, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('farms', null, {});
  }
};
