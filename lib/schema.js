"use strict";
var _ = require('lodash')
  ;

function Schema(obj) {
  var self = this;
  obj = obj || {};
  _.assign(self, obj);
}


module.exports = Schema;