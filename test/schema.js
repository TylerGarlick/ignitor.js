'use strict';
var expect = require('expect.js')
  , ignitor = require('../lib')
  , Types = ignitor.Types
  , Schema = Types.Schema
  ;


describe('Schema', function () {
  describe('constructor', function () {
    it('should require a definition', function () {
      expect(function () {
        new Schema();
      }).to.throwError();

      var schema = new Schema({});
      expect(schema).to.be.a(Schema);
      expect(schema).to.be.ok();
      expect(schema.definition).to.be.ok();
    });

    it('should save definition to .definition', function () {

      var schema = new Schema({
        name: {
          type: 'string'
        }
      });
      expect(schema).to.be.ok();
      expect(schema.definition).to.be.ok();
      expect(schema.definition.name).to.be.ok();
      expect(schema.definition.name.type).to.equal('string');
    });
  });

  describe('Hooks', function () {

    describe('.pre()', function () {
      var schema;
      beforeEach(function () {
        schema = new Schema({});
        expect(schema).to.be.ok();
      });

      it('should have hooks for pre', function () {
        expect(schema._hooks.pre).to.be.ok();
      });

      it("should have 'pre' hook 'create' with 0 registrations", function () {
        expect(schema._hooks.pre.create).to.be.eql([]);
      });

      it("should have 'pre' hook 'update' with 0 registrations", function () {
        expect(schema._hooks.pre.update).to.be.eql([]);
      });

      it("should have 'pre' hook 'validate' with 0 registrations", function () {
        expect(schema._hooks.pre.validate).to.be.eql([]);
      });

      it("should have 'pre' hook 'remove' with 0 registrations", function () {
        expect(schema._hooks.pre.remove).to.be.eql([]);
      });

    });

    describe('.post()', function () {
      var schema;
      beforeEach(function () {
        schema = new Schema({});
        expect(schema).to.be.ok();
      });

      it('should have hooks for post', function () {
        expect(schema._hooks.post).to.be.ok();
      });

      it("should have 'post' hook 'create' with 0 registrations", function () {
        expect(schema._hooks.post.create).to.be.eql([]);
      });

      it("should have 'post' hook 'update' with 0 registrations", function () {
        expect(schema._hooks.post.update).to.be.eql([]);
      });

      it("should have 'post' hook 'remove' with 0 registrations", function () {
        expect(schema._hooks.post.remove).to.be.eql([]);
      });

    });

  });
});