'use strict';
var dbc = require('dbc.js')
  ;

/**
 * Model Schema Definition
 *
 * @param definition - The definition of the object
 *
 * Example:
 * var definition = {
 *  name: {
 *    type: 'string',
 *    required: true
 *  },
 *  age: {
 *    type: 'numeric',
 *    min: 0,
 *    max: 100
 *  },
 *  email: {
 *    type: 'string',
 *    minLength: 6,
 *    maxLength: 512,
 *    required: true
 *  },
 *  isActive: {
 *    type: 'boolean',
 *    default: true
 *  }
 * }
 *
 * @param options - Any options for the schema
 *
 *  Example:
 *  var options = {
 *    enforceSchema: true
 *  };
 *
 * @constructor Schema
 */
function Schema(definition, options) {
  dbc([definition], "Schema Definition is required");
  this.definition = definition;
  this.options = options || {
    enforceSchema: false
  };

  Object.defineProperties(this, {
    definition: {
      enumerable: true,
      configurable: false,
      value: definition
    },
    options: {
      enumerable: true,
      configurable: true,
      writable: true
    }
  });
}


module.exports = Schema;