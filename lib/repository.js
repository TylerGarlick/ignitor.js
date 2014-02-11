'use strict';

var dbc = require('dbc.js')
  , db = require('./').db
  , Model = require('./model')
  , Q = require('q')
  ;

/**
 * Repository against ArangoDB
 * @param {object|optional} options - Options for the Repository
 * For Example
 * options.collection = "MyCollection";
 * options.model = "MeModel";
 * @constructor Repository
 */
function Repository(options) {
  options = options || {};
  this._options = {};
  this._options.collection = options.collection || options.model || null;
  this._db = options.db || db || null;

  dbc([this._options.collection && this._options.collection.length > 0], "Collection name is required");
  dbc([this._db], 'You must call ignitor.connect() or pass in options.db');

  Object.defineProperties(this, {
    _options: {
      enumerable: true,
      configurable: false,
      value: options
    },
    _db: {
      enumerable: true,
      configurable: false,
      writable: true
    }
  });

}

/**
 * Get all entities
 * @param {object|optional} parameters - Additional options
 *  Example
 *  parameters.skip = 1;
 *  parameters.limit = 10;
 *
 *
 * @returns {*}
 */
Repository.prototype.all = function (parameters) {
  var _this = this;
  parameters = parameters || {};
  return _this._db.api.simple.list(_this._options.collection, parameters.skip, parameters.limit);
};

/**
 * Find by Id
 * @param id - Id of entity
 * @returns {*|T|T[]|_Chain<T>|Mixed}
 */
Repository.prototype.findById = function (id) {
  var _this = this;
  return _this._db.api.simple.example(_this._options.collection, {_id: id}).first();
};

/**
 * Find by Query
 * @param query - Aql Query
 * @param parameters - Aql parameters
 * @returns {*|Array|{index: number, input: string}|"child_process".ChildProcess}
 */
Repository.prototype.findByQuery = function (query, parameters) {
  var _this = this;
  dbc([query], "AQL query is required");
  parameters = parameters || {};
  return query.exec(parameters);
};

/**
 * Finds documents by an example
 * @param example -
 * @param parameters
 */
Repository.prototype.findByExample = function (example, parameters) {
  var _this = this;
  parameters = parameters || {};
  dbc([example], 'Example is required');
  return _this._db.simple.example(_this._options.collection, example, parameters);
};

/**
 * Save Entity
 * @param {object|required} entity
 * @param {object|optional} options - save options
 * Defaults
 * options = { waitForSync: true, createCollection: true };
 * @returns {promise}
 */
Repository.prototype.save = function (entity, options) {
  var _this = this;
  var deferred = Q.defer();
  options = options || { waitForSync: true };
  if (!entity._id) {
    options.createCollection = true;
    _this._db.document.create(_this._options.collection, entity, options)
      .then(function (res) {
        if (!res.error) {
          return _this._db.document.get(res.id);
        }
      });
  } else {
    _this._db.document.put(entity._id, entity, options).then(function (res) {
      if (!res.error) {
        _this._db.document.get(res.id).then(function (ent) {
          deferred.resolve(ent);
        });
      }
    });
  }

  return deferred.promise;
};

/**
 * Update By Example
 * @param example
 * @param newValue
 * @param options
 * @returns {*}
 */
Repository.prototype.updateByExample = function (example, newValue, options) {
  return this._db.api.simple.updateByExample(_this._options.collection, example, newValue, options);
};

/**
 * Remove By Example
 * @param example
 * @param options
 */
Repository.prototype.removeByExample = function (example, options) {

};

/**
 * Remove By Id
 * @param id
 * @param options
 * @returns {*|void|*[]|Array}
 */
Repository.prototype.removeById = function (id, options) {
  return this._db.document.remove(id, options);
};

/**
 * Remove All Entities
 * @param options
 * @returns {*}
 */
Repository.prototype.removeAll = function (options) {
  var _this = this;
  return this._db.api.simple.removeByExample(_this._options.collection, {}, options);
};

Repository.prototype._handleError = function (error, deferred) {
  deferred.resolve(error);
};

module.exports = Repository;