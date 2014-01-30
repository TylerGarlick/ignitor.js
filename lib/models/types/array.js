"use strict";

var util = require('util')
  , Stereotype = require('./sterotype')
  ;


function Array(opts) {
  opts = opts || {};

  if (!opts.default) {
    opts.default = []
  }

  Stereotype.call(this, 'array', opts);
}

util.inherits(Array, Stereotype);

module.exports = Array;