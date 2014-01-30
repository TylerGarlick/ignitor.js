"use strict";
var util = require('util')
  , Stereotype = require('./sterotype')
  ;

function Numeric(opts) {
  opts = opts || {};
  opts.min = Number.MIN_VALUE;
  opts.max = Number.MAX_VALUE;

  Stereotype.call(this, 'numeric', opts);
}

util.inherits(Numeric, Stereotype);

module.exports = Numeric;