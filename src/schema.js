"use strict";
var _ = require('lodash')
  ;

function Schema(obj) {
  _.assign(this, obj);
}


module.exports = Schema;