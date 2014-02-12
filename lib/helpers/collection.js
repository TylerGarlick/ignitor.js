'use strict';
var dbc = require('dbc.js')
  , Q = require('q')
  , Database = require('../config/database')
  ;

function Collection() {
  this.db = Database.connection;
}

Collection.prototype.exists = function (name) {
  var _this = this;
  var deferred = Q.defer();
  _this.db.collection.list()
    .then(function (collections) {
      var collection = collections.names[name];
      deferred.resolve({
        collection: collection,
        exists: (collection !== null),
        name: name
      });
    }, function (err) { deferred.reject(err); });
  return deferred.promise;
};

Collection.prototype.createNonExistent = function (name) {
  var _this = this;
  var deferred = Q.defer();
  _this.exists(name)
    .then(function (res) {
      if (!res.exists) {
        _this.db.collection.create(name).then(function () {
          deferred.resolve({created: true, name: name});
        }, function (err) { deferred.reject(err); })
      } else {
        deferred.resolve({created: false, name: name});
      }
    }, function (err) { deferred.reject(err); });

  return deferred.promise;
};

Collection.prototype.deleteWhenExists = function (name) {
  var _this = this;
  var deferred = Q.defer();
  _this.exists(name).then(function (res) {
    if (res.exists) {
      _this.db.collection.delete(name).then(function (res) {
        if (!res.error) {
          deferred.resolve({deleted: true, name: name});
        } else { deferred.reject(res.error); }
      }, function (err) { deferred.reject(err); });
    } else { deferred.resolve({deleted: false, name: name}); }
  }, function (err) { deferred.reject(err); });
  return deferred.promise;
}

Collection.prototype.recreate = function (name) {
  var _this = this;
  var deferred = Q.defer();
  _this.exists(name)
    .then(function (result) {
      if (result && result.exists) {
        _this.deleteWhenExists(name)
          .then(function (res) {
            _this.createNonExistent(name)
              .then(function (res) { deferred.resolve(res); }, function (err) { deferred.reject(err); });
          }, function (err) { deferred.reject(err)});
      } else {
        _this.createNonExistent(name)
          .then(function (res) { deferred.resolve(res); }, function (err) { deferred.reject(err); });
      }
    });

  return deferred.promise;
};


module.exports = Collection;