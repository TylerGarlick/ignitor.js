'use strict';

var Promise = require('bluebird')
  , Arango = Promise.promisifyAll(require('arango'))
  , _ = require('lodash')
  , Utils = require('./utils');

var internals = {};
internals.models = {};


/**
 * Ignitor.js the ODM for ArangoDB
 * ===================================================
 *
 * @property {Arango.Connection} db - after calling the #connect(url), the connection can be accessed via this getter
 * @property {Schema} Schema - the schema object
 *
 */
exports = module.exports;

/**
 * Connect to ArangoDB
 * ===================================================
 *
 * var db = Ignitor.connect('http://localhost:8529/ignitor-testing');
 *
 * Or alternatively, access the connection via the db property after the connection has been established
 *
 * Ignitor.connect('http://localhost:8529/ignitor-testing');
 * var db = Ignitor.db;
 *
 * ===================================================
 *
 * @param {string} url
 * @returns {Arango.Connection}
 */
exports.connect = function (url) {
  var connection = Arango.Connection(url);
  internals.db = Utils.connections.promisify(connection);
  return internals.db;
};

Object.defineProperties(exports, {

  db: {
    enumerable: true, configurable: false,
    get: function () {
      return internals.db;
    }
  },

  Schema: { enumerable: true, configurable: false, value: require('./schema') }

});
