(function() {
  var BasicType, Key,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  BasicType = require('./BasicType');

  Key = (function(_super) {
    __extends(Key, _super);

    function Key(doc) {
      Key.__super__.constructor.call(this, 'key');
      if (doc._id) {
        this._id = doc._id != null ? doc._id : doc._id = null;
      }
      if (doc._rev) {
        this._rev = doc._rev != null ? doc._rev : doc._rev = null;
      }
      if (doc._key) {
        this._key = doc._key != null ? doc._key : doc._key = null;
      }
    }

    return Key;

  })(BasicType);

  module.exports = Key;

}).call(this);

/*
//@ sourceMappingURL=Key.js.map
*/
