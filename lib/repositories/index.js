"use strict";
var Arango = require('./kinds/arango')
  , Mock = require('./kinds/mock')
  ;

exports = module.exports = Repositories;


function Repositories() {
  this.Arango = Arango;
  this.Mock = Mock;
}




