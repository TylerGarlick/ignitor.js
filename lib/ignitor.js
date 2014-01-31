(function() {
  var Ignitor;

  Ignitor = (function() {
    function Ignitor(db, config) {
      this.db = db != null ? db : {};
      this.config = config != null ? config : {};
    }

    return Ignitor;

  })();

  module.exports = new Ignitor();

}).call(this);

/*
//@ sourceMappingURL=Ignitor.js.map
*/
