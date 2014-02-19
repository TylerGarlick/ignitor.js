'use strict';

var inflection = require('inflection'),
  _ = require('lodash');

/**
 *
 * @param {object} instance
 * @param {object} [options]
 * @param {object} [options.schema]
 * @param {string} [options.collection]
 * @constructor
 */
function Model(instance, options) {
  options = options || {};
  instance = instance || {};

  this._schema = options.schema;
  this._collection = options.collection;
  if (this._collection) {
    this._collection = this._collection.toLowerCase();
  }

  _.merge(this, instance);
}

module.exports = Model;

Object.defineProperties(Model.prototype, {
  _schema: { enumerable: false, configurable: false, writable: true },
  _collection: {enumerable: false, configurable: false, writable: true },
  isValid: { enumerable: true, configurable: false, get: function () {}}
});