"use strict";

var util = require('util')
  , Array = require('./array')
  , Stereotype = require('./sterotype')
  ;


function Collection(opts) {
  dbc(opts.default, "Default should be set to []");
  opts.kind = 'collection';
  Array.call(this, opts);
}

util.inherits(Collection, Stereotype);