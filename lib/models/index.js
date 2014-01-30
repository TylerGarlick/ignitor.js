"use strict";
var Model = require('./stereotype')
  , Types = require('./types')
  ;

exports = module.exports = Models;

function Models() {
  this.Model = Model;
  this.Types = Types;
}