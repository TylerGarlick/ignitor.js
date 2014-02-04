"use strict";

var dbc = require('dbc.js')
  , _ = require('underscore')
  ;

/**
 * Definition for Model, and used for validation
 * @param schema
 * @constructor
 */
function Schema(schema) {
  schema = schema || {};
  this.__.schema = schema;
}

Object.defineProperties(Schema.prototype, {
  hooks: {enumerable: true, writable: true, value: {}},
  validations: {enumerable: true, writable: true, value: []},
  __: { enumerable: false, writable: true, value: {} }
});


/**
 * Register hook
 * @param kind - 'pre', 'post'
 * @param type - ['save', 'update', 'remove', 'validate']
 * @param fn - function(error, res){ }
 */
var hookModification = function (kind, type, fn) {
  kind = kind.toLowerCase();
  type = type.toLowerCase();

  dbc([kind && (kind === 'pre' || kind === 'post')], "Pre or Post is required");

  this.hooks[kind][type] = fn;
  return this.get(kind, type);
};

/**
 * UnRegister hook
 * @param kind - 'pre', 'post'
 * @param type - ['save', 'update', 'remove', 'validate']
 */
var hookRemove = function (kind, type) {
  delete this.hooks[kind][type];
};

/**
 * Get hook by kind and type
 * @param {string} kind -
 * @param {string} type -
 * @returns {Function}
 */
var hookGet = function (kind, type) {

  dbc([kind && kind.length > 0], 'Kind is required');
  dbc([type && type.length > 0], 'Type is required');

  return this.hooks[kind][type];
};

/**
 * Get all hooks by a kind
 * @param {string} kind - 'pre', 'post'
 * @returns {Array}
 */
var hookGetByKind = function (kind) {
  return [];
}

/**
 * Get all hooks by type
 * @param {string} type - ['save', 'update', 'remove', 'validate']
 * @returns {Array}
 */
var hookGetByType = function (type) {
  return [];
}

/**
 * @property: save - save hooks
 * @property: update - update hooks
 * @property: remove - remove hooks
 * @property: validate - validate hooks
 * @type {{save: Array, update: Array, remove: Array, validate: Array}}
 */
var hooks = {
  save: [],
  update: [],
  remove: [],
  validate: []
};

Object.defineProperties(Schema.prototype.hooks, {
  register: {enumerable: true, writable: false, configurable: false, value: hookModification },
  remove: {enumerable: true, writable: false, configurable: false, value: hookRemove },
  update: {enumerable: true, writable: false, configurable: false, value: hookModification },
  get: {enumerable: true, writable: false, configurable: false, value: hookGet },
  getForKind: {enumerable: true, writable: false, configurable: false, value: hookGet },
  __: { enumerable: false, writable: false, configurable: false, value: {
    pre: hooks,
    post: hooks
  }}
});


Object.defineProperties(Schema.prototype.__, {
  schema: { enumerable: true, writable: true, value: { }}
});

Object.defineProperties(Schema, { });

module.exports = Schema;