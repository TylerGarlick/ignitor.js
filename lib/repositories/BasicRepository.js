(function() {
  var BasicRepository, EventEmitter,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  EventEmitter = require('events');

  BasicRepository = (function(_super) {
    __extends(BasicRepository, _super);

    function BasicRepository(collection, attributes) {
      this.collection = collection;
      this.attributes = attributes;
    }

    return BasicRepository;

  })(EventEmitter);

  BasicRepository.prototype.all = function(entities, callback) {
    this.emit('all', entities);
    if (callback) {
      return callback(null, entities);
    }
  };

  BasicRepository.prototype.find = function(entities, callback) {
    this.emit('find', entities);
    if (callback) {
      return callback(null, entities);
    }
  };

  BasicRepository.prototype.findById = function(entity, callback) {
    this.emit('find', entity);
    if (callback) {
      return callback(null, entity);
    }
  };

  BasicRepository.prototype.save = function(entity, callback) {
    this.emit('save', entity);
    if (callback) {
      return callback(null, entity);
    }
  };

  BasicRepository.prototype.remove = function(id, callback) {
    this.emit('remove', id);
    if (callback) {
      return callback(null, id);
    }
  };

  BasicRepository.prototype.removeAll = function(callback) {
    this.emit('removeAll');
    if (callback) {
      return callback(null);
    }
  };

  module.exports = BasicRepository;

}).call(this);

/*
//@ sourceMappingURL=BasicRepository.js.map
*/
