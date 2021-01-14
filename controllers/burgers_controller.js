const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();
// Get router
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    let hdlbrsObj = {
      burgers: data,
    };

    res.render("index", hdlbrsObj);
  });
});

//Post router
router.post("/api/burger", function (req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, false],
    function (result) {
      res.json({ id: result.insertId });
    }
  );
});

//Put router
router.put("/api/burger/:id", function (req, res) {
  let id = req.params.id;
  burger.updateOne(id, function (result) {});
});

module.exports = router;
