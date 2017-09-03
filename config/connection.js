var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "gokuh123",
    database: "burguers_db"
});

module.exports = connection;