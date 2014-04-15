'use strict';
var Q = require('q');

exports.static = {
    all: function (options, callback) {
        options = options || {};
        return Q.when(this.db.simple.list(this.collection, options, callback));
    },
    findByKey: function (id, options, callback) {
        options = options || options;
        return Q.when(this.db.simple.firstByExample(this.collection, {_id: id}, options, callback));
    },
    find: function (predicate, options, callback) {
        options = options || {};
        return Q.when(this.db.simple.example(this.collection, predicate, options, callback));
    },
    query: function (query, params, options, callback) {
        params = params || {};
        options = options || {};
        return Q.when(this.db.query.exec(query, params, options, callback));
    },
    exists: function (predicate, options) {
        options = options || {};
        return Q.when(this.db.simple.firstByExample(this.collection, predicate, options));
    },
    save: function (entity, options) {
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
    },
    remove: function (id, options) {
        return Q.when(this.db.document.delete(id, options));
    },
    removeAll: function (predicate, options) {
        return Q.when(this.db.simple.removeByExample(this.collection, predicate, options));
    }
};

exports.instance = {
    save: function () {
    },
    remove: function () {
    }
}
