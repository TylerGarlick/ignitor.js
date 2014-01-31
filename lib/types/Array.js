(function() {
  var Array, BasicType,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  BasicType = require('./BasicType');

  Array = (function(_super) {
    __extends(Array, _super);

    function Array(opts) {
      this._default = [];
      Array.__super__.constructor.call(this, 'array', opts);
    }

    return Array;

  })(BasicType);

  module.exports = Array;

}).call(this);

/*
//@ sourceMappingURL=Array.js.map
*/
