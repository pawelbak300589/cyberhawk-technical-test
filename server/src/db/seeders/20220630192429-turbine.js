const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    let turbines = [];

    for (let farmId = 1; farmId <= 5; farmId++) {
      for (let componentNum = 0; componentNum < 5; componentNum++) {
        const turbine = {
          name: `The ${faker.word.adjective()} turbine`,
          lat: faker.address.latitude(),
          lng: faker.address.longitude(),
          farm_id: farmId,
          created_at: new Date(),
          updated_at: new Date(),
        };
        turbines.push(turbine);
      }
    }

    await queryInterface.bulkInsert('turbines', turbines, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('turbines', null, {});
  }
};
