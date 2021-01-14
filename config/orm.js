const connection = require("../config/connection.js");
const orm = {
  selectAll: function (tableInput, cb) {
    let queryString = "SELECT * FROM ??";
    connection.query(queryString, tableInput, function (err, result) {
      if (err) throw err;
      return result;
    });
  },

  insertOne: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += createQmarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOne: function (table, objColVals, condition, cb) {
    let dbQuery =
      "UPDATE " +
      table +
      " SET " +
      translateSql(objColVals) +
      " WHERE " +
      condition;

    connection.query(dbQuery, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
};
module.exports = orm;
