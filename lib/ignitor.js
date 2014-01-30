"use strict";

var Config = require('./config')
  , cocktail = require('cocktail')
  , dbc = require('dbc.js')
  , _ = require('lodash')
  ;

var Ignitor = cocktail.mix({
  '@as': 'class',

  '@properties': {
    db: {}
  },

  constructor: function(){
    this._configuration = {};
    Object.defineProperties(this, {
      db: {
        value: this.getDb()
      }
    })
  }
});

module.exports = exports = new Ignitor();

//function Ignitor() {
//  this._configuration = {};
//  this.setup();
//
//  Object.defineProperties(this, {
//    db: {
//      value: this._configuration.database.instance,
//      enumerable: true,
//      writable: false
//    }
//  });
//}
//
//Ignitor.prototype.setup = function (opts) {
//  var self = this;
//  _.merge(self._configuration, opts);
//  self._configuration = new Config();
//}
//
//Ignitor.prototype._configuration;

// Prototypes

// ArangoDB Connections


//Ignitor.prototype.model = function (name, valuesOrSchema) {
//  var self = this;
//  var registeredName = name.toLowerCase().trim();
//  if (self.__models[registeredName]) {
//    return new self.__models[registeredName](valuesOrSchema, self.__schemas[registeredName]);
//  } else {
//    if (valuesOrSchema && (valuesOrSchema instanceof Schema)) {
//      self.__schemas[registeredName] = valuesOrSchema;
//      self.__models[registeredName] = Model;
//      return self.__models[registeredName];
//    }
//  }
//};


module.exports = exports = new Ignitor();