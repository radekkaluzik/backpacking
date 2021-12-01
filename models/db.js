const mysql = require('mysql');
const dbConfig = require('../config/db.config');

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  console.log('Successfully connected to the database.');

  // TODO: prevent the connection from being lost
  setInterval(() => {
    connection.query('SELECT 1');
  }, 5000);
});

module.exports = connection;
