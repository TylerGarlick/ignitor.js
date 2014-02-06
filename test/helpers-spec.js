"use strict";

var helper = require('../lib/infrastructure/helpers')
  , expect = require('expect.js')
  ;

describe('helper', function () {
  describe('db', function () {

    describe('collections', function () {
      it('should have a create function', function () {
        expect(helper.db.collections.create).to.be.ok();
      });
    });
  });

  describe('objects', function () {
    it('should have an objects property', function () {
      expect(helper.objects).to.be.ok();
    });
  });

  describe('strings', function () {

    it('should have a strings property', function () {
      expect(helper.strings).to.be.ok();
    });

    describe('formatting', function () {

      it('should have a formatting property', function () {
        expect(helper.strings.formatting).to.be.ok();
      });

      it('.pluralize()', function () {
        expect(helper.strings.formatting.pluralize('hat')).to.be('hats');
        expect(helper.strings.formatting.pluralize('horse')).to.be('horses');
        expect(helper.strings.formatting.pluralize('person')).to.be('people');
      });
    });

  });

});