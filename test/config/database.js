'use strict';

var expect = require('expect.js')
  , Database = require('../../lib/config/database')
  ;


describe('Database', function () {
  describe('url', function () {

    it('should throw an error if you get before set', function () {
      Database.url = null;
      expect(function () {
        Database.url
      }).to.throwError()
    });

    it('should be able to set url to value', function () {
      var url = "http://test:test@localhost:8529/ignitor-testing";
      Database.url = url;
      expect(Database.url).to.be.ok();
      expect(Database.url).to.be.eql(url);
    });
  });
})