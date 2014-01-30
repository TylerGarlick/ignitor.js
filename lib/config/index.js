"use strict";
var Database = require('./database')
  ;

module.exports = function () {
  this.database = new Database();
};