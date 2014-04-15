'use strict';
var Q = require('q'),
    Db = require('../database'),
    mixins = require('./mixins');

/**
 *
 * @param collection
 * @constructor
 */
function Repository(collection, options) {
    options = options || {};
    this.collection = collection;
    if (!this.collection || this.collection.length == 0) throw new Error("Collection is required");
    this.db = options.db || Db.connection;
}

/**
 * Gets all the entities in a collection
 * @param {object} [options]
 * @param {numeric} [options.limit]
 * @param {numeric} [options.skip]
 * @param {function} [callback]
 */
Repository.prototype.all = function (options, callback) {
    options = options || {};
    if (!callback)
        return Q.when(this.db.simple.list(this.collection, options, callback));
    else
        this.db.simple.list(this.collection, options, callback);
};

/**
 * Find a document by '_id'
 * @param {(Object|String|*)} id
 * @param [callback]
 * @returns {document}
 */
Repository.prototype.findByKey = function (id) {
    return Q.when(this.db.simple.firstByExample(this.collection, {_key: id}));
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
    return Q.when(this.db.simple.example(this.collection, predicate, options, callback));
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
    return Q.when(this.db.query.exec(query, params, options, callback));
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
    return Q.when(this.db.simple.firstByExample(this.collection, predicate, options, callback));
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
        return Q.when(this.db.document.put(entity._id, entity).then(function (entity) {
            return self.db.document.get(entity._id, callback);
        }));
    }
    else {
        return Q.when(this.db.document.create(this.collection, entity, options).then(function (entity) {
            return self.db.document.get(entity._id, callback);
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
    return Q.when(this.db.document.delete(id, options, callback));
};

/**
 *
 * @param predicate
 * @param options
 * @param callback
 * @returns {*}
 */
Repository.prototype.removeAll = function (predicate, options, callback) {
    return Q.when(this.db.simple.removeByExample(this.collection, predicate, options, callback));
}

module.exports = Repository;
