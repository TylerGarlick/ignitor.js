"use strict";

var util = require('util')
  , EventEmitter = require('events')
  ;

function Repository(collection, attributes) {
  Repository.super_.call(this);
  this.collection = collection;
  this.attributes = attributes || {};

}
util.inherits(Repository, EventEmitter);

Object.defineProperties(Repository.prototype, {
  collection: {
    enumerable: true,
    writable: true
  },
  attributes: {
    enumerable: true,
    writable: true,
    value: {}
  },
  all: {
    value: function(results, callback){
      this.emit('all', results);
      if (callback)
        callback(null, results);
    },
    enumerable: true
  }
});

//
//Repository.prototype.all = function (results, callback) {
//
//};
//Repository.prototype.find = function () {
//};
//Repository.prototype.findById = function () {
//}
//Repository.prototype.save = function () {
//};
//Repository.prototype.remove = function () {
//};
//Repository.prototype.removeAll = function () {
//}

module.exports = Repository;