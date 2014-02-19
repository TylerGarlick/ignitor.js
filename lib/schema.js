'use strict';

var _ = require('lodash');

function Schema(schema) {
    this.type = "object";
    _.merge(this.properties, schema);
}

module.exports = Schema;

Object.defineProperties(Schema.prototype, {
    collection: {enumerable: false, configurable: false, writable: true },
    properties: {enumerable: true, configurable: false, value: {}}
});