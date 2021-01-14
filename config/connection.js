const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "hwr4wkxs079mtb19.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "p7eqjty679jpi7vh",
  password: "usjinyo450rrbnlt",
  database: "fzda62k2fpxipir5",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
