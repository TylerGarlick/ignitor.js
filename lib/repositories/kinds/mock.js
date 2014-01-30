"use strict";

var util = require('util')
  , Repository = require('./stereotype')
  ;

function MockRepository(collection, attributes, seed) {
  this.seed = seed || [];
  Repository.call(this, collection, attributes);
}

util.inherits(MockRepository, Repository);

MockRepository.prototype.all = function (callback) {
  var results = this.seed;
  MockRepository.super_.call(this, results, callback);
};


module.exports = MockRepository;