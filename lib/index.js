'use strict';

var dbc = require('dbc.js')
  , EventEmitter = require('events').EventEmitter
  , util = require('util')
  , arango = require('arango')
  ;

/**
 * Ignitor: ArangoDb's ODM
 *
 * Example Usage:
 *
 * @constructor
 * @property db - ArangoDB Connection
 * @property options - Options
 */
function Ignitor() {
  Ignitor.super_.call(this);
}
util.inherits(Ignitor, EventEmitter);

Object.defineProperties(Ignitor.prototype, {
  db: {
    enumerable: true,
    writable: true,
    configurable: false
  },
  options: {
    enumerable: true,
    configurable: false,
    value: {
      connectionUrl: ""
    }
  },
  Schema: {
    enumerable: true,
    configurable: false,
    value: require('./schema')
  },
  Model: {
    enumerable: true,
    configurable: false,
    value: require('./model')
  }
});

/**
 * Connect to ArangoDb and set the .db to Arango Connection object
 * @param connectionUrl - Connection Url for ArangoDb Database
 * @method connect - ArangoDb Connection
 */
Ignitor.prototype.connect = function (connectionUrl) {
  var _this = this;

  dbc([connectionUrl && connectionUrl.length > 0], "Connection Url is required to connect");
  _this.options.connectionUrl = connectionUrl;

  if (!_this.db) {
    _this.db = arango.Connection(connectionUrl);
    _this.emit('connected', _this.db);
  }
  return _this.db;
};


/**
 * Register a Model, or create a new model
 * @param name - the name of the model
 * @param {Schema|object} obj - Schema or instance variables for object.
 * @param options
 */
Ignitor.prototype.model = function (name, obj, options) {
  options = options || {};
};

module.exports = new Ignitor();