// Requiring express
var express = require("express");
// importing the model burger.js
var burger = require("../models/burger.js");
// Defining routes on router
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    // selectAll
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    //   insertOne
    burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

// Export routes for server.js to use.
module.exports = router;