"use strict";

var expect = require('expect.js')
  , Validator = require('../src/validator')
  ;

describe('Validator', function () {

  beforeEach(function () {
    expect(Validator).to.be.ok();
  });

  describe('instance = null | schema = {}', function () {

    it('#validate should return false', function () {
      expect(Validator.validate(null, {})).to.be(false);
    });

  });

  describe('instance = {}} | schema = null', function () {

    it('#validate should return false', function () {
      expect(Validator.validate({}, null)).to.be(false);
    });

  });

  describe('instance = {} | schema = {}', function () {
    it('#validate should return true', function () {
      expect(Validator.validate({}, {})).to.be.ok();
    });


  });
})