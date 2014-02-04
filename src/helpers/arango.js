"use strict";

var arango = require('arango')
  , nconf = require('nconf').env().file({ file: 'config/db.json'})
  ;

function Arango() {
}


Object.defineProperties(Arango, {
  databaseUrl: {
    enumerable: true,
    writable: true,
    value: nconf.get('arango')
  },
  db: {
    enumerable: true,
    get: function () {
      return arango.Connection(Arango.databaseUrl);
    }
  }
})

module.exports = Arango;