'use strict';

var Promise = require('bluebird')
  , Arango = Promise.promisifyAll(require('arango'))
  , Utils = require('./utils');

var internals = {};

Object.defineProperties(exports, {
  db: {
    enumerable: true, configurable: false,
    get: function () {
      return this.connect(internals.URL);
    }
  }
});

exports.connect = function (url) {
  internals.URL = url;
  var connection = new Arango.Connection(internals.URL);
  internals.db = Utils.connections.promisify(connection);
  return internals.db;
};
