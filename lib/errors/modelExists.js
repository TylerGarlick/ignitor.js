"use strict";

var IgnitorError = require('../error')
  , util = require('util')
  ;

function ModelExistsError(modelName) {
  IgnitorError.call(this, "Model " + modelName + " is already registered");
  this.name = 'ModelExistsError';
  this.modelName = modelName;
}

util.inherits(ModelExistsError, IgnitorError);


ModelExistsError.prototype.toString = function () {
  return this.message;
}

module.exports = ModelExistsError;