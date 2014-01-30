"use strict";

var util = require('util')
  , Stereotype = require('./boolean')
  ;


function Boolean(opts) {
  Stereotype.call(this, 'boolean', opts);
}

util.inherits(Boolean, Stereotype);

module.exports = Boolean;