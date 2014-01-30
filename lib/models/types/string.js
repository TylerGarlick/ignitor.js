"use strict";
var util = require('util')
  , Stereotype = require('./sterotype')
  ;

function String(opts) {
  Stereotype.call(this, 'string', opts);
}

util.inherits(String, Stereotype);

module.exports = String;