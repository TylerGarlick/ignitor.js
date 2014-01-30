"use strict";

var arango = require('arango')
  , Error = require('./error')
  , Schema = require('./schema')
  , Model = require('./model')
  , Document = require('./document')
  , inflect = require('i')(true)
  , _ = require('lodash')
  ;


function Ignitor(options) {
  options = options || {
    pluralization: true
  };
}


Ignitor.prototype.clearRegistrations = function () {
  var self = this;
  self.__models = {};
};

Ignitor.prototype._getModelKeys = function () {
  var self = this;
  var keys = _.keys(self.__models);
  return keys;
};

Ignitor.prototype.connect = function (connectionString) {

};

Ignitor.prototype.model = function (name, valuesOrSchema, fields) {
  var self = this;
  var registeredName = name.toLowerCase().trim();
  if (self.__models[registeredName]) {
    return new self.__models[registeredName](valuesOrSchema, self.__schemas[registeredName]);
  } else {
    if (valuesOrSchema && (valuesOrSchema instanceof Schema)) {
      self.__schemas[registeredName] = valuesOrSchema;
      self.__models[registeredName] = Model;
      return self.__models[registeredName];
    }
  }
};

// Private
Ignitor.prototype.__models = {};
Ignitor.prototype.__schemas = {};
Ignitor.prototype.__db = null;


Ignitor.prototype.Schema = Schema;
Ignitor.prototype.Model = Model;
Ignitor.prototype.Document = require('./document');

var Ignitor = module.exports = exports = new Ignitor();