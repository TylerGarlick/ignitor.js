"use strict";

var util = require('util')
  , Stereotype = require('./sterotype')
  , moment = require('moment')
  ;

function Date(opts) {
  Stereotype.call(this, opts);
}

util.inherits(Date, moment);

module.exports = Date;