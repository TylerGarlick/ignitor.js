'use strict';

var Inflection = require('inflection'),
    S = require('string');

var Utils = {
  keys: {},
  strings: {}
};

/**
 * Format a key
 * @param {string} key
 * @returns {String.s|*}
 */
Utils.keys.format = function (key) {
  key = (key || '').toLowerCase();
  return S(key).trim().replaceAll(' ', '').s;
};

/**
 * Pluralizes a string
 * @param {string} value
 * @returns {string}
 */
Utils.strings.pluralize = function (value) {
  return Inflection.pluralize(value);
};

module.exports = Utils;