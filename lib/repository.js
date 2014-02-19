'use strict';
var _ = require('lodash'),
    Q = require('q'),
    ignitor = require('./ignitor');


/**
 *
 * @param collection
 * @constructor
 */
function Repository(collection) {
    this.collection = collection;
    if (!this.collection || this.collection.length == 0) throw new Error("Collection is required");
    this.db = ignitor.db;
}

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
Repository.prototype.all = function (options) {
    options = options || {};
    return Q.when(this.db.simple.list(this.collection, options));
};

/**
 * Find a document by '_id'
 * @param {(Object|String|*)} id
 * @param [callback]
 * @returns {document}
 */
Repository.prototype.findById = function (id) {
    return Q.when(this.db.simple.firstByExample(this.collection, {_id: id}));
};

/**
 *
 * @param predicate
 * @param callback
 * @param {object} [options]
 * @param {numeric} [options.limit]
 * @param {numeric} [options.skip]
 */
Repository.prototype.find = function (predicate, options, callback) {
    options = options || {};
    return Q.when(this.db.api.simple.example(this.collection, predicate, options, callback));
};

/**
 *
 * @param query
 * @param params
 * @param options
 * @param callback
 * @returns {*|"express".e.Handler}
 */
Repository.prototype.query = function (query, params, options, callback) {
    params = params || {};
    options = options || {};
    return Q.when(this.db.api.query(query, params, options, callback));
};

/**
 *
 * @param {String} name
 * @param {Object} [params]
 * @param {Object} [options]
 * @param {function} [callback]
 * @returns {promise}
 */
Repository.prototype.namedQuery = function (name, params, options, callback) {
    var self = this;
    params = params || {};
    options = options || {};
    if (!self.queries.can(name)) throw new Error('Stored query ' + name + 'not found');
    var query = self.queries.get(name);
    return Q.when(this.db.api.query(query, params, options, callback));
};

/**
 *
 * @param predicate
 * @param options
 * @param callback
 * @returns {*}
 */
Repository.prototype.exists = function (predicate, options, callback) {
    options = options || {};
    return Q.when(this.db.api.simple.firstByExample(this.collection, predicate, options, callback));
};

/**
 *
 * @param entity
 * @param options
 * @param callback
 * @returns {*}
 */
Repository.prototype.save = function (entity, options, callback) {
    var self = this;
    options = options || { createCollection: true, waitForSync: true };
    if (entity._id) {
        if (entity._id) delete entity._id;
        if (entity._key) delete entity._key;
        if (entity._rev) delete entity._rev;
        return Q.when(this.db.api.document.put(entity._id, entity).then(function (entity) {
            return self.db.api.document.get(entity._id, callback);
        }));
    }
    else {
        return Q.when(this.db.api.document.create(this.collection, entity, options).then(function (entity) {
            return self.db.api.document.get(entity._id, callback);
        }))
    }
};

/**
 *
 * @param id
 * @param options
 * @param callback
 * @returns {*|Q.Promise<utility>|ng.IHttpPromise<*>}
 */
Repository.prototype.remove = function (id, options, callback) {
    return Q.when(this.db.api.document.delete(id, options, callback));
};

/**
 *
 * @param predicate
 * @param options
 * @param callback
 * @returns {*}
 */
Repository.prototype.removeAll = function (predicate, options, callback) {
    return Q.when(this.db.api.simple.removeByExample(this.collection, predicate, options, callback));
}

module.exports = Repository;