"use strict";

var arango = require('arango')
  , nconf = require('nconf').env().file({ file: 'config/settings.json'})
  ;

function Database() {
  var connectionStr = nconf.get('db');
  console.log('Connection to: ' + connectionStr);
  this.instance = arango.Connection(connectionStr);
}

module.exports = Database;