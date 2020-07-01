// get the client
const mysql = require('mysql2');

// create the connection to database
module.exports = mysql.createConnection({
    host: 'database-1.cggpch9zlud9.us-east-2.rds.amazonaws.com',
    port: 3306,
    user: "root",
    password: "zubinrocks",
    database: 'sequelizedb'
});