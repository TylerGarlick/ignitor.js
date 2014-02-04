"use strict";

var util = require('util')
  ;

function StereoType(type) {
  this.type = type;
}

StereoType.prototype.required = null;
StereoType.prototype.defaults = null;

function Boolean() {
  Boolean.super_.call(this, 'boolean');
}
util.inherits(Boolean, StereoType);


function String() {
  String.super_.call(this, 'string');
}
util.inherits(String, StereoType);

String.prototype.minLength = null;
String.prototype.maxLength = null;


function Numeric() {
  Numeric.super_.call(this, 'numeric');
}

util.inherits(Numeric, StereoType);

Numeric.prototype.min = null;
Numeric.prototype.max = null;



function Date() {
  Date.super_.call(this, 'date');
}
util.inherits(Date, StereoType);

Date.prototype.min = null;
Date.prototype.max = null;


function Array() {
  Array.super_.call(this, 'array');
}
util.inherits(Array, StereoType);


module.exports = {
  Boolean: Boolean,
  String: String,
  Numeric: Numeric,
  Date: Date,
  Array: Array
}