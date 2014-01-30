"use strict";

var util = require('util')
  , Stereotype = require('./sterotype')
  , _ = require('lodash')
  ;

function Key(document) {

  if (_.has(document, "_id")) {
    this._id = document._id;
  }

  if (_.has(document, "_key")) {
    this._key = document._id;
  }

  if (_.has(document, "_rev")) {
    this._rev = document._rev;
  }

  Stereotype.call(this, 'key');
}

util.inherits(Key, Stereotype);

module.exports = Key;