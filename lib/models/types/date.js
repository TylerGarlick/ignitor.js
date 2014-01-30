"use strict";

var util = require('util')
  , Stereotype = require('./sterotype')
  , moment = require('moment')
  ;

function Date(opts) {
  Stereotype.apply(this, opts);
}

util.inherits(Date, moment);

module.exports = Date;