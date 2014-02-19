'use strict';

var _ = require('lodash'),
    inflection = require('inflection');

exports.strings = {
    /**
     * toKey makes a string lowercase and trimmed
     * @param {String} value
     * @returns {*}
     */
    toKey: function (value) {
        if (value)
            value = value.toLowerCase().trim();
        return value;
    },
    /**
     * Puralizes the value using inflection
     * @param {String} value
     * @returns {String}
     */
    pluralize: function (value) {
        value = value.toLowerCase();
        value = inflection.pluralize(value);
        return value;
    }
};