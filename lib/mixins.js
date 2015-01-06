'use strict';

var Promise = require('bluebird')
  , Db = require('./arango').db;

exports.all = function (collection, options) {
  options = options || {};
  return Promise.resolve(Db.simple.listAsync(collection, options));
};