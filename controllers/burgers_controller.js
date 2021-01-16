// Creating our routes file that essentially tells the model what to do
// Setting up our requires
const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// When the home page is loaded it will perform a GET request immediately
router.get("/", (req, res) => {
  // Executes the burger.all() function and the response is called (data)
  burger.all((data) => {
    // With the data we recieve we store it into a variable that is an object named hbsObject.
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    // We then render using the index handlebar and pass the hbsObject variable
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create("burger_name", [req.body.name], (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  burger.delete(condition, (result) => {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// Export routes for server.js to use.
module.exports = router;
