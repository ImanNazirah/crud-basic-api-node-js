var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',//localhost
    user: 'root',
    password: '',
    database: 'api'
  });

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected!');
});

module.exports = connection;