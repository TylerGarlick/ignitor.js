"use strict";

var Schema = require('./schema')
  , EventEmitter = require('events').EventEmitter
  , util = require('util')
  , validate = require('jsonschema').validate
  , _ = require('lodash')
  ;

function Document(obj, fields) {
  Document.super_.call(this);
  _.assign(this, obj);
}


util.inherits(Document, EventEmitter);

module.exports = exports = Document;