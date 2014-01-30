"use strict";

var i = require('i')()
  , util = require('util')
  , dbc = require('dbc.js')
  , EventEmitter = require('events').EventEmitter
  , ArangoRepository =  require('../repositories/kinds/arango')
  , MockRepository = require('../repositories/kinds/mock')
  , _ = require('lodash')
  ;

function Model(values, opts) {
  EventEmitter.apply(this);
  var Types = require('../models/types')

  this.opts = _.merge(opts || {}, {
    isMock: false
  });

  if (!Model._meta.attributes && values) {
    Model._meta.attributes = values;
  }

  console.log(this.name);
  if (!Model._meta.collection) {
    console.log(this.constructor.name);
    if (this.opts.collection) {
      Model._meta.collection = this.opts.collection;
    } else {
      Model._meta.collection = i.pluralize(this.constructor.name);
    }
  }

  if (!Model._meta.repository) {
    var repository;
    if (this.opts.isMock) {
      repository = new MockRepository(Model._meta.collection, Model._meta.attributes);
    } else {
      repository = new ArangoRepository(Model._meta.collection, Model._meta.attributes);
    }
    Model._meta.repository = repository;
  }


  dbc(Model._meta.attributes, 'Attributes must be set new Model({ name: String }); ');
  dbc(Model._meta.collection, 'Collection name must be set');
  dbc(Model._meta.repository, 'Repository is required');
  // After all defaults are set, let's see if we have a key
  this._key = new Types.Key(this);

  this.emit('initialized', this);
}

util.inherits(Model, EventEmitter);

Model._meta = {
  collection: null,
  attributes: {}
};

Model.prototype.save = function (callback) {
  var self = this;

  self.emit('saved', this);

  if (callback)
    callback(null, this);
}

Model.remove = function (model, callback) {
  var self = this;
  dbc(model._id, "Model must have an id to remove");

  self.emit('removed', this);
  if (callback)
    callback(null, model);
}


Model.prototype.isNew = function () {
  return !this._key._id;
}

Model.prototype.isValid = function () {
  // TODO: perform validation
  return true;
}

module.exports = Model;
