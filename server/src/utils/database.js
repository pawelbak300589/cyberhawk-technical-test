const Sequelize = require('sequelize');

const sequelize = new Sequelize('tech_test', 'root', null, {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 8001,
    logging: false,
    define: {
        underscored: true
    }
});

module.exports = sequelize;