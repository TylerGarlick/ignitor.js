'use strict';
var _ = require('lodash'),
  dbc = require('dbc.js');

function Repository(collection, db) {
  this.collection = collection;
  this.queries.register('all', "FROM c IN @@collection RETURN c");
  this.db = db;
  dbc([this.collection, this.collection.length > 0], "Collection is required");
  dbc([this.queries.can('all')], "The 'all' query is required");
  dbc([db], "ArangoDB connection is required");
}

module.exports = Repository;

Object.defineProperties(Repository.prototype, {
  _queries: {enumerable: false, configurable: false, value: {}},
  queries: { enumerable: true, configurable: false,
    value: {
      all: function () {
        return this._queries;
      },
      can: function (name) {
        return (this._queries[name] || this._queries[name].length > 0);
      },
      get: function (name) {
        if (!this.queries.can(name)) throw new Error("Query not found with name '" + name + "'")
        return this._queries[name];
      },
      register: function (name, query) {
        this._queries[name] = query;
      },
      unregister: function (name, query) {
        if (_.some(['all'], name)) throw new Error("You can't delete a default query");
        delete this._queries[name];
      }
    }}
});

/**
 * Gets all the entities in a collection
 * @param {object} [options]
 * @param {numeric} [options.limit]
 * @param {numeric} [options.skip]
 * @param {function} [callback]
 */
Repository.prototype.all = function (options, callback) {
  var self = this;
  options = options || {};
  if (!callback) {
    self.db.api.simple.list(self.collection, options, callback);
  } else {
    return self.db.api.simple.list(self.collection, options);
  }
};

Repository.prototype.findById = function (id, callback) {};
Repository.prototype.find = function () {};
Repository.prototype.query = function (query, params, options, callback) {};
Repository.prototype.exists = function () {};
Repository.prototype.save = function () {};
Repository.prototype.remove = function () {};

