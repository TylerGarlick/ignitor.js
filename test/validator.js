"use strict";

var expect = require('expect.js')
  , Validator = require('../src/validator')
  ;

describe('Validator', function () {

  beforeEach(function () {
    expect(Validator).to.be.ok();
  });

  describe('#valiadate', function () {

    describe('instance = null | schema = {}', function () {

      it('#validate should return false', function () {
        expect(Validator.validate(null, {}).isValid).to.be(false);
      });

    });

    describe('instance = {}} | schema = null', function () {

      it('#validate should return false', function () {
        expect(Validator.validate({}, null).isValid).to.be(false);
      });

    });

    describe('instance = {} | schema = {}', function () {
      it('#validate should return true', function () {
        expect(Validator.validate({}, {}).isValid).to.be(true);
      });
    });

  });

  describe('#validateKind', function () {

    describe('instance has wrong types', function () {

      var schema = null;
      beforeEach(function () {
        schema = {
          name: {
            type: 'string',
            required: true,
            minLength: 3,
            maxLength: 5
          },
          age: {
            type: 'numeric',
            min: 0,
            max: 25
          },
          isActive: {
            type: 'boolean'
          }
        }
      });

      it('name should be invalid', function () {
        var instance = {
          name: 1
        };

        expect(Validator.validateByKind('string', instance.name)).to.be(false);
        expect(Validator.validateByKind('numeric', instance.name)).to.be(true);

      });

      it('should validate with proper values', function () {
        var instance = {
          name: "bob",
          age: 22,
          isActive: true
        };

        expect(Validator.validate(instance, schema).isValid).to.be(true);
      });

      it('should not validate with improper values', function () {
        var instance = {
          name: "",
          age: 22,
          isActive: true
        };

        var result = Validator.validate(instance, schema);
        expect(result.isValid).to.be(false);
        expect(result.errors[0].message === 'String is required');
      });


      it('should not validate with improper values', function () {
        var instance = {
          name: "Bob123",
          age: 22,
          isActive: true
        };

        var result = Validator.validate(instance, schema);
        expect(result.isValid).to.be(false);
        expect(result.errors[0].message === 'Value must be less than 5').to.be(true);

      });

    });

  });


});