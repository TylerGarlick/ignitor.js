"use strict";

var Ignitor = require('../')
  , _ = require('lodash')
  ;

describe('Ignitor', function () {

  describe('db', function () {
    it('should be setup properly', function () {
      Ignitor.db.should.be.ok;
    });
  });


  describe('_configuration', function () {
    it("should be setup properly", function () {
//      expect(Ignitor._configuration).to.be.ok();
//      expect(Ignitor._configuration.database).to.be.ok();
    });

  });

});