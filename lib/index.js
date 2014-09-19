'use strict';

var _ = require('lodash'),
    Ensure = require('dbc.js'),
    Db = require('./db'),
    Utils = require('./utils'),
    Model = require('./model');

var Ignitor = {
  settings: {},
  models: {}
};

Ignitor.initialize = function (uri, options) {
  options = options || {};

  if (options['pluralize'])
    Ignitor.settings.pluralize = options.pluralize;
  else
    Ignitor.settings.pluralize = true;

  Ignitor.db = Db.connect(uri);
};

/**
 * Register a new model
 * @param {string} name
 * @param {object} schema
 * @param {object} [options]
 */
Ignitor.models.register = function (name, schema, options) {
  options = options || {};

  Ensure([name && name.length > 0], 'Model Registration: Name is required');
  Ensure(_.isObject(schema), 'Model Registration: Schema is invalid, must be an object');

  var collection = options.collection || name;
  if (Ignitor.settings.pluralize)
    collection = Utils.strings.pluralize(collection);
  return this._registrations[Utils.keys.format(name)] = Model.setup(collection, schema, options);
};

/**
 * Retrieve a model by name
 * @param {string} name
 * @returns {function}
 */
Ignitor.models.get = function (name) {
  var model = this._registrations[Utils.keys.format(name)];
  Ensure(model, "Models: A model with the name " + name + " hasn't been registered.  Please register a model: Ignitor.models.register(name, schema, options)");
  return model;
};


Object.defineProperties(Ignitor, {
  _registrations: { enumerable: false, configurable: false, writable: true }
});

module.exports = Ignitor;