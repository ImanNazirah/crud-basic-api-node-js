var mysql = require('mysql2');
const dotenv = require('dotenv').config({path:'src/.env'});

console.log('checking ::',process.env.DB_HOST);
var connection = mysql.createConnection({
    host: process.env.DB_HOST,//localhost
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    insecureAuth: true,
    multipleStatements: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  });

// connection.connect();

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected!');
});

module.exports = connection;