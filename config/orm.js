// Import MySQL connection.
const connection = require("./connection.js");

// For Loop to that prints a ? based on how many values are in the array located in the burgerController.js file
// For loop take in a number and pushes the ? to an array and then returns the array as a string to print '?'
const printQuestionMarks = (num) => {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
};

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = (ob) => {
  const arr = [];

  // Loop through the keys and push the key/value as a string int arr
  for (const key in ob) {
    let value = ob[key];
    // Check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // If string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `'${value}'`;
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(`${key}=${value}`);
    }
  }

  // Translate array of strings to a single comma-separated string
  return arr.toString();
};

// Object for all our SQL statement functions.
// Selecting everything from the table
const orm = {
  all(tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // Creating a new burger name that passes the table, column and value (burger name)
  create(table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table}`;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    // Prints a ? depending on how many items are in the array associated with the burgersController.js file
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    // Making the the query connection and passing the entire queryString variable that has been concatenated above and the value (burger name)
    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  update(table, objColVals, condition, cb) {
    let queryString = `UPDATE ${table}`;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // Deleting from the table burgers where the condition in our case would be devoured = true
  delete(table, condition, cb) {
    let queryString = `DELETE FROM ${table}`;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

// Export the orm object for the model (burger.js).
module.exports = orm;
