(function() {
  var BasicType, String,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  BasicType = require('./BasicType');

  String = (function(_super) {
    __extends(String, _super);

    function String() {
      String.__super__.constructor.call(this, 'string');
    }

    return String;

  })(BasicType);

  module.exports = String;

}).call(this);

/*
//@ sourceMappingURL=String.js.map
*/
