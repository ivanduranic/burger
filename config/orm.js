const connection = require("./connection.js");
// const orm = {
//   selectAll: function (tableInput, colToSearch, valOfCol) {
//     var queryString = "SELECT * FROM ?? WHERE ?? = ?";

//     connection.query(
//       queryString,
//       [tableInput, colToSearch, valOfCol],
//       function (err, result) {
//         if (err) throw err;
//         return result;
//         console.log(result);
//       }
//     );
//   },
//   insertOne: function (tableInput, colToSearch, valOfCol) {
//     var queryString = "SELECT * FROM ?? WHERE ?? = ?";

//     connection.query(
//       queryString,
//       [tableInput, colToSearch, valOfCol],
//       function (err, result) {
//         if (err) throw err;
//         return result;
//         console.log(result);
//       }
//     );
//   },
//   updateOne: function (tableInput, colToSearch, valOfCol) {
//     var queryString = "SELECT * FROM ?? WHERE ?? = ?";

//     connection.query(
//       queryString,
//       [tableInput, colToSearch, valOfCol],
//       function (err, result) {
//         if (err) throw err;
//         return result;
//         console.log(result);
//       }
//     );
//   },
// };
module.exports = orm;
