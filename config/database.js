const Sequelize = require('sequelize');
module.exports = new Sequelize('databasename', 'username', 'password', {
    host: '*.*.us-east-2.rds.amazonaws.com',
    port: 3306,
    dialect: 'mysql'
});