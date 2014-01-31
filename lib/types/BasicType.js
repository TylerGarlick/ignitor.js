var BasicType, dbc;

dbc = require("dbc.js");

BasicType = (function() {
  BasicType.prototype._default = {};

  function BasicType(kind, opts) {
    this.kind = kind;
    this.opts = opts;
    if (this.opts == null) {
      this.opts = {};
    }
    dbc([this.kind && this.kind.length > 0], "Kind is required");
  }

  return BasicType;

})();

module.exports = BasicType;
