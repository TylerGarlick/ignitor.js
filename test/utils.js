"use strict";
var Utils = require('../src/utils')
  , sync = require('synchronize')
  ;

describe("Utils", function () {


  describe("collections", function () {
    describe('.exists()', function () {

      it('should exist on collections', sync.asyncIt(function () {
        Utils.collections.exists.should.be.a.func;
      }));

      it("'always here' should exist", sync.asyncIt(function () {
        Utils.collections.exists("always_here").should.equal(true, "'always_here' should return true");
      }));

    });

    describe('.setup()', function () {

      it('should exist on collections', function () {
        Utils.collections.setup.should.be.a.func;
      });
    });
  });
});
