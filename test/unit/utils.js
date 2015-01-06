'use strict';

require('chai').should();

var Arango = require('arango'),
    Utils = require('../../lib/utils');

var CONSTS = {
  URL: 'http://localhost:8529/ignitor-testing'
};


describe('Utils', function () {

  describe('connections', function () {

    var db;
    before(function (next) {
      db = Arango.Connection(CONSTS.URL);
      db.should.be.ok();
      next();
    });


    describe('promisify', function () {

      it('should be able to traverse all properties and promisify the calls', function () {
        var result = Utils.connections.promisify(db);
        result.should.be.ok();
        result.useAsync.should.be.ok();
        result.collection.getAsync.should.be.a('function');
        result.transaction.submitAsync.should.be.a('function');
        result.user.deleteAsync.should.be.a('function');
      });

    });

  });

});