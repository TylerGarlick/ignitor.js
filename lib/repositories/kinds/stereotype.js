"use strict";

var util = require('util')
  , EventEmitter = require('events')
  ;

function Repository(collection, attributes) {
  this.collection = collection;
  this.attributes = attributes || {};
  EventEmitter.call(this);
}

util.inherits(Repository, EventEmitter);

Repository.prototype.all = function (results, callback) {
  this.emit('all', results);
  if (callback) callback(null, results);
};
Repository.prototype.find = function () {
};
Repository.prototype.findById = function () {
}
Repository.prototype.save = function () {
};
Repository.prototype.remove = function () {
};
Repository.prototype.removeAll = function () {
}

module.exports = Repository;