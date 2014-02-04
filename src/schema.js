"use strict";

var _ = require('underscore')
  ;

function Schema(definition) {

  if (!definition) throw new Error('Schema object definition must be defined');

  this._definition = definition;
}

Schema.hasProperty = function (instance, property) {
  return _.has(instance, property);
};

Schema.setDefaults = function (definition, instance) {
  var keys = _.keys(definition);
  _.forEach(keys, function (key) {
    if (definition[key].default)
      instance[key.toString()] = definition[key].default;
  });
  return instance;
};

module.exports = Schema;