"use strict";

var arango = require('arango')
  , EventEmitter = require('events').EventEmitter
  , util = require('util')
  , dbc = require('dbc.js')
  ;

/**
 * Manages connectivity for Database
 *
 * @constructor
 */
function Database() {
  Database.super_.call(this);
};
util.inherits(Database, EventEmitter);

Database.db = null;
/**
 * Connect to arangoDB, the connnection is cached and accessible at Database.Db
 *
 * @event connection - fired when arango connect, and send the connection object as a parameter
 * @param {string|required} connectionUrl - the arangodb connection url or object
 * @returns {null|*}
 */
Database.prototype.connect = function (connectionUrl) {
  var _this = this;
  if (!connectionUrl) {
    connectionUrl = _this.connectionUrl;
    dbc(connectionUrl && connectionUrl.length > 0, "Connection url is required");
  }
  if (!Database.db) {
    Database.db = arango.Connection(_this.connection);
    _this.emit('connected', Database.db);
  }
  Database.db.connectionUrl = connectionUrl;
  return Database.db;
};

Object.defineProperties(Database.prototype, {
  db: {
    get: function () {
      var _this = this;
      _this.connect()
    },
    enumerable: true
  }
})

module.exports = Database;