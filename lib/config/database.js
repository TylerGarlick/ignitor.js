'use strict';

var arango = require('arango')
    , _url = null
    , _db = null
    ;

function Database() { }

Object.defineProperties(Database, {
    url: {
        enumerable: true,
        configurable: true,
        get: function () {
            if (!_url) {
                throw new Error("You must set the connection string before connecting. Database.url = 'http://localhost:8529/ignitor-testing'");
            } else {
                return _url;
            }
        },
        set: function (val) {
            _url = val;
        }
    },
    connection: {
        enumerable: true,
        configurable: false,
        get: function () {
            if (!_db) _db = arango.Connection(Database.url);
            return _db;
        }
    }
});

/**
 * Connect to ArangoDB
 * @param {url|optional} url
 * @returns {Connection} - ArangoDB Connection
 */
Database.connect = function (url) {
    if (url) Database.url = url;
    if (!_db) _db = Database.connection;
    return _db;
};

module.exports = Database;