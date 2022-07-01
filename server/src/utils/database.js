const Sequelize = require('sequelize');

const sequelize = new Sequelize('tech_test', 'root', null, {
    dialect: 'mysql',
    host: 'mysql',
    port: 3306,
    logging: false,
    define: {
        underscored: true
    }
});

module.exports = sequelize;