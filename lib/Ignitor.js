"use strict";

var _ = require('underscore')
  , arango = require('arango')
  , nconf = require('nconf').env().file({ file: 'config/db.json'})
  ;

var Ignitor = exports = module.exports = module;


var _db = null;
/**
 * Connects and caches the ArangoDb Connection
 * @param {string|optional} connectionString -
 * @returns {object|db}
 */
var dbConnectAndCache = function (connectionString) {
  connectionString = connectionString || this.settings.dbUrl;
  if (!_db)
    _db = arango.Connection(connectionString)
  return _db;
}

/**
 * Ignitor: Model Driven Development for ArangoDB
 *  -
 * @property settings - collection of settings
 * @property {arango.Arango} db - result of calling var db = arango.Connection(), the call is cached for future requests
 */
Object.defineProperties(Ignitor, {
  settings: { enumerable: true, writable: true, value: { }},
  db: { enumerable: true, writable: false, configurable: false, get: dbConnectAndCache },
  model: {enumerable: true, configurable: false, writable: false, value: function (modelName, obj, options) {
    return this.__.container.register(modelName, obj, options);
  }}
});

/**
 * @class Error
 */
Object.defineProperties(Ignitor.Types, {
  Errors: {enumerable: true, writable: false, configurable: false, value: require('./models/errors') },
  Schema: {enumerable: true, writable: false, configurable: false, value: require('./models/schema') }
});

/**
 * @property {string|object} connection - arangoDb string or url
 * @type {{connection: string|object}}
 */
var db = {
  connection: nconf.get('arango') || {}
}

/**
 * @property db - database configuration
 * @property models - model configuration
 */
Object.defineProperties(Ignitor.settings, {
  db: { enumerable: true, writable: true, value: db },
  models: {enumerable: true, writable: true, value: { shouldPluralize: true }}
});

/**
 * Container that holds the registrations
 * @static
 * @type {Container|exports}
 */
var Container = require('./infrastructure/container');

/**
 * @property container -
 * @property repository -
 */
Object.defineProperties(Ignitor.__, {
  container: { enumerable: true, writable: true, value: Container },
  repository: {}
});