'use strict';

var expect = require('chai').expect;

var Arango = require('../../lib/arango');

var URL = 'http://localhost:8529/ignitor-testing';

describe('Arango', function () {

  describe('#connection(url)', function () {

    it('should be able to connect to a database', function (done) {
      var connection = Arango.connect(URL);
      expect(connection).to.be.ok();
      done();
    });

    it('should be able to access the db property after connect has been called', function () {
      expect(Arango.db).to.be.ok();
    })

  });

});