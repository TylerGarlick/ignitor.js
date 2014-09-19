"use strict";

var Arango = require('arangojs');

exports.connect = function (uri) {
  return Arango.Connection(uri);
};



