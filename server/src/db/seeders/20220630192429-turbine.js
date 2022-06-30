const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    let turbines = [];

    for (let i = 0; i < 5; i++) {
      const turbine = {
        name: `The ${faker.word.adjective()} turbine`,
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        farm_id: Math.floor(Math.random() * 5) + 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      turbines.push(turbine);
    }

    await queryInterface.bulkInsert('turbines', turbines, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('turbines', null, {});
  }
};
