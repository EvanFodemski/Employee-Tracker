const mysql = require('mysql2')

require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    port:3306,
    user:'root',
    password: 'Pablos1',
    database: 'employees'
});

module.exports = connection;