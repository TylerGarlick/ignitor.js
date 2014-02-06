'use strict';

var ignitor = require('../lib')
  , expect = require('expect.js')
  ;

describe('ignitor', function () {

  describe('Types', function () {
    it('should expose ignitor Errors', function () {
      expect(ignitor.Types).to.be.ok();
    });
  });

  describe('settings', function () {
    it('should have a settings property', function () {
      expect(ignitor.settings).to.be.ok();
    });
  });

  describe(".connect(connectUrl)", function () {
    it('should exist on ignitor', function () {
      expect(ignitor.connect).to.be.ok();
    });
  });


});