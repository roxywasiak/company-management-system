//import mysql2
const mysql = require("mysql2");
const { printTable } = require("console-table-printer");

const dbOptions = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "company_db",
};

module.exports = {
  dbOptions,
};
//create connection using method
const db = mysql.createConnection(dbOptions);

//query the db
db.query("SELECT * FROM department", function (err, results) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});
