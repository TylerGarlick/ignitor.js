"use strict";

var _ = require('underscore')
  , Error = require('.')
  , dbc = require('dbc.js')
  ;

var _infrastructure = {};
Object.defineProperties(_infrastructure, {
  registry: { enumerable: false, writable: true, value: {} }
});

/**
 * Model Container
 * @constructor
 */
function Container() {
}
Object.defineProperties(Container, {
  has: { enumerable: true, writable: false,
    value: function (modelName) {
      modelName = modelName.toLowerCase();
      return _.has(Container.__.registry, modelName);
    }},
  register: { enumerable: true, writable: false,
    value: function (modelName, obj, options) {
      obj = obj || {};
      options = options || {};
      try {
        dbc([modelName && modelName.length > 0], "Model Name is required");

      } catch (err) {
        if (err instanceof dbc.ContractError) {
          throw new Error.ValidationError({errors: [new Error.ValidationError.Error('modelName', modelName, 'Model name is required')]});
        }
      }
    }},
  get: { enumerable: true, writable: false,
    value: function (modelName) {
      var registryName = modelName.toLowerCase();
      if (this.has(registryName)) {
        return Container.__.registry[registryName];
      } else {
        throw new Error.ModelNotFoundError("Model " + modelName + " not found ", { modelName: modelName });
      }
    }
  },
  __: { enumerable: false, writable: true, value: _infrastructure }
});

module.exports = Container;
