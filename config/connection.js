// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "wviva02qvgo1mcbc",
  password: "xdejzme13jzisdpp",
  database: "kjkzcg9fm7z7l8zf"
});

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Care1self!",
//   database: "burgers_db"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
