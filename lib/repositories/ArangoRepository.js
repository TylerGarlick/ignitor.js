(function() {
  var ArangoRepository, BasicRepository,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  BasicRepository = require('./BasicRepository');

  ArangoRepository = (function(_super) {
    __extends(ArangoRepository, _super);

    function ArangoRepository(collection, attributes) {
      this.collection = collection;
      this.attributes = attributes;
    }

    return ArangoRepository;

  })(BasicRepository);

  module.exports = ArangoRepository;

}).call(this);

/*
//@ sourceMappingURL=ArangoRepository.js.map
*/
