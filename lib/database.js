'use strict';

var arango = require('arango');

function Database() { }

Database._connection = null;
Database._url = "";

Database.prototype.connect = function (url) {
    var self = this;
    Database._url = url;
    return self.connection;
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