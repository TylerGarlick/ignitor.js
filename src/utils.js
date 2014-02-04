"use strict";

var arango = require('arango')
  , nconf = require('nconf').env().file({ file: 'config/db.json'})
  , sync = require('synchronize')
  , fs = require('fs')
  ;

sync(Utils.db.collection, 'get');

function Utils() {
}

Object.defineProperties(Utils, {
  _db: {
    enumerable: false,
    writable: true,
    value: null
  },
  db: {
    enumerable: true,
    get: function () {
      if (!Utils._db) {
        Utils._db = arango.Connection(Utils.settings.databaseUrl);
      }
      return Utils._db;
    }
  },
  collections: {
    enumerable: true,
    value: {
      exists: function (collectionName) {
        var collection = Utils.db.collection.get(collectionName);
        return collection != null;
      },
      setup: function (collectionName) {

      }
    }
  },
  settings: {
    value: {
      databaseUrl: nconf.get('arango')
    }
  }
});

module.exports = Utils;