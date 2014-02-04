"use strict";

var _ = require('underscore')
  , arango = require('arango')
  , nconf = require('nconf').env().file({ file: 'config/db.json'})
  ;

var Ignitor = module.exports = module;

var container = {};
Object.defineProperties(container, {
  __registry: { enumerable: true, writable: true, value: {} },
  has: { enumerable: true, writable: false, value: function (modelName) {
    modelName = modelName.toLowerCase();
    return _.has(container.__registry, modelName);
  }},
  register: { enumerable: true,
    value: function (modelName, obj, options) {

    }}
});


Object.defineProperties(Ignitor, {
  Error: {enumerable: true, writable: true, value: require('./errors') },
  settings: { enumerable: true, writable: true, value: { dbUrl: nconf.get('arango') } },
  db: { enumerable: true, writable: false, get: function () {
    if (!Ignitor.__db)
      Ignitor.__db = arango.Connection(Ignitor.settings.dbUrl);
    return Ignitor.__db;
  }},
  _infrastructure: { enumerable: false, writable: true, value: { container: container } }
});