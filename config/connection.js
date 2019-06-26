var mysql = require('mysql');

var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
   var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
   var connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burger_db'
    })
};

var mysql = require('mysql');
