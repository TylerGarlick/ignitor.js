(function() {
  var BasicRepository, MockRepository,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  BasicRepository = require('./BasicRepository');

  MockRepository = (function(_super) {
    __extends(MockRepository, _super);

    function MockRepository(collection, attributes, seed) {
      this.collection = collection;
      this.attributes = attributes;
      this.seed = seed;
      if (this.seed == null) {
        this.seed = [];
      }
      MockRepository.__super__.constructor.apply(this, arguments);
    }

    return MockRepository;

  })(BasicRepository);

  MockRepository.prototype.all = function() {};

  module.exports = MockRepository;

}).call(this);

/*
//@ sourceMappingURL=MockRepository.js.map
*/
