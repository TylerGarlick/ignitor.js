"use strict";

var Util = require('util'),
    _ = require('lodash');

module.exports = Model;

function Model(collection, schema, options) {
  options = options || {};

  Object.defineProperties(this, {

    collection: { enumerable: false, configurable: false, value: collection },
    schema: { enumerable: false, configurable: false, value: schema },

    _key: { writable: true, enumerable: true, configurable: false },
    _rev: { writable: true, enumerable: true, configurable: false },
    _id: { writable: true, enumerable: true, configurable: false },

    methods: { value: {}, enumerable: false, configurable: false },

    hooks: {
      enumerable: false, configurable: false,
      value: {
        validate: {
          pre: [],
          post: []
        },
        save: {
          pre: [],
          post: []
        },
        delete: {
          pre: [],
          post: []
        }
      }
    }


  });
}

Model.setup = function (collection, schema, options) {
  options = options || {};


  function Instance(values) {
    values = values || {};
    Instance.super_.call(this, collection, schema, options);
    _.merge(this, values);
    _.merge(this, options.methods);
  }

  Util.inherits(Instance, Model);
  _.merge(Instance, options.static);

  return Instance;
};




