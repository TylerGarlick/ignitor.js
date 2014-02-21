'use strict';

var arango = require('arango');

function Database() { }

Database._connection = null;
Database._url = "";

Database.prototype.connect = function (url) {
    var self = this;
    self.url = url;
    return self.connection;
};
Object.defineProperties(Database.prototype, {
    url: {enumerable: true, configurable: false, writable: true },
    connection: {
        get: function () {
            if (!Database._connection) {
                Database._connection = arango.Connection(Database._url);
            }
            return Database._connection;
        }, enumerable: true, configurable: false
    }
});
module.exports = new Database();