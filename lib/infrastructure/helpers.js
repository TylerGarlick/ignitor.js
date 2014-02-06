"use strict";

var dbc = require('dbc.js')
  , inflect = require('i')()
  , _ = require('underscore')
  ;

/**
 * Removes any _ prefixed fields
 * @param {object|required} instance
 * @returns {{json}}
 */
var removePrivateFields = function (instance) {
  var json = {};
  if (!instance) {
    instance = {};
  }

  _.forEach(_.keys(instance), function (key) {
    if (key.indexOf("_") === -1) {
      json[key.toString()] = instance[key];
    }
  });

  return json;
};

/**
 * Turns a string into lowercase and trims it
 * @param {string} val
 * @returns {string}
 */
var stringLowerCaseAndTrim = function (val) {
  return val.toLowerCase().trim();
};

/**
 * Pluralizes a word using inflection
 *
 * @param {string|required} value to be pluralized
 * @returns {string}
 */
var stringPluralize = function (val) {
  return inflect.pluralize(val);
};

/**
 * Format's model name for registration
 * @param modelName
 * @returns {*|string}
 */
var containerFormatModelName = function (modelName) {
  return modelName.toLowerCase().trim();
};

/**
 * Determines if the collection exists
 * @param name - collection's name
 */
var collectionExists = function (name) {
  try {
    dbc([name && name.length > 0], "Collection name is required");
  } catch (err) {

  }
};

/**
 * Creates a collection
 * @param {string|required} name - Name of the Collection
 * @param {object} [options]
 */
var collectionCreate = function (name, options) {
  options = options || {};
};

var collectionSetup = function (name, options) {
  if (!this.db.collections.exists(name)) {
    this.db.collections.create(name, options);
  }
};

/**
 * @property model - model helpers
 * @property container - model container registration helpers
 */
Object.defineProperties(module.exports, {
  db: {
    value: {
      collections: {
        create: { enumerable: true, configurable: false, value: collectionCreate },
        exists: { enumerable: true, configurable: false, value: collectionExists },
        setup: { enumerable: true, configurable: false, value: collectionSetup }
      }
    },
    enumerable: true
  },
  container: {
    value: {
      formatModelName: containerFormatModelName
    },
    enumerable: true,
    configurable: false
  },
  objects: {
    value: {
      removePrivateFields: removePrivateFields
    },
    enumerable: true,
    configurable: false
  },
  strings: {
    value: {
      formatting: {
        toLowerCaseAndTrim: stringLowerCaseAndTrim,
        pluralize: stringPluralize
      }
    },
    enumerable: true,
    configurable: false
  },
  repository: {
    value: stringLowerCaseAndTrim,
    enumerable: true,
    configurable: false
  }
});