var mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

var connection = mysql.createConnection({
    host: process.env.DB_HOST,//localhost
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected!');
});

module.exports = connection;