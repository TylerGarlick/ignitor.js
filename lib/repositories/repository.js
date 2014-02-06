'use strict';
var dbc = require('dbc.js')
  , Helpers = require('../infrastructure/helpers')
  , Database = require('../infrastructure/database')
  ;

function Repository(collection, opts) {
  collection = Helpers.strings.toLowerCaseAndTrim(collection);

  this.__.options = opts || {};
  dbc([collection && collection.length > 0], "Collection is required");
  this.db = opts.db || Database.db;
  dbc([this.db], "You must call Database.connect() at least once on the database");
}
module.exports = Repository;

Object.defineProperties(Repository.prototype, {
  collection: { enumerable: true, writable: true },
  db: {enumerable: true, writable: true},
  all: {},
  byId: {},
  add: {},
  update: {},
  remove: {},
  removeAll: {},
  __: { configurable: false, value: {} }
});

Object.defineProperties(Repository.prototype.__, {
  options: {enumerable: true, writable: true }
});

