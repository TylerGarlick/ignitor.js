"use strict";

var util = require('util')
  , Repository = require('./stereotype')
  ;

function ArangoRepository(collection, attributes) {
  Repository.call(this, collection, attributes);
}

util.inherits(ArangoRepository, Repository);

ArangoRepository.prototype.all = function (callback) {
  var results = [];
  ArangoRepository.super_.all.call(this, results, callback);
};

module.exports = ArangoRepository;