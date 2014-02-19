'use strict';
var ignitor = require('../../'),
    Model = ignitor.Model,
    ValidationError = ignitor.Errors.ValidationError,
    util = require('util'),
    _ = require('lodash');

function User(instance) {
    instance = instance || {};
    User.super_.call(this, instance);

    this.schema = {
        firstName: { type: 'string', required: true },
        lastName: { type: 'string', required: true },
        email: {type: 'email', required: true },
        age: {type: 'number', default: 18 }
    };
}
util.inherits(User, Model);

module.exports = User;