'use strict';

var arango = require('arango'),
    _ = require('_');

function Database() { }

Database._connection = null;
Database._url = "";

Database.prototype.connect = function (url) {
    Database._url = url;
    Database._connection = arango.Connection(Database._url);
    return Database._connection;
};

Database.prototype.useConnection = function (connection) {
    if (!_.isObject(connection)) throw new Error('You must use an Arango Connection Object');
    Database._connection = connection;
};

Object.defineProperties(Database.prototype, {
    url: {
        get: function () {
            return Database._url;
        },
        set: function (url) {
            Database._url = url;
        },
        enumerable: true, configurable: false },
    connection: {
        get: function () {
            if (!Database._connection) {
                console.log(Database._url);
                Database._connection = arango.Connection(Database._url);
            }
            return Database._connection;
        }, enumerable: true, configurable: false
    }
});
module.exports = new Database();