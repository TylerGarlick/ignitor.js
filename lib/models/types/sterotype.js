"use strict";

var dbc = require('dbc.js')
  ;

function StereoType(type, opts) {
  this.opts = opts || {};
  this.kind = (this.opts.kind ? this.opts.kind : type).toLowerCase().trim();

  if (this.opts.default) {
    this.defaultValue = this.opts.default;
  }

  dbc(this.kind && this.kind.length > 0, "Name is required");
}

module.exports = StereoType;