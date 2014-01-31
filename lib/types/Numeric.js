(function() {
  var BasicType, Numeric,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  BasicType = require('./BasicType');

  Numeric = (function(_super) {
    __extends(Numeric, _super);

    function Numeric() {
      Numeric.__super__.constructor.call(this, 'numeric', {
        min: Number.MIN_VALUE,
        max: Number.MAX_VALUE
      });
    }

    return Numeric;

  })(BasicType);

  module.exports = Numeric;

}).call(this);

/*
//@ sourceMappingURL=Numeric.js.map
*/
