"use strict";
var P = require('micropromise');

function Repository(collection, db) {
    var that = this;
    this.collection = collection || that.constructor.name;
    this.db = db;
}

Repository.prototype.all = function () {
    var that = this;
    var promise = P();
    var collection = that.collection;
    that._setupCollection(collection).done(function () {
        that.db.simple.list(collection).done(function (res) {
            promise.fulfill(res.result);
        }, function (err) {
            promise.reject(err);
        });
    }, function (err) {
        promise.reject(err);
    });

    return promise;
};

Repository.prototype.byId = function (id) {
    var promise = P();
    return promise;
};

Repository.prototype.add = function (entity) {
    var that = this;
    return that.db.document.create(that.collection, entity, {createCollection: true});
};

Repository.prototype.update = function (id, entity) {
    var deferred = P.defer();
    return deferred.promise;
};

Repository.prototype.remove = function (id) {
    var deferred = P.defer();
    return deferred.promise;
};

Repository.prototype.removeAll = function () {
    var that = this;
    var promise = P();

    var delPromise = that.db.collection.delete(that.collection);
    var createPromise = that._setupCollection(that.collection);

    delPromise.join([createPromise])
        .spread(function (res) {
            promise.resolve();
        }, function (err) {
            throw new err;
            promise.reject(err);
        });

    return promise;
};

Repository.prototype._createCollection = function (collection) {
    return this.db.collection.create(collection);
};

Repository.prototype._getCollection = function (collection) {
    return this.db.collection.get(collection);
};

Repository.prototype._collectionExists = function (collection) {
    var that = this;
    var promise = P();

    that.db.collection.get(collection)
        .done(function (collection) {
            if (collection)
                promise.fulfill(true);
            else
                promise.fulfill(false);
        }, function (err) {
            promise.fulfill(false);
        });

    return promise;
};

Repository.prototype._setupCollection = function (collection) {
    var that = this;
    var promise = P();

    that._collectionExists(collection).done(function (exists) {
        if (!exists) {
            var createPromise = that._createCollection(collection).done(function (col) {
                if (col)
                    promise.fulfill(col)
                else
                    promise.reject();
            }, function (err) {
                promise.reject(err);
            });
        } else {
            promise.resolve();
        }
    });

    return promise;
}

module.exports = Repository;