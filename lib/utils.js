'use strict';

var Promise = require('bluebird'),
  _ = require('lodash');

var internals = {};

internals.connections = {};
internals.connections.promisify = function (connection) {
  connection = Promise.promisifyAll(connection);
  _.forEach(_.keys(connection), function (key) {
    if (_.isObject(connection[key]) || _.isFunction(connection[key]) && (!_.contains(key, 'Async') || !_.contains(key, '_')))
      Promise.promisifyAll(connection[key]);
  });
  return connection;
};


exports.connections = internals.connections;