module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
  return Burger;
};

const orm = require("../config/orm.js");

const burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  insertOne: function (cols, vals, cb) {
    console.log(cols, vals);
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },

  updateOne: function (id, cb) {
    condition = "id=" + id;
    orm.updateOne(
      "burgers",
      {
        devoured: true,
      },
      condition,
      cb
    );
  },
};

module.exports = burger;
