var BasicType, Date,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

BasicType = require('./BasicType');

Date = (function(_super) {
  __extends(Date, _super);

  function Date() {
    Date.__super__.constructor.apply(this, arguments);
  }

  return Date;

})(BasicType);

module.exports = Date;
