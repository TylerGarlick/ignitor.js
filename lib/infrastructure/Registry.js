"use strict";

var _ = require('underscore')
  , Error = require('../errors')
  , dbc = require('dbc.js')
  ;

var _infrastructure = {};
Object.defineProperties(_infrastructure, {
  registry: { enumerable: false, writable: true, value: {} }
});


function Registry() {

}
Object.defineProperties(Registry, {
  _infrastructure: { enumerable: false, writable: true, value: _infrastructure },
  container: { enumerable: true, writable: true, value: {} }
});

Object.defineProperties(Registry.container, {
  has: { enumerable: true, writable: false,
    value: function (modelName) {
      modelName = modelName.toLowerCase();
      return _.has(Registry._infrastructure.registry, modelName);
    }},
  register: { enumerable: true, writable: false,
    value: function (modelName, obj, options) {
      try {

      } catch (err) {
        if (err instanceof dbc.ContractError) {
          throw new Error.ValidationError({errors: [new ValidationError.Error('modelName', modelName, 'Model name is required')]});;
        }
      }
    }},
  get: { enumerable: true, writable: false,
    value: function (modelName) {
      var registryName = modelName.toLowerCase();
      if (this.has(registryName)) {
        return Registry._infrastructure.registry[registryName];
      } else {
        throw new Error.ModelNotFoundError("Model " + modelName + " not found ", { modelName: modelName });
      }
    }}
});

module.exports = Registry;
