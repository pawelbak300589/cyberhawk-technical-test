const Sequelize = require('sequelize');

const sequelize = new Sequelize('tech_test', 'root', '', {
    dialect: 'mysql',
    host: 'mysql',
    logging: false
});

module.exports = sequelize;