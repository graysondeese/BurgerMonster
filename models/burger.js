// Importing ORM
var orm = require("../config/orm.js");

// Code to call the ORM functions using burger specific input for the ORM
var burger = {
    selectAll: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  
// Exporting the file
module.exports = burger;