(function() {
  var BasicType, Boolean,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  BasicType = require('./BasicType');

  Boolean = (function(_super) {
    __extends(Boolean, _super);

    function Boolean(opts) {
      this._default = true;
      Boolean.__super__.constructor.call(this, 'boolean', opts);
    }

    return Boolean;

  })(BasicType);

  module.exports = Boolean;

}).call(this);

/*
//@ sourceMappingURL=Boolean.js.map
*/
