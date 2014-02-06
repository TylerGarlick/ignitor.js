'use strict';

var _ = require('underscore')
  , IgnitorError = require('../models/errors')
  , Helpers = require('../infrastructure/helpers')
  , Schema = require('../models/schema')
  , Model = require('../models/model')
  , Repository = require('../repositories/repository')
  , dbc = require('dbc.js')
  ;

/**
 * Model Container
 * @constructor
 */
var Container = module.exports;
Object.defineProperties(Container, {
  has: {
    value: function (model) {
      var name = Helpers.container.formatModelName(model);
      return _.has(Container.__.registry, name);
    },
    enumerable: true
  },
  register: {
    value: function (modelName, obj, options) {
      obj = obj || {};
      options = options || {};
      try {
        dbc([modelName && modelName.length > 0], "Model Name is required");
        var name = Helpers.container.formatModelName(model);

        var collection;
        if (options.collection) {
          collection = options.collection;
        } else {
          collection = Helpers.strings.toLowerCaseAndTrim(modelName);
        }

        var repository;
        if (options.repository) {
          repository = options.repository;
        } else {
          repository = new Repository();
        }

        if (obj instanceof Schema) {
          Container.__.registry[name] = {
            Model: Model,
            schema: obj,
            repository: repository
          };
        }
      } catch (err) {
        if (err instanceof dbc.ContractError) {
          throw new IgnitorError.ValidationError({errors: [new IgnitorError.ValidationError.Error('modelName', modelName, 'Model name is required')]});
        }
      }
    },
    enumerable: true
  },
  remove: {
    value: function (name) {
      var _this = this;
      if (_this.has(name)) {

      }
    },
    enumerable: true
  },
  get: {
    value: function (modelName) {
      var registryName = modelName.toLowerCase();
      if (!this.has(registryName)) {
        throw new IgnitorError.ModelNotFoundError("Model " + modelName + " not found ", { modelName: modelName });
      }
      return Container.__.registry[registryName];
    },
    enumerable: true
  },
  all: {
    value: function () {
      var _this = this
        , registry = Container.__.registry
        , registrations = []
        , keys = _.keys(registry)
        ;

      _.forEach(keys, function (key) {
        registrations.push({
          name: key,
          value: registry[key]
        });
      });
      return registrations;
    },
    enumerable: true
  },
  __: {
    value: {
      registry: { }
    },
    enumerable: true
  }
});