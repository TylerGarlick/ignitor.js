"use strict";

var Ignitor = require("../src")
  , Schema = require('../src/schema')
  , Document = require('../src/document')
  , util = require('util')
  , validate = require('jsonschema').validate
  , _ = require('lodash')
  ;


function Model(instance, schema) {
  Document.call(this, instance, null);
  this._schema = schema || {};
}

util.inherits(Model, Document);

Model.prototype.isNew = function () {
  var self = this;
  return !_.has(self, "_id");
}

Model.prototype.isValid = function () {
  var self = this;
  var instance = self;
  var schema = instance._schema;
  var keys = _.keys(schema);
  
  return validate(instance, schema.properties);
}

Model.prototype.toConsole = function () {
  return util.inspect(this, {depth: null });
}


module.exports = exports = Model;

