"use strict";

var _ = require('underscore')
  , arango = require('arango')
  , db = new require('./infrastructure/database')()
  ;

var ignitor = exports = module.exports;

/**
 * Connects to arangoDb via database object
 * @param connectionUrl
 */
var connect = function (connectionUrl) {
  db.connect(connectionUrl);
}
ignitor.connect = connect;

/**
 * Ignitor: Model Driven Development for ArangoDB
 *  -
 * @property settings - collection of settings
 * @property {arango.Arango} db - result of calling var db = arango.Connection(), the call is cached for future requests
 */
Object.defineProperties(ignitor, {
  Types: { enumerable: true, configurable: false, value: {
    Errors: require('./models/errors'),
    Schema: require('./models/schema')
  }},
  settings: { enumerable: true, value: {
    models: {enumerable: true, value: { shouldPluralize: true }}
  }},
  model: {enumerable: true, configurable: false, value: function (modelName, obj, options) {
    return this.__.container.register(modelName, obj, options);
  }},
  __: {value: {} }
});

Object.defineProperties(ignitor.__, {
  container: {
    value: require('./infrastructure/container'),
    enumerable: true
  }
});