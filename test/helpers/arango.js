"use strict";
var ArangoHelpers = require('../../src/helpers/arango');

describe('Arango', function () {
  describe('db', function () {
    it('should have a db property setup', function () {
      console.log(ArangoHelpers.db);
      ArangoHelpers.db.should.be.ok;

    });
  });
});