'use strict';
var Q = require('q');

exports.static = {
    all: function (options) {
        options = options || {};
        return Q.when(this.db.simple.list(this.collection, options));
    },
    findById: function (id) {
        return Q.when(this.db.simple.firstByExample(this.collection, {_id: id}));
    },
    find: function () {
        
    },
    query: function () {},
    exists: function () {},
    save: function () {},
    remove: function () {},
    removeAll: function () {}
};

exports.instance = {
    save: function () {},
    remove: function () {}
}