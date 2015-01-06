'use strict';

var expect = require('chai').expect;

var Schema = require('../../index').Schema;
var Joi = Schema.Joi;

describe('Schema', function () {

  describe('constructor', function () {

    it('should require a schema by default', function () {
      expect(function () {
        new Schema();
      }).to.throw(/Schema is required/);
    });

  });

  describe('options', function () {

    it('should have options by default', function () {
      var schema = new Schema({});
      expect(schema).to.be.ok();
      expect(schema).to.have.property('_options');
    });

  });

  describe('stereotype', function () {

    var schema;
    before(function () {
      schema = new Schema({});
      expect(schema).to.be.ok();
    });

    it('should set the stereotype', function () {
      expect(schema).to.have.property('_stereotype');
      expect(schema._schemaDefinition).to.eql({});
    });

  });

  describe('#validate(instance)', function () {

    var schema;
    before(function () {
      schema = new Schema({ name: Joi.string().required() });
      expect(schema).to.be.ok();
    });


    it('should be true when the instance adheres to the schema', function () {
      var instance = { name: 'blah' };
      var results = schema.validate(instance);
      expect(results.isValid).to.be.true();
    });

    it('should be false when the instance does not adhere to the schema', function () {
      var instance = {};
      var results = schema.validate(instance);
      expect(results.isValid).to.be.false();
    });

  });

  describe('Joi', function () {

    it('should expose the Joi framework', function () {
      expect(Schema.Joi).to.be.ok();
    });

  })

});